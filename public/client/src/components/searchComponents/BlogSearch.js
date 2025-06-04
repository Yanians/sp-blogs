"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = slugify;
exports.default = BlogSearch;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fuse_js_1 = tslib_1.__importDefault(require("fuse.js"));
const styles_1 = require("@mui/material/styles");
const InputBase_1 = tslib_1.__importDefault(require("@mui/material/InputBase"));
const brandingTheme_1 = require("../../utils/brandingTheme");
const Search_1 = tslib_1.__importDefault(require("@mui/icons-material/Search"));
const AvatarChip_1 = tslib_1.__importDefault(require("../toggleComponent/AvatarChip"));
const LayoutBlog_1 = require("../../blog/components/LayoutBlog");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const system_1 = require("@mui/system");
const Search = (0, styles_1.styled)('div')(({ theme }) => [
    {
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '1px',
        cursor: 'pointer',
        border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
        // borderRadius: (theme.vars || theme).shape.borderRadius,
        backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.common.white, 0.95),
        '&:focus-visible': {
            outline: `3px solid ${(0, styles_1.alpha)(theme.palette.primary.main, 0.5)}`,
            outlineOffset: '1px',
        },
        '&:hover': {
            background: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.grey[50], 0.4),
            borderColor: (0, styles_1.alpha)((brandingTheme_1.brandingLightThemes.vars || theme).palette.grey[100], 0.5),
            boxShadow: 'none',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            // marginLeft: theme.spacing(1),
            width: 'auto',
        },
        [theme.breakpoints.only('xs')]: {
            backgroundColor: 'transparent',
            padding: 0,
            justifyContent: 'center',
        },
    },
    theme.applyDarkStyles({
        backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.primaryDark[100], 0.5),
        borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.grey[100], 0.99),
        boxShadow: `${(0, styles_1.alpha)(theme.palette.primaryDark[600], 0.1)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
        '&:hover': {
            background: (0, styles_1.alpha)((brandingTheme_1.brandingDarkThemes.vars || theme).palette.primaryDark[500], .99),
            borderColor: (0, styles_1.alpha)((brandingTheme_1.brandingDarkThemes.vars || theme).palette.success[600], .75),
            boxShadow: `${(0, styles_1.alpha)(theme.palette.primaryDark[600], 0.1)} 0 1px 0 inset, 
          ${(theme.vars || theme).palette.success[300]} 0 -1px 0 inset, 
          ${(theme.vars || theme).palette.primaryDark[200]} 0 1px 2px 0`,
        },
    }),
]);
const SearchIconWrapper = (0, styles_1.styled)('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = (0, styles_1.styled)(InputBase_1.default)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const Escape = (0, styles_1.styled)('kbd')(({ theme }) => {
    return {
        all: 'unset',
        display: 'flex',
        flexGrow: 1,
        width: '50px',
        wrap: 'no-wrap',
        fontSize: theme.typography.pxToRem(12),
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: '19px',
        marginRight: 5,
        // mx:5,
        // marginLeft: theme.spacing(1),
        border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
        backgroundColor: '#FFF',
        padding: theme.spacing(0, 0.5),
        borderRadius: 7,
        zIndex: 1000,
        ...theme.applyStyles('dark', {
            color: theme.palette.primaryDark[900],
            borderColor: (theme.vars || theme).palette.grey[600],
            backgroundColor: (theme.vars || theme).palette.error.contrastText,
        }),
    };
});
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // remove non-word characters
        .trim()
        .replace(/\s+/g, '-'); // replace spaces with -
}
function BlogSearch({ sSrData, open, onClose, }) {
    const [query, setQuery] = (0, react_1.useState)('');
    const { name, profile } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const FADE_DURATION = 120; // ms
    const macOS = window.navigator.platform.toUpperCase().includes('MAC');
    const fuse = (0, react_1.useMemo)(() => new fuse_js_1.default(sSrData, {
        keys: ['title', 'description', 'tags', 'authors'],
        includeMatches: true,
        threshold: 0.4,
        ignoreLocation: true,
        minMatchCharLength: 2,
    }), [sSrData]);
    const results = query.trim() ? fuse.search(query) : sSrData?.map((item) => ({ item }));
    const highlightMatch = (text, matches, key) => {
        const match = matches?.find(m => m.key === key);
        if (!match?.indices.length)
            return text;
        const parts = [];
        let lastIndex = 0;
        match.indices.forEach(([start, end], i) => {
            if (start > lastIndex) {
                parts.push(text.slice(lastIndex, start));
            }
            parts.push((0, jsx_runtime_1.jsx)("mark", { children: text.slice(start, end + 1) }, i));
            lastIndex = end + 1;
        });
        if (lastIndex < text.length) {
            parts.push(text.slice(lastIndex));
        }
        return parts;
    };
    const theme = (0, system_1.useTheme)();
    const smDown = (0, system_1.useMediaQuery)(theme.breakpoints.down('sm'), { noSsr: true });
    return ((0, jsx_runtime_1.jsx)(material_1.Modal, { open: open, onClose: onClose, closeAfterTransition: true, slots: { backdrop: material_1.Backdrop }, slotProps: {
            backdrop: {
                timeout: 300,
            }
        }, sx: {
            zIndex: brandingTheme_1.brandingDarkThemes.zIndex.tooltip + 100,
            backgroundColor: (0, styles_1.alpha)((brandingTheme_1.brandingLightThemes.vars || brandingTheme_1.brandingLightThemes).palette.grey[50], 0.4),
            backdropFilter: 'blur(6px)',
        }, children: (0, jsx_runtime_1.jsx)(material_1.Fade, { in: open, appear: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    position: "fixed",
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: smDown ? "80%" : "60%",
                    maxHeight: "80%",
                    overflowY: "auto",
                    transition: `opacity ${FADE_DURATION}ms`,
                    opacity: 0,
                    zIndex: (themes) => themes.zIndex.tooltip + 100,
                    ...theme.applyStyles('dark', {
                        backgroundColor: (0, styles_1.alpha)((brandingTheme_1.brandingDarkThemes.vars || theme).palette.primaryDark[800], 0.99),
                    }),
                    backdropFilter: 'blur(10px)',
                }, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                            position: 'sticky',
                            top: 0,
                            left: 0,
                            height: 'auto',
                            color: 'inherit',
                            backgroundColor: (theme) => theme.palette.mode === 'dark' ?
                                theme.applyDarkStyles({
                                    backgroundColor: (0, styles_1.alpha)(theme.palette.secondary[900], 0.99),
                                    borderColor: (0, styles_1.alpha)(theme.palette.primaryDark[600], 0.8),
                                    boxShadow: `${(0, styles_1.alpha)(theme.palette.primaryDark[600], 0.4)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 1px 0`,
                                    '&:hover': {
                                        background: (theme.vars || theme).palette.warning[100],
                                        borderColor: (theme.vars || theme).palette.common.white,
                                        boxShadow: 'none',
                                    },
                                }) : theme.applyStyles('light', {
                                backgroundColor: (0, styles_1.alpha)(theme.palette.common.white, 0.8),
                                borderColor: (0, styles_1.alpha)(theme.palette.grey[600], 0.8),
                                boxShadow: `${(0, styles_1.alpha)(theme.palette.grey[200], 0.5)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
                                '&:hover': {
                                    background: (0, styles_1.alpha)((brandingTheme_1.brandingLightThemes.vars || theme).palette.background.paper, .99),
                                    color: brandingTheme_1.brandingLightThemes.palette.primaryDark[900],
                                    borderColor: (theme.vars || theme).palette.common.white,
                                    boxShadow: `${(0, styles_1.alpha)((brandingTheme_1.brandingLightThemes.vars || theme).palette.primaryDark[700], 0.5)} 0 1px 1px inset, 
                              ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, 
                              ${(theme.vars || theme).palette.common.black} 0 1px 1px 0`,
                                },
                            }),
                            zIndex: 1000,
                            pb: -2,
                        }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "center" }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { flexGrow: 1, }, children: (0, jsx_runtime_1.jsxs)(Search, { children: [(0, jsx_runtime_1.jsx)(SearchIconWrapper, { children: (0, jsx_runtime_1.jsx)(Search_1.default, {}) }), (0, jsx_runtime_1.jsx)(StyledInputBase, { onChange: (e) => setQuery(e.target.value), placeholder: "Search\u2026", inputProps: { 'aria-label': 'search' } }), (0, jsx_runtime_1.jsxs)(Escape, { "aria-hidden": "true", children: [macOS ? '⌘' : 'esc ', "key"] })] }) })] }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                            mb: 2,
                            padding: (theme) => theme.spacing(1, 2),
                            backgroundColor: (theme) => theme.palette.mode === 'dark'
                                ? theme.applyDarkStyles({
                                    backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.grey[900], 0.75),
                                }) : theme.applyStyles('light', {
                                backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.grey[100], 0.89),
                            })
                        }, children: results.map((res, index) => {
                            const { item, matches } = res;
                            return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                                    display: 'flex',
                                    flexGrow: 1,
                                    flexDirection: 'column',
                                    justifyItems: 'center',
                                    padding: 4,
                                    border: (theme) => (0, styles_1.alpha)((brandingTheme_1.brandingLightThemes.vars || theme).palette.grey[800], .45),
                                    boxShadow: (theme) => `${(0, styles_1.alpha)(theme.palette.primaryDark[700], 0.5)} 0 1px 0 inset, 
                              ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, 
                              ${(theme.vars || theme).palette.common.black} 0 1px 0 0`,
                                }, children: [(0, jsx_runtime_1.jsx)(AvatarChip_1.default, { tags: LayoutBlog_1.authored[slugify(item.authors.find((author) => author))].name, img: LayoutBlog_1.authored[slugify(item.authors.find((author) => author))].avatar, altTitle: item.title, link: '#', onClick: () => {
                                            onClose();
                                            setTimeout(() => {
                                                navigate(`blogs/${slugify(item.tags.find((tag) => tag))}/${slugify(item.authors.find((name) => name))}/profile`);
                                            }, 200);
                                        } }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", color: "default", children: highlightMatch(item.title, matches, 'title') }), (0, jsx_runtime_1.jsx)(material_1.Box, { component: "button", onClick: () => {
                                            onClose(); // trigger modal closing
                                            setTimeout(() => {
                                                navigate(`blogs/${slugify(item.title)}/searchId`);
                                            }, 100); // wait for transition (adjust if needed)
                                        }, sx: {
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
                                                textDecoration: 'underline',
                                                fontFamily: brandingTheme_1.brandingDarkThemes.typography.fontFamilyCode,
                                                fontVariantCaps: 'titling-caps',
                                                fontFeatureSettings: 'initial',
                                                fontWeight: 'bold',
                                                fontStyle: 'italic',
                                                color: (theme) => theme.applyDarkStyles({
                                                    color: brandingTheme_1.brandingDarkThemes.palette.common.white,
                                                })
                                            }
                                        }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { color: "default", variant: "body2", sx: { mb: 1 }, children: highlightMatch(item.description, matches, 'description') }) }, item.title)] }, index));
                        }) })] }) }) }));
}
