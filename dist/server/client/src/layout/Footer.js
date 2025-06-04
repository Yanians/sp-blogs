"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
const layout_core_v5_1 = require("../mui-treasury/layout-core-v5");
function Footer() {
    return ((0, jsx_runtime_1.jsx)(layout_core_v5_1.Footer, { children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "footer", sx: {
                p: 2,
                textAlign: 'center',
                backgroundColor: 'rgba(255,255,255,0.3)',
                backdropFilter: 'blur(10px)',
                mt: 2,
            }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", color: "text.secondary", children: "\u00A9 2025 Glass Layout by MUI Treasury + MUI" }) }) }));
}
