"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollY = void 0;
const react_1 = require("react");
const utils_1 = require("@mui/material/utils");
const WindowContext_1 = require("../WindowContext");
function getScrollY(obj) {
    return typeof obj === "object" ? obj.scrollY : undefined;
}
const useScrollY = (disabled) => {
    const { iWindow } = (0, WindowContext_1.useWindowCtx)();
    const [scrollY, setScrollY] = (0, react_1.useState)(getScrollY(iWindow));
    const debounceScrollListener = (0, react_1.useRef)((0, utils_1.debounce)(() => {
        setScrollY(getScrollY(iWindow));
    }, 300));
    (0, react_1.useEffect)(() => {
        if (!disabled && iWindow !== undefined) {
            iWindow.addEventListener("scroll", debounceScrollListener.current);
            return () => {
                iWindow.removeEventListener("scroll", debounceScrollListener.current);
            };
        }
    }, [disabled]);
    return scrollY;
};
exports.useScrollY = useScrollY;
