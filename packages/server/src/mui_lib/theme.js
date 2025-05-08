"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@mui/material/styles");
var colors_1 = require("@mui/material/colors");
// Create a theme instance.
var theme = (0, styles_1.createTheme)({
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
