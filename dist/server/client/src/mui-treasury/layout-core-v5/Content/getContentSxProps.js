"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentSxProps = void 0;
const WidthModel_1 = require("../Width/WidthModel");
const combineBreakpoints_1 = require("../utils/combineBreakpoints");
const pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
const toValidCssValue_1 = require("../utils/toValidCssValue");
const getContentSxProps = (modules, id) => {
    const result = { width: {}, marginLeft: {}, marginRight: {} };
    const { leftEdgeSidebar, rightEdgeSidebar } = modules;
    const leftOccupiedSpace = leftEdgeSidebar?.getOccupiedSpace() ?? {};
    const rightOccupiedSpace = rightEdgeSidebar?.getOccupiedSpace() ?? {};
    const breakpoints = (0, combineBreakpoints_1.combineBreakpoints)(leftOccupiedSpace, rightOccupiedSpace);
    for (const key of breakpoints) {
        const bp = key;
        let effectLeft = (0, WidthModel_1.createWidthInterface)(0);
        if (leftEdgeSidebar) {
            effectLeft = (0, WidthModel_1.createWidthInterface)(leftEdgeSidebar.isFlexiblePersistent(bp, id)
                ? 0
                : (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(leftOccupiedSpace, bp));
            const occupiedSpace = leftOccupiedSpace[bp];
            if (occupiedSpace) {
                result.marginLeft[bp] = (0, toValidCssValue_1.toValidCssValue)(occupiedSpace);
            }
        }
        let effectRight = (0, WidthModel_1.createWidthInterface)(0);
        if (rightEdgeSidebar) {
            effectRight = (0, WidthModel_1.createWidthInterface)(rightEdgeSidebar.isFlexiblePersistent(bp, id)
                ? 0
                : (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(rightOccupiedSpace, bp));
            const occupiedSpace = rightOccupiedSpace[bp];
            if (occupiedSpace) {
                result.marginRight[bp] = (0, toValidCssValue_1.toValidCssValue)(occupiedSpace);
            }
        }
        result.width[bp] = effectLeft.combine(effectRight).getStyle().width;
    }
    return result;
};
exports.getContentSxProps = getContentSxProps;
