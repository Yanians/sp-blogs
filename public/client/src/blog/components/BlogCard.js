"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostCard;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Mood_1 = tslib_1.__importDefault(require("@mui/icons-material/Mood"));
const Visibility_1 = tslib_1.__importDefault(require("@mui/icons-material/Visibility"));
const BlogSearch_1 = require("../../components/searchComponents/BlogSearch");
const react_router_dom_1 = require("react-router-dom");
const Share_1 = tslib_1.__importDefault(require("@mui/icons-material/Share"));
const ForwardToInbox_1 = tslib_1.__importDefault(require("@mui/icons-material/ForwardToInbox"));
const LayoutBlog_1 = require("./LayoutBlog");
// material
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const Link_1 = tslib_1.__importDefault(require("@mui/material/Link"));
// utils
const SvgIconStyle_1 = tslib_1.__importDefault(require("./SvgIconStyle"));
// ----------------------------------------------------------------------
const CardMediaStyle = (0, styles_1.styled)('div')({
    position: 'relative',
    paddingTop: 'calc(100% * 3 / 4)'
});
const TitleStyle = (0, styles_1.styled)((props) => {
    const { children, ...other } = props;
    return (0, jsx_runtime_1.jsx)(Link_1.default, { ...other, children: children });
})(({ theme }) => ({
    height: 44,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical'
}));
const AvatarStyle = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => ({
    zIndex: 9,
    width: 32,
    height: 32,
    position: 'absolute',
    left: theme.spacing(3),
    bottom: theme.spacing(-2)
}));
const InfoStyle = (0, styles_1.styled)('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    color: theme.palette.text.disabled
}));
const CoverImgStyle = (0, styles_1.styled)('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute'
});
const POST_INFO = [
    { number: 1, icon: (0, jsx_runtime_1.jsx)(ForwardToInbox_1.default, {}) },
    { number: 2, icon: (0, jsx_runtime_1.jsx)(Visibility_1.default, {}) },
    { number: 3, icon: (0, jsx_runtime_1.jsx)(Share_1.default, {}) }
];
function BlogPostCard(props) {
    const { data, index } = props;
    const indexZero = index === 0;
    const largeImage = index === 1 || index === 2;
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: { xs: 12, sm: indexZero ? 12 : 6, md: indexZero ? 6 : 3, margin: 1, }, children: (0, jsx_runtime_1.jsxs)(material_1.Card, { elevation: 1, sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsxs)(CardMediaStyle, { sx: {
                        ...((indexZero || largeImage) && {
                            pt: 'calc(100% * 4 / 3)',
                            '&:after': {
                                top: 0,
                                content: "''",
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                bgcolor: (theme) => ({ bgColor: (0, styles_1.alpha)(theme.palette.warning[700], 0.72) })
                            }
                        }),
                        ...(indexZero && {
                            pt: {
                                xs: 'calc(100% * 4 / 3)',
                                sm: 'calc(100% * 3 / 4.66)'
                            }
                        })
                    }, children: [(0, jsx_runtime_1.jsx)(SvgIconStyle_1.default, { color: "paper", src: "/shape-avatar.svg", sx: {
                                width: 80,
                                height: 36,
                                backgroundColor: ((theme) => ({
                                    backgroundColor: theme.palette.mode === 'dark'
                                        ? theme.palette.primaryDark[900]
                                        : 'white'
                                })),
                                zIndex: 9,
                                bottom: -15,
                                position: 'absolute',
                                ...((indexZero || largeImage) && { display: 'none' })
                            } }), (0, jsx_runtime_1.jsx)(AvatarStyle, { alt: LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(data.authors.find((author) => author))].avatar, src: LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(data.authors.find((author) => author))].avatar, sx: {
                                ...((indexZero || largeImage) && {
                                    zIndex: 9,
                                    top: 24,
                                    left: 24,
                                    width: 40,
                                    height: 40
                                })
                            } }), (0, jsx_runtime_1.jsx)(CoverImgStyle, { alt: data.title, src: LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(data.authors.find((author) => author))].img })] }), (0, jsx_runtime_1.jsxs)(material_1.CardContent, { sx: {
                        pt: 4,
                        ...((indexZero || largeImage) && {
                            bottom: 0,
                            width: '100%',
                            position: 'absolute'
                        })
                    }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { gutterBottom: true, variant: "caption", sx: { color: 'text.disabled', display: 'block' }, children: data.date }), (0, jsx_runtime_1.jsx)(TitleStyle, { to: "#", color: "inherit", variant: "subtitle2", underline: "hover", component: react_router_dom_1.Link, sx: {
                                ...(indexZero && { typography: 'h5', height: 60 }),
                                ...((indexZero || largeImage) && {
                                    color: 'common.white'
                                })
                            }, children: data.title }), (0, jsx_runtime_1.jsx)(InfoStyle, { children: POST_INFO.map((info, index) => ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    ml: index === 0 ? 0 : 1.5,
                                    ...((indexZero || largeImage) && {
                                        color: 'grey.500'
                                    })
                                }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { component: Mood_1.default, sx: { width: 16, height: 16, mr: 0.5 }, children: info.icon }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "caption", children: info.number })] }, index))) })] })] }) }));
    // });
    //  return output;  
}
