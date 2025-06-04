"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineBreakpoints = exports.sortBreakpoints = void 0;
const muiBreakpoints_1 = require("./muiBreakpoints");
const sortBreakpoints = (breakpoints) => breakpoints.sort((a, b) => muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(a) - muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(b));
exports.sortBreakpoints = sortBreakpoints;
const combineBreakpoints = (...args) => {
    let result = [];
    args.forEach((item) => {
        const breakpoints = Array.isArray(item)
            ? item
            : Object.keys(item);
        breakpoints.forEach((k) => {
            if (!result.includes(k)) {
                result.push(k);
            }
        });
    });
    return (0, exports.sortBreakpoints)(result);
};
exports.combineBreakpoints = combineBreakpoints;
