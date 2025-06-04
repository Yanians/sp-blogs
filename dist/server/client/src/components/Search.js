"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const ReactDOM = tslib_1.__importStar(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
// import MuiLink from '@mui/material/Link';
const react_1 = require("@docsearch/react");
const Search_1 = tslib_1.__importDefault(require("@mui/icons-material/Search"));
const SearchModal_1 = tslib_1.__importDefault(require("./SearchModal"));
const GlobalStyles_1 = tslib_1.__importDefault(require("@mui/material/GlobalStyles"));
const styles_1 = require("@mui/material/styles");
const SearchButton = (0, styles_1.styled)('button')(({ theme }) => [
    {
        minHeight: 32,
        minWidth: 32,
        margin: 0,
        paddingLeft: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        [theme.breakpoints.only('xs')]: {
            backgroundColor: 'transparent',
            padding: 0,
            justifyContent: 'center',
            '& > *:not(.MuiSvgIcon-root)': {
                display: 'none',
            },
        },
        position: 'relative',
        // backgroundColor: alpha(theme.palette.grey[50], 0.6),
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(14),
        color: (theme.vars || theme).palette.text.secondary,
        // border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
        borderRadius: (theme.vars || theme).shape.borderRadius,
        cursor: 'pointer',
        transitionProperty: 'all',
        transitionDuration: '150ms',
        // boxShadow: `hsl(200, 0%, 100%) 0 1px 0 inset, ${alpha(theme.palette.grey[100], 0.4)} 0 -1px 0 inset, ${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
        '&:hover': {
            // background: alpha(theme.palette.grey[100], 0.5),
            // borderColor: (theme.vars || theme).palette.grey[300],
            boxShadow: 'none',
        },
        '&:focus-visible': {
            // outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
            outlineOffset: '2px',
        },
    },
    theme.applyDarkStyles({
        backgroundColor: (0, styles_1.alpha)(theme.palette.primaryDark[700], 0.4),
        borderColor: (0, styles_1.alpha)(theme.palette.primaryDark[600], 0.4),
        boxShadow: `${(0, styles_1.alpha)(theme.palette.primaryDark[600], 0.1)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
        '&:hover': {
            background: (theme.vars || theme).palette.primaryDark[700],
            borderColor: (theme.vars || theme).palette.primaryDark[600],
            boxShadow: 'none',
        },
    }),
]);
const SearchLabel = (0, styles_1.styled)('span')(({ theme }) => ({
    marginRight: 'auto',
    marginBottom: '1px', // optical alignment
    color: (theme.vars || theme).palette.text.tertiary,
    lineHeight: 1,
}));
const Shortcut = (0, styles_1.styled)('kbd')(({ theme }) => {
    return {
        all: 'unset',
        fontSize: theme.typography.pxToRem(12),
        fontWeight: 'bold',
        lineHeight: '19px',
        marginLeft: theme.spacing(0.5),
        border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
        backgroundColor: '#FFF',
        padding: theme.spacing(0, 0.5),
        borderRadius: 7,
        ...theme.applyDarkStyles({
            borderColor: (theme.vars || theme).palette.primaryDark[600],
            backgroundColor: (theme.vars || theme).palette.primaryDark[800],
        }),
    };
});
function Search(files) {
    const Navigate = (0, react_router_dom_1.useNavigate)();
    const location = (0, react_router_dom_1.useLocation)();
    const FADE_DURATION = 200; //ms
    const searchButtonRef = React.useRef(null);
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState([]);
    const [posts, setPosts] = React.useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [initialQuery, setInitialQuery] = React.useState(undefined);
    const macOS = window.navigator.platform.toUpperCase().includes('MAC');
    const onOpen = React.useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);
    const onClose = React.useCallback(() => {
        const modal = document.querySelector('.DocSearch-Container');
        if (modal) {
            // fade out transition
            modal.style.opacity = 0;
        }
        setIsOpen(false); // DO NOT call setIsOpen inside a timeout (it causes scroll issue).
    }, [setIsOpen]);
    const onInput = React.useCallback((event) => {
        setIsOpen(true);
        setInitialQuery(event.key);
    }, [setIsOpen, setInitialQuery]);
    (0, react_1.useDocSearchKeyboardEvents)({
        isOpen,
        onOpen,
        onClose,
        onInput,
        searchButtonRef,
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(SearchButton, { ref: searchButtonRef, onClick: onOpen, "aria-labelledby": "app-search-label", children: [(0, jsx_runtime_1.jsx)(Search_1.default, { color: "primary", sx: { fontSize: '1.125rem' } }), (0, jsx_runtime_1.jsx)(SearchLabel, { id: "app-search-label", children: "Search anything" }), (0, jsx_runtime_1.jsxs)(Shortcut, { "aria-hidden": "true", children: [macOS ? '⌘' : 'Ctrl+', "K"] })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setIsOpen(true), children: "Open Search" }), isOpen && ReactDOM.createPortal((0, jsx_runtime_1.jsx)(SearchModal_1.default, { open: isOpen, onClose: onClose }), document.body), (0, jsx_runtime_1.jsx)(GlobalStyles_1.default, { styles: (theme) => ({
                    html: {
                        ':root': {
                            '--docsearch-primary-color': (theme.vars || theme).palette.primary[600],
                            '--docsearch-text-color': (theme.vars || theme).palette.text.primary,
                            '--docsearch-muted-color': (theme.vars || theme).palette.grey[600],
                            '--docsearch-searchbox-shadow': 0,
                            '--docsearch-hit-shadow': 0,
                            '--docsearch-footer-shadow': 0,
                            '--docsearch-spacing': theme.spacing(1.5),
                            '--docsearch-hit-active-color': (theme.vars || theme).palette.primary[600],
                            '--docsearch-logo-color': (theme.vars || theme).palette.grey[600],
                            '--docsearch-searchbox-focus-background': 'unset',
                            '--docsearch-footer-background': 'unset',
                            '--docsearch-modal-background': (theme.vars || theme).palette.background.paper,
                        },
                    },
                    body: {
                        '.DocSearch-Container': {
                            transition: `opacity ${FADE_DURATION}ms`,
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            opacity: 0,
                            zIndex: theme.zIndex.tooltip + 100,
                            backgroundColor: (0, styles_1.alpha)(theme.palette.grey[700], 0.5),
                            backdropFilter: 'blur(2px)',
                        },
                        '& .DocSearch-StartScreen': {
                            display: 'none',
                        },
                        '& .DocSearch-NewStartScreen': {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: theme.spacing(2),
                            paddingBottom: theme.spacing(2),
                        },
                        '& .DocSearch-NewStartScreenCategory': {
                            display: 'flex',
                            flexDirection: 'column',
                        },
                        '& .DocSearch-NewStartScreenTitle': {
                            display: 'flex',
                            alignItems: 'center',
                            padding: theme.spacing(2, 3, 1.5, 2),
                            fontSize: theme.typography.pxToRem(11),
                            fontWeight: theme.typography.fontWeightBold,
                            textTransform: 'uppercase',
                            letterSpacing: '.1rem',
                            color: (theme.vars || theme).palette.text.tertiary,
                        },
                        '& .DocSearch-NewStartScreenTitleIcon': {
                            fontSize: theme.typography.pxToRem(18),
                            color: (theme.vars || theme).palette.primary[500],
                            marginRight: theme.spacing(1.5),
                            opacity: 0.6,
                            // Redefine SvgIcon-root style as ReactDOMServer.renderToStaticMarkup doesn't
                            // Generate the CSS.
                            // TODO v6: This hack should no longer be needed with static CSS rendering.
                            userSelect: 'none',
                            width: '1em',
                            height: '1em',
                            display: 'inline-block',
                            flexShrink: 0,
                            fill: 'currentColor',
                        },
                        '& .DocSearch-NewStartScreenItem': {
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            width: '100%',
                            height: '42px',
                            color: (theme.vars || theme).palette.primary[600],
                            fontSize: theme.typography.pxToRem(14),
                            fontWeight: theme.typography.fontWeightMedium,
                            padding: theme.spacing(0.25, 0),
                            paddingLeft: theme.spacing(2),
                            border: '1px solid transparent',
                            borderRadius: theme.shape.borderRadius,
                            backgroundColor: (0, styles_1.alpha)(theme.palette.grey[50], 0.4),
                            borderColor: (0, styles_1.alpha)(theme.palette.grey[100], 0.5),
                            marginBottom: theme.spacing(1),
                            '&:hover, &:focus': {
                                backgroundColor: (theme.vars || theme).palette.primary[50],
                                borderColor: (theme.vars || theme).palette.primary[300],
                            },
                            '&:focus-visible': {
                                outline: '3px solid',
                                outlineColor: (theme.vars || theme).palette.primary[200],
                                outlineOffset: 0,
                            },
                        },
                        '& .DocSearch-Modal': {
                            // docsearch.css: <= 750px will be full screen modal
                            maxWidth: '640px',
                            boxShadow: `0px 4px 16px ${(0, styles_1.alpha)(theme.palette.common.black, 0.2)}`,
                            borderRadius: theme.shape.borderRadius,
                            border: '1px solid',
                            borderColor: (theme.vars || theme).palette.grey[300],
                        },
                        '& .DocSearch-SearchBar': {
                            borderBottom: '1px solid',
                            borderColor: (theme.vars || theme).palette.grey[200],
                            padding: theme.spacing(0.5, 1),
                        },
                        '& .DocSearch-Form': {
                            '& .DocSearch-Reset': {
                                display: 'none',
                            },
                            '& .DocSearch-Input': {
                                paddingLeft: theme.spacing(2),
                                fontSize: theme.typography.pxToRem(16),
                                fontWeight: theme.typography.fontWeightMedium,
                            },
                            '& .DocSearch-Search-Icon': {
                                width: '18px',
                                height: '18px',
                            },
                            '& .DocSearch-VisuallyHiddenForAccessibility': {
                                width: 0,
                                visibility: 'hidden',
                            },
                        },
                        '& .DocSearch-Cancel': {
                            display: 'block',
                            alignSelf: 'center',
                            cursor: 'pointer',
                            height: '1.5rem',
                            marginRight: theme.spacing(1),
                            padding: theme.spacing(0.3, 0.8, 0.6, 0.8),
                            fontSize: 0,
                            borderRadius: 6,
                            backgroundColor: (theme.vars || theme).palette.grey[50],
                            border: '1px solid',
                            borderColor: (theme.vars || theme).palette.grey[200],
                            '&::before': {
                                content: '"esc"',
                                fontFamily: theme.typography.fontFamily,
                                fontSize: theme.typography.pxToRem(12),
                                fontWeight: theme.typography.fontWeightBold,
                                color: (theme.vars || theme).palette.text.secondary,
                            },
                        },
                        '& .DocSearch-Dropdown': {
                            minHeight: 384, // = StartScreen height, to prevent layout shift when first char
                            '&::-webkit-scrollbar-thumb': {
                                borderColor: (theme.vars || theme).palette.background.paper,
                                backgroundColor: (theme.vars || theme).palette.grey[500],
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: (theme.vars || theme).palette.background.paper,
                            },
                            '* ul': {
                                marginTop: theme.spacing(1),
                            },
                        },
                        '& .DocSearch-Dropdown-Container': {
                            '& .DocSearch-Hits:first-of-type': {
                                '& .DocSearch-Hit-source': {
                                    paddingTop: theme.spacing(2.5),
                                    paddingBottom: theme.spacing(0.5),
                                },
                            },
                        },
                        '& .DocSearch-Hit-source': {
                            top: 'initial',
                            padding: theme.spacing(1.5, 3, 1.5, 3),
                            background: 'transparent',
                            fontSize: theme.typography.pxToRem(11),
                            fontWeight: theme.typography.fontWeightBold,
                            textTransform: 'uppercase',
                            lineHeight: 1,
                            letterSpacing: '.1rem',
                            color: (theme.vars || theme).palette.text.tertiary,
                        },
                        '& .DocSearch-Hit': {
                            paddingBottom: 8,
                            '&:not(:first-of-type)': {
                                marginTop: -1,
                            },
                            '& .DocSearch-Hit-Container': {
                                height: '52px',
                            },
                        },
                        '& .DocSearch-Hit a': {
                            padding: theme.spacing(0.25, 0),
                            paddingLeft: theme.spacing(2),
                            border: '1px solid transparent',
                            borderRadius: theme.shape.borderRadius,
                            backgroundColor: (0, styles_1.alpha)(theme.palette.grey[50], 0.4),
                            borderColor: (0, styles_1.alpha)(theme.palette.grey[100], 0.5),
                            '&:focus-visible': {
                                outline: '3px solid',
                                outlineColor: (theme.vars || theme).palette.primary[200],
                                outlineOffset: 0,
                                backgroundColor: (theme.vars || theme).palette.primary[50],
                                borderColor: (theme.vars || theme).palette.primary[300],
                            },
                        },
                        '& .DocSearch-Hit-content-wrapper': {
                            paddingLeft: theme.spacing(1),
                        },
                        '& .DocSearch-Hit-title': {
                            fontSize: theme.typography.pxToRem(14),
                            fontWeight: theme.typography.fontWeightMedium,
                            color: (theme.vars || theme).palette.text.primary,
                        },
                        '& .DocSearch-Hit-path': {
                            fontSize: theme.typography.pxToRem(12),
                            color: (theme.vars || theme).palette.text.secondary,
                        },
                        '& .DocSearch-Hit-icon': {
                            '> svg': {
                                height: '16px',
                                width: '16px',
                                margin: 0,
                            },
                        },
                        '& .DocSearch-Hit-Select-Icon': {
                            height: '14px',
                            width: '14px',
                        },
                        '& .DocSearch-Hit[aria-selected="true"] a': {
                            backgroundColor: (theme.vars || theme).palette.primary[50],
                            borderColor: (theme.vars || theme).palette.primary[300],
                        },
                        '& .DocSearch-Hit-action, & .DocSearch-Hits mark': {
                            color: (theme.vars || theme).palette.primary[500],
                            '& .DocSearch-Hit-action-button': {
                                display: 'flex',
                                width: '24px',
                                borderRadius: '6px',
                                border: '1px solid transparent',
                                '> svg': {
                                    margin: 0,
                                },
                                '&:hover': {
                                    backgroundColor: (theme.vars || theme).palette.primary[100],
                                    borderColor: (theme.vars || theme).palette.primary[300],
                                },
                            },
                        },
                        '& .DocSearch-Footer': {
                            borderTop: '1px solid',
                            borderColor: (theme.vars || theme).palette.grey[200],
                            '& .DocSearch-Commands': {
                                display: 'none',
                            },
                        },
                    },
                }) }), (0, jsx_runtime_1.jsx)(GlobalStyles_1.default, { styles: (theme) => [
                    {
                        [theme.vars ? '[data-mui-color-scheme="dark"]:root' : '.mode-dark']: {
                            '--docsearch-primary-color': (theme.vars || theme).palette.primaryDark[300],
                            '--docsearch-hit-active-color': (theme.vars || theme).palette.primary[300],
                        },
                    },
                    {
                        [theme.vars ? '[data-mui-color-scheme="dark"] body' : '.mode-dark']: {
                            '.DocSearch-Container': {
                                backgroundColor: (0, styles_1.alpha)(theme.palette.grey[900], 0.6),
                            },
                            '& .DocSearch-NewStartScreenTitleIcon': {
                                color: (theme.vars || theme).palette.primary[300],
                            },
                            '& .DocSearch-NewStartScreenItem': {
                                color: (theme.vars || theme).palette.primary[300],
                                backgroundColor: (0, styles_1.alpha)(theme.palette.primaryDark[800], 0.5),
                                borderColor: (0, styles_1.alpha)(theme.palette.primaryDark[700], 0.8),
                                '&:hover, &:focus': {
                                    backgroundColor: (0, styles_1.alpha)(theme.palette.primary[900], 0.4),
                                    borderColor: (0, styles_1.alpha)(theme.palette.primary[700], 0.6),
                                },
                                '&:focus-visible': {
                                    outlineColor: (theme.vars || theme).palette.primary[700],
                                },
                            },
                            '& .DocSearch-Modal': {
                                backgroundColor: (theme.vars || theme).palette.primaryDark[900],
                                boxShadow: `0px 4px 16px ${(0, styles_1.alpha)(theme.palette.common.black, 0.8)}`,
                                border: '1px solid',
                                borderColor: (theme.vars || theme).palette.primaryDark[700],
                            },
                            '& .DocSearch-SearchBar': {
                                borderColor: (theme.vars || theme).palette.primaryDark[700],
                            },
                            '& .DocSearch-Cancel': {
                                backgroundColor: (theme.vars || theme).palette.primaryDark[800],
                                borderColor: (theme.vars || theme).palette.primaryDark[600],
                            },
                            '& .DocSearch-Dropdown': {
                                '&::-webkit-scrollbar-thumb': {
                                    borderColor: (theme.vars || theme).palette.primaryDark[900],
                                    backgroundColor: (theme.vars || theme).palette.primaryDark[100],
                                },
                            },
                            '& .DocSearch-Hit a': {
                                backgroundColor: (0, styles_1.alpha)(theme.palette.primaryDark[800], 0.5),
                                borderColor: (0, styles_1.alpha)(theme.palette.primaryDark[700], 0.8),
                                '&:focus-visible': {
                                    outlineColor: (0, styles_1.alpha)(theme.palette.primary[400], 0.5),
                                    backgroundColor: (0, styles_1.alpha)(theme.palette.primary[900], 0.4),
                                    borderColor: (0, styles_1.alpha)(theme.palette.primary[700], 0.6),
                                },
                            },
                            '& .DocSearch-Hit[aria-selected="true"] a': {
                                color: (theme.vars || theme).palette.primary[300],
                                backgroundColor: (0, styles_1.alpha)(theme.palette.primary[900], 0.4),
                                borderColor: (0, styles_1.alpha)(theme.palette.primary[700], 0.6),
                            },
                            '& .DocSearch-Hit-action, & .DocSearch-Hits mark': {
                                color: (theme.vars || theme).palette.primary[400],
                                '& .DocSearch-Hit-action-button': {
                                    '&:hover': {
                                        backgroundColor: (0, styles_1.alpha)(theme.palette.primary[900], 0.8),
                                        borderColor: (0, styles_1.alpha)(theme.palette.primary[700], 0.8),
                                    },
                                },
                            },
                            '& .DocSearch-Footer': {
                                borderColor: (theme.vars || theme).palette.primaryDark[700],
                            },
                        },
                    },
                ] })] }));
}
exports.default = Search;
