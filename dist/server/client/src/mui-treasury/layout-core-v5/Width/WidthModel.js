"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWidthInterface = exports.sumExternalGap = exports.getCssWidth = void 0;
const isNilOrEmpty_1 = require("../utils/isNilOrEmpty");
const toValidCssValue_1 = require("../utils/toValidCssValue");
const getCssWidth = (externalGap) => {
    if (typeof externalGap === "string") {
        return `calc(100% - (${externalGap}))`;
    }
    if (typeof externalGap === "number") {
        if (externalGap === 0)
            return "100%";
        return `calc(100% - ${externalGap}px)`;
    }
    return "auto";
};
exports.getCssWidth = getCssWidth;
const sumExternalGap = (a, b) => {
    if ((0, isNilOrEmpty_1.isNilOrEmpty)(a) && (0, isNilOrEmpty_1.isNilOrEmpty)(b))
        return undefined;
    if (a === 0 && b === 0)
        return 0;
    if (!a && !(0, isNilOrEmpty_1.isNilOrEmpty)(b))
        return b;
    if (!(0, isNilOrEmpty_1.isNilOrEmpty)(a) && !b)
        return a;
    return `${(0, toValidCssValue_1.toValidCssValue)(a)} + ${(0, toValidCssValue_1.toValidCssValue)(b)}`;
};
exports.sumExternalGap = sumExternalGap;
const createWidthInterface = (externalGap) => {
    return {
        value: externalGap,
        combine: (w) => (0, exports.createWidthInterface)((0, exports.sumExternalGap)(externalGap, w.value)),
        getStyle: () => ({
            width: (0, exports.getCssWidth)(externalGap),
        }),
    };
};
exports.createWidthInterface = createWidthInterface;
