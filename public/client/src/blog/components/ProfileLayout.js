"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const system_1 = require("@mui/system");
const brandingTheme_1 = require("../../utils/brandingTheme");
const LayoutBlog_1 = require("./LayoutBlog");
const GettingStarted_1 = require("./GettingStarted");
const BlogSearch_1 = require("../../components/searchComponents/BlogSearch");
const AvatarChip_1 = tslib_1.__importDefault(require("../../components/toggleComponent/AvatarChip"));
const WithTextStyles_1 = tslib_1.__importDefault(require("../../components/lib/WithTextStyles"));
const utilityTypes_1 = require("../../components/lib/utilityTypes");
const ModifiedButton = utilityTypes_1.PassThrough;
const TextLink = WithTextStyles_1.default;
function ProfileDetails({ src, key, socialLogo, srcSet, alt, fullName, profileDescription }) {
    const theme = (0, styles_1.useTheme)();
    const mdDown = (0, system_1.useMediaQuery)(theme.breakpoints.down('md'), { noSsr: true });
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
            display: 'grid',
            padding: 1,
            justifyContent: 'center',
            gridTemplateColumns: mdDown ? '' : '1fr 3fr auto',
            gridAutoColumns: 'repeat(auto-fill, minmax(33.5%, 1fr))',
            gridAutoRows: 'auto auto auto',
            gap: '1em',
            gridAutoFlow: 'dense',
        }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                    margin: 0,
                    gridColumnStart: mdDown ? '' : '1',
                    gridRowStart: mdDown ? '' : '2',
                    justifySelf: 'center',
                    alignSelft: 'center',
                }, children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { sx: { width: mdDown ? 75 : 120, height: mdDown ? 75 : 120 }, src: src, alt: alt, srcSet: srcSet }) }), (0, jsx_runtime_1.jsxs)(material_1.Box, { color: 'primary', sx: {
                    ...theme.applyDarkStyles({
                        color: (theme.vars || theme).palette.primary[600],
                        backgroundColor: (0, styles_1.alpha)(theme.palette.info[50], 0.5),
                        borderColor: (theme.vars || theme).palette.success[700],
                        boxShadow: `${(0, styles_1.alpha)(theme.palette.grey[300], 0.5)} 0 -1px 0 1px inset, 
                            ${(0, styles_1.alpha)(theme.palette.grey[100], 0.5)} 0 1px 1px 0`,
                    }),
                    gridColumnStart: 'span 3',
                    gridRowStart: '1',
                    width: 'auto',
                    borderRadius: '.5em',
                    paddingRight: '.5em',
                    paddingBottom: '.5em',
                    borderBox: (0, styles_1.alpha)(theme.palette.divider, 0.7),
                    color: (theme.vars || theme).palette.primary[600],
                    backgroundColor: (0, styles_1.alpha)(theme.palette.info[50], 0.5),
                    borderColor: (theme.vars || theme).palette.success[700],
                    boxShadow: `${(0, styles_1.alpha)(theme.palette.info[300], 0.5)} 0 -1px 0 1px inset, ${(0, styles_1.alpha)(theme.palette.info[100], 0.5)} 0 1px 2px 0`,
                }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                            margin: 0,
                            justifySelf: 'center',
                            alignSelft: 'center',
                            gridColumnStart: mdDown ? '' : 'span 2',
                            gridRowStart: mdDown ? '' : '1',
                            padding: 1,
                        }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: 'h1', sx: {
                                color: (theme) => ({ color: theme.vars.palette.text.secondary }),
                            }, children: fullName }) }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                            margin: 0,
                            justifySelf: 'flex-end',
                            alignSelft: 'end',
                            gridColumnStart: mdDown ? '' : '3',
                            gridRowStart: mdDown ? '' : '1',
                            gap: (theme) => ({ gap: theme.spacing(1) }),
                        }, children: socialLogo.map((item) => {
                            return ((0, jsx_runtime_1.jsx)(TextLink, { serve: react_router_dom_1.Link, rel: 'noreferrer', "aria-label": item.link, target: "_blank", to: item.link, className: "s17ojqon", textContent: (0, jsx_runtime_1.jsx)(material_1.SvgIcon, { className: 's17ojqon', color: 'action', fontSize: 'small', sx: {
                                        margin: theme.spacing(0, 1),
                                        width: mdDown ? 'default' : 30,
                                        height: mdDown ? 'default' : 30,
                                    }, viewBox: '0 0 448 512', children: item.icon }) }));
                        }) })] }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                    margin: 0,
                    justifySelf: 'center',
                    alignSelft: 'center',
                    gridColumnStart: mdDown ? '' : 'span 3',
                    gridRowStart: mdDown ? '' : '2',
                }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: mdDown ? 'caption' : 'h5', sx: {
                        color: theme.palette.common.black,
                        fontFamily: theme.typography.fontFamilySystem,
                        ...theme.applyDarkStyles({
                            color: (0, styles_1.alpha)(theme.palette.common.white, 0.9),
                        })
                    }, children: profileDescription }) })] }, key));
}
function Profile({ sSrData }) {
    const { name } = (0, react_router_dom_1.useParams)();
    const Navigate = (0, react_router_dom_1.useNavigate)();
    const theme = (0, styles_1.useTheme)();
    const smDown = (0, system_1.useMediaQuery)(theme.breakpoints.down('md'), { noSsr: true });
    console.log(name);
    const handleClick = (value) => {
        Navigate(`/blogs/${value}`);
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { size: { xs: 12 }, children: (0, jsx_runtime_1.jsx)(ProfileDetails, { src: LayoutBlog_1.authored[name].avatar, alt: LayoutBlog_1.authored[name].name, srcSet: LayoutBlog_1.authored[name].avatar, fullName: LayoutBlog_1.authored[name].name, profileDescription: LayoutBlog_1.authored[name].codename, socialLogo: LayoutBlog_1.authored[name].socialAccount }) }), (0, jsx_runtime_1.jsx)(material_1.Divider, { orientation: 'horizontal', sx: {
                    paddingTop: theme.spacing(7),
                    paddingBottom: theme.spacing(2),
                }, children: (0, jsx_runtime_1.jsx)(TextLink, { types: 'typography', innocent: true, tahoma: true, sx: {
                        color: theme.palette.info[600],
                        ...theme.applyDarkStyles({
                            color: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.grey[50], 0.7),
                        })
                    }, variant: smDown ? 'h4' : 'h2', textContent: LayoutBlog_1.authored[name].name + '\'s' + ' POST' }) }), sSrData.map((item, index) => {
                if (name === (0, BlogSearch_1.slugify)(item.authors.find((name) => name))) {
                    return ((0, jsx_runtime_1.jsxs)(material_1.Grid, { size: { xs: 12 }, children: [(0, jsx_runtime_1.jsx)(material_1.Divider, { component: 'div', variant: 'middle', orientation: 'horizontal', sx: { pt: 1, } }), (0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: smDown ? "column" : "row", spacing: 2, children: [(0, jsx_runtime_1.jsx)(GettingStarted_1.CoverImgStyle, { sx: { width: 190, height: 110 }, alt: item.title, src: `/${item?.image}` }), (0, jsx_runtime_1.jsx)(material_1.Divider, { component: 'div', variant: 'middle', orientation: 'horizontal', sx: { pt: 1, } }), (0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: "column", spacing: smDown ? 1 : 2, sx: { pt: smDown ? 1 : 2 }, children: [(0, jsx_runtime_1.jsx)(ModifiedButton, { condition: 'button', className: 'link-tags', to: '#', sx: {
                                                    border: 'none',
                                                    content: "''",
                                                    cursor: 'pointer',
                                                    pointerEvents: 'visible',
                                                    margin: '0 0 0',
                                                    textDecoration: 'none',
                                                    background: 'inherit',
                                                    backgroundColor: 'inherit',
                                                    color: brandingTheme_1.brandingLightThemes.palette.success[700],
                                                    '& :hover': {
                                                        background: 'none',
                                                        backgroundColor: 'none',
                                                        textDecoration: 'underline',
                                                        fontFamily: brandingTheme_1.brandingDarkThemes.typography.fontFamilyCode,
                                                        fontVariantCaps: 'titling-caps',
                                                        fontFeatureSettings: 'initial',
                                                        fontWeight: 'bold',
                                                        fontStyle: 'italic',
                                                    }
                                                }, onClick: () => handleClick(item.tags), color: "primary", children: (0, jsx_runtime_1.jsx)(TextLink, { types: "typography", color: 'error', gadget: true, variant: 'h5', innocent: true, textContent: `${item.title}`, sx: {
                                                        '& :hover': {
                                                            textDecoration: 'italic',
                                                        },
                                                        textDecoration: 'none'
                                                    } }) }), (0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: 'row', spacing: 2, children: [(0, jsx_runtime_1.jsx)(TextLink, { types: "typography", textContent: `${item.date}` }), (0, jsx_runtime_1.jsx)(AvatarChip_1.default, { tags: item.tags, 
                                                        // img={authored[slugify(item.authors.find((author:string)=>author))].avatar} 
                                                        link: '#', onClick: () => {
                                                            setTimeout(() => {
                                                                Navigate(`blogs/${(0, BlogSearch_1.slugify)(item.tags.find((tag) => tag))}`);
                                                            }, 200);
                                                        }, altTitle: item.tags })] }), (0, jsx_runtime_1.jsx)(material_1.Typography, { color: '', sx: {
                                                    fontFamily: ((theme) => ({
                                                        ...theme.typography.body2,
                                                        fontFamily: theme.typography.fontFamilySystem,
                                                        color: theme.applyStyles('dark', {
                                                            color: `${(0, styles_1.alpha)((brandingTheme_1.brandingLightThemes.vars || theme).palette.common.white, 0.9)}`,
                                                            boxShadow: `${(0, styles_1.alpha)(theme.palette.primaryDark[700], 0.5)} 0 1px 0 inset, 
                                            ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, 
                                            ${(theme.vars || theme).palette.common.black} 0 1px 0 0`,
                                                        }),
                                                    }))
                                                }, children: item.description })] })] })] }, index));
                }
            })] }));
}
exports.default = Profile;
