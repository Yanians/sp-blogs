"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.Subheader = exports.TopHeader = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var AppBar_1 = tslib_1.__importDefault(require("@mui/material/AppBar"));
var styles_1 = require("@mui/material/styles");
var Root_1 = require("../Root/Root");
var constant_1 = require("../utils/constant");
var OffsetRoot = (0, styles_1.styled)("div")({ flexShrink: 0 });
var Offset = function (_a) {
    var _b;
    var element = _a.element;
    var builder = (0, Root_1.useLayoutCtx)().builder;
    return ((0, jsx_runtime_1.jsx)(OffsetRoot, { className: "HeaderOffset", sx: { height: (_b = builder[element]) === null || _b === void 0 ? void 0 : _b.getOffsetHeight() } }));
};
var TopHeaderRoot = (0, styles_1.styled)("div", {
    name: "AppTopHeader",
    slot: "Root",
    overridesResolver: function (props, styles) { return styles.root; },
})({
    zIndex: 1,
    transition: constant_1.CSS_TRANSITION,
});
var TopHeader = function (_a) {
    var _b;
    var children = _a.children, inProps = tslib_1.__rest(_a, ["children"]);
    var props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppTopHeader",
    });
    var ctx = (0, Root_1.useLayoutCtx)();
    var builder = ctx.builder;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TopHeaderRoot, tslib_1.__assign({}, props, { sx: tslib_1.__assign(tslib_1.__assign({}, props.sx), (_b = builder.topHeader) === null || _b === void 0 ? void 0 : _b.getSxProps()), children: typeof children === "function" ? children(ctx) : children })), (0, jsx_runtime_1.jsx)(Offset, { element: "topHeader" })] }));
};
exports.TopHeader = TopHeader;
var SubheaderRoot = (0, styles_1.styled)("div", {
    name: "AppSubheader",
    slot: "Root",
    overridesResolver: function (props, styles) { return styles.root; },
})({
    zIndex: 1,
    transition: constant_1.CSS_TRANSITION,
});
var Subheader = function (_a) {
    var _b;
    var children = _a.children, inProps = tslib_1.__rest(_a, ["children"]);
    var props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppSubheader",
    });
    var ctx = (0, Root_1.useLayoutCtx)();
    var builder = ctx.builder;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SubheaderRoot, tslib_1.__assign({}, props, { sx: tslib_1.__assign(tslib_1.__assign({}, props.sx), (_b = builder.subheader) === null || _b === void 0 ? void 0 : _b.getSxProps()), children: typeof children === "function" ? children(ctx) : children })), (0, jsx_runtime_1.jsx)(Offset, { element: "subheader" })] }));
};
exports.Subheader = Subheader;
var HeaderRoot = (0, styles_1.styled)(AppBar_1.default, {
    name: "AppHeader",
    slot: "Root",
    overridesResolver: function (props, styles) { return styles.root; },
})({ transition: constant_1.CSS_TRANSITION });
var Header = function (_a) {
    var _b;
    var children = _a.children, inProps = tslib_1.__rest(_a, ["children"]);
    var props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppHeader",
    });
    var ctx = (0, Root_1.useLayoutCtx)();
    var builder = ctx.builder;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(HeaderRoot, tslib_1.__assign({ color: "default", elevation: 0 }, props, { sx: tslib_1.__assign(tslib_1.__assign({}, props.sx), (_b = builder.header) === null || _b === void 0 ? void 0 : _b.getSxProps()), children: typeof children === "function" ? children(ctx) : children })), (0, jsx_runtime_1.jsx)(Offset, { element: "header" })] }));
};
exports.Header = Header;
