"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
// material
const material_1 = require("@mui/material");
// components
const react_router_dom_1 = require("react-router-dom");
const BlogCard_1 = tslib_1.__importDefault(require("./BlogCard"));
const Icon_1 = tslib_1.__importDefault(require("@mui/material/Icon"));
const Share_1 = tslib_1.__importDefault(require("@mui/icons-material/Share"));
;
function BlogCards(props) {
    const { posts } = props;
    return ((0, jsx_runtime_1.jsxs)(material_1.Container, { children: [(0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", mb: 5, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h4", gutterBottom: true, children: "Blog" }), (0, jsx_runtime_1.jsx)(material_1.ButtonGroup, { children: (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", component: react_router_dom_1.Link, to: "#", startIcon: (0, jsx_runtime_1.jsx)(Icon_1.default, { children: (0, jsx_runtime_1.jsx)(Share_1.default, {}) }), children: "New Post" }) })] }), (0, jsx_runtime_1.jsx)(material_1.Stack, { mb: 5, direction: "row", alignItems: "center", justifyContent: "space-between" }), (0, jsx_runtime_1.jsx)(material_1.Grid, { container: true, spacing: 3, children: posts?.map((item, index) => {
                    return (0, jsx_runtime_1.jsx)(BlogCard_1.default, { data: item, index: index }, index);
                }) })] }));
}
exports.default = BlogCards;
