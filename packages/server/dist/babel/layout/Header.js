"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;
var React = _interopRequireWildcard(require("react"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _layoutCoreV = require("@treasury/layout-core-v5");
var _directives = _interopRequireDefault(require("../components/lib/directives"));
var _material = require("@mui/material");
var _WithTextStyles = _interopRequireDefault(require("../components/lib/WithTextStyles"));
var _reactRouterDom = require("react-router-dom");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
//@ts-ignore

;
const pages = [{
  id: 1,
  pathname: '/getting-started',
  icon: 'HomeIcon',
  link: [{
    name: '/home'
  }, {
    name: '/news'
  }, {
    name: '/blogs'
  }, {
    name: '/tooling'
  }, {
    name: '/management'
  }, {
    name: '/projects'
  }, {
    name: '/documentation',
    title: 'Guides & understanding'
  }]
}];
function Header() {
  const {
    Search,
    StyledInputBase,
    SearchIconWrapper,
    ListItemStyle
  } = (0, _directives.default)();
  const TextHeader = _WithTextStyles.default;
  const HeaderButton = _WithTextStyles.default;
  const Navigate = (0, _reactRouterDom.useNavigate)();
  const handleClick = event => {
    const name = event.target.textContent;
    if (name === 'home') {
      Navigate('/');
    } else {
      const paths = pages.map((find, _) => find.pathname);
      Navigate(`${paths}/${name}`);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_layoutCoreV.Header, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toolbar.default, {
      variant: "dense",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TextHeader, {
          platino: true,
          variant: "h6",
          pumpkin: true,
          types: "typography",
          textContent: "Glass Layout"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(Search, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SearchIconWrapper, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Search.default, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledInputBase
        // onClick={handleSearchClick}
        , {
          placeholder: "Search\u2026",
          inputProps: {
            'aria-label': 'search'
          }
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        component: 'div',
        sx: {
          display: 'flex',
          flexGrow: 1
        },
        children: pages.map(find => {
          return find['link']?.map(path => {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(HeaderButton, {
                selected: true,
                mui: true,
                disableTouchRipple: true,
                size: "large",
                onClick: e => handleClick(e),
                serve: ListItemStyle,
                alignItems: "center",
                textContent: `${path.name?.replace(/^\//g, '')}`
              })
            }, path.name);
          });
        })
      })]
    })
  });
}
// concat(path.name?.replace(/^\//g, ''))