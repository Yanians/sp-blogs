"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapWidthToScreen = void 0;
const muiBreakpoints_1 = require("./muiBreakpoints");
const mapWidthToScreen = (width, breakpoints) => {
    if (!width)
        return undefined;
    let screen = "";
    let found = false;
    const newKeys = [...muiBreakpoints_1.BREAKPOINT_KEYS];
    newKeys.reverse().forEach((breakpoint) => {
        if (width >= breakpoints.values[breakpoint] && !found) {
            screen = breakpoint;
            found = true;
        }
    });
    return screen;
};
exports.mapWidthToScreen = mapWidthToScreen;
