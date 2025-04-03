"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;
var React = _interopRequireWildcard(require("react"));
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _layoutCoreV = require("@treasury/layout-core-v5");
var _directives = _interopRequireDefault(require("../lib/directives"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function Header() {
  var _Directives = (0, _directives["default"])(),
    Search = _Directives.Search,
    SearchIconWrapper = _Directives.SearchIconWrapper;
  return /*#__PURE__*/React.createElement(_layoutCoreV.Header, null, /*#__PURE__*/React.createElement(_AppBar["default"], {
    position: "sticky",
    elevation: 3
  }, /*#__PURE__*/React.createElement(_Toolbar["default"], null, /*#__PURE__*/React.createElement(_Typography["default"], {
    variant: "h6",
    noWrap: true,
    color: "green"
  }, "Glass Layout"), /*#__PURE__*/React.createElement(Search, null, /*#__PURE__*/React.createElement(SearchIconWrapper, null, /*#__PURE__*/React.createElement(_Search["default"], null))))));
}