"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InsetSideBar;
var React = _interopRequireWildcard(require("react"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _layoutCoreV = require("@treasury/layout-core-v5");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function InsetSideBar() {
  return /*#__PURE__*/React.createElement(_layoutCoreV.InsetSidebar, null, /*#__PURE__*/React.createElement(_Paper["default"], {
    sx: {
      height: '100%',
      p: 2
    }
  }, /*#__PURE__*/React.createElement(_Typography["default"], {
    variant: "h6"
  }, "Right Inset Sidebar"), /*#__PURE__*/React.createElement(_Typography["default"], null, "This area can contain widgets or filters.")));
}