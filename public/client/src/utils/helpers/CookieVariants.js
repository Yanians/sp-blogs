"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCodeVariant = useCodeVariant;
exports.useNoSsrCodeVariant = useNoSsrCodeVariant;
exports.useSetCodeVariant = useSetCodeVariant;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const helpers_1 = require("./helpers");
const DIRECTIVE_EXTENSIONS = {
    JS: 'JS',
    TS: 'TS',
};
const CodeVariantContext = React.createContext({
    codeVariant: DIRECTIVE_EXTENSIONS.TS,
    setCodeVariant: () => { },
});
if (process.env.NODE_ENV !== 'production') {
    CodeVariantContext.displayName = 'CodeVariant';
}
function useFirstRender() {
    const firstRenderRef = React.useRef(true);
    React.useEffect(() => {
        firstRenderRef.current = false;
    }, []);
    return firstRenderRef.current;
}
function CookieVariantProvider({ children }) {
    const [codeVariant, setCodeVariant] = React.useState(DIRECTIVE_EXTENSIONS.TS);
    const navigatedCodeVariant = React.useMemo(() => {
        const navigatedCodeVariantMatch = typeof window !== 'undefined' ? window.location.hash.match(/\.(js|tsx)$/) : null;
        if (navigatedCodeVariantMatch === null) {
            return undefined;
        }
        return navigatedCodeVariantMatch[1] === 'tsx' ? DIRECTIVE_EXTENSIONS.TS : DIRECTIVE_EXTENSIONS.JS;
    }, []);
    const persistedCodeVariant = React.useMemo(() => {
        if (typeof window === 'undefined') {
            return undefined;
        }
        return (0, helpers_1.getCookie)('codeVariant');
    }, []);
    const isFirstRender = useFirstRender();
    // We initialize from navigation or cookies. on subsequent renders the store is the truth
    const noSsrCodeVariant = isFirstRender === true
        ? navigatedCodeVariant || persistedCodeVariant || codeVariant
        : codeVariant;
    React.useEffect(() => {
        if (codeVariant !== noSsrCodeVariant) {
            setCodeVariant(noSsrCodeVariant);
        }
    }, [codeVariant, noSsrCodeVariant]);
    React.useEffect(() => {
        document.cookie = `codeVariant=${codeVariant};path=/;max-age=31536000`;
    }, [codeVariant]);
    const contextValue = React.useMemo(() => {
        return { codeVariant, noSsrCodeVariant, setCodeVariant };
    }, [codeVariant, noSsrCodeVariant]);
    return (0, jsx_runtime_1.jsx)(CodeVariantContext.Provider, { value: contextValue, children: children });
}
function useCodeVariant() {
    return React.useContext(CodeVariantContext).codeVariant;
}
function useNoSsrCodeVariant() {
    return React.useContext(CodeVariantContext).noSsrCodeVariant;
}
function useSetCodeVariant() {
    return React.useContext(CodeVariantContext).setCodeVariant;
}
exports.default = CookieVariantProvider;
