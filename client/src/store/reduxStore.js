import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './slices/heroCardSlice';

export const reduxStore = configureStore({
  reducer: {
    hero: heroReducer
  }
});
