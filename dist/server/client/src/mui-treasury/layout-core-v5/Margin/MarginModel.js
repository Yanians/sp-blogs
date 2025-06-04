"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMarginInterface = exports.combineMargin = exports.getCssMargin = void 0;
const isNil_1 = require("../utils/isNil");
const toValidCssValue_1 = require("../utils/toValidCssValue");
const getCssMargin = (m) => {
    if (typeof m === "string") {
        return `calc(${m})`;
    }
    return m;
};
exports.getCssMargin = getCssMargin;
const transformMargin = (m, fn = (val) => val) => ({
    ...(!(0, isNil_1.isNil)(m.marginLeft) && {
        marginLeft: fn(m.marginLeft),
    }),
    ...(!(0, isNil_1.isNil)(m.marginRight) && {
        marginRight: fn(m.marginRight),
    }),
});
const getCssValue = (v1, v2) => {
    if ((0, isNil_1.isNil)(v1))
        return v2;
    if ((0, isNil_1.isNil)(v2))
        return v1;
    return `${(0, toValidCssValue_1.toValidCssValue)(v1)} + ${(0, toValidCssValue_1.toValidCssValue)(v2)}`;
};
const combineMargin = (m1, m2) => {
    if (!m1 && m2)
        return m2;
    if (m1 && !m2)
        return m1;
    const marginLeft = getCssValue(m1?.marginLeft, m2?.marginLeft);
    const marginRight = getCssValue(m1?.marginRight, m2?.marginRight);
    return transformMargin({ marginLeft, marginRight });
};
exports.combineMargin = combineMargin;
const createMarginInterface = (value) => {
    return {
        value,
        combine: (m) => (0, exports.createMarginInterface)((0, exports.combineMargin)(value, m.value)),
        getStyle: () => transformMargin(value, exports.getCssMargin),
    };
};
exports.createMarginInterface = createMarginInterface;
