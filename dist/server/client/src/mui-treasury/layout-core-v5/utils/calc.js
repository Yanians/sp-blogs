"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plusCalc = exports.subtractCalc = void 0;
const toValidCssValue_1 = require("./toValidCssValue");
const subtractCalc = (...args) => {
    const valid = args.filter((v) => !!v);
    if (!valid.length)
        return "0px";
    return valid.length === 1
        ? (0, toValidCssValue_1.toValidCssValue)(valid[0])
        : `calc(${args.filter((item) => !!item)
            .map(toValidCssValue_1.toValidCssValue)
            .join(" - ")})`;
};
exports.subtractCalc = subtractCalc;
const plusCalc = (...args) => {
    const valid = args.filter((v) => !!v);
    if (!valid.length)
        return "0px";
    return valid.length === 1
        ? (0, toValidCssValue_1.toValidCssValue)(valid[0])
        : `calc(${args.filter((item) => !!item)
            .map(toValidCssValue_1.toValidCssValue)
            .join(" + ")})`;
};
exports.plusCalc = plusCalc;
