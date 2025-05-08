"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCartTotalPrice = exports.selectCartTotalItems = void 0;
var selectCartTotalItems = function (state) { return state.cart.items.length; };
exports.selectCartTotalItems = selectCartTotalItems;
var selectCartTotalPrice = function (state) { return state.cart.totalPrice; };
exports.selectCartTotalPrice = selectCartTotalPrice;
