import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const res = await fetch('/api/cart');
  return res.json();
});
