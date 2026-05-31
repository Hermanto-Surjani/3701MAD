import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductByID } from '../service/apiService';

const initialState = {
  products: [],
  productData: {},
  loading: false,
  error: null,
};

export const loadAllProducts = createAsyncThunk(
  'loadAllProducts',
  async (_, thunkAPI) => {
    try {
      return await fetchAllProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue("Can't load products.");
    }
  },
);

export const loadProductData = createAsyncThunk(
  'loadProduct',
  async (productId, thunkAPI) => {
    if (!productId)
      return thunkAPI.rejectWithValue("Product Id can't be empty.");
    try {
      return await fetchProductByID(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue("Can't find product.");
    }
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(loadAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.productData = action.payload;
      })
      .addCase(loadProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectProduct = (state) => state.product;
export default productSlice.reducer;
