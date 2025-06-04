"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toValidCssValue = exports.toResponsiveCssValue = void 0;
const toResponsiveCssValue = (value) => {
    const result = {};
    for (const key in value) {
        const bp = key;
        result[bp] = (0, exports.toValidCssValue)(value[bp]);
    }
    return result;
};
exports.toResponsiveCssValue = toResponsiveCssValue;
const toValidCssValue = (value) => {
    if (typeof value === "number")
        return `${value}px`;
    return value;
};
exports.toValidCssValue = toValidCssValue;
