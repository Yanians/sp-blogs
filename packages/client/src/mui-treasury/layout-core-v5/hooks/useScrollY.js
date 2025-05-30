"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollY = void 0;
var react_1 = require("react");
var utils_1 = require("@mui/material/utils");
var WindowContext_1 = require("../WindowContext");
function getScrollY(obj) {
    return typeof obj === "object" ? obj.scrollY : undefined;
}
var useScrollY = function (disabled) {
    var iWindow = (0, WindowContext_1.useWindowCtx)().iWindow;
    var _a = (0, react_1.useState)(getScrollY(iWindow)), scrollY = _a[0], setScrollY = _a[1];
    var debounceScrollListener = (0, react_1.useRef)((0, utils_1.debounce)(function () {
        setScrollY(getScrollY(iWindow));
    }, 300));
    (0, react_1.useEffect)(function () {
        if (!disabled && iWindow !== undefined) {
            iWindow.addEventListener("scroll", debounceScrollListener.current);
            return function () {
                iWindow.removeEventListener("scroll", debounceScrollListener.current);
            };
        }
    }, [disabled]);
    return scrollY;
};
exports.useScrollY = useScrollY;
