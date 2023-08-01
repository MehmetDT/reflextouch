import Purchases from 'react-native-purchases';
import OneSignal from 'react-native-onesignal';
import {
  RevenueCat_API_KEY,
  RevenueCat_API_Google,
  ENTITLEMENT_ID,
} from '@env';
import { Alert, Platform } from 'react-native';
import global from '../../config/global';
import store from '../../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initPurchase = async () => {
  // RevenueCat API Key ve RevenueCat APP ID tanımlanır.
  try {
    let deviceId = await global.deviceID;
    Purchases.configure({
      apiKey:
        Platform.OS === 'ios' ? RevenueCat_API_KEY : RevenueCat_API_Google,
      appUserID: deviceId,
    });
  } catch (e) {
    console.log(e);
  }
}

export const checkPurchase = async () => {
  try {
    // Ürünün satın alınmış olup olmadığını kontrol eder. Bunu restore ve ilk açılışta yapabiliriz. Backendden kullanıcıya premium olduğu söylenirse burda kontrol edilir.
    const { entitlements } = await Purchases.getCustomerInfo();
    if (typeof entitlements.active[ENTITLEMENT_ID] !== 'undefined') {
      OneSignal.sendTag('premium', 'true');
      store.isPremiumUpdate(true);
      AsyncStorage.setItem('premium', 'true');
      return true;
    } else {
      OneSignal.sendTag('premium', '');
      store.isPremiumUpdate(false);
      AsyncStorage.removeItem('premium');
      return false;
    }
  } catch (e) {
    Alert.alert(global.appName, e.message);
  }
}

export const purchase = async product => {
  // Ürünü satın almak için kullanılır.
  try {
    const { customerInfo } = await Purchases.purchasePackage(product);
    const { entitlements } = customerInfo;
    if (typeof entitlements.active[ENTITLEMENT_ID] !== 'undefined') {
      // Ürün satın alındıktan sonra yapılacak işlemler burada yapılır.
      // Örnek olarak OneSignal taglerini güncelleyebiliriz.
      OneSignal.sendTag('premium', 'true');
      store.isPremiumUpdate(true);
      AsyncStorage.setItem('premium', 'true');
      return customerInfo;
    } else {
      return false;
    }
  } catch (e) {
    Alert.alert(global.appName, e.message);
    return false;
  }
}

export const getProducts = async () => {
  // Ürünleri çekmek için kullanılır
  // Fonksiyon yardımı ile ürünler çekilir ve ürünlerin içerisindeki id ler ile ürünleri satın almak için kullanılır.
  /* Herhangi bir sayfadan kullanmak için örnek kod:
       getProducts().then((data) => {
            console.log(data)
          })
    
     veya Store.availablePackages kodu ile paketler çekebilirsiniz.
    */
  try {
    await initPurchase();
    const { current } = await Purchases.getOfferings();
    const { availablePackages } = current;
    store.availablePackagesUpdate(availablePackages);
    return availablePackages;
  } catch (e) {
    console.log(e);
  }
}
