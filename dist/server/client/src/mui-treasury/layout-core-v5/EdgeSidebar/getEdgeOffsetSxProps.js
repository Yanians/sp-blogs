"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEdgeOffsetSxProps = void 0;
const combineBreakpoints_1 = require("../utils/combineBreakpoints");
const pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
const getEdgeOffsetSxProps = (edgeSidebar, sxClippedHeight) => {
    const result = {};
    if (edgeSidebar && edgeSidebar.id) {
        const breakpoints = (0, combineBreakpoints_1.combineBreakpoints)(edgeSidebar.config, sxClippedHeight);
        for (const key of breakpoints) {
            const bp = key;
            result[bp] = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(sxClippedHeight, bp) ?? 0;
        }
    }
    return {
        ...(Object.keys(result).length > 0 && { height: result }),
    };
};
exports.getEdgeOffsetSxProps = getEdgeOffsetSxProps;
