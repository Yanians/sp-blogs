"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNilOrEmpty = exports.isNilOrEmpty = void 0;
var isNil_1 = require("./isNil");
var isNilOrEmpty = function (value) {
    return (0, isNil_1.isNil)(value) || value === "";
};
exports.isNilOrEmpty = isNilOrEmpty;
var isNotNilOrEmpty = function (value) { return !(0, exports.isNilOrEmpty)(value); };
exports.isNotNilOrEmpty = isNotNilOrEmpty;
