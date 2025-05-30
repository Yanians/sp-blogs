"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toValidCssValue = exports.toResponsiveCssValue = void 0;
var toResponsiveCssValue = function (value) {
    var result = {};
    for (var key in value) {
        var bp = key;
        result[bp] = (0, exports.toValidCssValue)(value[bp]);
    }
    return result;
};
exports.toResponsiveCssValue = toResponsiveCssValue;
var toValidCssValue = function (value) {
    if (typeof value === "number")
        return "".concat(value, "px");
    return value;
};
exports.toValidCssValue = toValidCssValue;
