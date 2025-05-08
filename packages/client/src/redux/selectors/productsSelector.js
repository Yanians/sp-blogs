"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectExpensiveProducts = exports.selectProductListStatus = exports.selectAllProducts = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
// Basic selector to retrieve all products
var selectAllProducts = function (state) { return state.products.products; };
exports.selectAllProducts = selectAllProducts;
// Basic selector to retrieve loading state of the products list API call
var selectProductListStatus = function (state) { return state.products.status; };
exports.selectProductListStatus = selectProductListStatus;
// Memoized selector to filter expensive products
exports.selectExpensiveProducts = (0, toolkit_1.createSelector)([exports.selectAllProducts], function (products) { return products.filter(function (product) { return product.price > 1000; }); });
