import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeAutoObservable } from 'mobx';

import {
  makePersistable,
  clearPersistedStore,
  configurePersistable,
  getPersistedStore,
  stopPersisting,
} from 'mobx-persist-store';

configurePersistable(
  {
    storage: AsyncStorage,
    expireIn: 86400000,
    removeOnExpiration: false,
    stringify: true,
    debugMode: false,
  },
  { delay: 100, fireImmediately: false },
);

class Store {
  is_premium = false;
  availablePackages = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: 'StoreData',
      properties: ['is_premium', 'availablePackges'],
      storage: AsyncStorage,
    });
  }

  // Persist Functions dont touch
  async clearStoredDate() {
    await clearPersistedStore(this);
  }

  async getStoredData() {
    return getPersistedStore(this);
  }

  async stopStore() {
    stopPersisting(this);
  }


  // Update Functions

  isPremiumUpdate = data => {
    this.is_premium = data;
  };

  availablePackagesUpdate = data => {
    this.availablePackages = data;
  };
}

export default new Store();
