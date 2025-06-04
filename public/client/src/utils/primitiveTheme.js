"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadows = exports.shape = exports.typography = exports.colorSchemes = exports.getDesignTokens = exports.red = exports.orange = exports.green = exports.gray = exports.brand = void 0;
const styles_1 = require("@mui/material/styles");
const defaultTheme = (0, styles_1.createTheme)();
const customShadows = [...defaultTheme.shadows];
exports.brand = {
    50: 'hsl(210, 100%, 95%)',
    100: 'hsl(210, 100%, 92%)',
    200: 'hsl(210, 100%, 80%)',
    300: 'hsl(210, 100%, 65%)',
    400: 'hsl(210, 98%, 48%)',
    500: 'hsl(210, 98%, 42%)',
    600: 'hsl(210, 98%, 55%)',
    700: 'hsl(210, 100%, 35%)',
    800: 'hsl(210, 100%, 16%)',
    900: 'hsl(210, 100%, 21%)',
};
exports.gray = {
    50: 'hsl(220, 35%, 97%)',
    100: 'hsl(220, 30%, 94%)',
    200: 'hsl(220, 20%, 88%)',
    300: 'hsl(220, 20%, 80%)',
    400: 'hsl(220, 20%, 65%)',
    500: 'hsl(220, 20%, 42%)',
    600: 'hsl(220, 20%, 35%)',
    700: 'hsl(220, 20%, 25%)',
    800: 'hsl(220, 30%, 6%)',
    900: 'hsl(220, 35%, 3%)',
};
exports.green = {
    50: 'hsl(120, 80%, 98%)',
    100: 'hsl(120, 75%, 94%)',
    200: 'hsl(120, 75%, 87%)',
    300: 'hsl(120, 61%, 77%)',
    400: 'hsl(120, 44%, 53%)',
    500: 'hsl(120, 59%, 30%)',
    600: 'hsl(120, 70%, 25%)',
    700: 'hsl(120, 75%, 16%)',
    800: 'hsl(120, 84%, 10%)',
    900: 'hsl(120, 87%, 6%)',
};
exports.orange = {
    50: 'hsl(45, 100%, 97%)',
    100: 'hsl(45, 92%, 90%)',
    200: 'hsl(45, 94%, 80%)',
    300: 'hsl(45, 90%, 65%)',
    400: 'hsl(45, 90%, 40%)',
    500: 'hsl(45, 90%, 35%)',
    600: 'hsl(45, 91%, 25%)',
    700: 'hsl(45, 94%, 20%)',
    800: 'hsl(45, 95%, 16%)',
    900: 'hsl(45, 93%, 12%)',
};
exports.red = {
    50: 'hsl(0, 100%, 97%)',
    100: 'hsl(0, 92%, 90%)',
    200: 'hsl(0, 94%, 80%)',
    300: 'hsl(0, 90%, 65%)',
    400: 'hsl(0, 90%, 40%)',
    500: 'hsl(0, 90%, 30%)',
    600: 'hsl(0, 91%, 25%)',
    700: 'hsl(0, 94%, 18%)',
    800: 'hsl(0, 95%, 12%)',
    900: 'hsl(0, 93%, 6%)',
};
const getDesignTokens = (mode) => {
    customShadows[1] =
        mode === 'dark'
            ? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
            : 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';
    return {
        palette: {
            mode,
            primary: {
                light: exports.brand[200],
                main: exports.brand[400],
                dark: exports.brand[700],
                contrastText: exports.brand[50],
                ...(mode === 'dark' && {
                    contrastText: exports.brand[50],
                    light: exports.brand[300],
                    main: exports.brand[400],
                    dark: exports.brand[700],
                }),
            },
            info: {
                light: exports.brand[100],
                main: exports.brand[300],
                dark: exports.brand[600],
                contrastText: exports.gray[50],
                ...(mode === 'dark' && {
                    contrastText: exports.brand[300],
                    light: exports.brand[500],
                    main: exports.brand[700],
                    dark: exports.brand[900],
                }),
            },
            warning: {
                light: exports.orange[300],
                main: exports.orange[400],
                dark: exports.orange[800],
                ...(mode === 'dark' && {
                    light: exports.orange[400],
                    main: exports.orange[500],
                    dark: exports.orange[700],
                }),
            },
            error: {
                light: exports.red[300],
                main: exports.red[400],
                dark: exports.red[800],
                ...(mode === 'dark' && {
                    light: exports.red[400],
                    main: exports.red[500],
                    dark: exports.red[700],
                }),
            },
            success: {
                light: exports.green[300],
                main: exports.green[400],
                dark: exports.green[800],
                ...(mode === 'dark' && {
                    light: exports.green[400],
                    main: exports.green[500],
                    dark: exports.green[700],
                }),
            },
            grey: {
                ...exports.gray,
            },
            divider: mode === 'dark' ? (0, styles_1.alpha)(exports.gray[700], 0.6) : (0, styles_1.alpha)(exports.gray[300], 0.4),
            background: {
                default: 'hsl(0, 0%, 99%)',
                paper: 'hsl(220, 35%, 97%)',
                ...(mode === 'dark' && { default: exports.gray[900], paper: 'hsl(220, 30%, 7%)' }),
            },
            text: {
                primary: exports.gray[800],
                secondary: exports.gray[600],
                warning: exports.orange[400],
                ...(mode === 'dark' && {
                    primary: 'hsl(0, 0%, 100%)',
                    secondary: exports.gray[400],
                }),
            },
            action: {
                hover: (0, styles_1.alpha)(exports.gray[200], 0.2),
                selected: `${(0, styles_1.alpha)(exports.gray[200], 0.3)}`,
                ...(mode === 'dark' && {
                    hover: (0, styles_1.alpha)(exports.gray[600], 0.2),
                    selected: (0, styles_1.alpha)(exports.gray[600], 0.3),
                }),
            },
        },
        typography: {
            fontFamily: 'Inter, sans-serif',
            h1: {
                fontSize: defaultTheme.typography.pxToRem(48),
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: -0.5,
            },
            h2: {
                fontSize: defaultTheme.typography.pxToRem(36),
                fontWeight: 600,
                lineHeight: 1.2,
            },
            h3: {
                fontSize: defaultTheme.typography.pxToRem(30),
                lineHeight: 1.2,
            },
            h4: {
                fontSize: defaultTheme.typography.pxToRem(24),
                fontWeight: 600,
                lineHeight: 1.5,
            },
            h5: {
                fontSize: defaultTheme.typography.pxToRem(20),
                fontWeight: 600,
            },
            h6: {
                fontSize: defaultTheme.typography.pxToRem(18),
                fontWeight: 600,
            },
            subtitle1: {
                fontSize: defaultTheme.typography.pxToRem(18),
            },
            subtitle2: {
                fontSize: defaultTheme.typography.pxToRem(14),
                fontWeight: 500,
            },
            body1: {
                fontSize: defaultTheme.typography.pxToRem(14),
            },
            body2: {
                fontSize: defaultTheme.typography.pxToRem(14),
                fontWeight: 400,
            },
            caption: {
                fontSize: defaultTheme.typography.pxToRem(12),
                fontWeight: 400,
            },
        },
        shape: {
            borderRadius: 8,
        },
        shadows: customShadows,
    };
};
exports.getDesignTokens = getDesignTokens;
exports.colorSchemes = {
    light: {
        palette: {
            primary: {
                light: exports.brand[200],
                main: exports.brand[400],
                dark: exports.brand[700],
                contrastText: exports.brand[50],
            },
            info: {
                light: exports.brand[100],
                main: exports.brand[300],
                dark: exports.brand[600],
                contrastText: exports.gray[50],
            },
            warning: {
                light: exports.orange[300],
                main: exports.orange[400],
                dark: exports.orange[800],
            },
            error: {
                light: exports.red[300],
                main: exports.red[400],
                dark: exports.red[800],
            },
            success: {
                light: exports.green[300],
                main: exports.green[400],
                dark: exports.green[800],
            },
            grey: {
                ...exports.gray,
            },
            divider: (0, styles_1.alpha)(exports.gray[300], 0.4),
            background: {
                default: 'hsl(0, 0%, 99%)',
                paper: 'hsl(220, 35%, 97%)',
            },
            text: {
                primary: exports.gray[800],
                secondary: exports.gray[600],
                warning: exports.orange[400],
            },
            action: {
                hover: (0, styles_1.alpha)(exports.gray[200], 0.2),
                selected: `${(0, styles_1.alpha)(exports.gray[200], 0.3)}`,
            },
            baseShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
        },
    },
    dark: {
        palette: {
            primary: {
                contrastText: exports.brand[50],
                light: exports.brand[300],
                main: exports.brand[400],
                dark: exports.brand[700],
            },
            info: {
                contrastText: exports.brand[300],
                light: exports.brand[500],
                main: exports.brand[700],
                dark: exports.brand[900],
            },
            warning: {
                light: exports.orange[400],
                main: exports.orange[500],
                dark: exports.orange[700],
            },
            error: {
                light: exports.red[400],
                main: exports.red[500],
                dark: exports.red[700],
            },
            success: {
                light: exports.green[400],
                main: exports.green[500],
                dark: exports.green[700],
            },
            grey: {
                ...exports.gray,
            },
            divider: (0, styles_1.alpha)(exports.gray[700], 0.6),
            background: {
                default: exports.gray[900],
                paper: 'hsl(220, 30%, 7%)',
            },
            text: {
                primary: 'hsl(0, 0%, 100%)',
                secondary: exports.gray[400],
            },
            action: {
                hover: (0, styles_1.alpha)(exports.gray[600], 0.2),
                selected: (0, styles_1.alpha)(exports.gray[600], 0.3),
            },
            baseShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
        },
    },
};
exports.typography = {
    fontFamily: 'Inter, sans-serif',
    h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
    },
    h2: {
        fontSize: defaultTheme.typography.pxToRem(36),
        fontWeight: 600,
        lineHeight: 1.2,
    },
    h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 1.2,
    },
    h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5,
    },
    h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600,
    },
    h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600,
    },
    subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
    },
    subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 500,
    },
    body1: {
        fontSize: defaultTheme.typography.pxToRem(14),
    },
    body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400,
    },
    caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400,
    },
};
exports.shape = {
    borderRadius: 8,
};
const defaultShadows = [
    'none',
    'var(--template-palette-baseShadow)',
    ...defaultTheme.shadows.slice(2),
];
exports.shadows = defaultShadows;
