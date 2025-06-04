"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const ProgressBar = React.memo(function ProgressBar(props) {
    const { value } = props;
    const valueInPercent = value * 100;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
            lineHeight: 1,
            position: 'relative',
            p: 0.5,
            borderRadius: '3px',
            width: '100%',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.700' : 'grey.100'),
        }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { fontWeight: 'bold', color: 'text.primary', position: 'relative', zIndex: 1 }, children: `${valueInPercent.toLocaleString()} %` }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    borderRadius: '3px',
                    position: 'absolute',
                    height: '100%',
                    left: 0,
                    top: 0,
                    ...(valueInPercent < 30 && {
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'error.700' : 'error.200'),
                    }),
                    ...(valueInPercent >= 30 &&
                        valueInPercent <= 70 && {
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'warning.900' : 'warning.400'),
                    }),
                    ...(valueInPercent > 70 && {
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'success.800' : 'success.300'),
                    }),
                    width: `${valueInPercent}%`,
                } })] }));
});
exports.default = ProgressBar;
