import DeviceInfo from 'react-native-device-info';
import * as RNLocalize from 'react-native-localize';

let global = {
  appName: DeviceInfo.getApplicationName(),
  appUrl: 'http://localhost:8080',
  paymentUrl: 'http://127.0.0.1:8000/be',
  deviceID: DeviceInfo.getUniqueId().then((uniqueId) => {
    return uniqueId
  }),

  userAgentWebview: 'Mozilla/5.0 (Linux; Android 12; SM-G955N Build/NRD90M.G955NKSU1AQDC; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36',
  deviceOSSeries: DeviceInfo.getDeviceId(),
  deviceOS: DeviceInfo.getSystemName(),
  timezone: RNLocalize.getTimeZone(),
  AppId: '15955959242',
  brand: DeviceInfo.getBrand(),
  currency: RNLocalize.getCurrencies() && RNLocalize.getCurrencies()[0],
  language: RNLocalize.getLocales()[0].languageCode && 'en',
  platform: DeviceInfo.getSystemName(),
  country: RNLocalize.getLocales()[0].countryCode && 'en',
  systemName: DeviceInfo.getDeviceId(),
  versionCode: 1,
};


export default global;