"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
function Button(theme) {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        boxShadow: 'none'
                    }
                },
                sizeLarge: {
                    height: 48
                },
                containedInherit: {
                    color: theme.palette.grey[800],
                    // boxShadow: theme.customShadows.z8,
                    '&:hover': {
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                containedPrimary: {
                // boxShadow: theme.customShadows.primary
                },
                containedSecondary: {
                // boxShadow: theme.customShadows.secondary
                },
                outlinedInherit: {
                    border: `1px solid ${theme.palette.grey[50032]}`,
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                textInherit: {
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                }
            }
        }
    };
}
