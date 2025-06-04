"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
exports.BlogSchema = new Schema({
    id: { type: mongoose_1.default.Types.ObjectId },
    title: String,
    description: String,
    authors: [String],
    date: { type: Date, default: Date.now },
    image: String,
    tags: [String],
    blogPost: String,
    outputRender: String,
    slug: String,
});
