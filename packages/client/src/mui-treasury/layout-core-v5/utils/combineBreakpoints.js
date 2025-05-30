"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineBreakpoints = exports.sortBreakpoints = void 0;
var muiBreakpoints_1 = require("./muiBreakpoints");
var sortBreakpoints = function (breakpoints) {
    return breakpoints.sort(function (a, b) { return muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(a) - muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(b); });
};
exports.sortBreakpoints = sortBreakpoints;
var combineBreakpoints = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = [];
    args.forEach(function (item) {
        var breakpoints = Array.isArray(item)
            ? item
            : Object.keys(item);
        breakpoints.forEach(function (k) {
            if (!result.includes(k)) {
                result.push(k);
            }
        });
    });
    return (0, exports.sortBreakpoints)(result);
};
exports.combineBreakpoints = combineBreakpoints;
