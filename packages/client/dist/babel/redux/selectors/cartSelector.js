"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCartTotalPrice = exports.selectCartTotalItems = void 0;
var selectCartTotalItems = exports.selectCartTotalItems = function selectCartTotalItems(state) {
  return state.cart.items.length;
};
var selectCartTotalPrice = exports.selectCartTotalPrice = function selectCartTotalPrice(state) {
  return state.cart.totalPrice;
};