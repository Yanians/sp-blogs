"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
;
;
;
function Main({ children, className }) {
    return (0, jsx_runtime_1.jsx)("main", { className: className, children: children });
}
;
function Header({ children, role }) {
    return ((0, jsx_runtime_1.jsx)("header", { role: role, children: children }));
}
;
function Title({ children, className }) {
    return (0, jsx_runtime_1.jsx)("div", { className: className, id: "id_website_title", children: children });
}
;
function Tagline({ children }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "tagline", children: children }));
}
;
function Div({ children, className }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: className, children: children }));
}
;
function NavItem({ children, ariaLabel }) {
    return ((0, jsx_runtime_1.jsx)("nav", { "aria-label": ariaLabel, children: children }));
}
;
function UlItem({ children, role, id, className, ariaLabel }) {
    return ((0, jsx_runtime_1.jsx)("ul", { className: className, role: role, "aria-label": ariaLabel, id: id, children: children }));
}
function Tree({ children, onClick, role }) {
    return ((0, jsx_runtime_1.jsx)("li", { role: role, onClick: onClick, children: children }));
}
;
function Anchor(props) {
    const { ariaExpanded, type: Component = 'a', role, href, to, children, ariaOwns, ariaCurrent, ...rest } = props;
    return ((0, jsx_runtime_1.jsx)(Component, { "aria-expanded": ariaExpanded, href: href, role: role, to: to, "aria-current": ariaCurrent, "aria-owns": ariaOwns, ...rest, children: children }));
}
function Span({ children, onClick, className }) {
    return ((0, jsx_runtime_1.jsx)("span", { className: className, onClick: onClick, children: children }));
}
exports.default = {
    Main,
    Tree,
    Anchor,
    Span,
    NavItem,
    Header,
    Div,
    UlItem,
};
