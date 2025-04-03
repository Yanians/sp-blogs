"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _cartReducers = _interopRequireDefault(require("./cartReducers"));
var _productReducers = _interopRequireDefault(require("./productReducers"));
var _userReducer = _interopRequireDefault(require("./userReducer"));
const rootReducer = (0, _toolkit.combineReducers)({
  cart: _cartReducers.default,
  products: _productReducers.default,
  user: _userReducer.default
});
var _default = exports.default = rootReducer;