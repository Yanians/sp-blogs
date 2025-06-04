"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.varBounceOutRight = exports.varBounceOutLeft = exports.varBounceOutDown = exports.varBounceOutUp = exports.varBounceOut = void 0;
exports.varBounceOut = {
    animate: {
        scale: [0.9, 1.1, 0.3],
        opacity: [1, 1, 0]
    }
};
exports.varBounceOutUp = {
    animate: {
        y: [-12, 24, -720],
        scaleY: [0.985, 0.9, 3],
        opacity: [1, 1, 0]
    }
};
exports.varBounceOutDown = {
    animate: {
        y: [12, -24, 720],
        scaleY: [0.985, 0.9, 3],
        opacity: [1, 1, 0]
    }
};
exports.varBounceOutLeft = {
    animate: {
        x: [0, 24, -720],
        scaleX: [1, 0.9, 2],
        opacity: [1, 1, 0]
    }
};
exports.varBounceOutRight = {
    animate: {
        x: [0, -24, 720],
        scaleX: [1, 0.9, 2],
        opacity: [1, 1, 0]
    }
};
