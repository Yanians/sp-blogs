"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.fetchProducts = (0, toolkit_1.createAsyncThunk)('products/fetchProducts', async (_, thunkAPI) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return thunkAPI.rejectWithValue(errorMessage);
    }
});
