"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GlobalStyles;
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
// ----------------------------------------------------------------------
function GlobalStyles() {
  const theme = (0, _styles.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.GlobalStyles, {
    styles: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      },
      html: {
        width: '100%',
        height: '100%',
        WebkitOverflowScrolling: 'touch'
      },
      body: {
        width: '100%',
        height: '100%'
      },
      '#root': {
        width: '100%',
        height: '100%'
      },
      input: {
        '&[type=number]': {
          MozAppearance: 'textfield',
          '&::-webkit-outer-spin-button': {
            margin: 0,
            WebkitAppearance: 'none'
          },
          '&::-webkit-inner-spin-button': {
            margin: 0,
            WebkitAppearance: 'none'
          }
        }
      },
      textarea: {
        '&::-webkit-input-placeholder': {
          color: theme.palette.text.disabled
        },
        '&::-moz-placeholder': {
          opacity: 1,
          color: theme.palette.text.disabled
        },
        '&:-ms-input-placeholder': {
          color: theme.palette.text.disabled
        },
        '&::placeholder': {
          color: theme.palette.text.disabled
        }
      },
      img: {
        display: 'block',
        maxWidth: '100%'
      },
      // Lazy Load Img
      '.blur-up': {
        WebkitFilter: 'blur(5px)',
        filter: 'blur(5px)',
        transition: 'filter 400ms, -webkit-filter 400ms'
      },
      '.blur-up.lazyloaded ': {
        WebkitFilter: 'blur(0)',
        filter: 'blur(0)'
      }
    }
  });
}