"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoaderCss;
const jsx_runtime_1 = require("react/jsx-runtime");
function LoaderCss() {
    return ((0, jsx_runtime_1.jsxs)("div", { id: "loader-wrapper", children: [(0, jsx_runtime_1.jsx)("div", { id: "loader" }), (0, jsx_runtime_1.jsx)("div", { className: "loader-section section-left" }), (0, jsx_runtime_1.jsx)("div", { className: "loader-section section-right" })] }));
}
