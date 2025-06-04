"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const analyticsSchema = new mongoose_1.default.Schema({
    event: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    data: { type: Object },
});
const Analytics = mongoose_1.default.model('Analytics', analyticsSchema);
exports.default = Analytics;
