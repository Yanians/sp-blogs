"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _rootReducer = _interopRequireDefault(require("./reducers/rootReducer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var preloadedState = {
  cart: {
    items: [{
      id: 1,
      name: 'Shoes',
      price: 50
    }],
    totalPrice: 50
  }
};
var store = exports.store = (0, _toolkit.configureStore)({
  reducer: _rootReducer["default"],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: preloadedState //this comes from the server global variable
});