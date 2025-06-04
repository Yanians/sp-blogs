"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
function smoothScrollToTop(duration = 900) {
    const start = window.scrollY;
    const startTime = performance.now();
    const scroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
        window.scrollTo(0, start * (1 - ease));
        if (progress < 1) {
            requestAnimationFrame(scroll);
        }
    };
    requestAnimationFrame(scroll);
}
const ScrollToTop = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(() => {
        smoothScrollToTop(1000); // 1 second scroll duration
    }, [pathname]);
    return null;
};
exports.default = ScrollToTop;
