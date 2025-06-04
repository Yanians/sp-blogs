"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const Container_1 = tslib_1.__importDefault(require("@mui/material/Container"));
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const styles_1 = require("@mui/material/styles");
const map = {
    white: {
        light: 'common.white',
        dark: 'primaryDark.900',
    },
    comfort: {
        light: 'grey.50',
        dark: 'primaryDark.900',
    },
    dim: {
        light: 'primaryDark.700',
        dark: 'primaryDark.700',
    },
    transparent: {
        light: 'transparent',
        dark: 'transparent',
    },
};
const Section = React.forwardRef(function Section(props, ref) {
    const { bg = 'white', children, sx, cozy = false, noPaddingBottom = false, ...other } = props;
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { ref: ref, ...other, sx: [
            (theme) => ({
                ...(bg === 'gradient'
                    ? {
                        background: `linear-gradient(#FFF 0%, ${(theme.vars || theme).palette.primary[50]} 100%)`,
                        ...theme.applyDarkStyles({
                            background: `linear-gradient(${(theme.vars || theme).palette.primaryDark[900]} 0%, ${(0, styles_1.alpha)(theme.palette.primary[900], 0.2)} 100%)`,
                        }),
                    }
                    : {
                        bgcolor: map[bg].light,
                        ...theme.applyDarkStyles({
                            bgcolor: map[bg].dark,
                        }),
                    }),
                py: cozy ? { xs: 6, sm: 10, md: 12 } : { xs: 4, sm: 12, md: 14 },
                pb: noPaddingBottom ? '0 !important' : undefined,
                overflow: 'hidden',
            }),
            ...(Array.isArray(sx) ? sx : [sx]),
        ], children: (0, jsx_runtime_1.jsx)(Container_1.default, { children: children }) }));
});
exports.default = Section;
