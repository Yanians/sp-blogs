"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SvgIconStyle;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
function SvgIconStyle({ src, color = 'inherit', sx }) {
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { component: "span", sx: {
            width: 24,
            height: 24,
            mask: `url(${src}) no-repeat center / contain`,
            WebkitMask: `url(${src}) no-repeat center / contain`,
            bgcolor: `${color}.main`,
            ...(color === 'inherit' && { bgcolor: 'currentColor' }),
            ...(color === 'action' && { bgcolor: 'action.active' }),
            ...(color === 'disabled' && { bgcolor: 'action.disabled' }),
            ...(color === 'paper' && { bgcolor: 'background.paper' }),
            ...sx
        } }));
}
