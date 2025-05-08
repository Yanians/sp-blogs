"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fullscreen = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var styles_1 = require("@mui/material/styles");
var FullscreenContext_1 = tslib_1.__importDefault(require("./FullscreenContext"));
var FullscreenRoot = (0, styles_1.styled)("div", { name: "Fullscreen", slot: "Root" })({
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
});
var Fullscreen = function (props) {
    return ((0, jsx_runtime_1.jsx)(FullscreenContext_1.default.Provider, { value: true, children: (0, jsx_runtime_1.jsx)(FullscreenRoot, tslib_1.__assign({}, props, { className: (0, clsx_1.default)("Fullscreen", props.className) })) }));
};
exports.Fullscreen = Fullscreen;
