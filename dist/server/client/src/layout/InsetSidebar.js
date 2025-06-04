"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InsetSideBars;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Paper_1 = tslib_1.__importDefault(require("@mui/material/Paper"));
const Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
const layout_core_v5_1 = require("../mui-treasury/layout-core-v5");
function InsetSideBars() {
    return ((0, jsx_runtime_1.jsx)(layout_core_v5_1.InsetSidebar, { children: (0, jsx_runtime_1.jsxs)(Paper_1.default, { sx: { height: '100%', p: 2 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", children: "Right Inset Sidebar" }), (0, jsx_runtime_1.jsx)(Typography_1.default, { children: "This area can contain widgets or filters." })] }) }));
}
