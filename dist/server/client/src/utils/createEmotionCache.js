"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createEmotionCache;
const tslib_1 = require("tslib");
const cache_1 = tslib_1.__importDefault(require("@emotion/cache"));
function createEmotionCache(nonce) {
    return (0, cache_1.default)({
        key: 'css',
        nonce: nonce || undefined,
        prepend: true,
    });
}
