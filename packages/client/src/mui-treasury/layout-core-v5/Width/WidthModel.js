"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWidthInterface = exports.sumExternalGap = exports.getCssWidth = void 0;
var isNilOrEmpty_1 = require("../utils/isNilOrEmpty");
var toValidCssValue_1 = require("../utils/toValidCssValue");
var getCssWidth = function (externalGap) {
    if (typeof externalGap === "string") {
        return "calc(100% - (".concat(externalGap, "))");
    }
    if (typeof externalGap === "number") {
        if (externalGap === 0)
            return "100%";
        return "calc(100% - ".concat(externalGap, "px)");
    }
    return "auto";
};
exports.getCssWidth = getCssWidth;
var sumExternalGap = function (a, b) {
    if ((0, isNilOrEmpty_1.isNilOrEmpty)(a) && (0, isNilOrEmpty_1.isNilOrEmpty)(b))
        return undefined;
    if (a === 0 && b === 0)
        return 0;
    if (!a && !(0, isNilOrEmpty_1.isNilOrEmpty)(b))
        return b;
    if (!(0, isNilOrEmpty_1.isNilOrEmpty)(a) && !b)
        return a;
    return "".concat((0, toValidCssValue_1.toValidCssValue)(a), " + ").concat((0, toValidCssValue_1.toValidCssValue)(b));
};
exports.sumExternalGap = sumExternalGap;
var createWidthInterface = function (externalGap) {
    return {
        value: externalGap,
        combine: function (w) { return (0, exports.createWidthInterface)((0, exports.sumExternalGap)(externalGap, w.value)); },
        getStyle: function () { return ({
            width: (0, exports.getCssWidth)(externalGap),
        }); },
    };
};
exports.createWidthInterface = createWidthInterface;
