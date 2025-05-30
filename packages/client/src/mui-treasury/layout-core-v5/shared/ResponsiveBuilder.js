"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsiveBuilder = void 0;
var createSxResult_1 = require("../utils/createSxResult");
var muiBreakpoints_1 = require("../utils/muiBreakpoints");
var ResponsiveBuilder = /** @class */ (function () {
    function ResponsiveBuilder(params) {
        this.config = params.config;
        this.hidden = params.hidden;
        this.breakpointKeys = Object.keys(params.config);
    }
    ResponsiveBuilder.prototype.isHidden = function (breakpoint) {
        if (!this.hidden)
            return false;
        if (typeof this.hidden === "boolean" && this.hidden)
            return true;
        return this.hidden.includes(breakpoint);
    };
    /**
     * use target as base breakpoints, the result will start from the minimum of target
     *          xs | sm | md | lg | xl
     *  target     | y  |    |  y |
     *   this   y  |    | y  |    |
     *  ===============================
     *  result     | y  | y  | y  |
     */
    ResponsiveBuilder.prototype.mergeBreakpoints = function (target) {
        var targetFound = false;
        var result = [];
        var targetKeys = Array.isArray(target) ? target : Object.keys(target);
        var thisKeys = Object.keys(this.config);
        muiBreakpoints_1.BREAKPOINT_KEYS.forEach(function (key) {
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
    };
    ResponsiveBuilder.prototype.generateSxWithHidden = function (options) {
        var _a = this, config = _a.config, hidden = _a.hidden;
        var hiddenValue = options.hiddenValue;
        if (hidden === true) {
            return hiddenValue !== undefined
                ? { xs: hiddenValue }
                : {};
        }
        var candidate;
        return (0, createSxResult_1.createSxResult)(function (bp, lastResultVal) {
            var _a;
            candidate = (_a = config[bp]) !== null && _a !== void 0 ? _a : candidate;
            if (options.strict &&
                lastResultVal === undefined &&
                candidate === undefined) {
                // cannot find valid config and no result yet
                return hiddenValue;
            }
            if (candidate !== undefined) {
                var assignedValue = options.assignValue(candidate, bp, lastResultVal);
                var isHidden = Array.isArray(hidden) && hidden.includes(bp);
                return isHidden ? hiddenValue : assignedValue;
            }
            return undefined;
        });
    };
    ResponsiveBuilder.prototype.generateSx = function (getValue, initialValue) {
        var _this = this;
        return (0, createSxResult_1.createSxResult)(function (bp) { return getValue(_this.config[bp], bp); }, {
            breakpoints: this.breakpointKeys,
            initialValue: initialValue,
        });
    };
    ResponsiveBuilder.prototype.getSxDisplay = function (appearance) {
        return this.generateSxWithHidden({
            assignValue: function () { return appearance; },
            hiddenValue: "none",
            strict: true,
        });
    };
    return ResponsiveBuilder;
}());
exports.ResponsiveBuilder = ResponsiveBuilder;
