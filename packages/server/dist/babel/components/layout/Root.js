"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Root;
var React = _interopRequireWildcard(require("react"));
var _layoutCoreV = require("@treasury/layout-core-v5");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function Root(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_layoutCoreV.Root, {
    scheme: {
      header: {
        config: {
          xs: {
            position: "sticky",
            height: 56
          },
          md: {
            position: "relative",
            height: 64,
            clipped: true
          }
        }
      },
      leftEdgeSidebar: {
        config: {
          xs: {
            variant: "persistent",
            persistentBehavior: "fit",
            width: 60,
            collapsible: false,
            collapsedWidth: 20,
            headerMagnetEnabled: true
          },
          sm: {
            variant: "persistent",
            persistentBehavior: "fit",
            width: 60,
            collapsible: true,
            collapsedWidth: 100,
            headerMagnetEnabled: true
          },
          md: {
            variant: "persistent",
            persistentBehavior: "fit",
            width: 160,
            collapsible: true,
            collapsedWidth: 60,
            headerMagnetEnabled: true
          }
        }
      },
      rightEdgeSidebar: {
        config: {
          xs: {
            variant: "persistent",
            persistentBehavior: "fit",
            width: 256,
            collapsible: true,
            collapsedWidth: 70,
            headerMagnetEnabled: true
          },
          sm: {
            variant: "persistent",
            persistentBehavior: "fit",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
            headerMagnetEnabled: true
          },
          md: {
            variant: "persistent",
            persistentBehavior: "fit",
            width: 256,
            collapsible: false,
            collapsedWidth: 120,
            headerMagnetEnabled: true
          },
          lg: {
            variant: "persistent",
            persistentBehavior: "fit",
            width: 256,
            collapsible: false,
            collapsedWidth: 120,
            headerMagnetEnabled: true
          }
        }
      },
      rightInsetSidebar: {
        config: {
          sm: {
            position: "fixed",
            width: 256
          }
        }
      }

      //   insetSidebar:{
      //     leftInsetSidebar: {
      //       config:{
      //        xs:{
      //         position: "permanent",
      //         width:150,
      //         headerMagnetEnabled: true,
      //       },
      //       sm:{
      //         position: "permanent",
      //         width:150,
      //         headerMagnetEnabled: true,
      //       },
      //         md:{
      //        variant: "persistent",
      //         persistentBehavior: "fit",
      //         width: 45,
      //         collapsible: false,
      //         collapsedWidth: 120,
      //         headerMagnetEnabled: true,
      //       },
      //      }
      //    } 
      //  } 
    },
    initialState: {
      leftEdgeSidebar: {
        open: false,
        collapsed: true
      }
    }
  }, children));
}