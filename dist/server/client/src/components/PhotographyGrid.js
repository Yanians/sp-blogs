"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PhotographyImage;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const LayoutBlog_1 = require("../blog/components/LayoutBlog");
const GridContainerBox_1 = tslib_1.__importDefault(require("../layout/Skeleton/GridContainerBox"));
// type CheckProps = {
//   sSrData:any;
// } & ImgProps & GridProps;
function PhotographyImage({ sSrData }) {
    return sSrData.map((item) => ((0, jsx_runtime_1.jsx)(GridContainerBox_1.default, { src: item.image, alt: item.title, name: LayoutBlog_1.authored[item.authors.find((author) => author)].name })));
}
