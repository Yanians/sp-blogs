"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentSxProps = void 0;
var WidthModel_1 = require("../Width/WidthModel");
var combineBreakpoints_1 = require("../utils/combineBreakpoints");
var pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
var toValidCssValue_1 = require("../utils/toValidCssValue");
var getContentSxProps = function (modules, id) {
    var _a, _b;
    var result = { width: {}, marginLeft: {}, marginRight: {} };
    var leftEdgeSidebar = modules.leftEdgeSidebar, rightEdgeSidebar = modules.rightEdgeSidebar;
    var leftOccupiedSpace = (_a = leftEdgeSidebar === null || leftEdgeSidebar === void 0 ? void 0 : leftEdgeSidebar.getOccupiedSpace()) !== null && _a !== void 0 ? _a : {};
    var rightOccupiedSpace = (_b = rightEdgeSidebar === null || rightEdgeSidebar === void 0 ? void 0 : rightEdgeSidebar.getOccupiedSpace()) !== null && _b !== void 0 ? _b : {};
    var breakpoints = (0, combineBreakpoints_1.combineBreakpoints)(leftOccupiedSpace, rightOccupiedSpace);
    for (var _i = 0, breakpoints_1 = breakpoints; _i < breakpoints_1.length; _i++) {
        var key = breakpoints_1[_i];
        var bp = key;
        var effectLeft = (0, WidthModel_1.createWidthInterface)(0);
        if (leftEdgeSidebar) {
            effectLeft = (0, WidthModel_1.createWidthInterface)(leftEdgeSidebar.isFlexiblePersistent(bp, id)
                ? 0
                : (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(leftOccupiedSpace, bp));
            var occupiedSpace = leftOccupiedSpace[bp];
            if (occupiedSpace) {
                result.marginLeft[bp] = (0, toValidCssValue_1.toValidCssValue)(occupiedSpace);
            }
        }
        var effectRight = (0, WidthModel_1.createWidthInterface)(0);
        if (rightEdgeSidebar) {
            effectRight = (0, WidthModel_1.createWidthInterface)(rightEdgeSidebar.isFlexiblePersistent(bp, id)
                ? 0
                : (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(rightOccupiedSpace, bp));
            var occupiedSpace = rightOccupiedSpace[bp];
            if (occupiedSpace) {
                result.marginRight[bp] = (0, toValidCssValue_1.toValidCssValue)(occupiedSpace);
            }
        }
        result.width[bp] = effectLeft.combine(effectRight).getStyle().width;
    }
    return result;
};
exports.getContentSxProps = getContentSxProps;
