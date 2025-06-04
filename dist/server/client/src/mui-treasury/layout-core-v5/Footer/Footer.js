"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Root_1 = require("../Root/Root");
const getContentSxProps_1 = require("../Content/getContentSxProps");
const constant_1 = require("../utils/constant");
const FooterRoot = (0, styles_1.styled)("footer", {
    name: "AppFooter",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
})({
    transition: constant_1.CSS_TRANSITION,
});
const Footer = ({ children, ...props }) => {
    const ctx = (0, Root_1.useLayoutCtx)();
    const { builder } = ctx;
    const sxProps = (0, getContentSxProps_1.getContentSxProps)(builder, constant_1.FOOTER_ID);
    return ((0, jsx_runtime_1.jsx)(FooterRoot, { ...props, sx: { ...props.sx, ...sxProps }, children: typeof children === "function" ? children(ctx) : children }));
};
exports.Footer = Footer;
