"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const SidebarContentRoot = (0, styles_1.styled)("div", {
    name: "AppSidebarContent",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
})({
    minHeight: 0,
    flexGrow: 1,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
});
const SidebarContent = (props) => {
    return (0, jsx_runtime_1.jsx)(SidebarContentRoot, { ...props });
};
exports.SidebarContent = SidebarContent;
