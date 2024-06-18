// src/app/store.js
import { configureStore,combineReducers } from '@reduxjs/toolkit';
import authSlice from '../app/authSlice';

const reducers = combineReducers({
  user: authSlice,
})

export const store = configureStore({
  reducer: reducers,
});