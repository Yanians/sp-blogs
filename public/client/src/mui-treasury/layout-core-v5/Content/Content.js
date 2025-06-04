"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const styles_1 = require("@mui/material/styles");
const Root_1 = require("../Root/Root");
const getContentSxProps_1 = require("./getContentSxProps");
const constant_1 = require("../utils/constant");
const FullscreenContext_1 = require("../Fullscreen/FullscreenContext");
const ContentRoot = (0, styles_1.styled)("main", { name: "AppContent", slot: "Root", overridesResolver: (props, styles) => styles.root,
})(({ ownerState }) => ({
    transition: constant_1.CSS_TRANSITION,
    ...(ownerState.isFullscreen && {
        flexGrow: 1,
        minHeight: "0px",
        display: "flex",
    }),
}));
const Content = ({ children, ...inProps }) => {
    const props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppContent",
    });
    const ctx = (0, Root_1.useLayoutCtx)();
    const { builder } = ctx;
    const sxProps = (0, getContentSxProps_1.getContentSxProps)(builder, constant_1.CONTENT_ID);
    const isFullscreen = (0, FullscreenContext_1.useFullscreenCtx)();
    return ((0, jsx_runtime_1.jsx)(ContentRoot, { ...props, className: (0, clsx_1.default)("Content", props.className), sx: {
            ...(isFullscreen && { flexGrow: 1, minHeight: 0, display: "flex" }),
            ...props.sx,
            ...sxProps,
        }, ownerState: { isFullscreen }, children: typeof children === "function" ? children(ctx) : children }));
};
exports.Content = Content;
