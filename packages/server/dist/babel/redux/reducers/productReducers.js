"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _productsActions = require("../actions/productsActions");
const initialState = {
  products: [],
  status: 'idle',
  error: null
};
const productsSlice = (0, _toolkit.createSlice)({
  name: 'productsList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_productsActions.fetchProducts.pending, state => {
      state.status = 'loading';
    }).addCase(_productsActions.fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    }).addCase(_productsActions.fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  }
});
var _default = exports.default = productsSlice.reducer;