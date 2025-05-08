"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScreen = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var utils_1 = require("@mui/material/utils");
var styles_1 = require("@mui/material/styles");
var mapWidthToScreen_1 = require("../utils/mapWidthToScreen");
var WindowContext_1 = require("../WindowContext");
function getWindowWidth(w) {
    return typeof w === "object" ? w.innerWidth : undefined;
}
var useScreen = function () {
    var breakpoints = (0, styles_1.useTheme)().breakpoints;
    var iWindow = (0, WindowContext_1.useWindowCtx)().iWindow;
    var getScreen = function () {
        return (0, mapWidthToScreen_1.mapWidthToScreen)(getWindowWidth(iWindow), breakpoints);
    };
    var _a = react_1.default.useState(getScreen()), screen = _a[0], setScreen = _a[1];
    var updater = react_1.default.useRef((0, utils_1.debounce)(function () {
        setScreen(getScreen());
    }, 200));
    react_1.default.useEffect(function () {
        if (iWindow !== undefined) {
            iWindow.addEventListener("resize", updater.current);
            return function () {
                iWindow.removeEventListener("resize", updater.current);
            };
        }
    }, []);
    return screen;
};
exports.useScreen = useScreen;
