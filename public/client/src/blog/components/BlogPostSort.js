"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostsSort;
const jsx_runtime_1 = require("react/jsx-runtime");
// material
const material_1 = require("@mui/material");
const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' }
];
function BlogPostsSort(props) {
    const { options, onSort, } = props;
    console.log(Array.isArray(options));
    return ((0, jsx_runtime_1.jsx)(material_1.TextField, { select: true, size: "small", value: "latest", onChange: onSort, children: SORT_OPTIONS.map((option) => ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: option.value, children: option.label }, option.value))) }));
}
