"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const toolkit_1 = require("@reduxjs/toolkit");
const cartReducers_1 = tslib_1.__importDefault(require("./cartReducers"));
const productReducers_1 = tslib_1.__importDefault(require("./productReducers"));
const userReducer_1 = tslib_1.__importDefault(require("./userReducer"));
const blogPostReducer_1 = tslib_1.__importDefault(require("./blogPostReducer"));
const rootReducer = (0, toolkit_1.combineReducers)({
    cart: cartReducers_1.default,
    products: productReducers_1.default,
    user: userReducer_1.default,
    post: blogPostReducer_1.default,
});
exports.default = rootReducer;
