"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
//@ts-nocheck
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = tslib_1.__importDefault(require("./components/Home"));
const GettingStarted_1 = tslib_1.__importDefault(require("./blog/components/GettingStarted"));
const BlogDetails_1 = tslib_1.__importDefault(require("./blog/components/BlogDetails"));
const MainRoute_1 = tslib_1.__importDefault(require("./routes/MainRoute"));
const Page404_1 = tslib_1.__importDefault(require("./components/Page404"));
const BlogsOverview_1 = tslib_1.__importDefault(require("./blog/components/BlogsOverview"));
const App = () => {
    return ((0, jsx_runtime_1.jsx)(React.Fragment, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, path: "/", element: (0, jsx_runtime_1.jsx)(MainRoute_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "home", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "blogs", element: (0, jsx_runtime_1.jsx)(GettingStarted_1.default, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ":blogsId", element: (0, jsx_runtime_1.jsx)(BlogsOverview_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ":title/:searchId", element: (0, jsx_runtime_1.jsx)(BlogDetails_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(Page404_1.default, {}) })] }) }));
};
exports.default = App;
