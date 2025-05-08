"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var Root_1 = require("../Root/Root");
var getContentSxProps_1 = require("../Content/getContentSxProps");
var constant_1 = require("../utils/constant");
var FooterRoot = (0, styles_1.styled)("footer", {
    name: "AppFooter",
    slot: "Root",
    overridesResolver: function (props, styles) { return styles.root; },
})({
    transition: constant_1.CSS_TRANSITION,
});
var Footer = function (_a) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    var ctx = (0, Root_1.useLayoutCtx)();
    var builder = ctx.builder;
    var sxProps = (0, getContentSxProps_1.getContentSxProps)(builder, constant_1.FOOTER_ID);
    return ((0, jsx_runtime_1.jsx)(FooterRoot, tslib_1.__assign({}, props, { sx: tslib_1.__assign(tslib_1.__assign({}, props.sx), sxProps), children: typeof children === "function" ? children(ctx) : children })));
};
exports.Footer = Footer;
