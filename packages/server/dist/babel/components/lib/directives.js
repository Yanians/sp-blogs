"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.ModifiedLinkFromReactRouterDom = ModifiedLinkFromReactRouterDom;
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _ListItemButton = _interopRequireDefault(require("@mui/material/ListItemButton"));
var _InputBase = _interopRequireDefault(require("@mui/material/InputBase"));
var _reactRouterDom = require("react-router-dom");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ModifiedLinkFromReactRouterDom(props) {
  const {
    children,
    add: Component = 'div',
    style,
    ...rest
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
    ...rest,
    style: style
  });
}
function Button(props) {
  const {
    specialProp,
    ...rest
  } = props;
  // do something with specialProp
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ...rest
  });
}
function Directives() {
  const Search = (0, _styles.styled)('div')(_ref => {
    let {
      theme
    } = _ref;
    return {
      display: 'flex',
      zIndex: 99,
      position: 'relative',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      // Fix on Mobile
      boxShadow: theme.shadows[12],
      // backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.mode === 'dark' ? (0, _styles.alpha)(theme.palette.success.main, 0.25) : (0, _styles.alpha)(theme.palette.common.black, 0.18),
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? (0, _styles.alpha)(theme.palette.common.white, 0.07) : (0, _styles.alpha)(theme.palette.common.white, 0.9)
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
      }
    };
  });
  const LinkModified = (0, _styles.styled)(props => {
    const {
      to,
      ...rest
    } = props;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
      to: to,
      ...rest
    });
  })(_ref2 => {
    let {
      theme
    } = _ref2;
    return {
      textDecoration: 'none',
      "& :hover": {
        textDecoration: 'underline',
        fontStyle: 'italic',
        color: theme.palette.mode === 'dark' ? (0, _styles.alpha)(theme.palette.success.dark, 0.99) : (0, _styles.alpha)(theme.palette.error.dark, 0.99)
      },
      color: theme.palette.mode === 'dark' ? (0, _styles.alpha)(theme.palette.common.white, 0.99) : (0, _styles.alpha)(theme.palette.common.black, 0.99)
    };
  });
  const SearchIconWrapper = (0, _styles.styled)('div')(_ref3 => {
    let {
      theme
    } = _ref3;
    return {
      padding: theme.spacing(0, 1),
      display: 'flex',
      zIndex: 99,
      // position: 'relative',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      // Fix on Mobile
      boxShadow: theme.shadows[10],
      backgroundColor: `${(0, _styles.alpha)(theme.palette.background.paper, 0.72)}`,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      // display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
  });
  const ListItemStyle = (0, _styles.styled)(props => {
    const {
      children,
      ...rest
    } = props;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemButton.default, {
      ...rest,
      children: children
    });
  })(_ref4 => {
    let {
      theme
    } = _ref4;
    return {
      ...theme.typography.body2,
      position: 'relative',
      width: 'auto',
      textTransform: 'capitalize',
      paddingRight: theme.spacing(2),
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? (0, _styles.alpha)(theme.palette.success.dark, 0.25) : 'inherit',
        color: 'red',
        fontStyle: 'italic',
        textDecoration: 'underline'
      },
      '&:before': {
        top: 0,
        right: 0,
        width: 3,
        bottom: 0,
        content: "''",
        display: 'none',
        position: 'relative'
      }
    };
  });
  const StyledInputBase = (0, _styles.styled)(_InputBase.default)(_ref5 => {
    let {
      theme
    } = _ref5;
    return {
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch'
          }
        }
      }
    };
  });
  return {
    Search,
    StyledInputBase,
    SearchIconWrapper,
    ListItemStyle,
    LinkModified
  };
}
var _default = exports.default = Directives;