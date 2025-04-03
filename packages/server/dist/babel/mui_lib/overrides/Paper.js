"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Paper;
// ----------------------------------------------------------------------

function Paper() {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  };
}