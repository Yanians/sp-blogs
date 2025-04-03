"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@mui/material/styles");
const theme = (0, _styles.createTheme)({
  palette: {
    mode: 'light',
    background: {
      default: 'rgba(255, 255, 255, 0.6)',
      paper: 'rgba(255, 255, 255, 0.3)'
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)'
        }
      }
    }
  }
});
var _default = exports.default = theme;