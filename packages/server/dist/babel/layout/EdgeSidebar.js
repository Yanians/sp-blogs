"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EdgeSideBar;
var React = _interopRequireWildcard(require("react"));
var _ListSubheader = _interopRequireDefault(require("@mui/material/ListSubheader"));
var _KeyboardArrowRight = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowRight"));
var _KeyboardArrowLeft = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowLeft"));
var _layoutCoreV = require("@treasury/layout-core-v5");
var _routes = require("@routes/routes");
var _material = require("@mui/material");
var _directives = _interopRequireDefault(require("@lib/directives"));
var _Hidden = _interopRequireDefault(require("@mui/material/Hidden"));
var _utilityTypes = require("@lib/utilityTypes");
var _sweetalert = _interopRequireDefault(require("sweetalert2"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TriggerUsingHook = props => {
  const [open, isClose] = React.useState(false);
  const {
    ListItemStyle,
    LinkModified
  } = (0, _directives.default)();
  const ItemButton = _utilityTypes.PassThrough;
  const Text = _utilityTypes.PassThrough;
  //@ts-ignore
  const {
    state: {
      leftEdgeSidebar,
      rightEdgeSidebar
    },
    toggleLeftSidebarOpen,
    toggleRightSidebarOpen,
    toggleLeftSidebarCollapsed,
    toggleRightSidebarCollapsed
  } = (0, _layoutCoreV.useLayoutCtx)();
  const handleChange = () => {
    toggleRightSidebarOpen();
    isClose(!open);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ItemButton, {
      add: ListItemStyle,
      dense: true,
      onClick: handleChange,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
        aligns: "center",
        noWrap: true,
        condition: "typography",
        children: open ? 'close tab' : 'right tab'
      })
    }), _routes.Routes.map((item, index) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Hidden.default, {
          smDown: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LinkModified, {
            to: item.link,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemButton, {
              add: ListItemStyle,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
                align: "center",
                noWrap: true,
                condition: "typography",
                sx: {
                  flexGrow: 1,
                  color: props?.colorChange ? 'grey.400' : 'success.dark'
                },
                children: item.Title
              })
            })
          })
        })
      }, item.id);
    })]
  });
};
function EdgeSideBar(props) {
  const handleFocus = () => {
    _sweetalert.default.fire({
      title: 'This is focusable',
      text: 'Nothing more accurate than this focus features'
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_layoutCoreV.EdgeSidebar, {
    anchor: "left",
    children: _ref => {
      let {
        state: {
          leftEdgeSidebar
        },
        toggleLeftSidebarCollapsed
      } = _ref;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_layoutCoreV.SidebarContent, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
          alt: "unknown Avatar",
          sx: {
            ...(leftEdgeSidebar?.collapsed && {
              width: 40,
              height: 40
            })
          },
          children: "A"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.List, {
          sx: {
            bgcolor: 'inherit'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListSubheader.default, {
            inset: true,
            sx: {
              bgcolor: 'inherit'
            },
            children: "Management"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TriggerUsingHook, {
            colorChange: props?.colorChange
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_layoutCoreV.EdgeTrigger, {
          target: {
            anchor: "left",
            field: "collapsed"
          },
          children: (collapsed, setCollapsed) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ButtonBase, {
            onFocusVisible: handleFocus,
            onClick: () => setCollapsed(!collapsed),
            sx: {
              minHeight: 40,
              width: "100%",
              bgcolor: "inherit",
              borderTop: "1px solid",
              borderColor: "grey.200"
            },
            children: collapsed ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_KeyboardArrowRight.default, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_KeyboardArrowLeft.default, {})
          })
        })]
      });
    }
  });
}