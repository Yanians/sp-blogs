"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Router;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
// layouts
const BlogsOverview_1 = tslib_1.__importDefault(require("./blog/components/BlogsOverview"));
const Home_1 = tslib_1.__importDefault(require("./components/Home"));
const marking_1 = require("./blog/first.md?@mui/marking");
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
// import Login from './pages/Login';
// import Register from './pages/Register';
// import DashboardApp from './pages/DashboardApp';
// import Movies from './pages/Movies';
const first_1 = tslib_1.__importDefault(require("./blog/first"));
// import User from './pages/User';
// import NotFound from './pages/Page404';
//--------------------------
function Router() {
    const { blogsId } = (0, react_router_dom_1.useParams)();
    const location = (0, react_router_dom_1.useLocation)();
    return (0, react_router_dom_1.useRoutes)([
        {
            path: '/', element: (0, jsx_runtime_1.jsx)(Home_1.default, {}),
            children: [
                { path: 'blogs', element: (0, jsx_runtime_1.jsx)(first_1.default, {}),
                    children: [
                        { path: 'overview', element: (0, jsx_runtime_1.jsx)(BlogsOverview_1.default, {}) }
                    ]
                },
                // { path: 'user', element: <User /> },
                // { path: 'products', element: <Movies /> },
                // { path: 'blog', element: <Blog /> }
            ]
        },
        // {
        //   path: '/',
        //   element: <LogoOnlyLayout />,
        //   children: [
        //     { path: 'login', element: <Login /> },
        //     { path: 'register', element: <Register /> },
        //     { path: '404', element: <NotFound /> },
        //     { path: '/', element: <Navigate to="/dashboard" /> },
        //     { path: '*', element: <Navigate to="/404" /> }
        //   ]
        // },
        // { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}
