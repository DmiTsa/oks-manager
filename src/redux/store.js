import { configureStore } from '@reduxjs/toolkit';
import filterOrderSlice from './orders/filterOrderSlice';
import constructionSlice from './orders/constructionSlice'

export const store = configureStore({
  reducer: {
    filter: filterOrderSlice,
    constructions: constructionSlice,
  }
});
