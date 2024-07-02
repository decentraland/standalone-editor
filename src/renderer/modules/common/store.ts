import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useSelector as formerUseSelector,
  useDispatch as formerUseDispuseDispatch,
} from 'react-redux';

import { createRootReducer } from './reducer';

// check: https://redux.js.org/usage/migrating-to-modern-redux#store-setup-with-configurestore
// for more info in the future...
const store = configureStore({
  reducer: createRootReducer(),
});

const isDevelopment = true; // todo

if (isDevelopment) {
  // eslint-disable-next-line no-underscore-dangle
  const _window = window as any;
  _window.getState = store.getState;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = formerUseDispuseDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = formerUseSelector;

export { store };
