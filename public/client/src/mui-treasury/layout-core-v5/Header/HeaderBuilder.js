"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderBuilder = void 0;
const constant_1 = require("../utils/constant");
const pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
const combineBreakpoints_1 = require("../utils/combineBreakpoints");
const WidthModel_1 = require("../Width/WidthModel");
const toValidCssValue_1 = require("../utils/toValidCssValue");
const ResponsiveBuilder_1 = require("../shared/ResponsiveBuilder");
class HeaderBuilder extends ResponsiveBuilder_1.ResponsiveBuilder {
    constructor(params) {
        super(params);
        this.effectedBy = {};
    }
    isClipped(clippableId, breakpoint) {
        const headerBreakpointConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(this.config, breakpoint);
        if (typeof headerBreakpointConfig?.clipped === "boolean" &&
            headerBreakpointConfig.clipped) {
            return true;
        }
        return (typeof headerBreakpointConfig?.clipped === "object" &&
            headerBreakpointConfig?.clipped[clippableId]);
    }
    isAboveSomeEdgeSidebar(breakpoint) {
        const headerBreakpointConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(this.config, breakpoint);
        if (!headerBreakpointConfig)
            return false;
        const { clipped } = headerBreakpointConfig;
        if (typeof clipped === "boolean") {
            return clipped;
        }
        return !!clipped?.leftEdgeSidebar || !!clipped?.rightEdgeSidebar;
    }
    getOffsetHeight() {
        return this.generateSxWithHidden({
            // https://github.com/mui-org/material-ui/blob/next/packages/material-ui-system/src/sizing.js#L5
            hiddenValue: "0px", // don't use 0 as number because it will become 0%
            assignValue: (breakpointConfig) => breakpointConfig.position === "fixed" ? breakpointConfig.height : "0px",
        });
    }
    getSxHeight() {
        const result = this.generateSxWithHidden({
            assignValue: (breakpointConfig) => breakpointConfig.height,
            // https://github.com/mui-org/material-ui/blob/next/packages/material-ui-system/src/sizing.js#L5
            hiddenValue: "0px", // don't use 0 as number because it will become 0%
        });
        return {
            ...(Object.keys(result).length && { height: result }),
        };
    }
    getSxMarginHorizontal() {
        const marginLeft = {};
        const { leftEdgeSidebar, rightEdgeSidebar } = this.effectedBy;
        if (leftEdgeSidebar) {
            const occupiedSpace = leftEdgeSidebar?.getOccupiedSpace();
            const breakpoints = this.mergeBreakpoints(occupiedSpace);
            for (const bp of breakpoints) {
                marginLeft[bp] = this.isClipped(constant_1.LEFT_EDGE_SIDEBAR_ID, bp)
                    ? "0px"
                    : (0, toValidCssValue_1.toValidCssValue)((0, pickNearestBreakpoint_1.pickNearestBreakpoint)(occupiedSpace, bp));
            }
        }
        const marginRight = {};
        if (rightEdgeSidebar) {
            const occupiedSpace = rightEdgeSidebar?.getOccupiedSpace();
            const breakpoints = this.mergeBreakpoints(occupiedSpace);
            for (const bp of breakpoints) {
                marginRight[bp] = this.isClipped(constant_1.RIGHT_EDGE_SIDEBAR_ID, bp)
                    ? "0px"
                    : (0, toValidCssValue_1.toValidCssValue)((0, pickNearestBreakpoint_1.pickNearestBreakpoint)(occupiedSpace, bp));
            }
        }
        return {
            ...(Object.keys(marginLeft).length && { marginLeft }),
            ...(Object.keys(marginRight).length && { marginRight }),
        };
    }
    getSxWidth() {
        const result = {};
        const { leftEdgeSidebar, rightEdgeSidebar } = this.effectedBy;
        const leftOccupiedSpace = leftEdgeSidebar?.getOccupiedSpace() ?? {};
        const rightOccupiedSpace = rightEdgeSidebar?.getOccupiedSpace() ?? {};
        const breakpoints = this.mergeBreakpoints((0, combineBreakpoints_1.combineBreakpoints)(leftOccupiedSpace, rightOccupiedSpace));
        for (const key of breakpoints) {
            const bp = key;
            let effectLeft = (0, WidthModel_1.createWidthInterface)(0);
            if (leftEdgeSidebar) {
                if (!this.isClipped(constant_1.LEFT_EDGE_SIDEBAR_ID, bp)) {
                    effectLeft = (0, WidthModel_1.createWidthInterface)(leftEdgeSidebar.isFlexiblePersistent(bp, "header")
                        ? 0
                        : (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(leftOccupiedSpace, bp));
                }
            }
            let effectRight = (0, WidthModel_1.createWidthInterface)(0);
            if (rightEdgeSidebar) {
                if (!this.isClipped(constant_1.RIGHT_EDGE_SIDEBAR_ID, bp)) {
                    effectRight = (0, WidthModel_1.createWidthInterface)(rightEdgeSidebar.isFlexiblePersistent(bp, "header")
                        ? 0
                        : (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(rightOccupiedSpace, bp));
                }
            }
            result[bp] = effectLeft.combine(effectRight).getStyle().width;
        }
        return {
            ...(Object.keys(result).length && { width: result }),
        };
    }
    getSxZIndex(theme = constant_1.DEFAULT_THEME) {
        const result = this.generateSx((config, bp) => {
            return this.isAboveSomeEdgeSidebar(bp)
                ? theme.zIndex.drawer + 10 + (config.layer ?? 0)
                : theme.zIndex.appBar;
        }, theme.zIndex.appBar);
        return {
            ...(Object.keys(result).length && { zIndex: result }),
        };
    }
    getSxProps(theme = constant_1.DEFAULT_THEME) {
        const sxTop = this.generateSx((config) => config.top, 0);
        const sxDisplay = this.getSxDisplay("flex");
        const displayKeys = Object.keys(sxDisplay);
        const shouldAttachDisplay = displayKeys.length > 1 ||
            (displayKeys.length === 1 && displayKeys[0] !== "xs");
        return {
            position: this.generateSx((config) => config.position),
            ...(Object.keys(sxTop).length && { top: sxTop }),
            ...(shouldAttachDisplay && { display: sxDisplay }),
            ...this.getSxHeight(),
            ...this.getSxWidth(),
            ...this.getSxMarginHorizontal(),
            ...this.getSxZIndex(theme),
        };
    }
}
exports.HeaderBuilder = HeaderBuilder;
