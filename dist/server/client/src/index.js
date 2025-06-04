"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importDefault(require("react"));
const client_1 = require("react-dom/client");
const ErrorBoundary_1 = tslib_1.__importDefault(require("./ErrorBoundary"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("./redux/store");
const App_1 = tslib_1.__importDefault(require("./App"));
require("./index.css");
require("@docsearch/css");
require("prismjs/themes/prism-tomorrow.css");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
const ScrollToTop_1 = tslib_1.__importDefault(require("./components/ScrollToTop"));
// import LoaderCss from "./components/Loader";
const nonce = document.querySelector('style[name="client_extraction"]')?.getAttribute('nonce') ?? undefined;
const root = document.getElementById("root");
const jsx = (0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.default, { children: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.store, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(ScrollToTop_1.default, {}), (0, jsx_runtime_1.jsx)(App_1.default, { sSrData: window.__PRELOADED_STATE__, nonce: nonce })] }) }) }) });
// const hydrate = () => {
//   return React.startTransition( () => {
//         hydrateRoot(root, jsx);
//   }) 
// }
// if (window.requestIdleCallback) {
//   window.requestIdleCallback(hydrate);
// } else {
//   // Safari doesn't support requestIdleCallback
//   // https://caniuse.com/requestidlecallback
//   setTimeout(hydrate, 1);
// }
/***** THIS IS USED IN DEVELOPMENT */
if (root) {
    if (root.hasChildNodes()) {
        console.log('🚀 SSR scripts');
        react_1.default.startTransition(() => {
            (0, client_1.hydrateRoot)(root, jsx);
        });
    }
    else {
        console.log('🚀 CSR scripts');
        console.log('first element inside body tag ', document.body.firstElementChild);
        const roots = (0, client_1.createRoot)(root);
        roots.render(jsx);
    }
}
else {
    console.log('This page is from Client');
}
