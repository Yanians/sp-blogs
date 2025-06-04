"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surfacesCustomizations = void 0;
const styles_1 = require("@mui/material/styles");
const primitiveTheme_1 = require("./primitiveTheme");
/* eslint-disable import/prefer-default-export */
exports.surfacesCustomizations = {
    MuiAccordion: {
        defaultProps: {
            elevation: 0,
            disableGutters: true,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                padding: 4,
                overflow: 'clip',
                backgroundColor: (theme.vars || theme).palette.background.default,
                border: '1px solid',
                borderColor: (theme.vars || theme).palette.divider,
                ':before': {
                    backgroundColor: 'transparent',
                },
                '&:not(:last-of-type)': {
                    borderBottom: 'none',
                },
                '&:first-of-type': {
                    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
                    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
                },
                '&:last-of-type': {
                    borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
                    borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
                },
            }),
        },
    },
    MuiAccordionSummary: {
        styleOverrides: {
            root: ({ theme }) => ({
                border: 'none',
                borderRadius: 8,
                '&:hover': { backgroundColor: primitiveTheme_1.gray[50] },
                '&:focus-visible': { backgroundColor: 'transparent' },
                ...theme.applyStyles('dark', {
                    '&:hover': { backgroundColor: primitiveTheme_1.gray[800] },
                }),
            }),
        },
    },
    MuiAccordionDetails: {
        styleOverrides: {
            root: { mb: 20, border: 'none' },
        },
    },
    MuiPaper: {
        defaultProps: {
            elevation: 0,
        },
    },
    MuiCard: {
        styleOverrides: {
            root: ({ theme }) => {
                return {
                    padding: 16,
                    gap: 16,
                    transition: 'all 100ms ease',
                    backgroundColor: primitiveTheme_1.gray[50],
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    border: `1px solid ${(theme.vars || theme).palette.divider}`,
                    boxShadow: 'none',
                    ...theme.applyStyles('dark', {
                        backgroundColor: primitiveTheme_1.gray[800],
                    }),
                    variants: [
                        {
                            props: {
                                variant: 'outlined',
                            },
                            style: {
                                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                                boxShadow: 'none',
                                background: 'hsl(0, 0%, 100%)',
                                ...theme.applyStyles('dark', {
                                    background: (0, styles_1.alpha)(primitiveTheme_1.gray[900], 0.4),
                                }),
                            },
                        },
                    ],
                };
            },
        },
    },
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: 0,
                '&:last-child': { paddingBottom: 0 },
            },
        },
    },
    MuiCardHeader: {
        styleOverrides: {
            root: {
                padding: 0,
            },
        },
    },
    MuiCardActions: {
        styleOverrides: {
            root: {
                padding: 0,
            },
        },
    },
};
