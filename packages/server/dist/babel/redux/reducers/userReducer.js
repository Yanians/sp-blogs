"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
const initialState = {
  currentUser: null,
  isAuthenticated: false
};
const userSlice = (0, _toolkit.createSlice)({
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
    }
  }
});
const {
  login,
  logout
} = userSlice.actions;
exports.logout = logout;
exports.login = login;
var _default = exports.default = userSlice.reducer;