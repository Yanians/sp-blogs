"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNilOrEmpty = exports.isNilOrEmpty = void 0;
const isNil_1 = require("./isNil");
const isNilOrEmpty = (value) => {
    return (0, isNil_1.isNil)(value) || value === "";
};
exports.isNilOrEmpty = isNilOrEmpty;
const isNotNilOrEmpty = (value) => !(0, exports.isNilOrEmpty)(value);
exports.isNotNilOrEmpty = isNotNilOrEmpty;
