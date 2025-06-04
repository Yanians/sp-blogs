"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Tabs_1 = tslib_1.__importDefault(require("@mui/material/Tabs"));
function HeaderTabs({ onChange, tabs, value, }) {
    return ((0, jsx_runtime_1.jsx)(Tabs_1.default, { indicatorColor: "secondary", orientation: 'horizontal', value: value, onChange: onChange, "aria-label": "header-tab navigation", children: tabs }));
}
exports.default = HeaderTabs;
