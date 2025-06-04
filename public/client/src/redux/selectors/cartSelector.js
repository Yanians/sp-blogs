"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCartTotalPrice = exports.selectCartTotalItems = void 0;
const selectCartTotalItems = (state) => state.cart.items.length;
exports.selectCartTotalItems = selectCartTotalItems;
const selectCartTotalPrice = (state) => state.cart.totalPrice;
exports.selectCartTotalPrice = selectCartTotalPrice;
