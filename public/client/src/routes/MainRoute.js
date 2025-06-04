"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainRoute;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const styles_1 = require("@mui/material/styles");
const Container_1 = tslib_1.__importDefault(require("@mui/material/Container"));
const Divider_1 = tslib_1.__importDefault(require("@mui/material/Divider"));
const styles_2 = require("@mui/material/styles");
const Avatar_1 = tslib_1.__importDefault(require("@mui/material/Avatar"));
const Paper_1 = tslib_1.__importDefault(require("@mui/material/Paper"));
const system_1 = require("@mui/system");
const Stack_1 = tslib_1.__importDefault(require("@mui/material/Stack"));
const AuthContext_1 = require("../AuthContext");
const WithTextStyles_1 = tslib_1.__importDefault(require("../components/lib/WithTextStyles"));
const ModifiedText = WithTextStyles_1.default;
const Root = (0, styles_1.styled)(Container_1.default)(({ theme }) => ({
    display: 'flex',
    overflow: 'hidden',
    '& .left-grid-layout': {
        backgroundBlendMode: 'lighten',
    },
    '& .right-grid-layout': {
        backgroundBlendMode: 'lighten',
    },
    '& .background-one': {
        background: ' url("/abstract-vector.jpg") no-repeat center',
        with: '100%',
        height: 'auto',
        backgroundOrigin: 'initial',
        backgroundBlendMode: 'lighten',
    },
    '& .background-two': {
        background: ' url("/ampere-porting-advisor.jpg") no-repeat center',
        with: '100%',
        height: 'auto',
        backgroundOrigin: 'initial',
        backgroundBlendMode: 'lighten',
    },
}));
function MainRoute() {
    const { token } = (0, AuthContext_1.UseAuth)();
    const theme = (0, styles_2.useTheme)();
    const smDown = (0, system_1.useMediaQuery)(theme.breakpoints.down('sm'), { noSsr: true });
    return ((0, jsx_runtime_1.jsx)(Root, { maxWidth: "xl", disableGutters: true, children: (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "div", sx: {
                display: 'grid',
                width: '100%',
                gridAutoColumns: smDown ? '100%' : '50% 50% 100%',
                gridAutoRows: 'auto auto auto',
            }, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { className: "left-grid-layout", sx: {
                        width: '100%',
                        alignSelft: 'center',
                        height: 'auto',
                        gridColumnStart: smDown ? 1 : 1,
                        gridRowStart: smDown ? 2 : 1,
                    }, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
                                display: 'grid',
                                width: '100%',
                                gridAutoColumns: '65% 25%',
                                gridAutoRows: 'auto auto',
                            }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                                        width: '100%',
                                        height: 'auto',
                                        alignSelft: 'center',
                                        gridColumnStart: 1,
                                    }, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { variant: 'square', src: '/user-profile-bg.jpg', alt: "usre-profile-bg", sx: { width: '100%', height: 'auto' } }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: 'div', sx: {
                                        display: 'grid',
                                        flexGrow: 2,
                                        width: '100%',
                                        height: 'auto',
                                        alignSelft: 'center',
                                        gridColumnStart: 2,
                                    }, children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: 'column', spacing: 2, sx: {
                                            flexGrow: 1, width: '100%', height: 'auto', m: 2,
                                            position: 'relative', top: 10, left: 0,
                                        }, children: [(0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", className: 'background-one', sx: { pl: 1 }, children: (0, jsx_runtime_1.jsx)(ModifiedText, { types: 'typography', mui: true, impact: true, component: 'div', noWrap: true, variant: "h4", color: "success", textContent: "News Update" }) }), (0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", className: 'background-two', sx: { pl: 1, width: 'default', height: 100 }, children: (0, jsx_runtime_1.jsx)(ModifiedText, { types: 'typography', mui: true, impact: true, component: 'div', noWrap: true, variant: "h4", color: "secondary", textContent: "Blogs 2025" }) })] }) })] }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: 'div', sx: {
                                flexGrow: 1,
                                width: '100%',
                                height: 'auto',
                                alignSelft: 'center',
                                gridColumnStart: 1,
                                gridRowStart: 2,
                            }, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { variant: 'square', src: "/blog-cluster.jpg", alt: "javascript-language", sx: { width: '100%', height: 'auto' } }) })] }), (0, jsx_runtime_1.jsx)(Box_1.default, { className: "right-grid-layout", sx: {
                        width: '100%',
                        height: 'auto',
                        alignSelft: 'center',
                        gridColumnStart: smDown ? 1 : 2,
                        gridRowStart: smDown ? 1 : 1,
                    }, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { variant: 'square', src: '/bloggers-markdown.jpg', sx: { width: '100%', height: 'auto' }, alt: "bloggers-markdown.jpg" }) }), (0, jsx_runtime_1.jsx)(Divider_1.default, { variant: "middle", orientation: "vertical", spacing: 1 }), (0, jsx_runtime_1.jsx)(Box_1.default, { className: "right-grid-layout", sx: {
                        width: '100%',
                        height: 'auto',
                        alignSelft: 'center',
                        gridColumnStart: smDown ? 1 : 'span 2',
                        gridRowStart: smDown ? 3 : 2,
                    }, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { variant: 'square', src: '/NEWS-UI.jpg', sx: { width: '100%', height: 'auto' }, alt: "bloggers-markdown.jpg" }) })] }) }));
}
