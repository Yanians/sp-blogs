"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = void 0;
exports.DirectiveStyle = DirectiveStyle;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DirectiveStyle(props) {
  return {};
}
function Comps(Component) {
  return function (props) {
    return /*#__PURE__*/React.createElement(Component, _extends({}, props.style, {
      style: {
        border: '2px solid green'
      }
    }));
  };
}
var Constants = exports.Constants = Comps;

// const fulFilled = Comps(Typography)

// export function resolveCustomStyles(props: Shadows): string | object | undefined {

//   const customShadows =  Object.entries(shadows).find(([_, isEnabled]) => isEnabled)?.[0];

//   return { 
//       customShadows,
//   }
// }

// sofia,impact,monaco,verdana,comic,platino,serif,gadget,monospace,sansserif,arial,timesnewroman,tahoma,georgia,fantasy,garamond,cursive,cursive_mt,
//   shadowblack,
//       shadow1black,
//       shadow2black,
//       shadow3black,
//       shadowred,
//       shadowsofia,
//       shadow1red,
//       shadow2red,
//       shadow3red,
//       shadowgrey,
//       shadowgreylight,
//       shadow1grey,
//       shadow2grey,
//       shadow3grey,

//       style,
//           sofia,
//           timesnewroman,
//           cursive,
//           sansserif,
//           fantasy,
//           cursive_mt,
//           georgia,
//           impact,
//           monaco,
//           verdana,
//           comic,
//           platino,
//           serif,
//           gadget,
//           garamond,
//           monospace,
//           arial,
//           tahoma,