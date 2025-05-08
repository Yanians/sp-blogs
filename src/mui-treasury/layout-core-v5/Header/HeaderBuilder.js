"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderBuilder = void 0;
var tslib_1 = require("tslib");
var constant_1 = require("../utils/constant");
var pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
var combineBreakpoints_1 = require("../utils/combineBreakpoints");
var WidthModel_1 = require("../Width/WidthModel");
var toValidCssValue_1 = require("../utils/toValidCssValue");
var ResponsiveBuilder_1 = require("../shared/ResponsiveBuilder");
var HeaderBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderBuilder, _super);
    function HeaderBuilder(params) {
        var _this = _super.call(this, params) || this;
        _this.effectedBy = {};
        return _this;
    }
    HeaderBuilder.prototype.isClipped = function (clippableId, breakpoint) {
        var headerBreakpointConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(this.config, breakpoint);
        if (typeof (headerBreakpointConfig === null || headerBreakpointConfig === void 0 ? void 0 : headerBreakpointConfig.clipped) === "boolean" &&
            headerBreakpointConfig.clipped) {
            return true;
        }
        return (typeof (headerBreakpointConfig === null || headerBreakpointConfig === void 0 ? void 0 : headerBreakpointConfig.clipped) === "object" &&
            (headerBreakpointConfig === null || headerBreakpointConfig === void 0 ? void 0 : headerBreakpointConfig.clipped[clippableId]));
    };
    HeaderBuilder.prototype.isAboveSomeEdgeSidebar = function (breakpoint) {
        var headerBreakpointConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(this.config, breakpoint);
        if (!headerBreakpointConfig)
            return false;
        var clipped = headerBreakpointConfig.clipped;
        if (typeof clipped === "boolean") {
            return clipped;
        }
        return !!(clipped === null || clipped === void 0 ? void 0 : clipped.leftEdgeSidebar) || !!(clipped === null || clipped === void 0 ? void 0 : clipped.rightEdgeSidebar);
    };
    HeaderBuilder.prototype.getOffsetHeight = function () {
        return this.generateSxWithHidden({
            // https://github.com/mui-org/material-ui/blob/next/packages/material-ui-system/src/sizing.js#L5
            hiddenValue: "0px", // don't use 0 as number because it will become 0%
            assignValue: function (breakpointConfig) {
                return breakpointConfig.position === "fixed" ? breakpointConfig.height : "0px";
            },
        });
    };
    HeaderBuilder.prototype.getSxHeight = function () {
        var result = this.generateSxWithHidden({
            assignValue: function (breakpointConfig) { return breakpointConfig.height; },
            // https://github.com/mui-org/material-ui/blob/next/packages/material-ui-system/src/sizing.js#L5
            hiddenValue: "0px", // don't use 0 as number because it will become 0%
        });
        return tslib_1.__assign({}, (Object.keys(result).length && { height: result }));
    };
    HeaderBuilder.prototype.getSxMarginHorizontal = function () {
        var marginLeft = {};
        var _a = this.effectedBy, leftEdgeSidebar = _a.leftEdgeSidebar, rightEdgeSidebar = _a.rightEdgeSidebar;
        if (leftEdgeSidebar) {
            var occupiedSpace = leftEdgeSidebar === null || leftEdgeSidebar === void 0 ? void 0 : leftEdgeSidebar.getOccupiedSpace();
            var breakpoints = this.mergeBreakpoints(occupiedSpace);
            for (var _i = 0, breakpoints_1 = breakpoints; _i < breakpoints_1.length; _i++) {
                var bp = breakpoints_1[_i];
                marginLeft[bp] = this.isClipped(constant_1.LEFT_EDGE_SIDEBAR_ID, bp)
                    ? "0px"
                    : (0, toValidCssValue_1.toValidCssValue)((0, pickNearestBreakpoint_1.pickNearestBreakpoint)(occupiedSpace, bp));
            }
        }
        var marginRight = {};
        if (rightEdgeSidebar) {
            var occupiedSpace = rightEdgeSidebar === null || rightEdgeSidebar === void 0 ? void 0 : rightEdgeSidebar.getOccupiedSpace();
            var breakpoints = this.mergeBreakpoints(occupiedSpace);
            for (var _b = 0, breakpoints_2 = breakpoints; _b < breakpoints_2.length; _b++) {
                var bp = breakpoints_2[_b];
                marginRight[bp] = this.isClipped(constant_1.RIGHT_EDGE_SIDEBAR_ID, bp)
                    ? "0px"
                    : (0, toValidCssValue_1.toValidCssValue)((0, pickNearestBreakpoint_1.pickNearestBreakpoint)(occupiedSpace, bp));
            }
        }
        return tslib_1.__assign(tslib_1.__assign({}, (Object.keys(marginLeft).length && { marginLeft: marginLeft })), (Object.keys(marginRight).length && { marginRight: marginRight }));
    };
    HeaderBuilder.prototype.getSxWidth = function () {
        var _a, _b;
        var result = {};
        var _c = this.effectedBy, leftEdgeSidebar = _c.leftEdgeSidebar, rightEdgeSidebar = _c.rightEdgeSidebar;
        var leftOccupiedSpace = (_a = leftEdgeSidebar === null || leftEdgeSidebar === void 0 ? void 0 : leftEdgeSidebar.getOccupiedSpace()) !== null && _a !== void 0 ? _a : {};
        var rightOccupiedSpace = (_b = rightEdgeSidebar === null || rightEdgeSidebar === void 0 ? void 0 : rightEdgeSidebar.getOccupiedSpace()) !== null && _b !== void 0 ? _b : {};
        var breakpoints = this.mergeBreakpoints((0, combineBreakpoints_1.combineBreakpoints)(leftOccupiedSpace, rightOccupiedSpace));
        for (var _i = 0, breakpoints_3 = breakpoints; _i < breakpoints_3.length; _i++) {
            var key = breakpoints_3[_i];
            var bp = key;
            var effectLeft = (0, WidthModel_1.createWidthInterface)(0);
            if (leftEdgeSidebar) {
                if (!this.isClipped(constant_1.LEFT_EDGE_SIDEBAR_ID, bp)) {
                    effectLeft = (0, WidthModel_1.createWidthInterface)(leftEdgeSidebar.isFlexiblePersistent(bp, "header")
                        ? 0
                        : (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(leftOccupiedSpace, bp));
                }
            }
            var effectRight = (0, WidthModel_1.createWidthInterface)(0);
            if (rightEdgeSidebar) {
                if (!this.isClipped(constant_1.RIGHT_EDGE_SIDEBAR_ID, bp)) {
                    effectRight = (0, WidthModel_1.createWidthInterface)(rightEdgeSidebar.isFlexiblePersistent(bp, "header")
                        ? 0
                        : (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(rightOccupiedSpace, bp));
                }
            }
            result[bp] = effectLeft.combine(effectRight).getStyle().width;
        }
        return tslib_1.__assign({}, (Object.keys(result).length && { width: result }));
    };
    HeaderBuilder.prototype.getSxZIndex = function (theme) {
        var _this = this;
        if (theme === void 0) { theme = constant_1.DEFAULT_THEME; }
        var result = this.generateSx(function (config, bp) {
            var _a;
            return _this.isAboveSomeEdgeSidebar(bp)
                ? theme.zIndex.drawer + 10 + ((_a = config.layer) !== null && _a !== void 0 ? _a : 0)
                : theme.zIndex.appBar;
        }, theme.zIndex.appBar);
        return tslib_1.__assign({}, (Object.keys(result).length && { zIndex: result }));
    };
    HeaderBuilder.prototype.getSxProps = function (theme) {
        if (theme === void 0) { theme = constant_1.DEFAULT_THEME; }
        var sxTop = this.generateSx(function (config) { return config.top; }, 0);
        var sxDisplay = this.getSxDisplay("flex");
        var displayKeys = Object.keys(sxDisplay);
        var shouldAttachDisplay = displayKeys.length > 1 ||
            (displayKeys.length === 1 && displayKeys[0] !== "xs");
        return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ position: this.generateSx(function (config) { return config.position; }) }, (Object.keys(sxTop).length && { top: sxTop })), (shouldAttachDisplay && { display: sxDisplay })), this.getSxHeight()), this.getSxWidth()), this.getSxMarginHorizontal()), this.getSxZIndex(theme));
    };
    return HeaderBuilder;
}(ResponsiveBuilder_1.ResponsiveBuilder));
exports.HeaderBuilder = HeaderBuilder;
