"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickNearestBreakpoint = void 0;
const muiBreakpoints_1 = require("./muiBreakpoints");
const pickNearestBreakpoint = (value, currentBreakpoint) => {
    if (!value || !currentBreakpoint)
        return undefined;
    const breakpointIndex = muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(currentBreakpoint);
    if (breakpointIndex === -1) {
        throw new Error(`Breakpoint: "${currentBreakpoint}" does not exist in [${muiBreakpoints_1.BREAKPOINT_KEYS.join(",")}]`);
    }
    // [breakpoint, ..., 'xs']
    const possibleBreakpoints = muiBreakpoints_1.BREAKPOINT_KEYS.slice(0, muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(currentBreakpoint) + 1).reverse();
    let result = value[currentBreakpoint];
    if (result)
        return result;
    // return the first valid value
    for (const bp of possibleBreakpoints) {
        if (result !== undefined)
            return result;
        result = value[bp];
    }
    return result;
};
exports.pickNearestBreakpoint = pickNearestBreakpoint;
