"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsetSidebarBuilder = void 0;
var tslib_1 = require("tslib");
var calc_1 = require("../utils/calc");
var pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
var ResponsiveBuilder_1 = require("../shared/ResponsiveBuilder");
var flattenResponsive_1 = require("../utils/flattenResponsive");
var toValidCssValue_1 = require("../utils/toValidCssValue");
var InsetSidebarBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(InsetSidebarBuilder, _super);
    function InsetSidebarBuilder(params) {
        var _this = _super.call(this, params) || this;
        _this.effectedBy = {};
        return _this;
    }
    InsetSidebarBuilder.prototype.getFixedArea = function (modifier) {
        if (modifier === void 0) { modifier = 1; }
        return (0, flattenResponsive_1.flattenLoose)(this.generateSx(function (config, bp) {
            return config.position === "fixed"
                ? "".concat(modifier * 9999, "px")
                : bp === "xs"
                    ? undefined
                    : "initial";
        }));
    };
    InsetSidebarBuilder.prototype.getSxBody = function () {
        var anchor = this.anchor;
        var height = {};
        var header = this.effectedBy.header;
        if (header) {
            var responsiveHeight = header.getSxHeight().height;
            var breakpoints = this.mergeBreakpoints(responsiveHeight !== null && responsiveHeight !== void 0 ? responsiveHeight : []);
            for (var _i = 0, breakpoints_1 = breakpoints; _i < breakpoints_1.length; _i++) {
                var bp = breakpoints_1[_i];
                var insetConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(this.config, bp);
                if ((insetConfig === null || insetConfig === void 0 ? void 0 : insetConfig.position) === "absolute") {
                    var headerHeight = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(responsiveHeight, bp);
                    height[bp] =
                        headerHeight === 0 || headerHeight === "0px"
                            ? "100vh"
                            : (0, calc_1.subtractCalc)("100vh", headerHeight);
                }
                if ((insetConfig === null || insetConfig === void 0 ? void 0 : insetConfig.position) === "fixed")
                    height[bp] = "100%";
                if ((insetConfig === null || insetConfig === void 0 ? void 0 : insetConfig.position) === "sticky")
                    height[bp] = "initial";
            }
        }
        return tslib_1.__assign(tslib_1.__assign({ height: (0, flattenResponsive_1.flattenLoose)(height), width: (0, flattenResponsive_1.flattenLoose)(this.generateSx(function (config) {
                return config.position === "fixed" ? "initial" : "100%";
            })), position: (0, flattenResponsive_1.flattenLoose)(this.generateSx(function (config) { return config.position; })), top: (0, flattenResponsive_1.flattenLoose)(this.generateSx(function (config) { var _a; return (_a = config.top) !== null && _a !== void 0 ? _a : 0; })) }, (anchor === "left" && {
            marginLeft: this.getFixedArea(-1),
            paddingLeft: this.getFixedArea(),
        })), (anchor === "right" && {
            marginRight: this.getFixedArea(-1),
            paddingRight: this.getFixedArea(),
        }));
    };
    InsetSidebarBuilder.prototype.getSxRoot = function () {
        return {
            display: (0, flattenResponsive_1.flattenStrict)(this.getSxDisplay("block")),
            width: (0, flattenResponsive_1.flattenLoose)(this.generateSx(function (config) { return (0, toValidCssValue_1.toValidCssValue)(config.width); })),
        };
    };
    InsetSidebarBuilder.prototype.getOccupiedSpace = function () {
        return (0, flattenResponsive_1.flattenStrict)(this.generateSxWithHidden({
            assignValue: function (config) { return (0, toValidCssValue_1.toValidCssValue)(config.width); },
            hiddenValue: "0px",
            strict: true,
        }));
    };
    return InsetSidebarBuilder;
}(ResponsiveBuilder_1.ResponsiveBuilder));
exports.InsetSidebarBuilder = InsetSidebarBuilder;
