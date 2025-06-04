"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMarkdownData = loadMarkdownData;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const gray_matter_1 = tslib_1.__importDefault(require("gray-matter"));
const slugify_1 = require("./slugify");
const blogDir = path_1.default.join(__dirname, '../../../client/src/blog');
const blogDir2 = path_1.default.join(__dirname, '../../../client/src/blog');
const loadMarkdownPosts = () => {
    const files = fs_1.default.readdirSync(blogDir2).filter((file) => file.endsWith('.md'));
    return files.map((filename) => {
        const filePath = path_1.default.join(blogDir2, filename);
        const fileContents = fs_1.default.readFileSync(filePath, 'utf-8');
        const { data, content } = (0, gray_matter_1.default)(fileContents);
        return {
            id: filename.replace(/\.md$/, ''),
            ...data, // Assumes frontmatter has title, description, author, etc.
            content,
        };
    });
};
function loadMarkdownData() {
    const files = fs_1.default.readdirSync(blogDir);
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => {
        const raw = fs_1.default.readFileSync(path_1.default.join(blogDir, file), 'utf-8');
        const { data, content } = (0, gray_matter_1.default)(raw);
        return {
            id: file.replace(/\.md$/, ''),
            title: data.title || file,
            slug: (0, slugify_1.slugify)(data.title || file),
            description: data.description || '',
            author: data.authors || '',
            content: (0, slugify_1.slugify)(content || file),
        };
    });
}
exports.default = loadMarkdownPosts;
