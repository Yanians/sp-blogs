"use strict";
// material
Object.defineProperty(exports, "__esModule", { value: true });
exports.customShadows = void 0;
const tslib_1 = require("tslib");
const styles_1 = require("@mui/material/styles");
const palette_1 = tslib_1.__importDefault(require("./palette"));
// ----------------------------------------------------------------------
const LIGHT_MODE = palette_1.default.grey[500];
const createShadow = (color) => {
    const transparent1 = (0, styles_1.alpha)(color, 0.2);
    const transparent2 = (0, styles_1.alpha)(color, 0.14);
    const transparent3 = (0, styles_1.alpha)(color, 0.12);
    return [
        'none',
        `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
        `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
        `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
        `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
        `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
        `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
        `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
        `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
        `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
        `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
        `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
        `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
        `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
        `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
        `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
        `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
        `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
        `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`
    ];
};
const createCustomShadow = (color) => {
    const transparent = (0, styles_1.alpha)(color, 0.24);
    return {
        z1: `0 1px 2px 0 ${transparent}`,
        z8: `0 8px 16px 0 ${transparent}`,
        z12: `0 0 2px 0 ${transparent}, 0 12px 24px 0 ${transparent}`,
        z16: `0 0 2px 0 ${transparent}, 0 16px 32px -4px ${transparent}`,
        z20: `0 0 2px 0 ${transparent}, 0 20px 40px -4px ${transparent}`,
        z24: `0 0 4px 0 ${transparent}, 0 24px 48px 0 ${transparent}`,
        primary: `0 8px 16px 0 ${(0, styles_1.alpha)(palette_1.default.primary.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${(0, styles_1.alpha)(palette_1.default.secondary.main, 0.24)}`,
        info: `0 8px 16px 0 ${(0, styles_1.alpha)(palette_1.default.info.main, 0.24)}`,
        success: `0 8px 16px 0 ${(0, styles_1.alpha)(palette_1.default.success.main, 0.24)}`,
        warning: `0 8px 16px 0 ${(0, styles_1.alpha)(palette_1.default.warning.main, 0.24)}`,
        error: `0 8px 16px 0 ${(0, styles_1.alpha)(palette_1.default.error.main, 0.24)}`
    };
};
exports.customShadows = createCustomShadow(LIGHT_MODE);
const shadows = createShadow(LIGHT_MODE);
exports.default = shadows;
