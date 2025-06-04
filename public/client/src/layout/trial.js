"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const styles_1 = require("@mui/material/styles");
function Container({ sum, logMessage, doSomething }) {
    const sums = sum(10, 24);
    const messages = logMessage('Hello world');
    const dosome = doSomething('nice!');
    return (0, jsx_runtime_1.jsx)("div", { children: "Hello Globe ?" });
}
function App() {
    const sum = (a, b) => {
        return a + b;
    };
    const logMessage = () => {
        console.log('Hello World');
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Container, { sum: sum, logMessage: logMessage, doSomething: logMessage }) }));
}
const RootStat = (0, styles_1.styled)('div', {
    name: 'MuiStat',
    slot: 'root',
})(({ theme, ownerState }) => ({
    display: 'flex',
    background: `${(0, styles_1.alpha)((theme.vars || theme).palette.grey[200], .85)}`,
    backgroundColor: `${theme.applyDarkStyles({
        background: theme.palette.warning.main,
    })}`,
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.primary[600],
    padding: theme.spacing(3, 4),
    fontWeight: 600,
    fontFamily: theme.typography.fontFamilyCode,
    ...(ownerState.variant === 'outlined' && {
        border: `${theme.palette.divider}`,
    })
}));
const ValueStat = (0, styles_1.styled)('div', {
    name: 'MuiStat',
    slot: 'root',
})(({ theme, ownerState }) => ({
    ...theme.typography.caption,
    fontFamily: theme.typography.fontFamilySystem,
    ...(ownerState.variant === 'outlined' && {
        border: theme.palette.divider,
    }),
}));
const UnitStat = (0, styles_1.styled)('div', {
    name: 'MuiStat',
    slot: 'root',
})(({ theme, ownerState }) => ({
    ...theme.typography.body2,
    fontFamily: theme.typography.fontFamilyCode,
    ...(ownerState.variant === 'outlined' && {
        borderColor: theme.palette.dividerChannel,
        fontFamily: theme.typography.fontFamilySystem,
    })
}));
const Stat = React.forwardRef(function stat(inProps, ref) {
    const props = (0, styles_1.useThemeProps)({ props: inProps, name: 'MuiStat' });
    const { value, unit, variant, ...other } = props;
    const ownerState = { ...props, variant, };
    return ((0, jsx_runtime_1.jsxs)(RootStat, { ref: ref, ownerState: ownerState, ...other, children: [(0, jsx_runtime_1.jsx)(ValueStat, { ownerState: ownerState, children: value }), (0, jsx_runtime_1.jsx)(UnitStat, { ownerState: ownerState, children: unit })] }));
});
