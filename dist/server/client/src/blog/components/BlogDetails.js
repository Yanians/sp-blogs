"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = slugify;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const markdownElement_1 = tslib_1.__importDefault(require("./markdownElement"));
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // remove non-word characters
        .trim()
        .replace(/\s+/g, '-'); // replace spaces with -
}
const BlogDetail = (props) => {
    const { sSrData } = props;
    const { title } = (0, react_router_dom_1.useParams)();
    const post = sSrData.find((find) => find.title === title);
    if (!post)
        return (0, jsx_runtime_1.jsx)("div", { children: "Post not found" });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: post.title }), (0, jsx_runtime_1.jsxs)("h4", { children: ["by ", post.authors?.find((author) => author)] }), (0, jsx_runtime_1.jsx)("p", { children: post.description }), (0, jsx_runtime_1.jsx)(markdownElement_1.default, { renderedMarkdown: post.outputRender })] }));
};
exports.default = BlogDetail;
