"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
;
const initialState = {
    items: [],
};
const blogSlice = (0, toolkit_1.createSlice)({
    name: 'post',
    initialState,
    reducers: {},
});
exports.default = blogSlice.reducer;
