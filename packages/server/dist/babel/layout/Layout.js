"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;
var React = _interopRequireWildcard(require("react"));
var _Footer = _interopRequireDefault(require("./Footer"));
var _Root = _interopRequireDefault(require("./Root"));
var _Header = _interopRequireDefault(require("./Header"));
var _EdgeSidebar = _interopRequireDefault(require("./EdgeSidebar"));
var _Content = _interopRequireDefault(require("./Content"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// App.tsx

function Layout(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Root.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_EdgeSidebar.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Content.default, {
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {})]
  });
}
;