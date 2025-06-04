"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsetContainer = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importDefault(require("react"));
const Container_1 = tslib_1.__importDefault(require("@mui/material/Container"));
const styles_1 = require("@mui/material/styles");
const InsetContainerRoot = (0, styles_1.styled)(Container_1.default, {
    name: "AppInsetContainer",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
})({
    display: "flex",
    flexFlow: "row nowrap",
    flexGrow: 1,
    '& > *:not([class*="AppInsetSidebar"])': {
        flexGrow: 1,
        overflow: "auto",
    },
});
const InsetContainer = ({ children, leftSidebar, rightSidebar, ...inProps }) => {
    const props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppInsetContainer",
    });
    return ((0, jsx_runtime_1.jsxs)(InsetContainerRoot, { ...props, children: [leftSidebar && react_1.default.cloneElement(leftSidebar, { anchor: "left" }), children, rightSidebar && react_1.default.cloneElement(rightSidebar, { anchor: "right" })] }));
};
exports.InsetContainer = InsetContainer;
