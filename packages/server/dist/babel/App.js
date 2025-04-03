"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _post_one = _interopRequireDefault(require("./blog/post_one.mjs"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; } // import MarkdownRenderer from '../../extractorfile/markdownRenderer';
const Layout = /*#__PURE__*/React.lazy(() => Promise.resolve().then(() => _interopRequireWildcard(require("./layout"))));
const MainRoute = /*#__PURE__*/React.lazy(() => Promise.resolve().then(() => _interopRequireWildcard(require('@routes/MainRoute'))));
const App = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Layout, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Routes, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
          index: true,
          path: "/",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(MainRoute, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
          path: "getting-started/blogs",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_post_one.default, {})
        })]
      })]
    })
  });
};
var _default = exports.default = App;