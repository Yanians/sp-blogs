"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyCoupon = exports.removeFromCart = exports.addToCart = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    items: [],
    totalPrice: 0,
};
const cartSlice = (0, toolkit_1.createSlice)({
    name: 'cart',
    initialState,
    reducers: {
        updateProductWarranty(state, action) {
            const cartItem = state.items.find(item => item.id === action.payload.id);
            if (cartItem && cartItem.details) {
                cartItem.details.warranty = action.payload.warranty;
            }
        },
        addToCart(state, action) {
            state.items.push(action.payload);
            state.totalPrice += action.payload.price;
        },
        removeFromCart(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                state.totalPrice -= item.price;
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
        applyCoupon(state, action) {
            const couponCode = action.payload;
            if (couponCode === 'DISCOUNT10') {
                state.totalPrice *= 0.9;
            }
        },
    },
});
_a = cartSlice.actions, exports.addToCart = _a.addToCart, exports.removeFromCart = _a.removeFromCart, exports.applyCoupon = _a.applyCoupon;
exports.default = cartSlice.reducer;
