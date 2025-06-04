"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Title;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
function Title(props) {
    return ((0, jsx_runtime_1.jsx)(Typography_1.default, { component: "h2", variant: "h6", color: "primary", gutterBottom: true, children: props.children }));
}
