"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _productsActions = require("../actions/productsActions");
var initialState = {
  products: [],
  status: 'idle',
  error: null
};
var productsSlice = (0, _toolkit.createSlice)({
  name: 'productsList',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(_productsActions.fetchProducts.pending, function (state) {
      state.status = 'loading';
    }).addCase(_productsActions.fetchProducts.fulfilled, function (state, action) {
      state.status = 'succeeded';
      state.products = action.payload;
    }).addCase(_productsActions.fetchProducts.rejected, function (state, action) {
      state.status = 'failed';
      state.error = action.payload;
    });
  }
});
var _default = exports["default"] = productsSlice.reducer;