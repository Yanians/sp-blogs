"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Orders;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const Link_1 = tslib_1.__importDefault(require("@mui/material/Link"));
const Table_1 = tslib_1.__importDefault(require("@mui/material/Table"));
const TableBody_1 = tslib_1.__importDefault(require("@mui/material/TableBody"));
const TableCell_1 = tslib_1.__importDefault(require("@mui/material/TableCell"));
const TableHead_1 = tslib_1.__importDefault(require("@mui/material/TableHead"));
const TableRow_1 = tslib_1.__importDefault(require("@mui/material/TableRow"));
const Title_1 = tslib_1.__importDefault(require("./Title"));
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}
const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];
function preventDefault(event) {
    event.preventDefault();
}
function Orders() {
    return ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: "Recent Orders" }), (0, jsx_runtime_1.jsxs)(Table_1.default, { size: "small", children: [(0, jsx_runtime_1.jsx)(TableHead_1.default, { children: (0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Date" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Name" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Ship To" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Payment Method" }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: "Sale Amount" })] }) }), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: rows.map((row) => ((0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { children: row.date }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: row.name }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: row.shipTo }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: row.paymentMethod }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { align: "right", children: `$${row.amount}` })] }, row.id))) })] }), (0, jsx_runtime_1.jsx)(Link_1.default, { color: "primary", href: "#", onClick: preventDefault, sx: { mt: 3 }, children: "See more orders" })] }));
}
