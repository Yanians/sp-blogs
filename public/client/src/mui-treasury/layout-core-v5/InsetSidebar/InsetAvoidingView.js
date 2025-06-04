"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsetAvoidingView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Root_1 = require("../Root/Root");
const InsetAvoidingViewRoot = (0, styles_1.styled)("div", {
    name: "InsetAvoidingView",
    slot: "Root",
})({
    transition: "all 225ms",
});
const InsetAvoidingView = (props) => {
    const { builder } = (0, Root_1.useLayoutCtx)();
    const sxProps = {
        marginLeft: "",
        marginRight: "",
    };
    if (builder.leftInsetSidebar) {
        sxProps.marginLeft = builder.leftInsetSidebar.getOccupiedSpace();
    }
    if (builder.rightInsetSidebar) {
        sxProps.marginRight = builder.rightInsetSidebar.getOccupiedSpace();
    }
    return (0, jsx_runtime_1.jsx)(InsetAvoidingViewRoot, { ...props, sx: { ...props.sx, ...sxProps } });
};
exports.InsetAvoidingView = InsetAvoidingView;
