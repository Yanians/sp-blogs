"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styles = require("@mui/material/styles");
var _colors = require("@mui/material/colors");
// Create a theme instance.
var theme = (0, _styles.createTheme)({
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _colors.red.A400
    }
  }
});
var _default = exports["default"] = theme;