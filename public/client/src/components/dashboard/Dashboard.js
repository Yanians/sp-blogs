"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate20Deg = void 0;
exports.default = Dashboard;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const Drawer_1 = tslib_1.__importDefault(require("@mui/material/Drawer"));
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const AppBar_1 = tslib_1.__importDefault(require("@mui/material/AppBar"));
const Toolbar_1 = tslib_1.__importDefault(require("@mui/material/Toolbar"));
const List_1 = tslib_1.__importDefault(require("@mui/material/List"));
const Divider_1 = tslib_1.__importDefault(require("@mui/material/Divider"));
const Container_1 = tslib_1.__importDefault(require("@mui/material/Container"));
const Grid_1 = tslib_1.__importDefault(require("@mui/material/Grid"));
const Paper_1 = tslib_1.__importDefault(require("@mui/material/Paper"));
const ChevronLeft_1 = tslib_1.__importDefault(require("@mui/icons-material/ChevronLeft"));
const listItems_1 = require("./listItems");
const IconButton_1 = tslib_1.__importDefault(require("@mui/material/IconButton"));
;
const Chart_1 = tslib_1.__importDefault(require("./Chart"));
const Deposits_1 = tslib_1.__importDefault(require("./Deposits"));
const Orders_1 = tslib_1.__importDefault(require("./Orders"));
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    top: 0,
    left: 0,
}));
;
const drawerWidth = 200;
exports.Rotate20Deg = (0, styles_1.styled)(IconButton_1.default, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, rotate }) => ({
    transform: rotate ? 'rotate(-20deg' : 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.complex,
    })
}));
const AppBar = (0, styles_1.styled)(AppBar_1.default, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const Drawer = (0, styles_1.styled)(Drawer_1.default, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        flexShrink: 0,
        transform: open ? 'rotate(-20deg' : 'rotate(0deg)',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }),
    },
}));
function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return ((0, jsx_runtime_1.jsx)(AppBar, { position: 'relative', children: (0, jsx_runtime_1.jsxs)(Toolbar_1.default, { children: [(0, jsx_runtime_1.jsxs)(Drawer, { anchor: "left", variant: "persistent", open: open, children: [(0, jsx_runtime_1.jsx)(Toolbar_1.default, { sx: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                px: [1],
                            }, children: (0, jsx_runtime_1.jsx)(ChevronLeft_1.default, {}) }), (0, jsx_runtime_1.jsx)(Divider_1.default, {}), (0, jsx_runtime_1.jsxs)(List_1.default, { component: "nav", children: [listItems_1.mainListItems, (0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { my: 1 } }), listItems_1.secondaryListItems] })] }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "main", sx: {
                        backgroundColor: (theme) => theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[700],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }, children: [(0, jsx_runtime_1.jsx)(Toolbar_1.default, {}), (0, jsx_runtime_1.jsx)(Container_1.default, { maxWidth: "lg", sx: { mt: 4, mb: 4 }, children: (0, jsx_runtime_1.jsxs)(Grid_1.default, { container: true, spacing: 3, children: [(0, jsx_runtime_1.jsx)(Grid_1.default, { size: { xs: 12, md: 8, lg: 9, }, children: (0, jsx_runtime_1.jsx)(Paper_1.default, { sx: {
                                                p: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: 240,
                                            }, children: (0, jsx_runtime_1.jsx)(Chart_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(Grid_1.default, { size: { xs: 12, md: 4, lg: 3, }, children: (0, jsx_runtime_1.jsx)(Paper_1.default, { sx: {
                                                p: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: 240,
                                            }, children: (0, jsx_runtime_1.jsx)(Deposits_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(Grid_1.default, { size: { xs: 12 }, children: (0, jsx_runtime_1.jsx)(Paper_1.default, { sx: { p: 2, display: 'flex', flexDirection: 'column' }, children: (0, jsx_runtime_1.jsx)(Orders_1.default, {}) }) })] }) })] })] }) }));
}
function Dashboard() {
    return (0, jsx_runtime_1.jsx)(DashboardContent, {});
}
