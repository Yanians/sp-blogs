"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const parseMarkDown_js_1 = require("./parseMarkDown.js");
const prepareMarkdown_js_1 = tslib_1.__importDefault(require("./prepareMarkdown.js"));
// import data,{ getAllBlogPost } from './loader.mjs';
// const { allPost, }= Loader();
exports.default = {
    createRender: parseMarkDown_js_1.createRender,
    // allPost,
    // data,
    // getAllBlogPost,
    removeHeaders: parseMarkDown_js_1.removeHeaders,
    renderMarkdown: parseMarkDown_js_1.renderMarkdown,
    render: parseMarkDown_js_1.render,
    removeFrontmatter: parseMarkDown_js_1.removeFrontmatter,
    escape: parseMarkDown_js_1.escape,
    getHeaders: parseMarkDown_js_1.getHeaders,
    getTitle: parseMarkDown_js_1.getTitle,
    prepareMarkdown: prepareMarkdown_js_1.default,
    getContents: parseMarkDown_js_1.getContents,
    getDescription: parseMarkDown_js_1.getDescription,
    renderInline: parseMarkDown_js_1.renderInline
};
