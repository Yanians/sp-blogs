"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataDeletionStatus;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function DataDeletionStatus() {
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    const requestId = searchParams.get('request_id');
    return ((0, jsx_runtime_1.jsxs)("div", { style: { padding: '2rem' }, children: [(0, jsx_runtime_1.jsx)("h1", { children: "Facebook Data Deletion" }), (0, jsx_runtime_1.jsx)("p", { children: "Your request has been received." }), requestId && (0, jsx_runtime_1.jsxs)("p", { children: ["Confirmation Code: ", (0, jsx_runtime_1.jsx)("strong", { children: requestId })] })] }));
}
