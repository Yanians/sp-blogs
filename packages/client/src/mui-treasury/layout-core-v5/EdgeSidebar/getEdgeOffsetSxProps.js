"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEdgeOffsetSxProps = void 0;
var tslib_1 = require("tslib");
var combineBreakpoints_1 = require("../utils/combineBreakpoints");
var pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
var getEdgeOffsetSxProps = function (edgeSidebar, sxClippedHeight) {
    var _a;
    var result = {};
    if (edgeSidebar && edgeSidebar.id) {
        var breakpoints = (0, combineBreakpoints_1.combineBreakpoints)(edgeSidebar.config, sxClippedHeight);
        for (var _i = 0, breakpoints_1 = breakpoints; _i < breakpoints_1.length; _i++) {
            var key = breakpoints_1[_i];
            var bp = key;
            result[bp] = (_a = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(sxClippedHeight, bp)) !== null && _a !== void 0 ? _a : 0;
        }
    }
    return tslib_1.__assign({}, (Object.keys(result).length > 0 && { height: result }));
};
exports.getEdgeOffsetSxProps = getEdgeOffsetSxProps;
