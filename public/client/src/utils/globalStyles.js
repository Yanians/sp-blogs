"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GlobalStyles;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
// ----------------------------------------------------------------------
function GlobalStyles() {
    const theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(material_1.GlobalStyles, { styles: {
            '*': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box'
            },
            html: {
                width: '100%',
                height: '100%',
                WebkitOverflowScrolling: 'touch'
            },
            body: {
                width: '100%',
                height: '100%'
            },
            '#root': {
                width: '100%',
                height: '100%',
            },
            input: {
                '&[type=number]': {
                    MozAppearance: 'textfield',
                    '&::-webkit-outer-spin-button': {
                        margin: 0,
                        WebkitAppearance: 'none'
                    },
                    '&::-webkit-inner-spin-button': {
                        margin: 0,
                        WebkitAppearance: 'none'
                    }
                }
            },
            textarea: {
                '&::-webkit-input-placeholder': {
                    color: theme.palette.text.disabled
                },
                '&::-moz-placeholder': {
                    opacity: 1,
                    color: theme.palette.text.disabled
                },
                '&:-ms-input-placeholder': {
                    color: theme.palette.text.disabled
                },
                '&::placeholder': {
                    color: theme.palette.text.disabled
                }
            },
            img: { display: 'block', maxWidth: '100%' },
            // Lazy Load Img
            '.blur-up': {
                WebkitFilter: 'blur(5px)',
                filter: 'blur(5px)',
                transition: 'filter 400ms, -webkit-filter 400ms'
            },
            '.blur-up.lazyloaded ': {
                WebkitFilter: 'blur(0)',
                filter: 'blur(0)'
            }
        } }));
}
