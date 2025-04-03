"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppBar;
var _styles = require("@mui/material/styles");
function AppBar(theme) {
  return {
    'MuiAppBar': {
      styleOverrides: {
        root: {
          minHeight: 'auto',
          background: [
          // `rgb(255,0,0)`,
          `-moz-linear-gradient(75deg, ${(0, _styles.alpha)(theme.palette.success.darker)} 0%, ${(0, _styles.alpha)(theme.palette.primary.main)} 100%)`, `-webkit-linear-gradient(75deg, ${(0, _styles.alpha)(theme.palette.teal.dark)} 0%, ${(0, _styles.alpha)(theme.palette.teal.darker)} 100%)`, `linear-gradient(360deg, ${(0, _styles.alpha)(theme.palette.teal.main)} 100%, ${(0, _styles.alpha)(theme.palette.teal.dark)} 100%)`]
        }
      }
    }
  };
}