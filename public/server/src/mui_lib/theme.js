"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
const colors_1 = require("@mui/material/colors");
// Create a theme instance.
const theme = (0, styles_1.createTheme)({
    cssVariables: true,
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: colors_1.red.A400,
        },
    },
});
exports.default = theme;
