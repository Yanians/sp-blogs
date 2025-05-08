"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSidebarAutoCollapse = void 0;
var react_1 = require("react");
var useScreen_1 = require("./useScreen");
var Root_1 = require("../Root/Root");
var muiBreakpoints_1 = require("../utils/muiBreakpoints");
var useSidebarAutoCollapse = function (sidebarId) {
    var _a;
    var _b = (0, Root_1.useLayoutCtx)(), builder = _b.builder, setCollapsed = _b.setCollapsed;
    var screen = (0, useScreen_1.useScreen)();
    var prevScreen = (0, react_1.useRef)(screen);
    var collapsedBp = sidebarId ? (_a = builder[sidebarId]) === null || _a === void 0 ? void 0 : _a.autoCollapse : undefined;
    (0, react_1.useEffect)(function () {
        if (sidebarId && collapsedBp && screen && prevScreen.current) {
            if (screen === prevScreen.current &&
                muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(screen) <= muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(collapsedBp)) {
                // first mount on browser
                setCollapsed(sidebarId, true);
            }
            // when viewport changes
            if (screen !== prevScreen.current) {
                if (muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(prevScreen.current) <=
                    muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(collapsedBp) &&
                    muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(collapsedBp) < muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(screen)) {
                    setCollapsed(sidebarId, false);
                }
                if (muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(prevScreen.current) >
                    muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(collapsedBp) &&
                    muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(collapsedBp) >=
                        muiBreakpoints_1.BREAKPOINT_KEYS.indexOf(screen)) {
                    setCollapsed(sidebarId, true);
                }
                prevScreen.current = screen;
            }
        }
    }, [screen]);
};
exports.useSidebarAutoCollapse = useSidebarAutoCollapse;
