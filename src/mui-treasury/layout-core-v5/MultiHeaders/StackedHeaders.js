"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackedHeaders = void 0;
var calc_1 = require("../utils/calc");
function getMaxFloatHeight(configs) {
    if (!configs.length)
        return 0;
    if (configs.length === 1)
        return (0, calc_1.plusCalc)(configs[0].height, configs[0].top);
    return "max(".concat(configs.map(function (c) { return (0, calc_1.plusCalc)(c.height, c.top); }).join(", "), ")");
}
function sumHeight(configs) {
    if (!configs.length)
        return 0;
    return calc_1.plusCalc.apply(void 0, configs.map(function (c) { return c.height; }));
}
var StackedHeaders = function (configs) {
    var nonRelativeConfigs = [];
    configs.forEach(function (c) {
        if (!!c && c.position !== "relative") {
            nonRelativeConfigs.push(c);
        }
    });
    var maxNonRelativeHeight = getMaxFloatHeight(nonRelativeConfigs);
    var totalHeight = sumHeight(configs.filter(function (c) { return !!c; })); // for offset height
    var diffHeight = (0, calc_1.subtractCalc)(totalHeight, maxNonRelativeHeight); // for -marginTop
    return {
        totalHeight: totalHeight,
        diffHeight: diffHeight,
    };
};
exports.StackedHeaders = StackedHeaders;
