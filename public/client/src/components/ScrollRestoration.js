"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScrollRestoration;
// ScrollRestoration.tsx
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
// const scrollPositions = new Map<string, number>();
// export default function ScrollRestoration() {
//   const location = useLocation();
//   const path = location.pathname;
//   const prevPath = useRef(path);
//   // Save scroll position on unmount or path change
//   useEffect(() => {
//     return () => {
//       scrollPositions.set(prevPath.current, window.scrollY);
//     };
//   }, []);
//   useLayoutEffect(() => {
//     const pos = scrollPositions.get(path) ?? 0;
//     window.scrollTo(0, pos);
//     prevPath.current = path;
//   }, [path]);
//   return null;
// }
// packages/client/src/components/ScrollRestoration.tsx
// import { useEffect, useLayoutEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
const scrollPositions = new Map();
function ScrollRestoration() {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const prevPath = (0, react_1.useRef)(pathname);
    // Save scroll position on path change
    (0, react_1.useEffect)(() => {
        return () => {
            scrollPositions.set(prevPath.current, window.scrollY);
        };
    }, []);
    (0, react_1.useLayoutEffect)(() => {
        const scrollY = scrollPositions.get(pathname) ?? 0;
        window.scrollTo({ top: scrollY, left: 0 });
        prevPath.current = pathname;
    }, [pathname]);
    return null;
}
