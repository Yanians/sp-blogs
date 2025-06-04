"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSidebarAutoCollapse = void 0;
const react_1 = require("react");
const useScreen_1 = require("./useScreen");
const Root_1 = require("../Root/Root");
const muiBreakpoints_1 = require("../utils/muiBreakpoints");
const useSidebarAutoCollapse = (sidebarId) => {
    const { builder, setCollapsed } = (0, Root_1.useLayoutCtx)();
    const screen = (0, useScreen_1.useScreen)();
    const prevScreen = (0, react_1.useRef)(screen);
    const collapsedBp = sidebarId ? builder[sidebarId]?.autoCollapse : undefined;
    (0, react_1.useEffect)(() => {
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
