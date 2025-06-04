"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MotionContainer;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
// material
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
function MotionContainer(props) {
    const { open, children, ...rest } = props;
    return ((0, jsx_runtime_1.jsx)(Box_1.default
    // component={'div'}
    // initial={false}
    // animate={open ? 'animate' : 'exit'}
    // variants={varWrapBoth}
    , { ...rest, children: children }));
}
