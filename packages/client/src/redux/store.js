"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const rootReducer_1 = __importDefault(require("./reducers/rootReducer"));
const preloadedState = {
    cart: {
        items: [{ id: 1, name: 'Shoes', price: 50 }],
        totalPrice: 50,
    }
};
exports.store = (0, toolkit_1.configureStore)({
    reducer: rootReducer_1.default,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState, //this comes from the server global variable
});
