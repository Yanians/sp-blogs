"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Autocomplete;
function Autocomplete(theme) {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                // boxShadow: theme.customShadows.z20
                }
            }
        }
    };
}
