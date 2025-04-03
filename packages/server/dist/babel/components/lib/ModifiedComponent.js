"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.resolveCustomShadows = resolveCustomShadows;
exports.resolveCustomStyle = resolveCustomStyle;
var React = _interopRequireWildcard(require("react"));
var _excluded = ["children", "style", "serve", "sofia", "impact", "andali", "monaco", "verdana", "comic", "platino", "serif", "gadget", "monospace", "sansserif", "arial", "timesnewroman", "tahoma", "georgia", "fantasy", "garamond", "cursive", "cursive_mt", "scripture", "innocent", "focus", "shadowblack", "mui", "seinna", "gas", "rose", "sheen", "potion", "ruby", "pumpkin", "dungeon", "beaver", "razzmatazz", "shadow1black", "shadow2black", "shadow3black", "shadowred", "shadowsofia", "shadow2red", "shadow3red", "shadowgrey", "shadowgreylight", "shadow1grey", "shadow2grey", "shadow3grey"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function resolveCustomShadows(props) {
  var _Object$entries$find;
  var shadows = {
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
  return (_Object$entries$find = Object.entries(shadows).find(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      _ = _ref2[0],
      isEnabled = _ref2[1];
    return isEnabled;
  })) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[0];
}
function resolveCustomStyle(props) {
  var _Object$entries$find2;
  var fontMap = {
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
  return (_Object$entries$find2 = Object.entries(fontMap).find(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      _ = _ref4[0],
      isEnabled = _ref4[1];
    return isEnabled;
  })) === null || _Object$entries$find2 === void 0 ? void 0 : _Object$entries$find2[0];
}
/**
 * Directives
 */
var ModifiedComponent = function ModifiedComponent(props) {
  var children = props.children,
    style = props.style,
    _props$serve = props.serve,
    Component = _props$serve === void 0 ? 'div' : _props$serve,
    sofia = props.sofia,
    impact = props.impact,
    andali = props.andali,
    monaco = props.monaco,
    verdana = props.verdana,
    comic = props.comic,
    platino = props.platino,
    serif = props.serif,
    gadget = props.gadget,
    monospace = props.monospace,
    sansserif = props.sansserif,
    arial = props.arial,
    timesnewroman = props.timesnewroman,
    tahoma = props.tahoma,
    georgia = props.georgia,
    fantasy = props.fantasy,
    garamond = props.garamond,
    cursive = props.cursive,
    cursive_mt = props.cursive_mt,
    scripture = props.scripture,
    innocent = props.innocent,
    focus = props.focus,
    shadowblack = props.shadowblack,
    mui = props.mui,
    seinna = props.seinna,
    gas = props.gas,
    rose = props.rose,
    sheen = props.sheen,
    potion = props.potion,
    ruby = props.ruby,
    pumpkin = props.pumpkin,
    dungeon = props.dungeon,
    beaver = props.beaver,
    razzmatazz = props.razzmatazz,
    shadow1black = props.shadow1black,
    shadow2black = props.shadow2black,
    shadow3black = props.shadow3black,
    shadowred = props.shadowred,
    shadowsofia = props.shadowsofia,
    shadow2red = props.shadow2red,
    shadow3red = props.shadow3red,
    shadowgrey = props.shadowgrey,
    shadowgreylight = props.shadowgreylight,
    shadow1grey = props.shadow1grey,
    shadow2grey = props.shadow2grey,
    shadow3grey = props.shadow3grey,
    rest = _objectWithoutProperties(props, _excluded);
  var fontFamily = resolveCustomStyle({
    sofia: sofia,
    impact: impact,
    andali: andali,
    monaco: monaco,
    verdana: verdana,
    comic: comic,
    platino: platino,
    serif: serif,
    gadget: gadget,
    monospace: monospace,
    sansserif: sansserif,
    arial: arial,
    timesnewroman: timesnewroman,
    tahoma: tahoma,
    georgia: georgia,
    fantasy: fantasy,
    garamond: garamond,
    cursive: cursive,
    cursive_mt: cursive_mt
  });
  var textShadow = resolveCustomShadows({
    scripture: scripture,
    innocent: innocent,
    shadowblack: shadowblack,
    focus: focus,
    gas: gas,
    rose: rose,
    mui: mui,
    pumpkin: pumpkin,
    sheen: sheen,
    ruby: ruby,
    potion: potion,
    dungeon: dungeon,
    beaver: beaver,
    seinna: seinna,
    razzmatazz: razzmatazz,
    shadow1black: shadow1black,
    shadow2black: shadow2black,
    shadow3black: shadow3black,
    shadowred: shadowred,
    shadowsofia: shadowsofia,
    shadow2red: shadow2red,
    shadow3red: shadow3red,
    shadowgrey: shadowgrey,
    shadowgreylight: shadowgreylight,
    shadow1grey: shadow1grey,
    shadow2grey: shadow2grey,
    shadow3grey: shadow3grey
  });
  return /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
    style: _objectSpread(_objectSpread(_objectSpread({}, style), fontFamily && {
      fontFamily: fontFamily
    }), textShadow && {
      textShadow: textShadow
    })
  }), children);
};
var _default = exports["default"] = ModifiedComponent;