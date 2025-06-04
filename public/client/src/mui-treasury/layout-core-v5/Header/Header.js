"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.Subheader = exports.TopHeader = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const AppBar_1 = tslib_1.__importDefault(require("@mui/material/AppBar"));
const styles_1 = require("@mui/material/styles");
const Root_1 = require("../Root/Root");
const constant_1 = require("../utils/constant");
const OffsetRoot = (0, styles_1.styled)("div")({ flexShrink: 0 });
const Offset = ({ element, }) => {
    const { builder } = (0, Root_1.useLayoutCtx)();
    return ((0, jsx_runtime_1.jsx)(OffsetRoot, { className: "HeaderOffset", sx: { height: builder[element]?.getOffsetHeight() } }));
};
const TopHeaderRoot = (0, styles_1.styled)("div", {
    name: "AppTopHeader",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
})({
    zIndex: 1,
    transition: constant_1.CSS_TRANSITION,
});
const TopHeader = ({ children, ...inProps }) => {
    const props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppTopHeader",
    });
    const ctx = (0, Root_1.useLayoutCtx)();
    const { builder } = ctx;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TopHeaderRoot, { ...props, sx: {
                    ...props.sx,
                    ...builder.topHeader?.getSxProps(),
                }, children: typeof children === "function" ? children(ctx) : children }), (0, jsx_runtime_1.jsx)(Offset, { element: "topHeader" })] }));
};
exports.TopHeader = TopHeader;
const SubheaderRoot = (0, styles_1.styled)("div", {
    name: "AppSubheader",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
})({
    zIndex: 1,
    transition: constant_1.CSS_TRANSITION,
});
const Subheader = ({ children, ...inProps }) => {
    const props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppSubheader",
    });
    const ctx = (0, Root_1.useLayoutCtx)();
    const { builder } = ctx;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SubheaderRoot, { ...props, sx: {
                    ...props.sx,
                    ...builder.subheader?.getSxProps(),
                }, children: typeof children === "function" ? children(ctx) : children }), (0, jsx_runtime_1.jsx)(Offset, { element: "subheader" })] }));
};
exports.Subheader = Subheader;
const HeaderRoot = (0, styles_1.styled)(AppBar_1.default, { name: "AppHeader", slot: "Root", overridesResolver: (props, styles) => styles.root })({ transition: constant_1.CSS_TRANSITION });
const Header = ({ children, ...inProps }) => {
    const props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppHeader",
    });
    const ctx = (0, Root_1.useLayoutCtx)();
    const { builder } = ctx;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(HeaderRoot, { color: "default", elevation: 0, ...props, sx: {
                    ...props.sx,
                    ...builder.header?.getSxProps(),
                }, children: typeof children === "function" ? children(ctx) : children }), (0, jsx_runtime_1.jsx)(Offset, { element: "header" })] }));
};
exports.Header = Header;
