"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsetSidebar = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const Root_1 = require("../Root/Root");
const InsetOffset_1 = require("./InsetOffset");
const InsetSidebarRoot = (0, styles_1.styled)("div", {
    name: "AppInsetSidebar",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
})({
    position: "relative",
    flexShrink: 0,
});
const InsetSidebarBody = (0, styles_1.styled)("div", {
    name: "AppInsetSidebar",
    slot: "Body",
    overridesResolver: (props, styles) => styles.body,
})(({ theme, ownerState }) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    ...(ownerState.anchor === "left" && {
        borderRight: "1px solid",
    }),
    ...(ownerState.anchor === "right" && {
        borderLeft: "1px solid",
    }),
    borderColor: theme.palette.divider,
}));
const InsetSidebar = ({ anchor, children, classes, RootProps, rootSx, ...props }) => {
    const ctx = (0, Root_1.useLayoutCtx)();
    const { builder } = ctx;
    // anchor should be injected via InsetContainer
    const sidebar = builder[`${anchor}InsetSidebar`];
    return ((0, jsx_runtime_1.jsx)(InsetSidebarRoot, { ...RootProps, className: (0, clsx_1.default)(RootProps?.className, classes?.root), sx: {
            ...sidebar?.getSxRoot(),
            ...rootSx,
        }, children: (0, jsx_runtime_1.jsxs)(InsetSidebarBody, { ...props, className: (0, clsx_1.default)(props?.className, classes?.paper), ownerState: { anchor }, sx: {
                ...sidebar?.getSxBody(),
                ...props?.sx,
            }, children: [(0, jsx_runtime_1.jsx)(InsetOffset_1.InsetOffset, { sidebar: sidebar }), typeof children === "function" ? children(ctx) : children] }) }));
};
exports.InsetSidebar = InsetSidebar;
