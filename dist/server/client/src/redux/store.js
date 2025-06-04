"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const tslib_1 = require("tslib");
const toolkit_1 = require("@reduxjs/toolkit");
const rootReducer_1 = tslib_1.__importDefault(require("./reducers/rootReducer"));
const preloadedState = {};
exports.store = (0, toolkit_1.configureStore)({
    reducer: rootReducer_1.default,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState, //this comes from the server global variable
});
