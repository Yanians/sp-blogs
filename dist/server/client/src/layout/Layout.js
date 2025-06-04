"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layout;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Footer_1 = tslib_1.__importDefault(require("./Footer"));
const Root_1 = tslib_1.__importDefault(require("./Root"));
const Header_1 = tslib_1.__importDefault(require("./Header"));
const Home_1 = tslib_1.__importDefault(require("../components/Home"));
const GettingStarted_1 = tslib_1.__importDefault(require("../blog/components/GettingStarted"));
const MainRoute_1 = tslib_1.__importDefault(require("../routes/MainRoute"));
const dataDeletionpage_1 = tslib_1.__importDefault(require("../components/dataDeletionpage"));
const Page404_1 = tslib_1.__importDefault(require("../components/Page404"));
const react_router_dom_2 = require("react-router-dom");
const BlogsOverview_1 = tslib_1.__importDefault(require("../blog/components/BlogsOverview"));
const EdgeSidebar_1 = tslib_1.__importDefault(require("./EdgeSidebar"));
const Content_1 = tslib_1.__importDefault(require("./Content"));
const styles_1 = require("@mui/material/styles");
const BlogDetails_1 = tslib_1.__importDefault(require("../blog/components/BlogDetails"));
const ProfilePage_1 = tslib_1.__importDefault(require("../blog/components/pages/ProfilePage"));
const Register_1 = tslib_1.__importDefault(require("../authentication/Register"));
const AuthenticationWrapper = (0, styles_1.styled)('div')(({ theme }) => ({
    '& .body, .html ': {
        margin: 0,
        padding: 0,
        height: '100%',
    },
    '& .registration-container': {
        display: 'table',
        width: '50%',
        margin: '0 auto',
        height: '100vh',
    },
    '& .registration-content': {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
    }
}));
function Layout({ sSrData }) {
    const location = (0, react_router_dom_1.useLocation)();
    if (location.pathname.includes('/authentication')) {
        return ((0, jsx_runtime_1.jsx)(AuthenticationWrapper, { children: (0, jsx_runtime_1.jsx)("div", { className: "html", children: (0, jsx_runtime_1.jsx)("div", { className: "body", children: (0, jsx_runtime_1.jsx)("div", { className: "registration-container", children: (0, jsx_runtime_1.jsx)("div", { className: "registration-content", children: (0, jsx_runtime_1.jsx)(react_router_dom_2.Routes, { children: (0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { path: "authentication", element: (0, jsx_runtime_1.jsx)(Register_1.default, {}) }) }) }) }) }) }) }));
    }
    return ((0, jsx_runtime_1.jsxs)(Root_1.default, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, { sSrData: sSrData }), (0, jsx_runtime_1.jsx)(EdgeSidebar_1.default, { sSrData: sSrData }), (0, jsx_runtime_1.jsx)(Content_1.default, { sSrData: sSrData, children: (0, jsx_runtime_1.jsxs)(react_router_dom_2.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { index: true, path: "/", element: (0, jsx_runtime_1.jsx)(MainRoute_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { path: "home", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_2.Route, { path: "blogs", element: (0, jsx_runtime_1.jsx)(GettingStarted_1.default, { sSrData: sSrData }), children: [(0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { path: ":blogsId", element: (0, jsx_runtime_1.jsx)(BlogsOverview_1.default, { sSrData: sSrData }), children: (0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { path: ":name/:profile", element: (0, jsx_runtime_1.jsx)(ProfilePage_1.default, { sSrData: sSrData }) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { path: ":title/:searchId", element: (0, jsx_runtime_1.jsx)(BlogDetails_1.default, { sSrData: sSrData }) })] }), (0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(Page404_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { path: "data-deletion-status", element: (0, jsx_runtime_1.jsx)(dataDeletionpage_1.default, {}) })] }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
;
