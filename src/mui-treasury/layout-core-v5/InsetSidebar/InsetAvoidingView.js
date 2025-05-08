"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsetAvoidingView = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var Root_1 = require("../Root/Root");
var InsetAvoidingViewRoot = (0, styles_1.styled)("div", {
    name: "InsetAvoidingView",
    slot: "Root",
})({
    transition: "all 225ms",
});
var InsetAvoidingView = function (props) {
    var builder = (0, Root_1.useLayoutCtx)().builder;
    var sxProps = {
        marginLeft: "",
        marginRight: "",
    };
    if (builder.leftInsetSidebar) {
        sxProps.marginLeft = builder.leftInsetSidebar.getOccupiedSpace();
    }
    if (builder.rightInsetSidebar) {
        sxProps.marginRight = builder.rightInsetSidebar.getOccupiedSpace();
    }
    return (0, jsx_runtime_1.jsx)(InsetAvoidingViewRoot, tslib_1.__assign({}, props, { sx: tslib_1.__assign(tslib_1.__assign({}, props.sx), sxProps) }));
};
exports.InsetAvoidingView = InsetAvoidingView;
