"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFromCart = exports["default"] = exports.applyCoupon = exports.addToCart = void 0;
var _toolkit = require("@reduxjs/toolkit");
var initialState = {
  items: [],
  totalPrice: 0
};
var cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: initialState,
  reducers: {
    updateProductWarranty: function updateProductWarranty(state, action) {
      var cartItem = state.items.find(function (item) {
        return item.id === action.payload.id;
      });
      if (cartItem && cartItem.details) {
        cartItem.details.warranty = action.payload.warranty;
      }
    },
    addToCart: function addToCart(state, action) {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart: function removeFromCart(state, action) {
      var item = state.items.find(function (item) {
        return item.id === action.payload;
      });
      if (item) {
        state.totalPrice -= item.price;
        state.items = state.items.filter(function (item) {
          return item.id !== action.payload;
        });
      }
    },
    applyCoupon: function applyCoupon(state, action) {
      var couponCode = action.payload;
      if (couponCode === 'DISCOUNT10') {
        state.totalPrice *= 0.9;
      }
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
  addToCart = exports.addToCart = _cartSlice$actions.addToCart,
  removeFromCart = exports.removeFromCart = _cartSlice$actions.removeFromCart,
  applyCoupon = exports.applyCoupon = _cartSlice$actions.applyCoupon;
var _default = exports["default"] = cartSlice.reducer;