"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectProductListStatus = exports.selectExpensiveProducts = exports.selectAllProducts = void 0;
var _toolkit = require("@reduxjs/toolkit");
// Basic selector to retrieve all products
var selectAllProducts = exports.selectAllProducts = function selectAllProducts(state) {
  return state.products.products;
};

// Basic selector to retrieve loading state of the products list API call
var selectProductListStatus = exports.selectProductListStatus = function selectProductListStatus(state) {
  return state.products.status;
};

// Memoized selector to filter expensive products
var selectExpensiveProducts = exports.selectExpensiveProducts = (0, _toolkit.createSelector)([selectAllProducts], function (products) {
  return products.filter(function (product) {
    return product.price > 1000;
  });
});