"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifiedLinkFromReactRouterDom = ModifiedLinkFromReactRouterDom;
exports.Button = Button;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var ListItemButton_1 = tslib_1.__importDefault(require("@mui/material/ListItemButton"));
var InputBase_1 = tslib_1.__importDefault(require("@mui/material/InputBase"));
var react_router_dom_1 = require("react-router-dom");
function ModifiedLinkFromReactRouterDom(props) {
    var children = props.children, _a = props.add, Component = _a === void 0 ? 'div' : _a, style = props.style, rest = tslib_1.__rest(props, ["children", "add", "style"]);
    return (0, jsx_runtime_1.jsx)(Component, tslib_1.__assign({}, rest, { style: style }));
}
function Button(props) {
    var specialProp = props.specialProp, rest = tslib_1.__rest(props, ["specialProp"]);
    // do something with specialProp
    return (0, jsx_runtime_1.jsx)("button", tslib_1.__assign({}, rest));
}
function Directives() {
    var Search = (0, styles_1.styled)('div')(function (_a) {
        var _b;
        var theme = _a.theme;
        return (_b = {
                display: 'flex',
                zIndex: 99,
                position: 'relative',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
                boxShadow: theme.shadows[12],
                // backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.mode === 'dark' ? (0, styles_1.alpha)(theme.palette.success.main, 0.25) : (0, styles_1.alpha)(theme.palette.common.black, 0.18),
                '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' ? (0, styles_1.alpha)(theme.palette.common.white, 0.07) : (0, styles_1.alpha)(theme.palette.common.white, 0.9),
                },
                marginLeft: 0,
                width: '100%'
            },
            _b[theme.breakpoints.up('sm')] = {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
            _b);
    });
    var LinkModified = (0, styles_1.styled)(function (props) {
        var to = props.to, rest = tslib_1.__rest(props, ["to"]);
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, tslib_1.__assign({ to: to }, rest));
    })(function (_a) {
        var theme = _a.theme;
        return ({
            textDecoration: 'none',
            "& :hover": {
                textDecoration: 'underline',
                fontStyle: 'italic',
                color: theme.palette.mode === 'dark' ?
                    (0, styles_1.alpha)(theme.palette.success.dark, 0.99) :
                    (0, styles_1.alpha)(theme.palette.error.dark, 0.99),
            }, color: theme.palette.mode === 'dark' ?
                (0, styles_1.alpha)(theme.palette.common.white, 0.99) : (0, styles_1.alpha)(theme.palette.common.black, 0.99),
        });
    });
    var SearchIconWrapper = (0, styles_1.styled)('div')(function (_a) {
        var theme = _a.theme;
        return ({
            padding: theme.spacing(0, 1),
            display: 'flex',
            zIndex: 99,
            // position: 'relative',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
            boxShadow: theme.shadows[10],
            backgroundColor: "".concat((0, styles_1.alpha)(theme.palette.background.paper, 0.72)),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            // display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        });
    });
    var ListItemStyle = (0, styles_1.styled)(function (props) {
        var children = props.children, rest = tslib_1.__rest(props, ["children"]);
        return (0, jsx_runtime_1.jsx)(ListItemButton_1.default, tslib_1.__assign({}, rest, { children: children }));
    })(function (_a) {
        var theme = _a.theme;
        return (tslib_1.__assign(tslib_1.__assign({}, theme.typography.body2), { position: 'relative', width: 'auto', textTransform: 'capitalize', paddingRight: theme.spacing(2), '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? (0, styles_1.alpha)(theme.palette.success.dark, 0.25) : 'inherit',
                color: 'red',
                fontStyle: 'italic',
                textDecoration: 'underline',
            }, '&:before': {
                top: 0,
                right: 0,
                width: 3,
                bottom: 0,
                content: "''",
                display: 'none',
                position: 'relative',
            } }));
    });
    var StyledInputBase = (0, styles_1.styled)(InputBase_1.default)(function (_a) {
        var _b;
        var theme = _a.theme;
        return ({
            color: 'inherit',
            '& .MuiInputBase-input': (_b = {
                    padding: theme.spacing(1, 1, 1, 0),
                    // vertical padding + font size from searchIcon
                    paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
                    transition: theme.transitions.create('width'),
                    width: '100%'
                },
                _b[theme.breakpoints.up('sm')] = {
                    width: '12ch',
                    '&:focus': {
                        width: '20ch',
                    },
                },
                _b),
        });
    });
    return { Search: Search, StyledInputBase: StyledInputBase, SearchIconWrapper: SearchIconWrapper, ListItemStyle: ListItemStyle, LinkModified: LinkModified };
}
exports.default = Directives;
