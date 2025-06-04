"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbImgAvatar = exports.dbImgProduct = exports.dbImgCover = exports.DispatchContext = exports.highDensity = void 0;
exports.default = ThemeConfig;
exports.useChangeTheme = useChangeTheme;
exports.useColorSchemeShim = useColorSchemeShim;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const react_1 = require("@emotion/react");
const CssBaseline_1 = tslib_1.__importDefault(require("@mui/material/CssBaseline"));
const brandingTheme_1 = require("./brandingTheme");
const utils_1 = require("@mui/utils");
const helper_1 = require("../components/lib/helpers/helper");
const useLocalStorageState_1 = tslib_1.__importDefault(require("@mui/utils/useLocalStorageState"));
const styles_1 = require("@mui/material/styles");
const useMediaQuery_1 = tslib_1.__importDefault(require("@mui/material/useMediaQuery"));
const palette_1 = tslib_1.__importDefault(require("./palette"));
const shape_1 = tslib_1.__importDefault(require("./shape"));
const surfaceCustomization_1 = require("./surfaceCustomization");
const ListItemDataDisplay_1 = require("./ListItemDataDisplay");
const InputOvierrides_1 = require("./InputOvierrides");
const feedbackUrl_1 = require("./feedbackUrl");
const navigationOverrides_1 = require("./navigationOverrides");
// import typography from './typography';
const globalStyles_1 = tslib_1.__importDefault(require("./globalStyles"));
const breakpoints_1 = tslib_1.__importDefault(require("./breakpoints"));
const primitiveTheme_1 = require("./primitiveTheme");
const shadows_1 = tslib_1.__importStar(require("./shadows"));
const createEmotionCache_1 = tslib_1.__importDefault(require("./createEmotionCache"));
const utils_2 = require("@mui/material/utils");
const CookieVariants_1 = tslib_1.__importDefault(require("./helpers/CookieVariants"));
const InitColorSchemeScript_1 = tslib_1.__importDefault(require("@mui/system/InitColorSchemeScript"));
;
;
const themeInitialOptions = {
    dense: false,
    direction: 'ltr',
    paletteColors: {},
    spacing: 8, // spacing unit
    paletteMode: 'light',
};
exports.highDensity = {
    components: {
        MuiButton: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiFilledInput: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiFormControl: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiFormHelperText: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiIconButton: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiInputBase: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiInputLabel: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiListItem: {
            defaultProps: {
                dense: true,
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiFab: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiTable: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiTextField: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiToolbar: {
            defaultProps: {
                variant: 'dense',
            },
        },
    },
};
exports.DispatchContext = React.createContext(() => {
    throw new Error('Forgot to wrap component in `ThemeProvider`');
    // {}
});
// if (process.env.NODENV !== 'production') {
//   DispatchContext.displayName = 'ThemeDispatchContext';
// }
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
    exports.DispatchContext.displayName = 'ThemeDispatchContext';
}
function ThemeConfig({ children, nonce }) {
    const [themeOption, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'SET_SPACING':
                return {
                    ...state,
                    spacing: action.payload,
                };
            case 'INCREASE_SPACING': {
                return {
                    ...state,
                    spacing: state?.spacing + 1,
                };
            }
            case 'DECREASE_SPACING': {
                return {
                    ...state,
                    spacing: state?.spacing - 1,
                };
            }
            case 'SET_DENSE':
                return {
                    ...state,
                    dense: action?.payload,
                };
            case 'RESET_DENSITY':
                return {
                    ...state,
                    dense: themeInitialOptions.dense,
                    spacing: themeInitialOptions.spacing,
                };
            case 'RESET_COLORS':
                return {
                    ...state,
                    paletteColors: themeInitialOptions.paletteColors,
                };
            case 'CHANGE':
                // No value changed
                if ((!action.payload.paletteMode || action.payload.paletteMode === state.paletteMode) &&
                    (!action.payload.direction || action.payload.direction === state.direction) &&
                    (!action.payload.paletteColors || action.payload.paletteColors === state.paletteColors)) {
                    return state;
                }
                return {
                    ...state,
                    paletteMode: action.payload.paletteMode || state.paletteMode,
                    direction: action.payload.direction || state.direction,
                    paletteColors: action.payload.paletteColors || state.paletteColors,
                };
            default:
                throw new Error(`Unrecognized type ${action.type}`);
        }
    }, themeInitialOptions);
    const { dense, direction, paletteColors, paletteMode, spacing } = themeOption;
    const { mode, systemMode } = useColorSchemeShim();
    const calculatedMode = mode === 'system' ? systemMode : mode;
    (0, utils_2.unstable_useEnhancedEffect)(() => {
        let nextPaletteColors = JSON.parse((0, helper_1.getCookie)('paletteColors') || 'null');
        // Set default value if no value is found in cookie
        if (nextPaletteColors === null) {
            nextPaletteColors = themeInitialOptions.paletteColors;
        }
        dispatch({
            type: 'CHANGE',
            payload: {
                paletteColors: nextPaletteColors,
                paletteMode: calculatedMode,
            },
        });
    }, [calculatedMode]);
    (0, utils_2.unstable_useEnhancedEffect)(() => {
        document.body.setAttribute('dir', direction);
    }, [direction]);
    (0, utils_2.unstable_useEnhancedEffect)(() => {
        // To support light and dark mode images in the docs
        if (paletteMode === 'dark') {
            document.body.classList.remove('mode-light');
            document.body.classList.add('mode-dark');
        }
        else {
            document.body.classList.remove('mode-dark');
            document.body.classList.add('mode-light');
        }
        const metas = document.querySelectorAll('meta[name="theme-color"]');
        metas.forEach((meta) => {
            meta.setAttribute('content', (0, brandingTheme_1.getMetaThemeColor)(paletteMode));
        });
    }, [paletteMode]);
    const theme = React.useMemo(() => {
        const { palette: lightPalette, typography, ...designTokens } = (0, brandingTheme_1.getDesignTokens)('light');
        const { palette: darkPalette } = (0, brandingTheme_1.getDesignTokens)('dark');
        const brandingDesignTokens = (0, brandingTheme_1.getDesignTokens)(paletteMode);
        const nextPalette = (0, utils_1.deepmerge)(brandingDesignTokens.palette, paletteColors);
        const themeOptin = {
            colorSchemes: {
                light: {
                    palette: lightPalette,
                },
                dark: {
                    palette: darkPalette,
                },
            },
            // ...designTokens,
            typography: (0, utils_1.deepmerge)(typography, {
                h1: {
                    ':where([data-mui-color-scheme="dark"]) &': {
                        color: 'var(--muidocs-palette-common-white)',
                    },
                },
                h2: {
                    ':where([data-mui-color-scheme="dark"]) &': {
                        color: 'var(--muidocs-palette-grey-100)',
                    },
                },
                h5: {
                    ':where([data-mui-color-scheme="dark"]) &': {
                        color: 'var(--muidocs-palette-primary-300)',
                    },
                },
            }),
            ...(0, brandingTheme_1.getThemedComponents)(),
        };
        let nextTheme = typeof styles_1.createColorScheme === 'function' ? (0, styles_1.createTheme)({
            direction,
            ...brandingDesignTokens,
            ...themeOptin,
            cssVariables: {
                cssVarPrefix: 'tres-paylas-theme',
                colorSchemeSelector: 'data-mui-color-scheme',
            },
            ...primitiveTheme_1.colorSchemes,
            palette: {
                ...nextPalette,
                mode: paletteMode,
            },
            // v5 migration
            //@ts-ignore
            props: {
                MuiBadge: {
                    overlap: 'rectangular',
                },
            },
            spacing,
        }, dense ? exports.highDensity : null, {
            components: {
                MuiCssBaseline: {
                    defaultProps: {
                        // TODO: Material UI v6, makes this the default
                        enableColorScheme: true,
                    },
                },
                ...surfaceCustomization_1.surfacesCustomizations,
                ...feedbackUrl_1.feedbackCustomizations,
                ...ListItemDataDisplay_1.dataDisplayCustomizations,
                ...InputOvierrides_1.inputsCustomizations,
                ...navigationOverrides_1.navigationCustomizations,
            },
        }, { customShadows: shadows_1.customShadows, paletteMode, breakpoints: breakpoints_1.default, palette: palette_1.default, shape: shape_1.default, typography, shadows: shadows_1.default, GlobalStyles: globalStyles_1.default, }) : (0, styles_1.extendTheme)({
            cssVarPrefix: 'mui-scheme-overrides',
            colorSchemeSelector: 'data-mui-color-scheme',
            ...themeOptin,
            direction,
            ...brandingDesignTokens,
            // v5 migration
            props: {
                MuiBadge: {
                    overlap: 'rectangular',
                },
            },
            spacing,
        }, 
        //@ts-ignore
        dense ? exports.highDensity : null, {
            components: {
                MuiCssBaseline: {
                    defaultProps: {
                        // TODO: Material UI v6, makes this the default
                        enableColorScheme: true,
                    },
                },
            },
        });
        nextTheme = (0, utils_1.deepmerge)(nextTheme, (0, brandingTheme_1.getThemedComponents)());
        //  getThemedComponents()
        return nextTheme;
    }, [dense, direction, shadows_1.customShadows, breakpoints_1.default, palette_1.default, shape_1.default, shadows_1.default, globalStyles_1.default, paletteColors, spacing,]);
    console.log(theme);
    React.useEffect(() => {
        //@ts-ignore
        window.theme = theme;
        //@ts-ignore
        window.createTheme = styles_1.createTheme;
    }, [theme]);
    const cache = (0, createEmotionCache_1.default)(nonce); //client Side
    return ((0, jsx_runtime_1.jsx)(CookieVariants_1.default, { children: (0, jsx_runtime_1.jsxs)(react_1.CacheProvider, { value: cache, children: [(0, jsx_runtime_1.jsx)(InitColorSchemeScript_1.default, { attribute: "data", modeStorageKey: "tres-paylas-mode", colorSchemeStorageKey: "tres-paylas-mode", nonce: nonce }), (0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, { theme: theme, colorSchemeStorageKey: "mui-mode", children: (0, jsx_runtime_1.jsx)(styles_1.StyledEngineProvider, { injectFirst: true, children: (0, jsx_runtime_1.jsxs)(exports.DispatchContext.Provider, { value: dispatch, children: [(0, jsx_runtime_1.jsx)(CssBaseline_1.default, { enableColorScheme: true }), children] }) }) })] }) }));
}
const dbImgCover = (index) => `../../static/mock-images/covers/cover_${index}.jpg`;
exports.dbImgCover = dbImgCover;
const dbImgProduct = (index) => `../../static/video-rental/images/movie_${index}.png`;
exports.dbImgProduct = dbImgProduct;
const dbImgAvatar = (index) => `../../static/mock-images/avatars/avatar_${index}.jpg`;
exports.dbImgAvatar = dbImgAvatar;
function useChangeTheme() {
    const dispatch = React.useContext(exports.DispatchContext);
    return React.useCallback((options) => dispatch({ type: 'CHANGE', payload: options }), [dispatch]);
}
// export function useChangeTheme() {
//   const dispatch = React.useContext(DispatchContext);
//   const { setMode } = useColorSchemeShim();
//   return React.useCallback((options: any) => {
//     if (options.paletteMode) {
//       setMode(options.paletteMode); // ✅ this updates the <html> attribute live
//     }
//     dispatch({ type: 'CHANGE', paletteMode: options });
//   }, [dispatch, setMode]);
// }
function useColorSchemeShim() {
    const [mode, setMode] = (0, useLocalStorageState_1.default)('mui-mode', 'system');
    const prefersDarkMode = (0, useMediaQuery_1.default)('(prefers-color-scheme: dark)', { noSsr: true });
    const systemMode = prefersDarkMode ? 'dark' : 'light';
    return {
        mode,
        systemMode,
        setMode,
    };
}
