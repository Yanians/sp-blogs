"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
function Card(theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    // boxShadow: theme.vars.customShadows.z16,
                    borderRadius: theme.shape.borderRadiusMd,
                    position: 'relative',
                    zIndex: 0 // Fix Safari overflow: hidden with border radius
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: { variant: 'h6' },
                subheaderTypographyProps: { variant: 'body2' }
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        }
    };
}
