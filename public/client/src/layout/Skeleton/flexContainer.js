"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const styles_2 = require("@mui/styles");
const styles = (theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${theme.palette.primaryDark[900]} 0%,rgb(0, 60, 0) 100%)`
            : `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #FFFFFF 100%)`,
        backgroundSize: 'auto 250px ',
        backgroundRepeat: 'no-repeat',
        '& *': {
            boxSizing: 'border-box',
        },
        '& .spacing-1': {
            padding: theme.spacing(1, 1, 0),
            gap: theme.spacing(1),
        },
        '& strong': {
            color: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[900],
        },
        '& pre': {
            fontSize: theme.typography.pxToRem(16),
        },
        '& summary': {
            padding: 8,
            fontSize: theme.typography.pxToRem(14),
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
        },
    }
});
function Flex(props) {
    const { classes, children, } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: classes.root, children: children }));
}
const defaultTheme = (0, styles_1.createTheme)();
exports.default = (0, styles_2.withStyles)(styles, { defaultTheme })(Flex);
