"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapWidthToScreen = void 0;
var tslib_1 = require("tslib");
var muiBreakpoints_1 = require("./muiBreakpoints");
var mapWidthToScreen = function (width, breakpoints) {
    if (!width)
        return undefined;
    var screen = "";
    var found = false;
    var newKeys = tslib_1.__spreadArray([], muiBreakpoints_1.BREAKPOINT_KEYS, true);
    newKeys.reverse().forEach(function (breakpoint) {
        if (width >= breakpoints.values[breakpoint] && !found) {
            screen = breakpoint;
            found = true;
        }
    });
    return screen;
};
exports.mapWidthToScreen = mapWidthToScreen;
