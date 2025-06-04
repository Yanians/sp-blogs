"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ThemeToggleButton;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const DarkMode_1 = tslib_1.__importDefault(require("@mui/icons-material/DarkMode"));
const LightMode_1 = tslib_1.__importDefault(require("@mui/icons-material/LightMode"));
const material_1 = require("@mui/material");
function ThemeToggleButton({ handleChangeMode, mode }) {
    if (!mode)
        return null;
    const isDark = mode === 'dark';
    return ((0, jsx_runtime_1.jsx)(material_1.IconButton, { edge: "end", size: "medium", onClick: () => handleChangeMode(isDark ? 'light' : 'dark'), children: isDark
            ? (0, jsx_runtime_1.jsx)(LightMode_1.default, { color: isDark ? 'danger' : 'inherit' })
            : (0, jsx_runtime_1.jsx)(DarkMode_1.default, { color: isDark ? 'inherit' : 'danger' }) }));
}
