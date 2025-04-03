"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
var initialState = {
  currentUser: null,
  isAuthenticated: false
};
var userSlice = (0, _toolkit.createSlice)({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: function login(state, action) {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    logout: function logout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
    }
  }
});
var _userSlice$actions = userSlice.actions,
  login = exports.login = _userSlice$actions.login,
  logout = exports.logout = _userSlice$actions.logout;
var _default = exports["default"] = userSlice.reducer;