"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsetContainer = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var Container_1 = tslib_1.__importDefault(require("@mui/material/Container"));
var styles_1 = require("@mui/material/styles");
var InsetContainerRoot = (0, styles_1.styled)(Container_1.default, {
    name: "AppInsetContainer",
    slot: "Root",
    overridesResolver: function (props, styles) { return styles.root; },
})({
    display: "flex",
    flexFlow: "row nowrap",
    flexGrow: 1,
    '& > *:not([class*="AppInsetSidebar"])': {
        flexGrow: 1,
        overflow: "auto",
    },
});
var InsetContainer = function (_a) {
    var children = _a.children, leftSidebar = _a.leftSidebar, rightSidebar = _a.rightSidebar, inProps = tslib_1.__rest(_a, ["children", "leftSidebar", "rightSidebar"]);
    var props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppInsetContainer",
    });
    return ((0, jsx_runtime_1.jsxs)(InsetContainerRoot, tslib_1.__assign({}, props, { children: [leftSidebar && react_1.default.cloneElement(leftSidebar, { anchor: "left" }), children, rightSidebar && react_1.default.cloneElement(rightSidebar, { anchor: "right" })] })));
};
exports.InsetContainer = InsetContainer;
