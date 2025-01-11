import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/getProducts.ts";

const initialState = {
  showNavbar: false,
  products: [],
  staticProducts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setShowNavbar: (state: any, action: { payload: boolean }) => {
      state.showNavbar = action.payload;
    },

    setProducts: (state: any, action: { payload: any }) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.staticProducts = action.payload;
    });
  },
});

export const { setShowNavbar, setProducts } = authSlice.actions;

export default authSlice.reducer;
