"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = slugify;
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // remove non-word characters
        .trim()
        .replace(/\s+/g, '-'); // replace spaces with -
}
