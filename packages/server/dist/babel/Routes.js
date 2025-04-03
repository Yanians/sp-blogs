"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _reactRouterDom = require("react-router-dom");
var _onClickHandler = _interopRequireDefault(require("./onClickHandler"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Home = function Home() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Home");
};
var About = function About() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "About");
};
var App = function App() {
  var _React$useState = _react["default"].useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    count = _React$useState2[0],
    setCount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    hydrated = _React$useState4[0],
    setHydrated = _React$useState4[1];
  _react["default"].useEffect(function () {
    setHydrated(true); // Ensures the client has mounted before interacting
  }, []);
  var increment = function increment() {
    setCount(count + 1);
  };
  var decrement = function decrement() {
    setCount(count - 1);
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Home"), " | ", /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/about"
  }, "About")), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement("p", null, hydrated ? count : 0), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    size: "small",
    onClick: increment
  }, "Increment"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    size: "small",
    onClick: decrement
  }, "Decrement")), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_onClickHandler["default"], null), /*#__PURE__*/_react["default"].createElement(Home, null))
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/about",
    element: /*#__PURE__*/_react["default"].createElement(About, null)
  })));
};
var _default = exports["default"] = App; // import React from "react";
// import { Routes, Route } from "react-router-dom";
// import UniversalButton from "./UniversalButton";
// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//     <UniversalButton />
//   </div>
// );
// const About = () => (
//   <div>
//     <h1>About Page</h1>
//     <UniversalButton />
//   </div>
// );
// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// };
// export default App;