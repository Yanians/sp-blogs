"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateCssVarsProvider;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const system_1 = require("@mui/system");
const lightColorScheme = {
    palette: {
        mode: 'light',
        primary: {
            default: '#3990FF',
            dark: '#02367D',
        },
        text: {
            default: '#111111',
        },
        // ... other colors
    },
};
const darkColorScheme = {
    palette: {
        mode: 'dark',
        primary: {
            default: '#265D97',
            dark: '#132F4C',
            main: '#5090D3',
        },
        text: {
            default: '#ffffff',
        },
        // ... other colors
    },
};
function extendTheme({ cssVarPrefix = 'system-demo' } = {}) {
    const colorSchemeSelector = 'data-system-demo-color-scheme';
    const { vars: themeVars, ...params } = (0, system_1.unstable_prepareCssVars)({
        colorSchemes: {
            light: lightColorScheme,
            dark: darkColorScheme,
        },
    }, {
        prefix: cssVarPrefix,
        colorSchemeSelector,
    });
    const theme = {
        colorSchemeSelector,
        colorSchemes: {
            light: lightColorScheme,
            dark: darkColorScheme,
        },
        // ... any other objects independent of color-scheme,
        // like fontSizes, spacing etc
        vars: themeVars,
        palette: {
            ...lightColorScheme.palette,
            colorScheme: 'light',
        },
        ...params,
    };
    return theme;
}
const myCustomDefaultTheme = extendTheme();
const { CssVarsProvider, useColorScheme } = (0, system_1.unstable_createCssVarsProvider)({
    theme: myCustomDefaultTheme,
    modeStorageKey: 'system-demo-mode',
    defaultColorScheme: {
        light: 'light',
        dark: 'dark',
    },
});
const Button = (0, system_1.styled)('button')(({ theme }) => ({
    backgroundColor: theme.vars.palette.primary.default,
    border: `1px solid ${theme.vars.palette.primary.dark}`,
    color: theme.vars.palette.text.default,
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
}));
const WrapperDiv = (0, system_1.styled)('div')(({ theme }) => ({
    width: '100%',
    minHeight: 100,
    padding: 20,
    color: theme.vars.palette.text.default,
    backgroundColor: '#fff',
    '[data-system-demo-color-scheme="dark"] &': {
        backgroundColor: '#111',
    },
}));
function App() {
    // changes specific to this demo.
    const [shouldRender, setShouldRender] = React.useState(false);
    const { setMode, mode } = useColorScheme();
    const toggleMode = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    };
    // to avoid hydration error in demo. unrelated to the actual implementation
    React.useEffect(() => {
        setShouldRender(true);
    }, []);
    if (!shouldRender) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(WrapperDiv, { className: "App", children: (0, jsx_runtime_1.jsxs)("div", { className: "card", children: [(0, jsx_runtime_1.jsxs)("h2", { children: ["Current mode: ", mode] }), (0, jsx_runtime_1.jsx)(Button, { type: "button", onClick: toggleMode, children: "Toggle Mode" })] }) }));
}
function CreateCssVarsProvider() {
    return ((0, jsx_runtime_1.jsx)(CssVarsProvider, { children: (0, jsx_runtime_1.jsx)(App, {}) }));
}
