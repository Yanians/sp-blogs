"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThemeConfig;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _react2 = require("@emotion/react");
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _styles = require("@mui/material/styles");
var _palette = _interopRequireDefault(require("./palette"));
var _shape = _interopRequireDefault(require("./shape"));
var _typography = _interopRequireDefault(require("./typography"));
var _globalStyles = _interopRequireDefault(require("./globalStyles"));
var _breakpoints = _interopRequireDefault(require("./breakpoints"));
var _shadows = _interopRequireWildcard(require("./shadows"));
var _overrides = _interopRequireDefault(require("./overrides"));
var _createEmotionCache = _interopRequireDefault(require("./createEmotionCache"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
;
function ThemeConfig(_ref) {
  let {
    children,
    nonce
  } = _ref;
  const themeOptions = (0, _react.useMemo)(() => ({
    customShadows: _shadows.customShadows,
    breakpoints: _breakpoints.default,
    palette: _palette.default,
    shape: _shape.default,
    typography: _typography.default,
    shadows: _shadows.default,
    GlobalStyles: _globalStyles.default
  }), []);
  console.log('themes index checking: ', themeOptions);
  const cache = (0, _createEmotionCache.default)(nonce); //client Side
  const theme = (0, _styles.createTheme)(themeOptions);
  theme.components = (0, _overrides.default)(theme);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.CacheProvider, {
    value: cache,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.StyledEngineProvider, {
      injectFirst: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.ThemeProvider, {
        theme: theme,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CssBaseline.default, {}), children]
      })
    })
  });
}