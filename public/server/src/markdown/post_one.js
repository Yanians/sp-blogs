"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const LayoutBlog_1 = tslib_1.__importDefault(require("../LayoutBlog"));
const first_md__marking_1 = require("./first.md?@marking");
function Page() {
    console.log('+++++++++++++++++++', first_md__marking_1.docs);
    return (0, jsx_runtime_1.jsx)(LayoutBlog_1.default, { docs: first_md__marking_1.docs });
}
