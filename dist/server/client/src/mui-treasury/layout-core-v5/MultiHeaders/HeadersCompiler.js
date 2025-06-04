"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadersCompiler = void 0;
const muiBreakpoints_1 = require("../utils/muiBreakpoints");
const pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
const StackedHeaders_1 = require("./StackedHeaders");
const HeadersCompiler = (headers) => {
    const validHeaders = headers.filter((h) => !!h);
    function getResult(modifyConfigAtBreakpoint) {
        const result = {
            totalHeight: {},
            diffHeight: {},
        };
        let prevHidden = Array(validHeaders.length).fill(false); // keep track of hidden in previous breakpoint
        for (const bp of muiBreakpoints_1.BREAKPOINT_KEYS) {
            const configs = [];
            let shouldCalculate = false;
            shouldCalculate = prevHidden.some((bool) => !!bool);
            validHeaders.forEach((builder) => {
                if (builder.config[bp]) {
                    shouldCalculate = true;
                }
            });
            if (shouldCalculate) {
                validHeaders.forEach((builder, index) => {
                    let breakpointConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(builder.config, bp);
                    if (builder.isHidden(bp)) {
                        prevHidden[index] = true;
                        if (breakpointConfig) {
                            configs.push({ ...breakpointConfig, height: 0 });
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
                const { totalHeight, diffHeight } = (0, StackedHeaders_1.StackedHeaders)(configs);
                if ((0, pickNearestBreakpoint_1.pickNearestBreakpoint)(result.totalHeight, bp) !== totalHeight) {
                    result.totalHeight[bp] = totalHeight;
                }
                if ((0, pickNearestBreakpoint_1.pickNearestBreakpoint)(result.diffHeight, bp) !== diffHeight) {
                    result.diffHeight[bp] = diffHeight;
                }
            }
        }
        return result;
    }
    return {
        getClippedHeight(sidebarId) {
            // for EdgeSidebarOffset
            return getResult((bp, builder, config) => {
                return {
                    ...config,
                    ...(!builder.isClipped(sidebarId, bp) && { height: 0 }),
                };
            });
        },
        getAllHeight() {
            // for InsetSidebarOffset
            return getResult();
        },
    };
};
exports.HeadersCompiler = HeadersCompiler;
