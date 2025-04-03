"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _TreeItem = require("@mui/x-tree-view/TreeItem");
var _jsxRuntime = require("react/jsx-runtime");
const ClientFolder = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TreeItem.TreeItem, {
  itemId: "2",
  label: "client",
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TreeItem.TreeItem, {
    itemId: "3",
    label: "dist"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TreeItem.TreeItem, {
    itemId: "4",
    label: "public"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TreeItem.TreeItem, {
    itemId: "5",
    label: "babel"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TreeItem.TreeItem, {
    itemId: "6",
    label: "css"
  })]
});
var _default = exports.default = ClientFolder;