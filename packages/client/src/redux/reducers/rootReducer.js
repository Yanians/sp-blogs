"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const cartReducers_1 = __importDefault(require("./cartReducers"));
const productReducers_1 = __importDefault(require("./productReducers"));
const userReducer_1 = __importDefault(require("./userReducer"));
const blogPostReducer_1 = __importDefault(require("./blogPostReducer"));
const rootReducer = (0, toolkit_1.combineReducers)({
    cart: cartReducers_1.default,
    products: productReducers_1.default,
    user: userReducer_1.default,
    post: blogPostReducer_1.default,
});
exports.default = rootReducer;
