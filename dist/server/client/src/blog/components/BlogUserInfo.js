"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Grid_1 = tslib_1.__importDefault(require("@mui/material/Grid"));
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const brandingTheme_1 = require("../../utils/brandingTheme");
const Divider_1 = tslib_1.__importDefault(require("@mui/material/Divider"));
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    display: 'grid',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'initial',
    gridAutoColumns: '1fr',
    gridAutoRows: 'auto',
    backgroundBlendMode: `${(0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.vars.palette.grey[100], 0.85)}`,
    opacity: 0.3,
}));
const ImageStyle = (0, styles_1.styled)('img')(({ theme }) => ({
    position: 'absolute',
}));
function BlogUserInfo() {
    return ((0, jsx_runtime_1.jsx)(Root, { children: (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {}, children: [(0, jsx_runtime_1.jsx)(Grid_1.default, { container: true, spacing: 1, children: (0, jsx_runtime_1.jsx)(Grid_1.default, { size: { xs: 12 } }) }), (0, jsx_runtime_1.jsx)(Divider_1.default, { orientation: 'horizontal', sx: {
                        p: ((theme) => ({ p: theme.spacing(1) })),
                    } })] }) }));
}
