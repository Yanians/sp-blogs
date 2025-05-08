"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCustomShadows = resolveCustomShadows;
exports.resolveCustomStyle = resolveCustomStyle;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
function resolveCustomShadows(props) {
    var _a;
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
        '-1px 2px 4px rgba(5, 26, 51, 0.99)': props.mui,
    };
    return (_a = Object.entries(shadows).find(function (_a) {
        var _ = _a[0], isEnabled = _a[1];
        return isEnabled;
    })) === null || _a === void 0 ? void 0 : _a[0];
}
function resolveCustomStyle(props) {
    var _a;
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
        '\'Brush Script MT\', cursive': props.cursive_mt,
    };
    return (_a = Object.entries(fontMap).find(function (_a) {
        var _ = _a[0], isEnabled = _a[1];
        return isEnabled;
    })) === null || _a === void 0 ? void 0 : _a[0];
}
/**
 * Directives
 */
var withTextStyles = function (props) {
    var textContent = props.textContent, types = props.types, style = props.style, _a = props.serve, Component = _a === void 0 ? 'div' : _a, sofia = props.sofia, impact = props.impact, andali = props.andali, monaco = props.monaco, verdana = props.verdana, comic = props.comic, platino = props.platino, serif = props.serif, gadget = props.gadget, monospace = props.monospace, sansserif = props.sansserif, arial = props.arial, timesnewroman = props.timesnewroman, tahoma = props.tahoma, georgia = props.georgia, fantasy = props.fantasy, garamond = props.garamond, cursive = props.cursive, cursive_mt = props.cursive_mt, scripture = props.scripture, innocent = props.innocent, focus = props.focus, shadowblack = props.shadowblack, mui = props.mui, seinna = props.seinna, gas = props.gas, rose = props.rose, sheen = props.sheen, potion = props.potion, ruby = props.ruby, pumpkin = props.pumpkin, dungeon = props.dungeon, beaver = props.beaver, razzmatazz = props.razzmatazz, shadow1black = props.shadow1black, shadow2black = props.shadow2black, shadow3black = props.shadow3black, shadowred = props.shadowred, shadowsofia = props.shadowsofia, shadow2red = props.shadow2red, shadow3red = props.shadow3red, shadowgrey = props.shadowgrey, shadowgreylight = props.shadowgreylight, shadow1grey = props.shadow1grey, shadow2grey = props.shadow2grey, shadow3grey = props.shadow3grey, rest = tslib_1.__rest(props, ["textContent", "types", "style", "serve", "sofia", "impact", "andali", "monaco", "verdana", "comic", "platino", "serif", "gadget", "monospace", "sansserif", "arial", "timesnewroman", "tahoma", "georgia", "fantasy", "garamond", "cursive", "cursive_mt", "scripture", "innocent", "focus", "shadowblack", "mui", "seinna", "gas", "rose", "sheen", "potion", "ruby", "pumpkin", "dungeon", "beaver", "razzmatazz", "shadow1black", "shadow2black", "shadow3black", "shadowred", "shadowsofia", "shadow2red", "shadow3red", "shadowgrey", "shadowgreylight", "shadow1grey", "shadow2grey", "shadow3grey"]);
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
        cursive_mt: cursive_mt,
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
        shadow3grey: shadow3grey,
    });
    switch (types) {
        case 'typography': {
            return (0, jsx_runtime_1.jsx)(Typography_1.default, tslib_1.__assign({}, rest, { style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, style), (fontFamily && { fontFamily: fontFamily })), (textShadow && { textShadow: textShadow })), children: textContent }));
        }
        default: {
            return (0, jsx_runtime_1.jsx)(Component, tslib_1.__assign({}, rest, { style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, style), (fontFamily && { fontFamily: fontFamily })), (textShadow && { textShadow: textShadow })), children: textContent }));
        }
    }
};
exports.default = withTextStyles;
