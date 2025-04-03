"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createEmotionCache;
var _cache = _interopRequireDefault(require("@emotion/cache"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function createEmotionCache() {
  return (0, _cache["default"])({
    key: 'css'
  });
}