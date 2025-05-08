"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plusCalc = exports.subtractCalc = void 0;
var toValidCssValue_1 = require("./toValidCssValue");
var subtractCalc = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var valid = args.filter(function (v) { return !!v; });
    if (!valid.length)
        return "0px";
    return valid.length === 1
        ? (0, toValidCssValue_1.toValidCssValue)(valid[0])
        : "calc(".concat(args.filter(function (item) { return !!item; })
            .map(toValidCssValue_1.toValidCssValue)
            .join(" - "), ")");
};
exports.subtractCalc = subtractCalc;
var plusCalc = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var valid = args.filter(function (v) { return !!v; });
    if (!valid.length)
        return "0px";
    return valid.length === 1
        ? (0, toValidCssValue_1.toValidCssValue)(valid[0])
        : "calc(".concat(args.filter(function (item) { return !!item; })
            .map(toValidCssValue_1.toValidCssValue)
            .join(" + "), ")");
};
exports.plusCalc = plusCalc;
