"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Root;
var React = _interopRequireWildcard(require("react"));
var _layoutCoreV = require("@treasury/layout-core-v5");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Root(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_layoutCoreV.Root, {
      scheme: {
        header: {
          config: {
            xs: {
              position: "sticky",
              top: 1,
              height: 56,
              layer: 5
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
              width: 100,
              collapsible: false,
              collapsedWidth: 20,
              headerMagnetEnabled: true
            },
            sm: {
              variant: "persistent",
              persistentBehavior: "fit",
              width: 60,
              collapsible: true,
              collapsedWidth: 200,
              headerMagnetEnabled: true
            },
            md: {
              variant: "persistent",
              persistentBehavior: "flexible",
              width: 200,
              collapsible: true,
              collapsedWidth: 120,
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
              position: "absolute",
              width: 256
            }
          }
        },
        leftInsetSidebar: {
          config: {
            xs: {
              position: "fixed",
              width: 150,
              headerMagnetEnabled: true
            },
            sm: {
              position: "fixed",
              width: 150,
              headerMagnetEnabled: true
            },
            md: {
              position: "fixed",
              width: 45,
              headerMagnetEnabled: true
            }
          }
        }
      },
      initialState: {
        leftEdgeSidebar: {
          open: true,
          collapsed: true
        }
      },
      children: children
    })
  });
}