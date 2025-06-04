"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverImgStyle = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Stack_1 = tslib_1.__importDefault(require("@mui/material/Stack"));
const BlogSearch_1 = require("../../components/searchComponents/BlogSearch");
const AvatarChip_1 = tslib_1.__importDefault(require("../../components/toggleComponent/AvatarChip"));
const styles_1 = require("@mui/styles");
const styles_2 = require("@mui/material/styles");
const WithTextStyles_1 = tslib_1.__importDefault(require("../../components/lib/WithTextStyles"));
const LayoutBlog_1 = require("./LayoutBlog");
const styles_3 = require("@mui/material/styles");
const brandingTheme_1 = require("../../utils/brandingTheme");
const utilityTypes_1 = require("../../components/lib/utilityTypes");
const CarouselSlick_1 = tslib_1.__importDefault(require("./CarouselSlick"));
const AuthContext_1 = require("../../AuthContext");
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const useMediaQuery_1 = tslib_1.__importDefault(require("@mui/material/useMediaQuery"));
const material_1 = require("@mui/material");
const Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
const ModifiedButton = utilityTypes_1.PassThrough;
const TextLink = WithTextStyles_1.default;
const ModifiedLink = WithTextStyles_1.default;
exports.CoverImgStyle = (0, styles_3.styled)('img')({
    top: 0,
    objectFit: 'cover',
    position: 'relative',
    width: '100%',
});
const Root = (0, styles_3.styled)('div')(({ theme }) => ({
    '& .getting-started-background-image': {
        background: 'hsl(195, 9.10%, 91.40%) url("/circles-white-gradient.png") no-repeat fixed center',
        Opacity: '0.2',
        backgroundBlendMode: 'lighten',
        width: '100%',
        height: '100%',
    },
    [theme.breakpoints.down('md')]: {
        '& .MuiAvatar-root-square-blog': {
            width: '20vh',
            heigth: '10vh',
        },
    },
}));
function GettingStarted(props) {
    const { sSrData } = props;
    const { blogsId, title, } = (0, react_router_dom_1.useParams)();
    const location = (0, react_router_dom_1.useLocation)();
    const Navigate = (0, react_router_dom_1.useNavigate)();
    const { token } = (0, AuthContext_1.UseAuth)();
    const stored = [];
    const [state, setState] = React.useState({
        counting: [sSrData?.map((item) => item = stored.push(item.title))],
    });
    const handleClick = (value) => {
        Navigate(value);
        console.log(value);
    };
    const theme = (0, styles_2.useTheme)();
    const smDown = (0, useMediaQuery_1.default)(theme.breakpoints.down('sm'), { noSsr: true });
    if (blogsId) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {});
    }
    else if (location.pathname === `/blogs/${title}/searchId`) {
        console.log('TRUE============================');
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {});
    }
    return ((0, jsx_runtime_1.jsxs)(Root, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { maxWidth: '100%', px: 4, mt: 4 }, children: (0, jsx_runtime_1.jsx)(CarouselSlick_1.default, { item: sSrData }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    width: '100%',
                    display: 'grid',
                    gridAutoColumns: 'repeat(auto-fill, minmax(50%, 1fr))',
                    gridAutoRows: 'auto',
                    gridAutoFlow: 'dense',
                    gap: 1,
                }, component: 'div', children: sSrData?.map((content, index) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(material_1.Divider, { component: 'div', variant: 'middle', orientation: 'horizontal', sx: { pt: 1, } }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: smDown ? "column" : "row", spacing: 2, children: [(0, jsx_runtime_1.jsx)(exports.CoverImgStyle, { sx: { width: 190, height: 110 }, alt: content.title, src: `${content.image}` }), (0, jsx_runtime_1.jsx)(material_1.Divider, { component: 'div', variant: 'middle', orientation: 'horizontal', sx: { pt: 1, } }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "column", spacing: smDown ? 1 : 2, sx: { pt: smDown ? 1 : 2 }, children: [(0, jsx_runtime_1.jsx)(ModifiedButton, { condition: 'button', className: 'link-tags', to: "#", onClick: () => handleClick(`${(0, BlogSearch_1.slugify)(content.title)}/searchId`), color: "primary", sx: {
                                                    border: 'none',
                                                    content: "''",
                                                    cursor: 'pointer',
                                                    pointerEvents: 'visible',
                                                    margin: '0 0 0',
                                                    textDecoration: 'none',
                                                    background: 'transparent',
                                                    backgroundColor: 'transparent',
                                                    color: brandingTheme_1.brandingLightThemes.palette.success[700],
                                                    '& :hover': {
                                                        background: 'transparent',
                                                        backgroundColor: 'transparent',
                                                        textDecoration: 'underline',
                                                        color: brandingTheme_1.brandingLightThemes.palette.success[700],
                                                        fontFamily: (theme) => ({ fontFamily: theme.typography.fontFamilyCode }),
                                                        fontVariantCaps: 'titling-caps',
                                                        fontFeatureSettings: 'initial',
                                                        fontWeight: 'bold',
                                                        fontStyle: 'italic',
                                                    }
                                                }, children: (0, jsx_runtime_1.jsx)(TextLink, { types: "typography", color: 'error', gadget: true, variant: 'h5', innocent: true, textContent: `${content.title}` }) }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: 'row', spacing: 2, children: [(0, jsx_runtime_1.jsx)(ModifiedLink, { types: 'typography', gadget: true, textContent: `By: ` + LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(content.authors.find(author => author))].name, color: 'info', variant: 'caption', sx: { letterSpacing: 1, } }), (0, jsx_runtime_1.jsx)(AvatarChip_1.default, { tags: content.tags, img: LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(content.authors.find(author => author))].avatar, link: `${(0, BlogSearch_1.slugify)(content.tags.find((tag) => tag))}/${(0, BlogSearch_1.slugify)(content.authors.find((name) => name))}/profile`, altTitle: content.tags })] }), (0, jsx_runtime_1.jsx)(Typography_1.default, { color: '', sx: {
                                                    fontFamily: ((theme) => ({
                                                        ...theme.typography.body2,
                                                        fontFamily: theme.typography.fontFamilySystem,
                                                        color: theme.applyStyles('dark', {
                                                            color: `${(0, styles_3.alpha)((brandingTheme_1.brandingLightThemes.vars || theme).palette.common.white, 0.9)}`,
                                                            boxShadow: `${(0, styles_3.alpha)(theme.palette.primaryDark[700], 0.5)} 0 1px 0 inset, 
                                            ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, 
                                            ${(theme.vars || theme).palette.common.black} 0 1px 0 0`,
                                                        }),
                                                    }))
                                                }, children: content.description })] })] })] }, index) }))) })] }));
}
const defaultTheme = (0, styles_3.createTheme)();
exports.default = (0, styles_1.withStyles)({}, { defaultTheme })(GettingStarted);
