"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchNotFound;
const jsx_runtime_1 = require("react/jsx-runtime");
// material
const material_1 = require("@mui/material");
;
function SearchNotFound(props) {
    const { searchQuery, ...other } = props;
    console.log(searchQuery);
    return ((0, jsx_runtime_1.jsxs)(material_1.Paper, { ...other, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { gutterBottom: true, align: "center", variant: "subtitle1", children: "Not found" }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "body2", align: "center", children: ["No results found for \u00A0", (0, jsx_runtime_1.jsxs)("strong", { children: ["\"", searchQuery, "\""] }), ". Try checking for typos or using complete words."] })] }));
}
