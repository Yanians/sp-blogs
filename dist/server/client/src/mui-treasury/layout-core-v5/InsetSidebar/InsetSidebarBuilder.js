"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsetSidebarBuilder = void 0;
const calc_1 = require("../utils/calc");
const pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
const ResponsiveBuilder_1 = require("../shared/ResponsiveBuilder");
const flattenResponsive_1 = require("../utils/flattenResponsive");
const toValidCssValue_1 = require("../utils/toValidCssValue");
class InsetSidebarBuilder extends ResponsiveBuilder_1.ResponsiveBuilder {
    constructor(params) {
        super(params);
        this.effectedBy = {};
    }
    getFixedArea(modifier = 1) {
        return (0, flattenResponsive_1.flattenLoose)(this.generateSx((config, bp) => config.position === "fixed"
            ? `${modifier * 9999}px`
            : bp === "xs"
                ? undefined
                : "initial"));
    }
    getSxBody() {
        const anchor = this.anchor;
        const height = {};
        const { header } = this.effectedBy;
        if (header) {
            const { height: responsiveHeight } = header.getSxHeight();
            const breakpoints = this.mergeBreakpoints(responsiveHeight ?? []);
            for (const bp of breakpoints) {
                const insetConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(this.config, bp);
                if (insetConfig?.position === "absolute") {
                    const headerHeight = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(responsiveHeight, bp);
                    height[bp] =
                        headerHeight === 0 || headerHeight === "0px"
                            ? "100vh"
                            : (0, calc_1.subtractCalc)("100vh", headerHeight);
                }
                if (insetConfig?.position === "fixed")
                    height[bp] = "100%";
                if (insetConfig?.position === "sticky")
                    height[bp] = "initial";
            }
        }
        return {
            height: (0, flattenResponsive_1.flattenLoose)(height),
            width: (0, flattenResponsive_1.flattenLoose)(this.generateSx((config) => config.position === "fixed" ? "initial" : "100%")),
            position: (0, flattenResponsive_1.flattenLoose)(this.generateSx((config) => config.position)),
            top: (0, flattenResponsive_1.flattenLoose)(this.generateSx((config) => config.top ?? 0)),
            ...(anchor === "left" && {
                marginLeft: this.getFixedArea(-1),
                paddingLeft: this.getFixedArea(),
            }),
            ...(anchor === "right" && {
                marginRight: this.getFixedArea(-1),
                paddingRight: this.getFixedArea(),
            }),
        };
    }
    getSxRoot() {
        return {
            display: (0, flattenResponsive_1.flattenStrict)(this.getSxDisplay("block")),
            width: (0, flattenResponsive_1.flattenLoose)(this.generateSx((config) => (0, toValidCssValue_1.toValidCssValue)(config.width))),
        };
    }
    getOccupiedSpace() {
        return (0, flattenResponsive_1.flattenStrict)(this.generateSxWithHidden({
            assignValue: (config) => (0, toValidCssValue_1.toValidCssValue)(config.width),
            hiddenValue: "0px",
            strict: true,
        }));
    }
}
exports.InsetSidebarBuilder = InsetSidebarBuilder;
