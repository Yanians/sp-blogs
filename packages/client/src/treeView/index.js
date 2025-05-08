"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var monorepoTree_1 = tslib_1.__importDefault(require("./monorepoTree"));
function default_1() {
    return ((0, jsx_runtime_1.jsx)("div", { style: { padding: 20 }, children: (0, jsx_runtime_1.jsx)(monorepoTree_1.default, {}) }));
}
