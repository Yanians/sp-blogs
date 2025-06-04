"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsiveBuilder = void 0;
const createSxResult_1 = require("../utils/createSxResult");
const muiBreakpoints_1 = require("../utils/muiBreakpoints");
class ResponsiveBuilder {
    constructor(params) {
        this.config = params.config;
        this.hidden = params.hidden;
        this.breakpointKeys = Object.keys(params.config);
    }
    isHidden(breakpoint) {
        if (!this.hidden)
            return false;
        if (typeof this.hidden === "boolean" && this.hidden)
            return true;
        return this.hidden.includes(breakpoint);
    }
    /**
     * use target as base breakpoints, the result will start from the minimum of target
     *          xs | sm | md | lg | xl
     *  target     | y  |    |  y |
     *   this   y  |    | y  |    |
     *  ===============================
     *  result     | y  | y  | y  |
     */
    mergeBreakpoints(target) {
        let targetFound = false;
        const result = [];
        const targetKeys = Array.isArray(target) ? target : Object.keys(target);
        const thisKeys = Object.keys(this.config);
        muiBreakpoints_1.BREAKPOINT_KEYS.forEach((key) => {
            if (targetKeys.includes(key)) {
                targetFound = true;
                result.push(key);
            }
            else {
                if (thisKeys.includes(key) && targetFound) {
                    result.push(key);
                }
            }
        });
        return result;
    }
    generateSxWithHidden(options) {
        const { config, hidden } = this;
        const hiddenValue = options.hiddenValue;
        if (hidden === true) {
            return hiddenValue !== undefined
                ? { xs: hiddenValue }
                : {};
        }
        let candidate;
        return (0, createSxResult_1.createSxResult)((bp, lastResultVal) => {
            candidate = config[bp] ?? candidate;
            if (options.strict &&
                lastResultVal === undefined &&
                candidate === undefined) {
                // cannot find valid config and no result yet
                return hiddenValue;
            }
            if (candidate !== undefined) {
                const assignedValue = options.assignValue(candidate, bp, lastResultVal);
                const isHidden = Array.isArray(hidden) && hidden.includes(bp);
                return isHidden ? hiddenValue : assignedValue;
            }
            return undefined;
        });
    }
    generateSx(getValue, initialValue) {
        return (0, createSxResult_1.createSxResult)((bp) => getValue(this.config[bp], bp), {
            breakpoints: this.breakpointKeys,
            initialValue,
        });
    }
    getSxDisplay(appearance) {
        return this.generateSxWithHidden({
            assignValue: () => appearance,
            hiddenValue: "none",
            strict: true,
        });
    }
}
exports.ResponsiveBuilder = ResponsiveBuilder;
