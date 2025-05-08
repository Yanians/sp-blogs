"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var Background = function (props) {
    var _a, _b, _c;
    var backgrounds = {
        '4px 4px 8px rgba(19, 16, 16, 0.69)': props.shadowblack,
        '1px -2px 11px rgba(173, 167, 167, 0.80)': props.innocent,
        '19px 09px 19px rgba(255, 84, 112, 0.99)': props.rose,
        '2px 2px 8px rgba(206, 128, 64, 0.62)': props.shadow3black,
        '1px 1px 8px rgba(197, 49, 81, 0.99)': props.dungeon,
        '3px 3px 8px rgba(218, 109, 176, 0.47)': props.shadowsofia,
        '5px -4px 5px rgba(172, 169, 169, 0.73)': props.scripture,
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
        '-1px 2px 4px rgba(5, 26, 51, 0.99)': props.mui,
    };
    var Colors = {
        'rgba(226, 218, 218, 0.99)': props.shadowblack,
        'rgba(233, 24, 205, 0.99)': props.innocent,
        'rgb(5, 167, 241)': props.rose,
        'rgba(241, 62, 146, 0.99)': props.shadow3black,
        'rgba(5, 26, 51, 0.99)': props.dungeon,
        'rgba(137, 230, 15, 0.99)': props.shadowsofia,
        'rgba(122, 119, 124, 0.6)': props.scripture, //scriptures
        'rgba(5, 201, 119, 0.99)': props.razzmatazz,
        'rgba(210, 247, 4, 0.99)': props.beaver,
        'rgba(137, 105, 179, 0.99)': props.shadowgrey,
        'rgba(199, 61, 137, 0.99)': props.pumpkin,
        'rgba(230, 20, 142, 0.99)': props.potion,
        'rgba(110, 121, 11, 0.99)': props.focus,
        'rgba(165, 202, 130, 0.99)': props.ruby,
        'rgba(248, 246, 98, 0.99)': props.gas,
        'rgba(233, 91, 145, 0.99)': props.sheen,
        'rgba(172, 79, 141, 0.99)': props.shadow2grey,
        'rgb(197, 114, 81)': props.seinna,
        'hsla(251, 28.60%, 11.00%, 0.99)': props.mui,
    };
    var boxShadows = {
        '19px -9px 80px rgba(226, 218, 218, 0.99)': props.shadowblack,
        '19px -9px 80px rgba(233, 24, 205, 0.99)': props.innocent,
        '19px -9px 80px rgb(5, 167, 241)': props.rose,
        '19px -9px 80px rgba(241, 62, 146, 0.99)': props.shadow3black,
        '19px -9px 80px rgba(5, 26, 51, 0.99)': props.dungeon,
        '19px -9px 80px rgba(137, 230, 15, 0.99)': props.shadowsofia,
        '-5px 4px 25px rgba(54, 53, 54, 0.77)': props.scripture, //scriptures
        '19px -9px 80px rgba(5, 201, 119, 0.99)': props.razzmatazz,
        '19px -9px 80px rgba(210, 247, 4, 0.99)': props.beaver,
        '19px -9px 80px rgba(137, 105, 179, 0.99)': props.shadowgrey,
        '19px -9px 80px rgba(199, 61, 137, 0.99)': props.pumpkin,
        '19px -9px 80px rgba(230, 20, 142, 0.99)': props.potion,
        '19px -9px 80px rgba(110, 121, 11, 0.99)': props.focus,
        '19px -9px 80px rgba(165, 202, 130, 0.99)': props.ruby,
        '19px -9px 80px rgba(248, 246, 98, 0.99)': props.gas,
        '19px -9px 80px rgba(233, 91, 145, 0.99)': props.sheen,
        '19px -9px 80px rgba(172, 79, 141, 0.99)': props.shadow2grey,
        '19px -9px 80px rgb(197, 114, 81)': props.seinna,
        '19px -9px 80px hsla(251, 28.60%, 11.00%, 0.99)': props.mui,
    };
    var background = (_a = Object.entries(backgrounds).find(function (_a) {
        var _ = _a[0], isEnabled = _a[1];
        return isEnabled;
    })) === null || _a === void 0 ? void 0 : _a[0];
    var backgroundColor = (_b = Object.entries(Colors).find(function (_a) {
        var _ = _a[0], isEnabled = _a[1];
        return isEnabled;
    })) === null || _b === void 0 ? void 0 : _b[0];
    var boxShadow = (_c = Object.entries(boxShadows).find(function (_a) {
        var _ = _a[0], isEnabled = _a[1];
        return isEnabled;
    })) === null || _c === void 0 ? void 0 : _c[0];
    return { backgroundColor: backgroundColor, background: background, boxShadow: boxShadow };
};
function BackgroundEffects(props) {
    var _a = props.preserve, Component = _a === void 0 ? 'div' : _a, shadow1grey = props.shadow1grey, shadowblack = props.shadowblack, innocent = props.innocent, rose = props.rose, dungeon = props.dungeon, shadowsofia = props.shadowsofia, scripture = props.scripture, razzmatazz = props.razzmatazz, beaver = props.beaver, shadowgrey = props.shadowgrey, mumpkin = props.mumpkin, potion = props.potion, focus = props.focus, ruby = props.ruby, gas = props.gas, sheen = props.sheen, shadow2grey = props.shadow2grey, seinna = props.seinna, mui = props.mui, pumpkin = props.pumpkin, style = props.style, sx = props.sx, children = props.children, rest = tslib_1.__rest(props, ["preserve", "shadow1grey", "shadowblack", "innocent", "rose", "dungeon", "shadowsofia", "scripture", "razzmatazz", "beaver", "shadowgrey", "mumpkin", "potion", "focus", "ruby", "gas", "sheen", "shadow2grey", "seinna", "mui", "pumpkin", "style", "sx", "children"]);
    var _b = Background({
        shadowblack: shadowblack,
        pumpkin: pumpkin,
        razzmatazz: razzmatazz,
        shadowgrey: shadowgrey,
        potion: potion,
        focus: focus,
        gas: gas,
        beaver: beaver,
        ruby: ruby,
        sheen: sheen,
        seinna: seinna,
        mui: mui,
        rose: rose,
        innocent: innocent,
        dungeon: dungeon,
        shadowsofia: shadowsofia,
        scripture: scripture,
    }), backgroundColor = _b.backgroundColor, background = _b.background, boxShadow = _b.boxShadow;
    return (0, jsx_runtime_1.jsx)(Component, tslib_1.__assign({}, rest, { sx: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ px: 2, py: 2, borderRadius: .8 }, (boxShadow && { boxShadow: boxShadow })), (backgroundColor && { backgroundColor: backgroundColor })), (background && { background: background })), children: children }));
}
;
exports.default = BackgroundEffects;
