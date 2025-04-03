"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    currentUser: null,
    isAuthenticated: false,
};
const userSlice = (0, toolkit_1.createSlice)({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.currentUser = null;
            state.isAuthenticated = false;
        },
    },
});
_a = userSlice.actions, exports.login = _a.login, exports.logout = _a.logout;
exports.default = userSlice.reducer;
