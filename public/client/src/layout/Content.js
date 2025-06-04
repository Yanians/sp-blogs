"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Content;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_core_v5_1 = require("../mui-treasury/layout-core-v5");
const Container_1 = tslib_1.__importDefault(require("@mui/material/Container"));
const layout_core_v5_2 = require("../mui-treasury/layout-core-v5");
const react_router_dom_1 = require("react-router-dom");
const system_1 = require("@mui/system");
const styles_1 = require("@mui/material/styles");
const styles_2 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
const Root = (0, styles_2.styled)('div')(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    width: '100%',
    '& .MuiContainer-root': {
        width: '100%',
        paddingLeft: 6,
        paddingRight: 6,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft: 0,
            paddingRight: 10,
            paddingLeft: 10
        }
    }
}));
function Content(props) {
    const { children, sSrData } = props;
    const theme = (0, styles_1.useTheme)();
    const { blogsId } = (0, react_router_dom_1.useParams)();
    const location = (0, react_router_dom_1.useLocation)();
    const Navigate = (0, react_router_dom_1.useNavigate)();
    console.log(blogsId);
    const smDown = (0, system_1.useMediaQuery)(theme.breakpoints.down('sm'), { noSsr: true });
    return ((0, jsx_runtime_1.jsx)(Root, { children: (0, jsx_runtime_1.jsx)(layout_core_v5_1.Content, { sx: { bgcolor: 'background.paper' }, children: (0, jsx_runtime_1.jsx)(layout_core_v5_1.InsetContainer, { sx: {
                    width: 'auto',
                    marginTop: 2,
                    marginLeft: 0,
                    marginRight: 0,
                }, rightSidebar: (0, jsx_runtime_1.jsx)(layout_core_v5_2.InsetSidebar, { anchor: 'right', sx: {
                        width: 'auto',
                        marginLeft: 0,
                        marginRight: 0,
                    }, children: sSrData?.map((item, index) => {
                        if (location.pathname.includes("/news")
                            || location.pathname.includes("/home")
                            || location.pathname.includes("/tooling")
                            || location.pathname.includes("/management")
                            || location.pathname.includes("/projects")
                            || location.pathname.includes("/documentation")) {
                            return null;
                        }
                        ;
                        return smDown ? null : location.pathname.includes('/managment') ? null :
                            ((0, jsx_runtime_1.jsx)(material_1.ButtonGroup, { fullWidth: true, size: 'small', orientation: "vertical", "aria-label": "Vertical button group", variant: "text", children: (0, jsx_runtime_1.jsx)(material_1.Button, { size: "small", startIcon: (0, jsx_runtime_1.jsx)(material_1.Avatar, { sizes: 'small', src: `/${item.image}`, sx: { width: 20, height: 20 }, variant: 'square' }), onClick: () => Navigate(`blogs/${item.tags}`), children: (0, jsx_runtime_1.jsx)(Typography_1.default, { align: 'left', fontSize: 'small', component: "div", noWrap: true, sx: { flexGrow: 1 }, children: item.tags.find((name) => name) }) }, index + 1) }));
                    }) }), children: (0, jsx_runtime_1.jsx)(Container_1.default, { disableGutters: true, maxWidth: 'xl', children: children }) }) }) }));
}
