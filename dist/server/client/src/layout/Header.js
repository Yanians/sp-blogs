"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pages = void 0;
exports.default = Headers;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
//@ts-ignore
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Toolbar_1 = tslib_1.__importDefault(require("@mui/material/Toolbar"));
const layout_core_v5_1 = require("../mui-treasury/layout-core-v5");
const material_1 = require("@mui/material");
const utils_1 = require("../utils");
const HeaderTabs_1 = tslib_1.__importDefault(require("../components/HeaderTabs"));
const BlogSearch_1 = tslib_1.__importDefault(require("../components/searchComponents/BlogSearch"));
const Newspaper_1 = tslib_1.__importDefault(require("@mui/icons-material/Newspaper"));
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const Menu_1 = tslib_1.__importDefault(require("@mui/icons-material/Menu"));
const Article_1 = tslib_1.__importDefault(require("@mui/icons-material/Article"));
const toggleModeButton_1 = tslib_1.__importDefault(require("../components/toggleComponent/toggleModeButton"));
const react_1 = require("@docsearch/react");
const ToggleButton_1 = tslib_1.__importDefault(require("../components/toggleComponent/ToggleButton"));
const system_1 = require("@mui/system");
const Tab_1 = tslib_1.__importDefault(require("@mui/material/Tab"));
const UserAvatarMenu_1 = tslib_1.__importDefault(require("../components/UserAvatarMenu"));
const AuthContext_1 = require("../AuthContext");
const styles_1 = require("@mui/material/styles");
const brandingTheme_1 = require("../utils/brandingTheme");
const styles_2 = require("@mui/material/styles");
const WithTextStyles_1 = tslib_1.__importDefault(require("../components/lib/WithTextStyles"));
// import SocialLoginButton from '../utils/helpers/SocialLoginButton';
const TextHeader = WithTextStyles_1.default;
const HeaderButton = WithTextStyles_1.default;
const TabsModified = WithTextStyles_1.default;
;
exports.pages = [
    {
        id: 1,
        pathname: '/getting-started',
        icon: 'HomeIcon',
        link: [
            { name: '/home' },
            { name: '/blogs' },
            { name: '/management' },
        ]
    }
];
const HeaderStyle = (0, styles_1.styled)(layout_core_v5_1.Header)(({ theme }) => ({}));
const StyledToolbar = (0, styles_1.styled)(Toolbar_1.default)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
}));
const tabMenu = [
    {
        name: 'Blogs',
        icon: (0, jsx_runtime_1.jsx)(Newspaper_1.default, { fontSize: 'small' }),
    },
    {
        name: 'News',
        icon: (0, jsx_runtime_1.jsx)(Article_1.default, { fontSize: 'small' }),
    }
];
function Headers({ sSrData, onLogout }) {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user, login } = (0, AuthContext_1.UseAuth)();
    const { state: { leftEdgeSidebar, rightEdgeSidebar }, toggleLeftSidebarOpen, toggleRightSidebarOpen, } = (0, layout_core_v5_1.useLayoutCtx)();
    const { mode, setMode } = (0, utils_1.useColorSchemeShim)();
    const dispatch = (0, utils_1.useChangeTheme)();
    const [state, setState] = React.useState({
        setStateTabs: 0,
        openLeft: false,
    });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const [loginUser, setUser] = React.useState(null);
    const Navigate = (0, react_router_dom_1.useNavigate)();
    const theme = (0, styles_2.useTheme)();
    const { setMode: setModes } = (0, styles_1.useColorScheme)();
    const mdDown = (0, system_1.useMediaQuery)(theme.breakpoints.down('md'), { noSsr: false });
    const searchButtonRef = React.useRef(null);
    React.useEffect(() => {
        (async () => {
            try {
                const res = await fetch('/api/auth/me', {
                    credentials: 'include', // important for cookies
                });
                if (!res.ok)
                    throw new Error('Not logged in');
                const { user } = await res.json();
                setUser(user);
            }
            catch (err) {
                console.error(err);
            }
        });
    }, []);
    const handleClick = (event) => {
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
            const paths = exports.pages.map((find, _) => find.pathname);
            Navigate(`${paths}`);
        }
    };
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        handleMenuClose();
        // onLogout();
    };
    const handleChangeMode = () => {
        const nextMode = mode === 'dark' ? 'light' : 'dark';
        console.log(nextMode);
        setMode(nextMode); // sets 'mui-mode' and triggers calculatedMode effect
        setModes(nextMode);
        dispatch({ type: 'CHANGE', payload: { paletteMode: nextMode } });
    };
    const handleChangeTabs = (event, newValue) => {
        setState({ ...state, setStateTabs: newValue, });
    };
    const onOpen = React.useCallback(() => {
        setIsOpen(true);
    }, [isOpen]);
    const onClose = React.useCallback(() => {
        setIsOpen(false);
    }, [state]);
    (0, react_1.useDocSearchKeyboardEvents)({
        isOpen,
        onOpen,
        onClose,
        searchButtonRef,
    });
    const { setStateTabs, openLeft, } = state;
    console.log(setStateTabs);
    const handleLeftSibarOpen = () => {
        setState({ ...state, openLeft: !openLeft, });
        toggleLeftSidebarOpen();
    };
    console.log(user);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1, }, flexDirection: 'row', children: (0, jsx_runtime_1.jsx)(layout_core_v5_1.Header, { sx: { display: 'flex', width: 'inherit', height: 'inherit', marginTop: 5, }, children: (0, jsx_runtime_1.jsxs)(Toolbar_1.default, { children: [(0, jsx_runtime_1.jsx)(layout_core_v5_1.EdgeTrigger, { target: { anchor: "left", field: "collapsed" }, children: (open, setOpen) => ((0, jsx_runtime_1.jsx)(HeaderButton, { serve: material_1.IconButton, onClick: e => {
                                openLeft ? setOpen(!open) : handleLeftSibarOpen();
                            }, textContent: (0, jsx_runtime_1.jsx)(Menu_1.default, { fontSize: "small", color: 'inherit' }) })) }), (0, jsx_runtime_1.jsx)(TextHeader, { sx: { flexGrow: 1 }, noWrap: true, color: 'success', platino: true, mui: true, variant: 'h6', types: 'typography', textContent: "SP-Blogs" }), (0, jsx_runtime_1.jsx)(TabsModified, { mui: true, gadget: true, textContent: (0, jsx_runtime_1.jsx)(HeaderTabs_1.default, { value: setStateTabs, onChange: handleChangeTabs, tabs: tabMenu.map((item, index) => {
                                return ((0, jsx_runtime_1.jsx)(Tab_1.default, { iconPosition: 'top', label: item.name, icon: item.icon }, index + 1));
                            }) }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1 } }), (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { willOpen: onOpen }), (0, jsx_runtime_1.jsx)(BlogSearch_1.default, { sSrData: sSrData, open: isOpen, onClose: onClose }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1 } }), (0, jsx_runtime_1.jsx)(material_1.ButtonGroup
                    // color={lightTheme.palette.mode === 'dark' ? "primary" : "secondary"}
                    , { 
                        // color={lightTheme.palette.mode === 'dark' ? "primary" : "secondary"}
                        variant: "outlined", "aria-label": "Basic button group", color: "primary", children: mdDown ? null : exports.pages.map((find) => {
                            return find['link']?.map((path) => {
                                return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(material_1.Button, { sx: {
                                            textAlign: 'center',
                                            color: (0, styles_2.alpha)((brandingTheme_1.brandingLightThemes.vars || theme).palette.primaryDark[900], .99),
                                        }, onClick: (e) => handleClick(e), children: path.name?.replace(/\//g, '') }) }, path.name));
                            });
                        }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1 } }), user ? ((0, jsx_runtime_1.jsx)(UserAvatarMenu_1.default, {})) : ((0, jsx_runtime_1.jsx)(material_1.Button, { onClick: () => Navigate('/authentication'), children: "Login" })), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1 } }), (0, jsx_runtime_1.jsx)(toggleModeButton_1.default, { handleChangeMode: handleChangeMode, mode: mode })] }) }) }));
}
