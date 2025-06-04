"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfilePage;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ProfileLayout_1 = tslib_1.__importDefault(require("../ProfileLayout"));
function ProfilePage({ sSrData }) {
    return ((0, jsx_runtime_1.jsx)(ProfileLayout_1.default, { sSrData: sSrData }));
}
