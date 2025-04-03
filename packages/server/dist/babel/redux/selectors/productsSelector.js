"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectProductListStatus = exports.selectExpensiveProducts = exports.selectAllProducts = void 0;
var _toolkit = require("@reduxjs/toolkit");
// Basic selector to retrieve all products
const selectAllProducts = state => state.products.products;

// Basic selector to retrieve loading state of the products list API call
exports.selectAllProducts = selectAllProducts;
const selectProductListStatus = state => state.products.status;

// Memoized selector to filter expensive products
exports.selectProductListStatus = selectProductListStatus;
const selectExpensiveProducts = exports.selectExpensiveProducts = (0, _toolkit.createSelector)([selectAllProducts], products => products.filter(product => product.price > 1000));