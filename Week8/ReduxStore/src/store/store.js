import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: counterReducer,
  },
});

export default store;
