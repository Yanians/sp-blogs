"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fullscreen = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const styles_1 = require("@mui/material/styles");
const FullscreenContext_1 = tslib_1.__importDefault(require("./FullscreenContext"));
const FullscreenRoot = (0, styles_1.styled)("div", { name: "Fullscreen", slot: "Root" })({
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
});
const Fullscreen = (props) => {
    return ((0, jsx_runtime_1.jsx)(FullscreenContext_1.default.Provider, { value: true, children: (0, jsx_runtime_1.jsx)(FullscreenRoot, { ...props, className: (0, clsx_1.default)("Fullscreen", props.className) }) }));
};
exports.Fullscreen = Fullscreen;
