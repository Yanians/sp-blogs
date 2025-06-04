"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const productsActions_1 = require("../actions/productsActions");
const initialState = {
    products: [],
    status: 'idle',
    error: null,
};
const productsSlice = (0, toolkit_1.createSlice)({
    name: 'productsList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsActions_1.fetchProducts.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(productsActions_1.fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
        })
            .addCase(productsActions_1.fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    },
});
exports.default = productsSlice.reducer;
