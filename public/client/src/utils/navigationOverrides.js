"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigationCustomizations = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const ButtonBase_1 = require("@mui/material/ButtonBase");
const Divider_1 = require("@mui/material/Divider");
const MenuItem_1 = require("@mui/material/MenuItem");
const Select_1 = require("@mui/material/Select");
const Tab_1 = require("@mui/material/Tab");
const UnfoldMoreRounded_1 = tslib_1.__importDefault(require("@mui/icons-material/UnfoldMoreRounded"));
const primitiveTheme_1 = require("./primitiveTheme");
/* eslint-disable import/prefer-default-export */
exports.navigationCustomizations = {
    MuiMenuItem: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: (theme.vars || theme).shape.borderRadius,
                padding: '6px 8px',
                [`&.${MenuItem_1.menuItemClasses.focusVisible}`]: {
                    backgroundColor: 'transparent',
                },
                [`&.${MenuItem_1.menuItemClasses.selected}`]: {
                    [`&.${MenuItem_1.menuItemClasses.focusVisible}`]: {
                        backgroundColor: (0, styles_1.alpha)(theme.palette.action.selected, 0.3),
                    },
                },
            }),
        },
    },
    MuiMenu: {
        styleOverrides: {
            list: {
                gap: '0px',
                [`&.${Divider_1.dividerClasses.root}`]: {
                    margin: '0 -8px',
                },
            },
            paper: ({ theme }) => ({
                marginTop: '4px',
                borderRadius: (theme.vars || theme).shape.borderRadius,
                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                backgroundImage: 'none',
                background: 'hsl(0, 0%, 100%)',
                boxShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
                [`& .${ButtonBase_1.buttonBaseClasses.root}`]: {
                    '&.Mui-selected': {
                        backgroundColor: (0, styles_1.alpha)(theme.palette.action.selected, 0.3),
                    },
                },
                ...theme.applyStyles('dark', {
                    background: primitiveTheme_1.gray[900],
                    boxShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
                }),
            }),
        },
    },
    MuiSelect: {
        defaultProps: {
            IconComponent: React.forwardRef((props, ref) => (
            //@ts-ignore
            (0, jsx_runtime_1.jsx)(UnfoldMoreRounded_1.default, { fontSize: "small", ...props, ref: ref }))),
        },
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: (theme.vars || theme).shape.borderRadius,
                border: '1px solid',
                borderColor: primitiveTheme_1.gray[200],
                backgroundColor: (theme.vars || theme).palette.background.paper,
                boxShadow: `inset 0 1px 0 1px hsla(220, 0%, 100%, 0.6), inset 0 -1px 0 1px hsla(220, 35%, 90%, 0.5)`,
                '&:hover': {
                    borderColor: primitiveTheme_1.gray[300],
                    backgroundColor: (theme.vars || theme).palette.background.paper,
                    boxShadow: 'none',
                },
                [`&.${Select_1.selectClasses.focused}`]: {
                    outlineOffset: 0,
                    borderColor: primitiveTheme_1.gray[400],
                },
                '&:before, &:after': {
                    display: 'none',
                },
                ...theme.applyStyles('dark', {
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    borderColor: primitiveTheme_1.gray[700],
                    backgroundColor: (theme.vars || theme).palette.background.paper,
                    boxShadow: `inset 0 1px 0 1px ${(0, styles_1.alpha)(primitiveTheme_1.gray[700], 0.15)}, inset 0 -1px 0 1px hsla(220, 0%, 0%, 0.7)`,
                    '&:hover': {
                        borderColor: (0, styles_1.alpha)(primitiveTheme_1.gray[700], 0.7),
                        backgroundColor: (theme.vars || theme).palette.background.paper,
                        boxShadow: 'none',
                    },
                    [`&.${Select_1.selectClasses.focused}`]: {
                        outlineOffset: 0,
                        borderColor: primitiveTheme_1.gray[900],
                    },
                    '&:before, &:after': {
                        display: 'none',
                    },
                }),
            }),
            select: ({ theme }) => ({
                display: 'flex',
                alignItems: 'center',
                ...theme.applyStyles('dark', {
                    display: 'flex',
                    alignItems: 'center',
                    '&:focus-visible': {
                        backgroundColor: primitiveTheme_1.gray[900],
                    },
                }),
            }),
        },
    },
    MuiLink: {
        defaultProps: {
            underline: 'none',
        },
        styleOverrides: {
            root: ({ theme }) => ({
                color: (theme.vars || theme).palette.text.primary,
                fontWeight: 500,
                position: 'relative',
                textDecoration: 'none',
                width: 'fit-content',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '1px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: (theme.vars || theme).palette.text.secondary,
                    opacity: 0.3,
                    transition: 'width 0.3s ease, opacity 0.3s ease',
                },
                '&:hover::before': {
                    width: 0,
                },
                '&:focus-visible': {
                    outline: `3px solid ${(0, styles_1.alpha)(primitiveTheme_1.brand[500], 0.5)}`,
                    outlineOffset: '4px',
                    borderRadius: '2px',
                },
            }),
        },
    },
    MuiDrawer: {
        styleOverrides: {
            paper: ({ theme }) => ({
                backgroundColor: (theme.vars || theme).palette.background.default,
            }),
        },
    },
    MuiPaginationItem: {
        styleOverrides: {
            root: ({ theme }) => ({
                '&.Mui-selected': {
                    color: 'white',
                    backgroundColor: (theme.vars || theme).palette.grey[900],
                },
                ...theme.applyStyles('dark', {
                    '&.Mui-selected': {
                        color: 'black',
                        backgroundColor: (theme.vars || theme).palette.grey[50],
                    },
                }),
            }),
        },
    },
    MuiTabs: {
        styleOverrides: {
            root: { minHeight: 'fit-content' },
            indicator: ({ theme }) => ({
                backgroundColor: (theme.vars || theme).palette.grey[800],
                ...theme.applyStyles('dark', {
                    backgroundColor: (theme.vars || theme).palette.grey[200],
                }),
            }),
        },
    },
    MuiTab: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: '6px 8px',
                marginBottom: '8px',
                textTransform: 'none',
                minWidth: 'fit-content',
                minHeight: 'fit-content',
                color: (theme.vars || theme).palette.text.secondary,
                borderRadius: (theme.vars || theme).shape.borderRadius,
                border: '1px solid',
                borderColor: 'transparent',
                ':hover': {
                    color: (theme.vars || theme).palette.text.primary,
                    backgroundColor: primitiveTheme_1.gray[100],
                    borderColor: primitiveTheme_1.gray[200],
                },
                [`&.${Tab_1.tabClasses.selected}`]: {
                    color: primitiveTheme_1.gray[900],
                },
                ...theme.applyStyles('dark', {
                    ':hover': {
                        color: (theme.vars || theme).palette.text.primary,
                        backgroundColor: primitiveTheme_1.gray[800],
                        borderColor: primitiveTheme_1.gray[700],
                    },
                    [`&.${Tab_1.tabClasses.selected}`]: {
                        color: '#fff',
                    },
                }),
            }),
        },
    },
    MuiStepConnector: {
        styleOverrides: {
            line: ({ theme }) => ({
                borderTop: '1px solid',
                borderColor: (theme.vars || theme).palette.divider,
                flex: 1,
                borderRadius: '99px',
            }),
        },
    },
    MuiStepIcon: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: 'transparent',
                border: `1px solid ${primitiveTheme_1.gray[400]}`,
                width: 12,
                height: 12,
                borderRadius: '50%',
                '& text': {
                    display: 'none',
                },
                '&.Mui-active': {
                    border: 'none',
                    color: (theme.vars || theme).palette.primary.main,
                },
                '&.Mui-completed': {
                    border: 'none',
                    color: (theme.vars || theme).palette.success.main,
                },
                ...theme.applyStyles('dark', {
                    border: `1px solid ${primitiveTheme_1.gray[700]}`,
                    '&.Mui-active': {
                        border: 'none',
                        color: (theme.vars || theme).palette.primary.light,
                    },
                    '&.Mui-completed': {
                        border: 'none',
                        color: (theme.vars || theme).palette.success.light,
                    },
                }),
                variants: [
                    {
                        props: { completed: true },
                        style: {
                            width: 12,
                            height: 12,
                        },
                    },
                ],
            }),
        },
    },
    MuiStepLabel: {
        styleOverrides: {
            label: ({ theme }) => ({
                '&.Mui-completed': {
                    opacity: 0.6,
                    ...theme.applyStyles('dark', { opacity: 0.5 }),
                },
            }),
        },
    },
};
