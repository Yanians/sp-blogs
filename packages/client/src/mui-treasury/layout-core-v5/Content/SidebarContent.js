"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarContent = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var SidebarContentRoot = (0, styles_1.styled)("div", {
    name: "AppSidebarContent",
    slot: "Root",
    overridesResolver: function (props, styles) { return styles.root; },
})({
    minHeight: 0,
    flexGrow: 1,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
});
var SidebarContent = function (props) {
    return (0, jsx_runtime_1.jsx)(SidebarContentRoot, tslib_1.__assign({}, props));
};
exports.SidebarContent = SidebarContent;
