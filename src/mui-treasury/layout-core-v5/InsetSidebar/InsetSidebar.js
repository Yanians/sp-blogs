"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsetSidebar = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var Root_1 = require("../Root/Root");
var InsetOffset_1 = require("./InsetOffset");
var InsetSidebarRoot = (0, styles_1.styled)("div", {
    name: "AppInsetSidebar",
    slot: "Root",
    overridesResolver: function (props, styles) { return styles.root; },
})({
    position: "relative",
    flexShrink: 0,
});
var InsetSidebarBody = (0, styles_1.styled)("div", {
    name: "AppInsetSidebar",
    slot: "Body",
    overridesResolver: function (props, styles) { return styles.body; },
})(function (_a) {
    var theme = _a.theme, ownerState = _a.ownerState;
    return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ display: "flex", flexDirection: "column", overflow: "auto" }, (ownerState.anchor === "left" && {
        borderRight: "1px solid",
    })), (ownerState.anchor === "right" && {
        borderLeft: "1px solid",
    })), { borderColor: theme.palette.divider }));
});
var InsetSidebar = function (_a) {
    var anchor = _a.anchor, children = _a.children, classes = _a.classes, RootProps = _a.RootProps, rootSx = _a.rootSx, props = tslib_1.__rest(_a, ["anchor", "children", "classes", "RootProps", "rootSx"]);
    var ctx = (0, Root_1.useLayoutCtx)();
    var builder = ctx.builder;
    // anchor should be injected via InsetContainer
    var sidebar = builder["".concat(anchor, "InsetSidebar")];
    return ((0, jsx_runtime_1.jsx)(InsetSidebarRoot, tslib_1.__assign({}, RootProps, { className: (0, clsx_1.default)(RootProps === null || RootProps === void 0 ? void 0 : RootProps.className, classes === null || classes === void 0 ? void 0 : classes.root), sx: tslib_1.__assign(tslib_1.__assign({}, sidebar === null || sidebar === void 0 ? void 0 : sidebar.getSxRoot()), rootSx), children: (0, jsx_runtime_1.jsxs)(InsetSidebarBody, tslib_1.__assign({}, props, { className: (0, clsx_1.default)(props === null || props === void 0 ? void 0 : props.className, classes === null || classes === void 0 ? void 0 : classes.paper), ownerState: { anchor: anchor }, sx: tslib_1.__assign(tslib_1.__assign({}, sidebar === null || sidebar === void 0 ? void 0 : sidebar.getSxBody()), props === null || props === void 0 ? void 0 : props.sx), children: [(0, jsx_runtime_1.jsx)(InsetOffset_1.InsetOffset, { sidebar: sidebar }), typeof children === "function" ? children(ctx) : children] })) })));
};
exports.InsetSidebar = InsetSidebar;
