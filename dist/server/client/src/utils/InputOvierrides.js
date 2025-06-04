"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputsCustomizations = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const OutlinedInput_1 = require("@mui/material/OutlinedInput");
const SvgIcon_1 = require("@mui/material/SvgIcon");
const ToggleButtonGroup_1 = require("@mui/material/ToggleButtonGroup");
const ToggleButton_1 = require("@mui/material/ToggleButton");
const CheckBoxOutlineBlankRounded_1 = tslib_1.__importDefault(require("@mui/icons-material/CheckBoxOutlineBlankRounded"));
const CheckRounded_1 = tslib_1.__importDefault(require("@mui/icons-material/CheckRounded"));
const RemoveRounded_1 = tslib_1.__importDefault(require("@mui/icons-material/RemoveRounded"));
const primitiveTheme_1 = require("./primitiveTheme");
/* eslint-disable import/prefer-default-export */
exports.inputsCustomizations = {
    MuiButtonBase: {
        defaultProps: {
            disableTouchRipple: true,
            disableRipple: true,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                boxSizing: 'border-box',
                transition: 'all 100ms ease-in',
                '&:focus-visible': {
                    outline: `3px solid ${(0, styles_1.alpha)(theme.palette.primary.main, 0.5)}`,
                    outlineOffset: '2px',
                },
            }),
        },
    },
    MuiButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                boxShadow: 'none',
                borderRadius: (theme.vars || theme).shape.borderRadius,
                textTransform: 'none',
                variants: [
                    {
                        props: {
                            size: 'small',
                        },
                        style: {
                            height: '2.25rem',
                            padding: '8px 12px',
                        },
                    },
                    {
                        props: {
                            size: 'medium',
                        },
                        style: {
                            height: '2.5rem', // 40px
                        },
                    },
                    {
                        props: {
                            color: 'primary',
                            variant: 'contained',
                        },
                        style: {
                            color: 'white',
                            backgroundColor: primitiveTheme_1.gray[900],
                            backgroundImage: `linear-gradient(to bottom, ${primitiveTheme_1.gray[700]}, ${primitiveTheme_1.gray[800]})`,
                            boxShadow: `inset 0 1px 0 ${primitiveTheme_1.gray[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`,
                            border: `1px solid ${primitiveTheme_1.gray[700]}`,
                            '&:hover': {
                                backgroundImage: 'none',
                                backgroundColor: primitiveTheme_1.gray[700],
                                boxShadow: 'none',
                            },
                            '&:active': {
                                backgroundColor: primitiveTheme_1.gray[800],
                            },
                            ...theme.applyStyles('dark', {
                                color: 'black',
                                backgroundColor: primitiveTheme_1.gray[50],
                                backgroundImage: `linear-gradient(to bottom, ${primitiveTheme_1.gray[100]}, ${primitiveTheme_1.gray[50]})`,
                                boxShadow: 'inset 0 -1px 0  hsl(220, 30%, 80%)',
                                border: `1px solid ${primitiveTheme_1.gray[50]}`,
                                '&:hover': {
                                    backgroundImage: 'none',
                                    backgroundColor: primitiveTheme_1.gray[300],
                                    boxShadow: 'none',
                                },
                                '&:active': {
                                    backgroundColor: primitiveTheme_1.gray[400],
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'secondary',
                            variant: 'contained',
                        },
                        style: {
                            color: 'white',
                            backgroundColor: primitiveTheme_1.brand[300],
                            backgroundImage: `linear-gradient(to bottom, ${(0, styles_1.alpha)(primitiveTheme_1.brand[400], 0.8)}, ${primitiveTheme_1.brand[500]})`,
                            boxShadow: `inset 0 2px 0 ${(0, styles_1.alpha)(primitiveTheme_1.brand[200], 0.2)}, inset 0 -2px 0 ${(0, styles_1.alpha)(primitiveTheme_1.brand[700], 0.4)}`,
                            border: `1px solid ${primitiveTheme_1.brand[500]}`,
                            '&:hover': {
                                backgroundColor: primitiveTheme_1.brand[700],
                                boxShadow: 'none',
                            },
                            '&:active': {
                                backgroundColor: primitiveTheme_1.brand[700],
                                backgroundImage: 'none',
                            },
                        },
                    },
                    {
                        props: {
                            variant: 'outlined',
                        },
                        style: {
                            color: (theme.vars || theme).palette.text.primary,
                            border: '1px solid',
                            borderColor: primitiveTheme_1.gray[200],
                            backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.gray[50], 0.3),
                            '&:hover': {
                                backgroundColor: primitiveTheme_1.gray[100],
                                borderColor: primitiveTheme_1.gray[300],
                            },
                            '&:active': {
                                backgroundColor: primitiveTheme_1.gray[200],
                            },
                            ...theme.applyStyles('dark', {
                                backgroundColor: primitiveTheme_1.gray[800],
                                borderColor: primitiveTheme_1.gray[700],
                                '&:hover': {
                                    backgroundColor: primitiveTheme_1.gray[900],
                                    borderColor: primitiveTheme_1.gray[600],
                                },
                                '&:active': {
                                    backgroundColor: primitiveTheme_1.gray[900],
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'secondary',
                            variant: 'outlined',
                        },
                        style: {
                            color: primitiveTheme_1.brand[700],
                            border: '1px solid',
                            borderColor: primitiveTheme_1.brand[200],
                            backgroundColor: primitiveTheme_1.brand[50],
                            '&:hover': {
                                backgroundColor: primitiveTheme_1.brand[100],
                                borderColor: primitiveTheme_1.brand[400],
                            },
                            '&:active': {
                                backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.brand[200], 0.7),
                            },
                            ...theme.applyStyles('dark', {
                                color: primitiveTheme_1.brand[50],
                                border: '1px solid',
                                borderColor: primitiveTheme_1.brand[900],
                                backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.brand[900], 0.3),
                                '&:hover': {
                                    borderColor: primitiveTheme_1.brand[700],
                                    backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.brand[900], 0.6),
                                },
                                '&:active': {
                                    backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.brand[900], 0.5),
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            variant: 'text',
                        },
                        style: {
                            color: primitiveTheme_1.gray[600],
                            '&:hover': {
                                backgroundColor: primitiveTheme_1.gray[100],
                            },
                            '&:active': {
                                backgroundColor: primitiveTheme_1.gray[200],
                            },
                            ...theme.applyStyles('dark', {
                                color: primitiveTheme_1.gray[50],
                                '&:hover': {
                                    backgroundColor: primitiveTheme_1.gray[700],
                                },
                                '&:active': {
                                    backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.gray[700], 0.7),
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'secondary',
                            variant: 'text',
                        },
                        style: {
                            color: primitiveTheme_1.brand[700],
                            '&:hover': {
                                backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.brand[100], 0.5),
                            },
                            '&:active': {
                                backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.brand[200], 0.7),
                            },
                            ...theme.applyStyles('dark', {
                                color: primitiveTheme_1.brand[100],
                                '&:hover': {
                                    backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.brand[900], 0.5),
                                },
                                '&:active': {
                                    backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.brand[900], 0.3),
                                },
                            }),
                        },
                    },
                ],
            }),
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                boxShadow: 'none',
                borderRadius: (theme.vars || theme).shape.borderRadius,
                textTransform: 'none',
                fontWeight: theme.typography.fontWeightMedium,
                letterSpacing: 0,
                color: (theme.vars || theme).palette.text.primary,
                border: '1px solid ',
                borderColor: primitiveTheme_1.gray[200],
                backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.gray[50], 0.3),
                '&:hover': {
                    backgroundColor: primitiveTheme_1.gray[100],
                    borderColor: primitiveTheme_1.gray[300],
                },
                '&:active': {
                    backgroundColor: primitiveTheme_1.gray[200],
                },
                ...theme.applyStyles('dark', {
                    backgroundColor: primitiveTheme_1.gray[800],
                    borderColor: primitiveTheme_1.gray[700],
                    '&:hover': {
                        backgroundColor: primitiveTheme_1.gray[900],
                        borderColor: primitiveTheme_1.gray[600],
                    },
                    '&:active': {
                        backgroundColor: primitiveTheme_1.gray[900],
                    },
                }),
                variants: [
                    {
                        props: {
                            size: 'small',
                        },
                        style: {
                            width: '2.25rem',
                            height: '2.25rem',
                            padding: '0.25rem',
                            [`& .${SvgIcon_1.svgIconClasses.root}`]: { fontSize: '1rem' },
                        },
                    },
                    {
                        props: {
                            size: 'medium',
                        },
                        style: {
                            width: '2.5rem',
                            height: '2.5rem',
                        },
                    },
                ],
            }),
        },
    },
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: '10px',
                boxShadow: `0 4px 16px ${(0, styles_1.alpha)(primitiveTheme_1.gray[400], 0.2)}`,
                [`& .${ToggleButtonGroup_1.toggleButtonGroupClasses.selected}`]: {
                    color: primitiveTheme_1.brand[500],
                },
                ...theme.applyStyles('dark', {
                    [`& .${ToggleButtonGroup_1.toggleButtonGroupClasses.selected}`]: {
                        color: '#fff',
                    },
                    boxShadow: `0 4px 16px ${(0, styles_1.alpha)(primitiveTheme_1.brand[700], 0.5)}`,
                }),
            }),
        },
    },
    MuiToggleButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: '12px 16px',
                textTransform: 'none',
                borderRadius: '10px',
                fontWeight: 500,
                ...theme.applyStyles('dark', {
                    color: primitiveTheme_1.gray[400],
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                    [`&.${ToggleButton_1.toggleButtonClasses.selected}`]: {
                        color: primitiveTheme_1.brand[300],
                    },
                }),
            }),
        },
    },
    MuiCheckbox: {
        defaultProps: {
            disableRipple: true,
            icon: ((0, jsx_runtime_1.jsx)(CheckBoxOutlineBlankRounded_1.default, { sx: { color: 'hsla(210, 0%, 0%, 0.0)' } })),
            checkedIcon: (0, jsx_runtime_1.jsx)(CheckRounded_1.default, { sx: { height: 14, width: 14 } }),
            indeterminateIcon: (0, jsx_runtime_1.jsx)(RemoveRounded_1.default, { sx: { height: 14, width: 14 } }),
        },
        styleOverrides: {
            root: ({ theme }) => ({
                margin: 10,
                height: 16,
                width: 16,
                borderRadius: 5,
                border: '1px solid ',
                borderColor: (0, styles_1.alpha)(primitiveTheme_1.gray[300], 0.8),
                boxShadow: '0 0 0 1.5px hsla(210, 0%, 0%, 0.04) inset',
                backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.gray[100], 0.4),
                transition: 'border-color, background-color, 120ms ease-in',
                '&:hover': {
                    borderColor: primitiveTheme_1.brand[300],
                },
                '&.Mui-focusVisible': {
                    outline: `3px solid ${(0, styles_1.alpha)(primitiveTheme_1.brand[500], 0.5)}`,
                    outlineOffset: '2px',
                    borderColor: primitiveTheme_1.brand[400],
                },
                '&.Mui-checked': {
                    color: 'white',
                    backgroundColor: primitiveTheme_1.brand[500],
                    borderColor: primitiveTheme_1.brand[500],
                    boxShadow: `none`,
                    '&:hover': {
                        backgroundColor: primitiveTheme_1.brand[600],
                    },
                },
                ...theme.applyStyles('dark', {
                    borderColor: (0, styles_1.alpha)(primitiveTheme_1.gray[700], 0.8),
                    boxShadow: '0 0 0 1.5px hsl(210, 0%, 0%) inset',
                    backgroundColor: (0, styles_1.alpha)(primitiveTheme_1.gray[900], 0.8),
                    '&:hover': {
                        borderColor: primitiveTheme_1.brand[300],
                    },
                    '&.Mui-focusVisible': {
                        borderColor: primitiveTheme_1.brand[400],
                        outline: `3px solid ${(0, styles_1.alpha)(primitiveTheme_1.brand[500], 0.5)}`,
                        outlineOffset: '2px',
                    },
                }),
            }),
        },
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
                border: 'none',
            },
            input: {
                '&::placeholder': {
                    opacity: 0.7,
                    color: primitiveTheme_1.gray[500],
                },
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                padding: 0,
            },
            root: ({ theme }) => ({
                padding: '8px 12px',
                color: (theme.vars || theme).palette.text.primary,
                borderRadius: (theme.vars || theme).shape.borderRadius,
                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                backgroundColor: (theme.vars || theme).palette.background.default,
                transition: 'border 120ms ease-in',
                '&:hover': {
                    borderColor: primitiveTheme_1.gray[400],
                },
                [`&.${OutlinedInput_1.outlinedInputClasses.focused}`]: {
                    outline: `3px solid ${(0, styles_1.alpha)(primitiveTheme_1.brand[500], 0.5)}`,
                    borderColor: primitiveTheme_1.brand[400],
                },
                ...theme.applyStyles('dark', {
                    '&:hover': {
                        borderColor: primitiveTheme_1.gray[500],
                    },
                }),
                variants: [
                    {
                        props: {
                            size: 'small',
                        },
                        style: {
                            height: '2.25rem',
                        },
                    },
                    {
                        props: {
                            size: 'medium',
                        },
                        style: {
                            height: '2.5rem',
                        },
                    },
                ],
            }),
            notchedOutline: {
                border: 'none',
            },
        },
    },
    MuiInputAdornment: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: (theme.vars || theme).palette.grey[500],
                ...theme.applyStyles('dark', {
                    color: (theme.vars || theme).palette.grey[400],
                }),
            }),
        },
    },
    MuiFormLabel: {
        styleOverrides: {
            root: ({ theme }) => ({
                typography: theme.typography.caption,
                marginBottom: 8,
            }),
        },
    },
};
