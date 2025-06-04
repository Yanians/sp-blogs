"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScreen = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("@mui/material/utils");
const styles_1 = require("@mui/material/styles");
const mapWidthToScreen_1 = require("../utils/mapWidthToScreen");
const WindowContext_1 = require("../WindowContext");
function getWindowWidth(w) {
    return typeof w === "object" ? w.innerWidth : undefined;
}
const useScreen = () => {
    const { breakpoints } = (0, styles_1.useTheme)();
    const { iWindow } = (0, WindowContext_1.useWindowCtx)();
    const getScreen = () => (0, mapWidthToScreen_1.mapWidthToScreen)(getWindowWidth(iWindow), breakpoints);
    const [screen, setScreen] = react_1.default.useState(getScreen());
    const updater = react_1.default.useRef((0, utils_1.debounce)(() => {
        setScreen(getScreen());
    }, 200));
    react_1.default.useEffect(() => {
        if (iWindow !== undefined) {
            iWindow.addEventListener("resize", updater.current);
            return () => {
                iWindow.removeEventListener("resize", updater.current);
            };
        }
    }, []);
    return screen;
};
exports.useScreen = useScreen;
