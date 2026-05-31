import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../store/productSlice';
import counterReducer from './counterSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: counterReducer,
  },
});
export default store;
