"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadersCompiler = void 0;
var tslib_1 = require("tslib");
var muiBreakpoints_1 = require("../utils/muiBreakpoints");
var pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
var StackedHeaders_1 = require("./StackedHeaders");
var HeadersCompiler = function (headers) {
    var validHeaders = headers.filter(function (h) { return !!h; });
    function getResult(modifyConfigAtBreakpoint) {
        var result = {
            totalHeight: {},
            diffHeight: {},
        };
        var prevHidden = Array(validHeaders.length).fill(false); // keep track of hidden in previous breakpoint
        var _loop_1 = function (bp) {
            var configs = [];
            var shouldCalculate = false;
            shouldCalculate = prevHidden.some(function (bool) { return !!bool; });
            validHeaders.forEach(function (builder) {
                if (builder.config[bp]) {
                    shouldCalculate = true;
                }
            });
            if (shouldCalculate) {
                validHeaders.forEach(function (builder, index) {
                    var breakpointConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(builder.config, bp);
                    if (builder.isHidden(bp)) {
                        prevHidden[index] = true;
                        if (breakpointConfig) {
                            configs.push(tslib_1.__assign(tslib_1.__assign({}, breakpointConfig), { height: 0 }));
                        }
                    }
                    else {
                        if (prevHidden[index]) {
                            prevHidden[index] = false;
                        }
                        if (breakpointConfig) {
                            configs.push(modifyConfigAtBreakpoint
                                ? modifyConfigAtBreakpoint(bp, builder, breakpointConfig)
                                : breakpointConfig);
                        }
                    }
                });
            }
            if (configs.length) {
                var _a = (0, StackedHeaders_1.StackedHeaders)(configs), totalHeight = _a.totalHeight, diffHeight = _a.diffHeight;
                if ((0, pickNearestBreakpoint_1.pickNearestBreakpoint)(result.totalHeight, bp) !== totalHeight) {
                    result.totalHeight[bp] = totalHeight;
                }
                if ((0, pickNearestBreakpoint_1.pickNearestBreakpoint)(result.diffHeight, bp) !== diffHeight) {
                    result.diffHeight[bp] = diffHeight;
                }
            }
        };
        for (var _i = 0, BREAKPOINT_KEYS_1 = muiBreakpoints_1.BREAKPOINT_KEYS; _i < BREAKPOINT_KEYS_1.length; _i++) {
            var bp = BREAKPOINT_KEYS_1[_i];
            _loop_1(bp);
        }
        return result;
    }
    return {
        getClippedHeight: function (sidebarId) {
            // for EdgeSidebarOffset
            return getResult(function (bp, builder, config) {
                return tslib_1.__assign(tslib_1.__assign({}, config), (!builder.isClipped(sidebarId, bp) && { height: 0 }));
            });
        },
        getAllHeight: function () {
            // for InsetSidebarOffset
            return getResult();
        },
    };
};
exports.HeadersCompiler = HeadersCompiler;
