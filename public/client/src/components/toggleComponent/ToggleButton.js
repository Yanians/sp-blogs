"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const Search_1 = tslib_1.__importDefault(require("@mui/icons-material/Search"));
const brandingTheme_1 = require("../../utils/brandingTheme");
const styles_1 = require("@mui/material/styles");
const react_1 = require("@docsearch/react");
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
        backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.success.dark, 0.9),
        fontFamily: theme.typography.fontFamilyCode,
        fontSize: theme.typography.pxToRem(14),
        color: (theme.vars || theme).palette.secondary.dark,
        border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
        borderRadius: (theme.vars || theme).shape.borderRadius,
        cursor: 'pointer',
        transitionProperty: 'all',
        transitionDuration: '150ms',
        boxShadow: `hsl(200, 0%, 100%) 0 1px 0 inset, ${(0, styles_1.alpha)(theme.palette.grey[100], 0.4)} 0 -1px 0 inset, ${(0, styles_1.alpha)(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
        '&:hover': {
            background: (0, styles_1.alpha)(theme.palette.grey[100], 0.5),
            borderColor: (theme.vars || theme).palette.grey[300],
            boxShadow: 'none',
        },
        '&:focus-visible': {
            outline: `3px solid ${(0, styles_1.alpha)(theme.palette.primary.main, 0.5)}`,
            outlineOffset: '1px',
        },
    },
    theme.applyDarkStyles({
        backgroundColor: (0, styles_1.alpha)(theme.palette.info.dark, 0.9),
        borderColor: (0, styles_1.alpha)(theme.palette.info[100], 0.5),
        boxShadow: `${(0, styles_1.alpha)(theme.palette.primaryDark[600], 0.1)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
        '&:hover': {
            background: (theme.vars || theme).palette.info.dark,
            borderColor: (theme.vars || theme).palette.primaryDark[600],
            boxShadow: 'none',
        },
    }),
]);
const SearchLabel = (0, styles_1.styled)('span')(({ theme }) => ({
    marginRight: 'auto',
    marginBottom: '1px', // optical alignment
    color: (theme.vars || theme).palette.text.secondary,
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
        ...theme.applyStyles('dark', {
            borderColor: (theme.vars || theme).palette.grey[600],
            backgroundColor: (theme.vars || theme).palette.error.contrastText,
        }),
    };
});
function ToggleButton({ willOpen }) {
    const macOS = window.navigator.platform.toUpperCase().includes('MAC');
    const [isOpen, setIsOpen] = React.useState(false);
    const searchButtonRef = React.useRef(null);
    const onOpen = React.useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);
    const onClose = React.useCallback(() => {
        setIsOpen(false); // DO NOT call setIsOpen inside a timeout (it causes scroll issue).
    }, [setIsOpen]);
    (0, react_1.useDocSearchKeyboardEvents)({
        isOpen,
        onOpen,
        onClose,
        searchButtonRef,
    });
    return ((0, jsx_runtime_1.jsxs)(SearchButton, { ref: searchButtonRef, onClick: willOpen, "aria-labelledby": "app-search-label", children: [(0, jsx_runtime_1.jsx)(Search_1.default, { sx: { fontSize: '1.125rem' } }), (0, jsx_runtime_1.jsx)(SearchLabel, { id: "app-search-label", children: "Search anything" }), (0, jsx_runtime_1.jsxs)(Shortcut, { "aria-hidden": "true", children: [macOS ? '⌘' : 'Ctrl+', "K"] })] }));
}
exports.default = ToggleButton;
