"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFromCart = exports.default = exports.applyCoupon = exports.addToCart = void 0;
var _toolkit = require("@reduxjs/toolkit");
const initialState = {
  items: [],
  totalPrice: 0
};
const cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState,
  reducers: {
    updateProductWarranty(state, action) {
      const cartItem = state.items.find(item => item.id === action.payload.id);
      if (cartItem && cartItem.details) {
        cartItem.details.warranty = action.payload.warranty;
      }
    },
    addToCart(state, action) {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.totalPrice -= item.price;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    applyCoupon(state, action) {
      const couponCode = action.payload;
      if (couponCode === 'DISCOUNT10') {
        state.totalPrice *= 0.9;
      }
    }
  }
});
const {
  addToCart,
  removeFromCart,
  applyCoupon
} = cartSlice.actions;
exports.applyCoupon = applyCoupon;
exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;
var _default = exports.default = cartSlice.reducer;