"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSxResult = void 0;
var muiBreakpoints_1 = require("./muiBreakpoints");
/**
 *
 *
 * @param getValue the value the result object (undefined will be remove from result)
 * @param options
 *  - breakpoints: list of Breakpoints to be iterate
 *  - initialValue: if provided, will be used to compare if the value from getValue should be added or not
 * @returns object that can be passed to <MuiComponent sx={...} />
 */
var createSxResult = function (getValue, options) {
    var _a = options !== null && options !== void 0 ? options : {}, _b = _a.breakpoints, breakpoints = _b === void 0 ? muiBreakpoints_1.BREAKPOINT_KEYS : _b, initialValue = _a.initialValue;
    var result = {};
    var lastValue = undefined;
    for (var _i = 0, breakpoints_1 = breakpoints; _i < breakpoints_1.length; _i++) {
        var bp = breakpoints_1[_i];
        var value = getValue(bp, lastValue);
        if (value !== undefined) {
            // only assign value if not undefined
            if (lastValue === undefined) {
                // 1st valid value
                result[bp] = value;
                lastValue = value;
                if (initialValue !== undefined && initialValue === value) {
                    // if same as initial, deleted from object
                    delete result[bp];
                }
            }
            else {
                if (lastValue !== value) {
                    // next valid value that is not the same as lastValue and so on
                    result[bp] = value;
                    lastValue = value;
                }
            }
        }
    }
    return result;
};
exports.createSxResult = createSxResult;
