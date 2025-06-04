"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page404;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
// material
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
// ----------------------------------------------------------------------
const RootStyle = (0, styles_1.styled)(material_1.Paper)(({ theme }) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3)
}));
// ----------------------------------------------------------------------
function Page404() {
    return ((0, jsx_runtime_1.jsx)(RootStyle, { title: "404 Page Not Found > go to search Field", children: (0, jsx_runtime_1.jsx)(material_1.Container, { className: "animate tada", children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { maxWidth: 480, margin: 'auto', textAlign: 'center' }, children: [(0, jsx_runtime_1.jsx)(material_1.Stack, { direction: 'row', children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h3", children: "Sorry, page not found!" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { sx: { color: 'text.secondary' }, children: "Sorry, we couldn\u2019t find the page you\u2019re looking for. Perhaps you\u2019ve mistyped the URL? Be sure to check your spelling." }), (0, jsx_runtime_1.jsx)("div", { className: "animated tada", children: (0, jsx_runtime_1.jsx)(material_1.Stack, { direction: 'row', children: (0, jsx_runtime_1.jsx)(material_1.Box, { component: "img", src: "/illustration_404.svg", sx: { height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }, sizes: 'small' }) }) }), (0, jsx_runtime_1.jsx)(material_1.Button, { to: "/", size: "large", variant: "contained", component: react_router_dom_1.Link, children: "Go to Home" })] }) }) }));
}
