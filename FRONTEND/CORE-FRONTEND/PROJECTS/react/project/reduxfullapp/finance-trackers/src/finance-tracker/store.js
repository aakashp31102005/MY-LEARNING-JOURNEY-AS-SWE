import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './features/transactionsSlice';
import categoriesReducer from './features/categoriesSlice';
import filtersReducer from './features/filtersSlice';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    categories: categoriesReducer,
    filters: filtersReducer,
  },
});

export default store;
