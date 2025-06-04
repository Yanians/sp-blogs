"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Chart;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const recharts_1 = require("recharts");
const Title_1 = tslib_1.__importDefault(require("./Title"));
// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}
const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', undefined),
];
function Chart() {
    const theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: "Today" }), (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { data: data, margin: {
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }, children: [(0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "time", stroke: theme.palette.text.secondary, style: theme.typography.body2 }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { stroke: theme.palette.text.secondary, style: theme.typography.body2, children: (0, jsx_runtime_1.jsx)(recharts_1.Label, { angle: 270, position: "left", style: {
                                    textAnchor: 'middle',
                                    fill: theme.palette.text.primary,
                                    ...theme.typography.body1,
                                }, children: "Sales ($)" }) }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { isAnimationActive: false, type: "monotone", dataKey: "amount", stroke: theme.palette.primary.main, dot: false })] }) })] }));
}
