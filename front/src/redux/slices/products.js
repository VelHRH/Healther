import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const {data} = await axios.get('/products');
  return data;
});

const initialState = {
  products: {
    items: [],
    status: 'loading'
  }
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products.items = action.payload;
      state.products.status = 'loaded'
    },
    [fetchProducts.rejected]: (state) => {
      state.products.items = [];
      state.products.status = 'error'
    }
  }
});

export const productReducer = productSlice.reducer;