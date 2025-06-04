"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeaders = getHeaders;
exports.getDescription = getDescription;
exports.getContent = getContent;
exports.render = render;
const tslib_1 = require("tslib");
const gray_matter_1 = tslib_1.__importDefault(require("gray-matter"));
const marked_1 = require("marked");
function getHeaders(markdown) {
    const { data } = (0, gray_matter_1.default)(markdown);
    return {
        title: data.title || "Untitled",
        description: data.description || "",
        authors: data.authors || [],
    };
}
// Function to extract description
function getDescription(markdown) {
    const { data } = (0, gray_matter_1.default)(markdown);
    return data.description || "";
}
// Function to extract main content
function getContent(markdown) {
    const { content } = (0, gray_matter_1.default)(markdown);
    return marked_1.marked.parse(content);
}
// Render function that takes a config and applies parsing
function render(markdown, config = {}) {
    return {
        headers: config.getHeaders ? getHeaders(markdown) : null,
        description: config.getDescription ? getDescription(markdown) : null,
        content: config.getContent ? getContent(markdown) : null,
    };
}
