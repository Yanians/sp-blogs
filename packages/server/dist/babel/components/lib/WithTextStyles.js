"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.resolveCustomShadows = resolveCustomShadows;
exports.resolveCustomStyle = resolveCustomStyle;
var React = _interopRequireWildcard(require("react"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function resolveCustomShadows(props) {
  const shadows = {
    '4px 4px 8px rgba(19, 16, 16, 0.69)': props.shadowblack,
    '1px -2px 11px rgba(173, 167, 167, 0.80)': props.innocent,
    '19px 09px 19px rgba(255, 84, 112, 0.99)': props.rose,
    '2px 2px 8px rgba(206, 128, 64, 0.62)': props.shadow3black,
    '1px 1px 8px rgba(197, 49, 81, 0.99)': props.dungeon,
    '3px 3px 8px rgba(218, 109, 176, 0.47)': props.shadowsofia,
    '20px -40px 10px rgba(58, 2, 2, 0.87)': props.scripture,
    '2px 3px 8px rgba(227, 11, 90, 0.44)': props.razzmatazz,
    '2px 2px 8px rgba(146, 111, 91, 0.69)': props.beaver,
    '1px 5px 8px rgba(173, 167, 167, 0.57)': props.shadowgrey,
    '10px 10px 11px rgba(255, 110, 58, 0.84)': props.pumpkin,
    '5px 5px 3px rgba(255, 68, 102, 0.84)': props.potion,
    '1.5px 1.5px 3.5px rgba(41, 39, 39, 0.9)': props.focus,
    '20px 0px 20px rgba(117, 6, 34, 0.90)': props.ruby,
    '19px -9px 20px rgba(253, 212, 6, 0.85)': props.gas,
    '1px 1px 2px rgba(141, 212, 0, 0.95)': props.sheen,
    '1px 2px 1px rgba(199, 15, 138, 0.43)': props.shadow2grey,
    '19px 20px -40px rgba(214, 60, 13, 0.99)': props.seinna,
    '-1px 2px 4px rgba(5, 26, 51, 0.99)': props.mui
  };
  return Object.entries(shadows).find(_ref => {
    let [_, isEnabled] = _ref;
    return isEnabled;
  })?.[0];
}
function resolveCustomStyle(props) {
  const fontMap = {
    '\'Sofia\',sans-serif': props.sofia,
    '\'Lucida Console\', Monaco, monospace': props.monaco,
    '\'Courier New\',Courier,monospace': props.monospace,
    '\'Trebuchet MS\', Helvetica, sans-serif': props.sansserif,
    'Arial,Helvetica,\'sans-serif\'': props.arial,
    '\'Times New Roman\',Times,serif': props.timesnewroman,
    'Tahoma, Verdana, sans-serif': props.tahoma,
    '\'font-family: \'Times New Roman\', Times, serif': props.serif,
    'Impact, Charcoal, sans-serif': props.impact,
    '\'Palatino Linotype\', \'Book Antiqua\', Palatino, serif': props.platino,
    '\'Arial Black\', Gadget, sans-serif': props.gadget,
    'Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace': props.andali,
    'Georgia, serif': props.georgia,
    'Copperplate, Papyrus, fantasy': props.fantasy,
    '\'Garamond, serif\'': props.garamond,
    'Verdana, Geneva, sans-serif': props.verdana,
    '\'Comic Sans MS\', cursive, sans-serif': props.comic,
    '\'Brush Script\', cursive': props.cursive,
    '\'Brush Script MT\', cursive': props.cursive_mt
  };
  return Object.entries(fontMap).find(_ref2 => {
    let [_, isEnabled] = _ref2;
    return isEnabled;
  })?.[0];
}
/**
 * Directives
 */
const withTextStyles = props => {
  const {
    textContent,
    types,
    style,
    serve: Component = 'div',
    sofia,
    impact,
    andali,
    monaco,
    verdana,
    comic,
    platino,
    serif,
    gadget,
    monospace,
    sansserif,
    arial,
    timesnewroman,
    tahoma,
    georgia,
    fantasy,
    garamond,
    cursive,
    cursive_mt,
    scripture,
    innocent,
    focus,
    shadowblack,
    mui,
    seinna,
    gas,
    rose,
    sheen,
    potion,
    ruby,
    pumpkin,
    dungeon,
    beaver,
    razzmatazz,
    shadow1black,
    shadow2black,
    shadow3black,
    shadowred,
    shadowsofia,
    shadow2red,
    shadow3red,
    shadowgrey,
    shadowgreylight,
    shadow1grey,
    shadow2grey,
    shadow3grey,
    ...rest
  } = props;
  const fontFamily = resolveCustomStyle({
    sofia,
    impact,
    andali,
    monaco,
    verdana,
    comic,
    platino,
    serif,
    gadget,
    monospace,
    sansserif,
    arial,
    timesnewroman,
    tahoma,
    georgia,
    fantasy,
    garamond,
    cursive,
    cursive_mt
  });
  const textShadow = resolveCustomShadows({
    scripture,
    innocent,
    shadowblack,
    focus,
    gas,
    rose,
    mui,
    pumpkin,
    sheen,
    ruby,
    potion,
    dungeon,
    beaver,
    seinna,
    razzmatazz,
    shadow1black,
    shadow2black,
    shadow3black,
    shadowred,
    shadowsofia,
    shadow2red,
    shadow3red,
    shadowgrey,
    shadowgreylight,
    shadow1grey,
    shadow2grey,
    shadow3grey
  });
  switch (types) {
    case 'typography':
      {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          ...rest,
          style: {
            ...style,
            ...(fontFamily && {
              fontFamily
            }),
            ...(textShadow && {
              textShadow
            })
          },
          children: textContent
        });
      }
    default:
      {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
          ...rest,
          style: {
            ...style,
            ...(fontFamily && {
              fontFamily
            }),
            ...(textShadow && {
              textShadow
            })
          },
          children: textContent
        });
      }
  }
};
var _default = exports.default = withTextStyles;