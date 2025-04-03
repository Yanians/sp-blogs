"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _rootReducer = _interopRequireDefault(require("./reducers/rootReducer"));
const preloadedState = {
  cart: {
    items: [{
      id: 1,
      name: 'Shoes',
      price: 50
    }],
    totalPrice: 50
  }
};
const store = exports.store = (0, _toolkit.configureStore)({
  reducer: _rootReducer.default,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState //this comes from the server global variable
});