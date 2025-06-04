"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varBounceInRight = exports.varBounceInLeft = exports.varBounceInDown = exports.varBounceInUp = exports.varBounceIn = void 0;
const BounceOut_1 = require("./BounceOut");
// ----------------------------------------------------------------------
const TRANSITION_ENTER = {
    duration: 0.72,
    ease: [0.43, 0.13, 0.23, 0.96]
};
const TRANSITION_EXIT = {
    duration: 0.48,
    ease: [0.43, 0.13, 0.23, 0.96]
};
exports.varBounceIn = {
    animate: {
        scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
        opacity: [0, 1, 1, 1, 1, 1],
        transition: TRANSITION_ENTER
    },
    exit: BounceOut_1.varBounceOut.animate
};
exports.varBounceInUp = {
    animate: {
        y: [720, -24, 12, -4, 0],
        scaleY: [4, 0.9, 0.95, 0.985, 1],
        opacity: [0, 1, 1, 1, 1],
        transition: { ...TRANSITION_ENTER }
    },
    exit: { ...BounceOut_1.varBounceOutDown.animate, transition: TRANSITION_EXIT }
};
exports.varBounceInDown = {
    animate: {
        y: [-720, 24, -12, 4, 0],
        scaleY: [4, 0.9, 0.95, 0.985, 1],
        opacity: [0, 1, 1, 1, 1],
        transition: TRANSITION_ENTER
    },
    exit: { ...BounceOut_1.varBounceOutUp.animate, transition: TRANSITION_EXIT }
};
exports.varBounceInLeft = {
    animate: {
        x: [-720, 24, -12, 4, 0],
        scaleX: [3, 1, 0.98, 0.995, 1],
        opacity: [0, 1, 1, 1, 1],
        transition: TRANSITION_ENTER
    },
    exit: { ...BounceOut_1.varBounceOutLeft.animate, transition: TRANSITION_EXIT }
};
exports.varBounceInRight = {
    animate: {
        x: [720, -24, 12, -4, 0],
        scaleX: [3, 1, 0.98, 0.995, 1],
        opacity: [0, 1, 1, 1, 1],
        transition: TRANSITION_ENTER
    },
    exit: { ...BounceOut_1.varBounceOutRight.animate, transition: TRANSITION_EXIT }
};
