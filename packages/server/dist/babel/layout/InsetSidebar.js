"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InsetSideBars;
var React = _interopRequireWildcard(require("react"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _layoutCoreV = require("@treasury/layout-core-v5");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function InsetSideBars() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_layoutCoreV.InsetSidebar, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Paper.default, {
      sx: {
        height: '100%',
        p: 2
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h6",
        children: "Right Inset Sidebar"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        children: "This area can contain widgets or filters."
      })]
    })
  });
}