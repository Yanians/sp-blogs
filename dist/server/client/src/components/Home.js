"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
// import { getAllBlogPost } from 'getAllBlogPost?@marking';
function Home() {
    const location = (0, react_router_dom_1.useLocation)();
    const { blogsId } = (0, react_router_dom_1.useParams)();
    console.log('from Homepage=========', blogsId);
    const { pathname } = location;
    return ((0, jsx_runtime_1.jsx)("div", { children: "Home Page with SSR rendering" }));
}
;
