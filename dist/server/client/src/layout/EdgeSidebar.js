"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EdgeSideBar;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ListSubheader_1 = tslib_1.__importDefault(require("@mui/material/ListSubheader"));
const KeyboardArrowRight_1 = tslib_1.__importDefault(require("@mui/icons-material/KeyboardArrowRight"));
const KeyboardArrowLeft_1 = tslib_1.__importDefault(require("@mui/icons-material/KeyboardArrowLeft"));
const material_1 = require("@mui/material");
const layout_core_v5_1 = require("../mui-treasury/layout-core-v5");
const WithTextStyles_1 = tslib_1.__importDefault(require("../components/lib/WithTextStyles"));
const Invoker = tslib_1.__importStar(require("./Header"));
const directives_1 = tslib_1.__importDefault(require("../components/lib/directives"));
const Treeview_1 = tslib_1.__importDefault(require("./Skeleton/Treeview"));
const material_2 = require("@mui/material");
const utilityTypes_1 = require("../components/lib/utilityTypes");
const HeaderButton = WithTextStyles_1.default;
const TriggerUsingHook = (props) => {
    const { Tree, Anchor, Span, NavItem, Header, Div, UlItem, } = Treeview_1.default;
    const [open, isClose] = React.useState(false);
    const [openLeft, setOpenLeft] = React.useState(false);
    //  const { ListItemStyle, LinkModified, } = Directives();
    const ItemButton = utilityTypes_1.PassThrough;
    const Text = utilityTypes_1.PassThrough;
    //@ts-ignore
    const { state: { leftEdgeSidebar, rightEdgeSidebar }, toggleLeftSidebarOpen, toggleRightSidebarOpen, toggleLeftSidebarCollapsed, toggleRightSidebarCollapsed, setOpen, setCollapsed, } = (0, layout_core_v5_1.useLayoutCtx)();
    const [state, setState] = React.useState({
        spblogExpanded: false,
        packagesExpanded: false,
        clientExpanded: false,
        serverExpanded: false,
        isSelected: false,
    });
    const handleLeftChange = () => {
        toggleLeftSidebarOpen();
        setOpenLeft(!openLeft);
    };
    const handleRightChange = () => {
        toggleRightSidebarOpen();
        isClose(!open);
    };
    const { isSelected, spblogExpanded, packagesExpanded, clientExpanded, serverExpanded } = state;
    const handleClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const conts = event.currentTarget.parentElement?.textContent;
        if (conts === "sp-blogs") {
            setState({
                ...state,
                spblogExpanded: !spblogExpanded,
                isSelected: !isSelected,
            });
        }
        else if (conts === "packages") {
            setState({
                ...state,
                packagesExpanded: !packagesExpanded,
                isSelected: !isSelected,
            });
        }
        else if (conts === "client") {
            setState({
                ...state,
                clientExpanded: !clientExpanded,
                isSelected: !isSelected,
            });
        }
        else if (conts === "server") {
            setState({
                ...state,
                serverExpanded: !serverExpanded,
                isSelected: !isSelected,
            });
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(material_2.Box, { sx: { p: 1, }, children: [(0, jsx_runtime_1.jsx)(Div, { className: 'page', children: (0, jsx_runtime_1.jsxs)(Header, { role: 'banner', children: [(0, jsx_runtime_1.jsx)(Div, { className: 'title', id: "id_website_title", children: "Project Structure" }), (0, jsx_runtime_1.jsx)(Div, { className: 'tagline', children: "Management" })] }) }), (0, jsx_runtime_1.jsx)(Div, { className: 'body', children: (0, jsx_runtime_1.jsx)(NavItem, { role: 'none', "aria-label": "Mythical University", children: (0, jsx_runtime_1.jsx)(UlItem, { role: "tree", "aria-label": "Mythical University", className: "treeview-navigation", children: (0, jsx_runtime_1.jsxs)(Tree, { role: "none", children: [(0, jsx_runtime_1.jsx)(Anchor, { role: 'treeitem', type: react_router_dom_1.Link, to: "/sp-blogs", ariaExpanded: spblogExpanded, ariaOwns: "id-about-subtree", children: (0, jsx_runtime_1.jsxs)(Span, { className: 'label', children: [(0, jsx_runtime_1.jsx)(Span, { className: 'icon', onClick: (e) => handleClick(e), children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "13", height: "10", viewBox: "0 0 13 10", children: (0, jsx_runtime_1.jsx)("polygon", { points: "2 1, 12 1, 7 9" }) }) }), "sp-blogs"] }) }), (0, jsx_runtime_1.jsxs)(UlItem, { "aria-label": 'packages', id: "id-report-subtree", role: "group", className: 'treeview-group', children: [(0, jsx_runtime_1.jsxs)(Tree, { role: 'none', className: "li-report-tree", children: [(0, jsx_runtime_1.jsx)(Anchor, { type: react_router_dom_1.Link, to: "sp-blogs/packages", role: 'treeitem', ariaExpanded: packagesExpanded, children: (0, jsx_runtime_1.jsxs)(Span, { className: 'label', children: [(0, jsx_runtime_1.jsx)(Span, { className: 'icon', onClick: (e) => handleClick(e), children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http  ://www.w3.org/2000/svg", width: "13", height: "10", viewBox: "0 0 13 10", children: (0, jsx_runtime_1.jsx)("polygon", { points: "2 1, 12 1, 7 9" }) }) }), "packages"] }) }), (0, jsx_runtime_1.jsx)(UlItem, { "aria-label": 'server-client', id: "id-about-folders", role: "group", children: ['client', 'server'].map((name) => {
                                                            return ((0, jsx_runtime_1.jsxs)(Tree, { role: 'none', children: [(0, jsx_runtime_1.jsx)(Anchor, { type: react_router_dom_1.Link, to: `sp-blogs/packages/${name}`, role: 'treeitem', ariaExpanded: name === "client" ? clientExpanded : serverExpanded, children: (0, jsx_runtime_1.jsxs)(Span, { className: 'label', children: [(0, jsx_runtime_1.jsx)(Span, { className: 'icon', onClick: (e) => handleClick(e), children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http  ://www.w3.org/2000/svg", width: "13", height: "10", viewBox: "0 0 13 10", children: (0, jsx_runtime_1.jsx)("polygon", { points: "2 1, 12 1, 7 9" }) }) }), name] }) }), name === "server" ? ((0, jsx_runtime_1.jsx)(UlItem, { "aria-label": 'components', id: "id-about-design", role: "group", children: ['dist', 'node_modules', 'public', 'src', 'babel.config.json', 'packagelock.json', 'package.json', 'tsconfig.json', 'webpack.config.js']
                                                                            .map((type) => {
                                                                            return ((0, jsx_runtime_1.jsx)(Tree, { role: 'none', children: (0, jsx_runtime_1.jsx)(Anchor, { type: react_router_dom_1.Link, to: `sp-blogs/packages/${name}/${type}`, role: "treeitem", children: (0, jsx_runtime_1.jsx)(Span, { className: 'label', children: type }) }) }, type));
                                                                        }) })) : ((0, jsx_runtime_1.jsx)(UlItem, { "aria-label": 'components', id: "id-about-design", role: "group", children: ['blog', 'dist', 'ecommerse', 'node_modules', 'public', 'src', 'babel.config.json', 'packagelock.json', 'package.json', 'tsconfig.json', 'webpack.config.js', 'webpack.build.js']
                                                                            .map((type) => {
                                                                            return ((0, jsx_runtime_1.jsx)(Tree, { role: 'none', children: (0, jsx_runtime_1.jsx)(Anchor, { type: react_router_dom_1.Link, to: `sp-blogs/packages/${name}/${type}`, role: "treeitem", children: (0, jsx_runtime_1.jsx)(Span, { className: 'label', children: type }) }) }, type));
                                                                        }) }))] }, name));
                                                        }) })] }), ['.babelrc', '.eslintrc', '.gitignore', '.mui-treasury.config.js', 'package-lock.json', 'package.json', 'tsconfig.json', 'webpack.config.js']
                                                .map((name) => {
                                                return ((0, jsx_runtime_1.jsx)(Tree, { role: 'none', children: (0, jsx_runtime_1.jsx)(Anchor, { type: react_router_dom_1.Link, to: `/sp-blogs/${name}`, role: 'treeitem', children: (0, jsx_runtime_1.jsx)(Span, { className: 'label', children: name }) }) }, name));
                                            })] })] }) }) }) })] }) }));
};
function EdgeSideBar(props) {
    const { sSrData } = props;
    const theme = (0, material_1.useTheme)();
    const mdUp = (0, material_1.useMediaQuery)(theme.breakpoints.up('md'), { noSsr: true });
    const Navigate = (0, react_router_dom_1.useNavigate)();
    const { ListItemStyle } = (0, directives_1.default)();
    // const { data } = UseBlogPost();
    const { toggleLeftSidebarCollapsed, toggleRightSidebarCollapsed, toggleRightSidebarOpen } = (0, layout_core_v5_1.useLayoutCtx)();
    // const data:Record<string, number | any> = [];
    const handleClick = (event) => {
        toggleLeftSidebarCollapsed();
        const name = event.target.textContent;
        if (name === 'home') {
            return Navigate('/');
        }
        else if (name === 'blogs') {
            return Navigate('/blogs');
        }
        else if (name === "documentation") {
            return Navigate('/documentation');
        }
        else if (name === "tooling") {
            return Navigate('/tooling');
        }
        else if (name === 'news') {
            return Navigate('/news');
        }
        else if (name === "projects") {
            return Navigate('/projects');
        }
        else if (name === 'management') {
            return Navigate('/management');
        }
        else {
            const paths = Invoker?.pages.map((find, _) => find.pathname);
            Navigate(`${paths}`);
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(layout_core_v5_1.EdgeSidebar, { anchor: "left", children: ({ state: { leftEdgeSidebar }, toggleLeftSidebarCollapsed }) => ((0, jsx_runtime_1.jsxs)(layout_core_v5_1.SidebarContent, { children: [(0, jsx_runtime_1.jsx)(material_2.Avatar, { alt: "unknown Avatar", sx: {
                            ...(leftEdgeSidebar?.collapsed && { width: 40, height: 40 }),
                        }, children: "A" }), (0, jsx_runtime_1.jsx)(material_2.List, { sx: { bgcolor: 'inherit' }, children: (0, jsx_runtime_1.jsx)(ListSubheader_1.default, { inset: true, sx: { bgcolor: 'inherit' }, children: "Management" }) }), (0, jsx_runtime_1.jsx)(material_1.ButtonGroup, { sx: {
                            display: 'flex',
                            flexGrow: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }, orientation: 'vertical', variant: 'text', "aria-label": "vertical-page-group", children: mdUp ? null : Invoker.pages.map((find) => {
                            return find['link']?.map((path) => {
                                return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(HeaderButton, { color: 'inherit', onClick: (e) => handleClick(e), gadget: true, serve: material_1.Button, textContent: `${path.name?.replace(/\//g, '')}` }) }, path.name));
                            });
                        }) }), (0, jsx_runtime_1.jsx)(layout_core_v5_1.EdgeTrigger, { target: { anchor: "left", field: "collapsed" }, children: (collapsed, setCollapsed) => ((0, jsx_runtime_1.jsx)(material_2.ButtonBase, { onClick: () => setCollapsed(!collapsed), sx: {
                                width: '100%',
                                minHeight: 40,
                                bgcolor: "inherit",
                                borderTop: "1px solid grey",
                                borderColor: "grey.400",
                            }, children: collapsed ? (0, jsx_runtime_1.jsx)(KeyboardArrowRight_1.default, {}) : (0, jsx_runtime_1.jsx)(KeyboardArrowLeft_1.default, {}) })) })] })) }) }));
}
