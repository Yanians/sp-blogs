"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataDisplayCustomizations = void 0;
const styles_1 = require("@mui/material/styles");
const SvgIcon_1 = require("@mui/material/SvgIcon");
const Typography_1 = require("@mui/material/Typography");
const ButtonBase_1 = require("@mui/material/ButtonBase");
const Chip_1 = require("@mui/material/Chip");
const IconButton_1 = require("@mui/material/IconButton");
const primitiveTheme_1 = require("./primitiveTheme");
/* eslint-disable import/prefer-default-export */
exports.dataDisplayCustomizations = {
    MuiList: {
        styleOverrides: {
            root: {
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
            },
        },
    },
    MuiListItem: {
        styleOverrides: {
            root: (theme) => ({
                [`& .${SvgIcon_1.svgIconClasses.root}`]: {
                    width: '1rem',
                    height: '1rem',
                    color: (theme.vars || theme).palette.text.secondary,
                },
                [`& .${Typography_1.typographyClasses.root}`]: {
                    fontWeight: 500,
                },
                [`& .${ButtonBase_1.buttonBaseClasses.root}`]: {
                    display: 'flex',
                    gap: 8,
                    padding: '2px 8px',
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    opacity: 0.7,
                    '&.Mui-selected': {
                        opacity: 1,
                        backgroundColor: (0, styles_1.alpha)(theme.palette.action.selected, 0.3),
                        [`& .${SvgIcon_1.svgIconClasses.root}`]: {
                            color: (theme.vars || theme).palette.text.primary,
                        },
                        '&:focus-visible': {
                            backgroundColor: (0, styles_1.alpha)(theme.palette.action.selected, 0.3),
                        },
                        '&:hover': {
                            backgroundColor: (0, styles_1.alpha)(theme.palette.action.selected, 0.5),
                        },
                    },
                    '&:focus-visible': {
                        backgroundColor: 'transparent',
                    },
                },
            }),
        },
    },
    MuiListItemText: {
        styleOverrides: {
            primary: ({ theme }) => ({
                fontSize: theme.typography.body2.fontSize,
                fontWeight: 500,
                lineHeight: theme.typography.body2.lineHeight,
            }),
            secondary: ({ theme }) => ({
                fontSize: theme.typography.caption.fontSize,
                lineHeight: theme.typography.caption.lineHeight,
            }),
        },
    },
    MuiListSubheader: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: 'transparent',
                padding: '4px 8px',
                fontSize: theme.typography.caption.fontSize,
                fontWeight: 500,
                lineHeight: theme.typography.caption.lineHeight,
            }),
        },
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: 0,
            },
        },
    },
    MuiChip: {
        defaultProps: {
            size: 'small',
        },
        styleOverrides: {
            root: ({ theme }) => ({
                border: '1px solid',
                borderRadius: '999px',
                [`& .${Chip_1.chipClasses.label}`]: {
                    fontWeight: 600,
                },
                variants: [
                    {
                        props: {
                            color: 'default',
                        },
                        style: {
                            borderColor: primitiveTheme_1.gray[200],
                            backgroundColor: primitiveTheme_1.gray[100],
                            [`& .${Chip_1.chipClasses.label}`]: {
                                color: primitiveTheme_1.gray[500],
                            },
                            [`& .${Chip_1.chipClasses.icon}`]: {
                                color: primitiveTheme_1.gray[500],
                            },
                            ...theme.applyStyles('dark', {
                                borderColor: primitiveTheme_1.gray[700],
                                backgroundColor: primitiveTheme_1.gray[800],
                                [`& .${Chip_1.chipClasses.label}`]: {
                                    color: primitiveTheme_1.gray[300],
                                },
                                [`& .${Chip_1.chipClasses.icon}`]: {
                                    color: primitiveTheme_1.gray[300],
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'success',
                        },
                        style: {
                            borderColor: primitiveTheme_1.green[200],
                            backgroundColor: primitiveTheme_1.green[50],
                            [`& .${Chip_1.chipClasses.label}`]: {
                                color: primitiveTheme_1.green[500],
                            },
                            [`& .${Chip_1.chipClasses.icon}`]: {
                                color: primitiveTheme_1.green[500],
                            },
                            ...theme.applyStyles('dark', {
                                borderColor: primitiveTheme_1.green[800],
                                backgroundColor: primitiveTheme_1.green[900],
                                [`& .${Chip_1.chipClasses.label}`]: {
                                    color: primitiveTheme_1.green[300],
                                },
                                [`& .${Chip_1.chipClasses.icon}`]: {
                                    color: primitiveTheme_1.green[300],
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'error',
                        },
                        style: {
                            borderColor: primitiveTheme_1.red[100],
                            backgroundColor: primitiveTheme_1.red[50],
                            [`& .${Chip_1.chipClasses.label}`]: {
                                color: primitiveTheme_1.red[500],
                            },
                            [`& .${Chip_1.chipClasses.icon}`]: {
                                color: primitiveTheme_1.red[500],
                            },
                            ...theme.applyStyles('dark', {
                                borderColor: primitiveTheme_1.red[800],
                                backgroundColor: primitiveTheme_1.red[900],
                                [`& .${Chip_1.chipClasses.label}`]: {
                                    color: primitiveTheme_1.red[200],
                                },
                                [`& .${Chip_1.chipClasses.icon}`]: {
                                    color: primitiveTheme_1.red[300],
                                },
                            }),
                        },
                    },
                    {
                        props: { size: 'small' },
                        style: {
                            maxHeight: 20,
                            [`& .${Chip_1.chipClasses.label}`]: {
                                fontSize: theme.typography.caption.fontSize,
                            },
                            [`& .${SvgIcon_1.svgIconClasses.root}`]: {
                                fontSize: theme.typography.caption.fontSize,
                            },
                        },
                    },
                    {
                        props: { size: 'medium' },
                        style: {
                            [`& .${Chip_1.chipClasses.label}`]: {
                                fontSize: theme.typography.caption.fontSize,
                            },
                        },
                    },
                ],
            }),
        },
    },
    MuiTablePagination: {
        styleOverrides: {
            actions: {
                display: 'flex',
                gap: 8,
                marginRight: 6,
                [`& .${IconButton_1.iconButtonClasses.root}`]: {
                    minWidth: 0,
                    width: 36,
                    height: 36,
                },
            },
        },
    },
    MuiIcon: {
        defaultProps: {
            fontSize: 'small',
        },
        styleOverrides: {
            root: {
                variants: [
                    {
                        props: {
                            fontSize: 'small',
                        },
                        style: {
                            fontSize: '1rem',
                        },
                    },
                ],
            },
        },
    },
};
