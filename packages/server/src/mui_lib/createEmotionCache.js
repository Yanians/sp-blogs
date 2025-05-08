"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createEmotionCache;
var tslib_1 = require("tslib");
var cache_1 = tslib_1.__importDefault(require("@emotion/cache"));
function createEmotionCache() {
    return (0, cache_1.default)({
        key: 'css',
        prepend: true // important to insert style before MUI
    });
}
