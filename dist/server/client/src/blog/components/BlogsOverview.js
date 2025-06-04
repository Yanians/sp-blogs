"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const styles_1 = require("@mui/material/styles");
const styles_2 = require("@mui/styles");
const material_1 = require("@mui/material");
const react_router_dom_2 = require("react-router-dom");
const WithTextStyles_1 = tslib_1.__importDefault(require("../../components/lib/WithTextStyles"));
const markdownElement_1 = tslib_1.__importDefault(require("./markdownElement"));
const LayoutBlog_1 = require("./LayoutBlog");
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const BlogSearch_1 = require("../../components/searchComponents/BlogSearch");
const TextBlogTitle = WithTextStyles_1.default;
const TextLink = WithTextStyles_1.default;
const Description = WithTextStyles_1.default;
const styles = (theme) => ({
    root: {
        ...theme.typography.caption,
        postion: 'relative',
        flexGrow: 1,
        fontFamily: theme.typography.fontFamilyCode,
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${theme.palette.gradients.teal}  0%,rgb(13, 63, 0) 100%))`
            : `linear-gradient(180deg, ${theme.palette.gradients.warning}  0%,rgb(206, 169, 8) 100%))`,
        backgroundSize: 'auto auto',
        backgroundRepeat: 'no-repeat',
        color: theme.palette.mode === 'dark' ? 'white' : 'inherit',
    },
    back: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(-1),
    },
    container: {
        paddingTop: 60 + 20,
        marginBottom: theme.spacing(8),
        maxWidth: `calc(740px + ${theme.spacing(12)})`,
        '& h1': {
            marginBottom: theme.spacing(3),
            color: theme.palette.mode === 'dark' ? 'white' : 'inherit',
        },
        '& .markdown-body': {
            fontSize: theme.typography.pxToRem(16),
            lineHeight: 1.7,
            color: theme.palette.mode === 'dark' ? 'white' : 'inherit',
        },
        '& img, & video': {
            display: 'block',
            margin: 'auto',
        },
        '& strong': {
            // color: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[900],
            color: theme.palette.mode === 'dark' ? 'white' : 'inherit',
        },
        '& pre': {
            fontSize: theme.typography.pxToRem(16),
        },
        '& summary': {
            padding: 8,
            fontSize: theme.typography.pxToRem(14),
            fontWeight: theme.typography.fontWeightMedium,
            // color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
            color: theme.palette.mode === 'dark' ? 'white' : 'inherit',
        },
        '& details': {
            paddingLeft: 16,
            paddingRight: 16,
            background: theme.palette.mode === 'dark'
                ? (0, styles_1.alpha)(theme.palette.primary[900], 0.3)
                : (0, styles_1.alpha)(theme.palette.grey[50], 0.5),
            border: '1px solid',
            borderRadius: 10,
            borderColor: theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[200],
            transitionProperty: 'all',
            transitionTiming: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '200ms',
            '&:hover, &:focus-visible': {
                background: theme.palette.mode === 'dark'
                    ? (0, styles_1.alpha)(theme.palette.primary[900], 0.4)
                    : theme.palette.grey[50],
                borderColor: theme.palette.mode === 'dark' ? theme.palette.primaryDark[500] : theme.palette.grey[300],
            },
        },
        '& th': {
            textAlign: 'left',
            borderBottom: `3px solid rgba(62, 80, 96, 0.2) !important`,
        },
        '& .blog-description': {
            fontSize: theme.typography.pxToRem(13),
            textAlign: 'left',
            color: theme.palette.grey[600],
            '& a': {
                color: theme.palette.mode === 'dark' ? theme.palette.primary[300] : theme.palette.primary[600],
                textDecoration: 'underline',
            },
        },
    },
    time: {
        color: theme.palette.text.secondary,
        ...theme.typography.caption,
        fontWeight: 500,
    },
});
const Background = (0, styles_1.styled)('div')(({ theme }) => ({
    '& .blog-overview-background': {
        background: 'url("/gradient-degrees.png") no-repeat fixed center',
        padding: theme.spacing(2),
        width: 'inherit',
        height: 'auto',
    },
    '& .markdown-body': {
        [theme.breakpoints.down('sm')]: {
            '& p, & strong, & pre, & blockquote, & summary, & code, & details, h1, & h2, & h3, & h4, & h5, & .MuiAvatar-root, & img': {
                width: 'auto',
                fontSize: theme.typography.pxToRem(12),
                height: 'auto',
            }
        }
    },
}));
function BlogsOverview(props) {
    const { classes, sSrData } = props;
    const { blogsId, name, profile, } = (0, react_router_dom_1.useParams)();
    const theme = (0, styles_1.useTheme)();
    const smDown = (0, material_1.useMediaQuery)(theme.breakpoints.down('sm'), { noSsr: true, });
    if (name) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_2.Outlet, {});
    }
    return ((0, jsx_runtime_1.jsx)(Background, { children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                flexFlow: 'row',
                justifyContent: 'flex-start',
                width: '100%',
                padding: (theme) => ({ padding: theme.spacing(2) }),
            }, children: sSrData?.map((post) => {
                if (blogsId === post.tags.find(((tag) => tag))) {
                    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
                                    width: '70%',
                                }, className: "blog-overview-background", children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { gridRow: '1', gap: 1 }, children: (0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: 'row', spacing: 1, children: [(0, jsx_runtime_1.jsx)(material_1.Avatar, { sx: { width: 26, height: 26 }, variant: 'rounded', src: `${LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(post.authors.find((name) => name))].avatar}` }), (0, jsx_runtime_1.jsx)(TextBlogTitle, { textContent: post.slug, variant: "subtitle2", shadow2red: true, andali: true }), (0, jsx_runtime_1.jsx)(TextLink, { serve: react_router_dom_2.Link, to: `${(0, BlogSearch_1.slugify)(post.authors.find((author) => author))}/profile`, textContent: (0, BlogSearch_1.slugify)(post.authors.find((author) => author)), variant: "subtitle2", shadow2red: true, andali: true }), (0, jsx_runtime_1.jsx)(Description, { shadow2red: true, variant: 'subtitle2', andali: true, textContent: post.date })] }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: 'div', sx: {
                                            display: 'flex',
                                            flexFlow: 'no-wrap',
                                            justifyContent: 'flex-start',
                                            width: '100%',
                                        }, children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "div", sx: { width: '100%', flexGrow: 1 }, children: (0, jsx_runtime_1.jsx)(TextBlogTitle, { types: 'typography', color: 'success', gadget: true, focus: true, sx: { letterSpacing: 1 }, variant: "h2", textContent: post.title }) }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { gridColumn: 1, gap: 1, py: 5 }, children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { sx: {
                                                width: 450,
                                                height: 310,
                                            }, variant: 'square', src: `${LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(post.authors.find((author) => author))].img}`, alt: `${LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(post.authors.find((author) => author))].name}`, srcSet: `${LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(post.authors.find((author) => author))].avatar}?s=${32 * 2} 2x` }) }), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { gridColumn: 1 }, component: "div", children: [(0, jsx_runtime_1.jsx)(Description, { gadget: true, variant: 'h4', color: 'inherit', types: 'typography', textContent: post.description }), (0, jsx_runtime_1.jsx)(markdownElement_1.default, { renderedMarkdown: post.outputRender })] })] }), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
                                    width: '30%',
                                }, className: "blog-overview-background", children: [(0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: 'row', spacing: 1, children: [(0, jsx_runtime_1.jsx)(material_1.Avatar, { className: 'square', sx: { width: 50, height: 50 }, variant: 'square', src: `${LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(post.authors.find((author) => author))].avatar}` }), (0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: 'column', children: [LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(post.authors.find((author) => author))].name, (0, jsx_runtime_1.jsx)(material_1.Divider, { orientation: 'horizontal', variant: 'middle', textAlign: 'left', sx: { p: 1 }, children: (0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: 'row', spacing: 1, children: [(0, jsx_runtime_1.jsx)(material_1.Avatar, { src: "/m16.jpg", variant: 'square', sx: { width: 25, height: 25, } }), (0, jsx_runtime_1.jsx)(material_1.Avatar, { variant: 'square', sx: { width: 25, height: 25, } }), (0, jsx_runtime_1.jsx)(material_1.Avatar, { variant: 'square', sx: { width: 25, height: 25, } })] }) })] })] }), post.authors.find((author) => author), (0, jsx_runtime_1.jsx)(markdownElement_1.default, { codename: `<ul class='feature-list'>
                                          <li>
                                              <code>
                                              ${LayoutBlog_1.authored[(0, BlogSearch_1.slugify)(post.authors.find((author) => author))].codename}
                                              </code>
                                          </li>
                                        </ul>` })] })] }));
                }
            }) }) }));
}
const defaultTheme = (0, styles_1.createTheme)();
exports.default = (0, styles_2.withStyles)({}, { defaultTheme })(BlogsOverview);
