"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var styles_1 = require("@mui/material/styles");
var Root_1 = require("../Root/Root");
var getContentSxProps_1 = require("./getContentSxProps");
var constant_1 = require("../utils/constant");
var FullscreenContext_1 = require("../Fullscreen/FullscreenContext");
var ContentRoot = (0, styles_1.styled)("main", { name: "AppContent", slot: "Root", overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var ownerState = _a.ownerState;
    return (tslib_1.__assign({ transition: constant_1.CSS_TRANSITION }, (ownerState.isFullscreen && {
        flexGrow: 1,
        minHeight: "0px",
        display: "flex",
    })));
});
var Content = function (_a) {
    var children = _a.children, inProps = tslib_1.__rest(_a, ["children"]);
    var props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppContent",
    });
    var ctx = (0, Root_1.useLayoutCtx)();
    var builder = ctx.builder;
    var sxProps = (0, getContentSxProps_1.getContentSxProps)(builder, constant_1.CONTENT_ID);
    var isFullscreen = (0, FullscreenContext_1.useFullscreenCtx)();
    return ((0, jsx_runtime_1.jsx)(ContentRoot, tslib_1.__assign({}, props, { className: (0, clsx_1.default)("Content", props.className), sx: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (isFullscreen && { flexGrow: 1, minHeight: 0, display: "flex" })), props.sx), sxProps), ownerState: { isFullscreen: isFullscreen }, children: typeof children === "function" ? children(ctx) : children })));
};
exports.Content = Content;
