// This package helps with state synchronization to and from localStorage
import { localStorageSync } from 'ngrx-store-localstorage';
import { ActionReducer, MetaReducer } from '@ngrx/store';

export const localStorageSyncReducer = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return localStorageSync({keys: ['customers']})(reducer)
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer]
