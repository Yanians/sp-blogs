"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ComponentsOverrides;
var tslib_1 = require("tslib");
var utils_1 = require("@mui/utils");
var Card_1 = tslib_1.__importDefault(require("./Card"));
var AppBar_1 = tslib_1.__importDefault(require("./AppBar"));
var Lists_1 = tslib_1.__importDefault(require("./Lists"));
var Paper_1 = tslib_1.__importDefault(require("./Paper"));
var Input_1 = tslib_1.__importDefault(require("./Input"));
var Button_1 = tslib_1.__importDefault(require("./Button"));
var Tooltip_1 = tslib_1.__importDefault(require("./Tooltip"));
var Backdrop_1 = tslib_1.__importDefault(require("./Backdrop"));
var Typography_1 = tslib_1.__importDefault(require("./Typography"));
var IconButton_1 = tslib_1.__importDefault(require("./IconButton"));
var Autocomplete_1 = tslib_1.__importDefault(require("./Autocomplete"));
// ----------------------------------------------------------------------
function ComponentsOverrides(theme) {
    return (0, utils_1.deepmerge)((0, AppBar_1.default)(theme), (0, Card_1.default)(theme), (0, Lists_1.default)(theme), 
    //@ts-ignore
    (0, Paper_1.default)(theme), (0, Input_1.default)(theme), (0, Button_1.default)(theme), (0, Tooltip_1.default)(theme), (0, Backdrop_1.default)(theme), (0, Typography_1.default)(theme), (0, IconButton_1.default)(theme), (0, Autocomplete_1.default)(theme));
}
