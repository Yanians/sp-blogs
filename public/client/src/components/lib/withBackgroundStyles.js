"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Paper_1 = tslib_1.__importDefault(require("@mui/material/Paper"));
const Background = (props) => {
    const backgrounds = {
        '4px 4px 8px rgba(19, 16, 16, 0.69)': props.shadowblack,
        '1px -2px 11px rgba(173, 167, 167, 0.80)': props.innocent,
        '19px 09px 19px rgba(255, 84, 112, 0.99)': props.rose,
        '2px 2px 8px rgba(206, 128, 64, 0.62)': props.shadow3black,
        '1px 1px 8px rgba(197, 49, 81, 0.99)': props.dungeon,
        '3px 3px 8px rgba(218, 109, 176, 0.47)': props.shadowsofia,
        '5px -4px 5px rgba(246, 250, 253, 0.13)': props.scripture,
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
    const Colors = {
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
    const boxShadows = {
        '19px -9px 80px rgba(226, 218, 218, 0.99)': props.shadowblack,
        '19px -9px 80px rgba(233, 24, 205, 0.99)': props.innocent,
        '19px -9px 80px rgb(5, 167, 241)': props.rose,
        '19px -9px 80px rgba(241, 62, 146, 0.99)': props.shadow3black,
        '19px -9px 80px rgba(5, 26, 51, 0.99)': props.dungeon,
        '19px -9px 80px rgba(137, 230, 15, 0.99)': props.shadowsofia,
        '-5px 4px 25px rgb(59, 0, 59)': props.scripture, //scriptures
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
    const background = Object.entries(backgrounds).find(([_, isEnabled]) => isEnabled)?.[0];
    const backgroundColor = Object.entries(Colors).find(([_, isEnabled]) => isEnabled)?.[0];
    const boxShadow = Object.entries(boxShadows).find(([_, isEnabled]) => isEnabled)?.[0];
    return { backgroundColor, background, boxShadow };
};
function BackgroundEffects(props) {
    const { preserve: Component = 'div', condition, shadow1grey, shadowblack, innocent, rose, dungeon, shadowsofia, scripture, razzmatazz, beaver, shadowgrey, mumpkin, potion, focus, ruby, gas, sheen, shadow2grey, seinna, mui, pumpkin, style, sx, children, ...rest } = props;
    const { backgroundColor, background, boxShadow } = Background({
        shadowblack, pumpkin, razzmatazz, shadowgrey, potion, focus, gas,
        beaver, ruby, sheen, seinna, mui, rose, innocent, dungeon, shadowsofia,
        scripture,
    });
    switch (condition) {
        case 'paper': {
            return (0, jsx_runtime_1.jsx)(Paper_1.default, { ...rest, sx: {
                    px: 2, py: 2,
                    borderRadius: .8,
                    ...(boxShadow && { boxShadow }),
                    ...(backgroundColor && { backgroundColor }),
                    ...(background && { background }),
                }, children: children });
        }
        default: {
            return (0, jsx_runtime_1.jsx)(Component, { ...rest, sx: {
                    px: 2, py: 2,
                    borderRadius: .8,
                    ...(boxShadow && { boxShadow }),
                    ...(backgroundColor && { backgroundColor }),
                    ...(background && { background }),
                }, children: children });
        }
    }
}
;
exports.default = BackgroundEffects;
