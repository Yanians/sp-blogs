"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useLazyCSS;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const fg_loadcss_1 = require("fg-loadcss");
/**
 * Convenience wrapper around fgLoadCSS for hooks usage
 * @param {string} href
 * @param {string} before - CSS selector
 * @returns {() => void} cleanup function
 */
function useLazyCSS(href, before) {
    React.useEffect(() => {
        const link = (0, fg_loadcss_1.loadCSS)(href, document.querySelector(before));
        return () => {
            link?.parentElement?.removeChild(link);
        };
    }, [href, before]);
}
