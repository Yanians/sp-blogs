"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Backdrop;
var _styles = require("@mui/material/styles");
// ----------------------------------------------------------------------

function Backdrop(theme) {
  const varLow = (0, _styles.alpha)(theme.palette.grey[900], 0.48);
  const varHigh = (0, _styles.alpha)(theme.palette.grey[900], 1);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [`rgb(22,28,36)`, `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`, `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`, `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`],
          '&.MuiBackdrop-invisible': {
            background: 'transparent'
          }
        }
      }
    }
  };
}