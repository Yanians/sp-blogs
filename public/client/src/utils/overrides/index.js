"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ComponentsOverrides;
const tslib_1 = require("tslib");
const utils_1 = require("@mui/utils");
const Card_1 = tslib_1.__importDefault(require("./Card"));
const AppBar_1 = tslib_1.__importDefault(require("./AppBar"));
const Lists_1 = tslib_1.__importDefault(require("./Lists"));
const Paper_1 = tslib_1.__importDefault(require("./Paper"));
const Input_1 = tslib_1.__importDefault(require("./Input"));
const Button_1 = tslib_1.__importDefault(require("./Button"));
const Tooltip_1 = tslib_1.__importDefault(require("./Tooltip"));
const Backdrop_1 = tslib_1.__importDefault(require("./Backdrop"));
const Typography_1 = tslib_1.__importDefault(require("./Typography"));
const IconButton_1 = tslib_1.__importDefault(require("./IconButton"));
const Autocomplete_1 = tslib_1.__importDefault(require("./Autocomplete"));
// ----------------------------------------------------------------------
function ComponentsOverrides(theme) {
    return (0, utils_1.deepmerge)((0, AppBar_1.default)(theme), (0, Card_1.default)(theme), (0, Lists_1.default)(theme), 
    //@ts-ignore
    (0, Paper_1.default)(theme), (0, Input_1.default)(theme), (0, Button_1.default)(theme), (0, Tooltip_1.default)(theme), (0, Backdrop_1.default)(theme), (0, Typography_1.default)(theme), (0, IconButton_1.default)(theme), (0, Autocomplete_1.default)(theme));
}
