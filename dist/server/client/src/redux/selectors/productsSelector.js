"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectExpensiveProducts = exports.selectProductListStatus = exports.selectAllProducts = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
// Basic selector to retrieve all products
const selectAllProducts = (state) => state.products.products;
exports.selectAllProducts = selectAllProducts;
// Basic selector to retrieve loading state of the products list API call
const selectProductListStatus = (state) => state.products.status;
exports.selectProductListStatus = selectProductListStatus;
// Memoized selector to filter expensive products
exports.selectExpensiveProducts = (0, toolkit_1.createSelector)([exports.selectAllProducts], (products) => products.filter((product) => product.price > 1000));
