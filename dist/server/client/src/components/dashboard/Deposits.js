"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Deposits;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const Link_1 = tslib_1.__importDefault(require("@mui/material/Link"));
const Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
const Title_1 = tslib_1.__importDefault(require("./Title"));
function preventDefault(event) {
    event.preventDefault();
}
function Deposits() {
    return ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: "Recent Deposits" }), (0, jsx_runtime_1.jsx)(Typography_1.default, { component: "p", variant: "h4", children: "$3,024.00" }), (0, jsx_runtime_1.jsx)(Typography_1.default, { color: "text.secondary", sx: { flex: 1 }, children: "on 15 March, 2019" }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Link_1.default, { color: "primary", href: "#", onClick: preventDefault, children: "View balance" }) })] }));
}
