"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createEmotionCache;
var _cache = _interopRequireDefault(require("@emotion/cache"));
function createEmotionCache(nonce) {
  return (0, _cache.default)({
    key: 'css',
    nonce: nonce || undefined,
    prepend: true
  });
}