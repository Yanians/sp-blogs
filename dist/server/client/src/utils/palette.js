"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
function createGradient(color1, color2) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}
// SETUP COLORS
const GREY = {
    50: 'hsl(248, 21.10%, 92.50%)4.30%)',
    100: 'hsl(220, 14.30%, 87.60%)',
    200: 'hsl(220, 8.60%, 79.40%)',
    300: 'hsl(214, 10.60%, 74.10%)',
    400: 'hsl(225, 7.10%, 67.10%)',
    500: 'hsl(210, 7.50%, 58.00%)',
    600: 'hsl(213, 5.20%, 41.80%)',
    700: 'hsl(200, 4.70%, 37.50%)',
    800: 'hsl(204, 3.10%, 31.60%)',
    900: 'hsl(220, 2.90%, 20.60%)',
    5008: (0, styles_1.alpha)('hsl(210, 9.30%, 58.00%)', 0.08),
    50012: (0, styles_1.alpha)('hsl(210, 12.40%, 55.70%)', 0.12),
    50016: (0, styles_1.alpha)('hsl(211, 15.00%, 51.60%)', 0.16),
    50024: (0, styles_1.alpha)('hsl(211, 15.00%, 51.60%)', 0.24),
    50032: (0, styles_1.alpha)('hsl(211, 15.00%, 51.60%)', 0.32),
    50048: (0, styles_1.alpha)('hsl(211, 15.00%, 51.60%)', 0.48),
    50056: (0, styles_1.alpha)('hsl(211, 15.00%, 51.60%)', 0.56),
    50080: (0, styles_1.alpha)('hsl(211, 15.00%, 51.60%)', 0.8)
};
const PRIMARY = {
    lighter: '#C8FACD',
    light: '#5BE584',
    main: '#00AB55',
    dark: '#007B55',
    darker: '#005249',
    contrastText: '#fff'
};
const SECONDARY = {
    lighter: '#D6E4FF',
    light: '#84A9FF',
    main: '#3366FF',
    dark: '#1939B7',
    darker: '#091A7A',
    contrastText: '#fff'
};
const INFO = {
    lighter: '#D0F2FF',
    light: '#74CAFF',
    main: '#1890FF',
    dark: '#0C53B7',
    darker: '#04297A',
    contrastText: '#fff'
};
const SUCCESS = {
    lighter: '#E9FCD4',
    light: '#AAF27F',
    main: '#54D62C',
    dark: '#229A16',
    darker: '#08660D',
    contrastText: GREY[800]
};
const WARNING = {
    lighter: '#FFF7CD',
    light: '#FFE16A',
    main: '#FFC107',
    dark: '#B78103',
    darker: '#7A4F01',
    contrastText: GREY[800]
};
const ERROR = {
    lighter: '#FFE7D9',
    light: '#FFA48D',
    main: '#FF4842',
    dark: '#B72136',
    darker: '#7A0C2E',
    contrastText: '#fff'
};
const TEAL = {
    lighter: '#4db6ac',
    light: '#009688',
    main: '#00796b',
    dark: '#00695c',
    darker: '#004d40',
    contrastText: '#fff'
};
const GRADIENTS = {
    primary: createGradient(PRIMARY.light, PRIMARY.main),
    info: createGradient(INFO.light, INFO.main),
    success: createGradient(SUCCESS.light, SUCCESS.main),
    warning: createGradient(WARNING.light, WARNING.main),
    error: createGradient(ERROR.light, ERROR.main),
    teal: createGradient(TEAL.light, TEAL.main)
};
const CHART_COLORS = {
    violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
    blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
    green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
    yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
    red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
};
const palette = {
    common: { black: '#000', white: '#fff' },
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    info: { ...INFO },
    success: { ...SUCCESS },
    warning: { ...WARNING },
    error: { ...ERROR },
    teal: { ...TEAL },
    grey: GREY,
    gradients: GRADIENTS,
    chart: CHART_COLORS,
    divider: GREY[50024],
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: {
        active: GREY[600],
        hover: GREY[5008],
        selected: GREY[50016],
        disabled: GREY[50080],
        disabledBackground: GREY[50024],
        focus: GREY[50024],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
exports.default = palette;
