import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL =
  "https://my-json-server.typicode.com/BhaskarBhatkal/Ecom-demo/products";

// Fetch products from API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {
    editProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.items.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.items[index] = updatedProduct;
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((product) => product.id !== id);
    },
    sortProducts: (state, action) => {
      state.items.sort((a, b) => a.price - b.price);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { editProduct, deleteProduct, sortProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
