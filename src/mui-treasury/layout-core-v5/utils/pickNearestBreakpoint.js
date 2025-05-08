"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickNearestBreakpoint = void 0;
var muiBreakpoints_1 = require("./muiBreakpoints");
var pickNearestBreakpoint = function (value, currentBreakpoint) {
    if (!value || !currentBreakpoint)
        return undefined;
    var breakpointIndex = muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(currentBreakpoint);
    if (breakpointIndex === -1) {
        throw new Error("Breakpoint: \"".concat(currentBreakpoint, "\" does not exist in [").concat(muiBreakpoints_1.BREAKPOINT_KEYS.join(","), "]"));
    }
    // [breakpoint, ..., 'xs']
    var possibleBreakpoints = muiBreakpoints_1.BREAKPOINT_KEYS.slice(0, muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(currentBreakpoint) + 1).reverse();
    var result = value[currentBreakpoint];
    if (result)
        return result;
    // return the first valid value
    for (var _i = 0, possibleBreakpoints_1 = possibleBreakpoints; _i < possibleBreakpoints_1.length; _i++) {
        var bp = possibleBreakpoints_1[_i];
        if (result !== undefined)
            return result;
        result = value[bp];
    }
    return result;
};
exports.pickNearestBreakpoint = pickNearestBreakpoint;
