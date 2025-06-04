"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackedHeaders = void 0;
const calc_1 = require("../utils/calc");
function getMaxFloatHeight(configs) {
    if (!configs.length)
        return 0;
    if (configs.length === 1)
        return (0, calc_1.plusCalc)(configs[0].height, configs[0].top);
    return `max(${configs.map((c) => (0, calc_1.plusCalc)(c.height, c.top)).join(", ")})`;
}
function sumHeight(configs) {
    if (!configs.length)
        return 0;
    return (0, calc_1.plusCalc)(...configs.map((c) => c.height));
}
const StackedHeaders = (configs) => {
    const nonRelativeConfigs = [];
    configs.forEach((c) => {
        if (!!c && c.position !== "relative") {
            nonRelativeConfigs.push(c);
        }
    });
    const maxNonRelativeHeight = getMaxFloatHeight(nonRelativeConfigs);
    const totalHeight = sumHeight(configs.filter((c) => !!c)); // for offset height
    const diffHeight = (0, calc_1.subtractCalc)(totalHeight, maxNonRelativeHeight); // for -marginTop
    return {
        totalHeight,
        diffHeight,
    };
};
exports.StackedHeaders = StackedHeaders;
