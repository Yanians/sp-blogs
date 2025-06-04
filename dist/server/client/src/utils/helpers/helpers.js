"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_ATTRIBUTE = exports.DEFAULT_COLOR_SCHEME_STORAGE_KEY = exports.DEFAULT_MODE_STORAGE_KEY = void 0;
exports.getCookie = getCookie;
exports.CodeVariantProvider = CodeVariantProvider;
exports.useCodeVariant = useCodeVariant;
exports.useNoSsrCodeVariant = useNoSsrCodeVariant;
exports.useSetCodeVariant = useSetCodeVariant;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
exports.DEFAULT_MODE_STORAGE_KEY = 'mode';
exports.DEFAULT_COLOR_SCHEME_STORAGE_KEY = 'color-scheme';
exports.DEFAULT_ATTRIBUTE = 'data-color-scheme';
const DIRECTIVE_EXTENSIONS = {
    JS: 'JS',
    TS: 'TS',
};
const CodeVariantContext = React.createContext({
    codeVariant: DIRECTIVE_EXTENSIONS.TS,
    setCodeVariant: () => { }
});
function initializeValue(key, defaultValue) {
    if (typeof window === 'undefined') {
        return undefined;
    }
    let value;
    try {
        value = localStorage.getItem(key) || undefined;
        if (!value) {
            // the first time that user enters the site.
            localStorage.setItem(key, defaultValue);
        }
    }
    catch {
        // Unsupported
    }
    return value || defaultValue;
}
// export function InitColorSchemeScript(options?: InitColorSchemeScriptProps) {
//   const {
//     defaultMode = 'system',
//     defaultLightColorScheme = 'light',
//     defaultDarkColorScheme = 'dark',
//     modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
//     colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
//     attribute: initialAttribute = DEFAULT_ATTRIBUTE,
//     colorSchemeNode = 'document.documentElement',
//     nonce,
//   } = options || {};
//   let setter = '';
//   let attribute = initialAttribute;
//   if (initialAttribute === 'class') {
//     attribute = '.%s';
//   }
//   if (initialAttribute === 'data') {
//     attribute = '[data-%s]';
//   }
//   if (attribute.startsWith('.')) {
//     const selector = attribute.substring(1);
//     setter += `${colorSchemeNode}.classList.remove('${selector}'.replace('%s', light), '${selector}'.replace('%s', dark));
//       ${colorSchemeNode}.classList.add('${selector}'.replace('%s', colorScheme));`;
//   }
//   const matches = attribute.match(/\[([^\]]+)\]/); // case [data-color-scheme=%s] or [data-color-scheme]
//   if (matches) {
//     const [attr, value] = matches[1].split('=');
//     if (!value) {
//       setter += `${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', light));
//       ${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', dark));`;
//     }
//     setter += `
//       ${colorSchemeNode}.setAttribute('${attr}'.replace('%s', colorScheme), ${value ? `${value}.replace('%s', colorScheme)` : '""'});`;
//   } else {
//     setter += `${colorSchemeNode}.setAttribute('${attribute}', colorScheme);`;
//   }
//   return (
//     <script
//       key="mui-color-scheme-init"
//       suppressHydrationWarning
//       nonce={typeof window === 'undefined' ? nonce : ''}
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{
//         __html: `(function() {
//                 try {
//                 let colorScheme = '';
//                 const mode = localStorage.getItem('${modeStorageKey}') || '${defaultMode}';
//                 const dark = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
//                 const light = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
//                 if (mode === 'system') {
//                     // handle system mode
//                     const mql = window.matchMedia('(prefers-color-scheme: dark)');
//                     if (mql.matches) {
//                     colorScheme = dark
//                     } else {
//                     colorScheme = light
//                     }
//                 }
//                 if (mode === 'light') {
//                     colorScheme = light;
//                 }
//                 if (mode === 'dark') {
//                     colorScheme = dark;
//                 }
//                 if (colorScheme) {
//                     ${setter}
//                 }
//                 } catch(e){}})();`,
//              }}
//         />
//   );
// }
// export function InitColorSchemeScripts({
//   defaultMode = 'system',
//   defaultLightColorScheme = 'light',
//   defaultDarkColorScheme = 'dark',
//   modeStorageKey = 'mui-mode',
//   colorSchemeStorageKey = 'mui-mode',
//   nonce,
// }: {
//   defaultMode?: 'light' | 'dark' | 'system';
//   defaultLightColorScheme?: string;
//   defaultDarkColorScheme?: string;
//   modeStorageKey?: string;
//   colorSchemeStorageKey?: string;
//   nonce?: string;
// }) {
//   return (
//     <script
//       key="mui-color-scheme-init"
//       suppressHydrationWarning
//       nonce={typeof window === 'undefined' ? nonce : undefined}
//       dangerouslySetInnerHTML={{
//         __html: `(function() {
//   try {
//     let colorScheme = '';
//     const mode = localStorage.getItem('${modeStorageKey}') || '${defaultMode}';
//     const dark = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
//     const light = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
//     if (mode === 'system') {
//       const mql = window.matchMedia('(prefers-color-scheme: dark)');
//       colorScheme = mql.matches ? dark : light;
//     } else if (mode === 'dark') {
//       colorScheme = dark;
//     } else {
//       colorScheme = light;
//     }
//     if (colorScheme) {
//       const el = document.documentElement;
//       el.classList.remove('${defaultLightColorScheme}', '${defaultDarkColorScheme}');
//       el.classList.add(colorScheme);
//     }
//   } catch (e) {}
// })();`,
//       }}
//     />
//   );
// }
const currentTabChangeListeners = new Map();
function onCurrentTabStorageChange(key, handler) {
    let listeners = currentTabChangeListeners.get(key);
    if (!listeners) {
        listeners = new Set();
        currentTabChangeListeners.set(key, listeners);
    }
    listeners.add(handler);
}
function offCurrentTabStorageChange(key, handler) {
    const listeners = currentTabChangeListeners.get(key);
    if (!listeners) {
        return;
    }
    listeners.delete(handler);
    if (listeners.size === 0) {
        currentTabChangeListeners.delete(key);
    }
}
function emitCurrentTabStorageChange(key) {
    const listeners = currentTabChangeListeners.get(key);
    if (listeners) {
        listeners.forEach((listener) => listener());
    }
}
function subscribe(area, key, callback) {
    if (!key) {
        return () => { };
    }
    const storageHandler = (event) => {
        if (event.storageArea === area && event.key === key) {
            callback();
        }
    };
    window.addEventListener('storage', storageHandler);
    onCurrentTabStorageChange(key, callback);
    return () => {
        window.removeEventListener('storage', storageHandler);
        offCurrentTabStorageChange(key, callback);
    };
}
function getSnapshot(area, key) {
    if (!key) {
        return null;
    }
    try {
        return area.getItem(key);
    }
    catch {
        // ignore
        // See https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage
        return null;
    }
}
function setValue(area, key, value) {
    if (!key) {
        return;
    }
    try {
        if (value === null) {
            area.removeItem(key);
        }
        else {
            area.setItem(key, String(value));
        }
    }
    catch {
        // ignore
        // See https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage
        return;
    }
    emitCurrentTabStorageChange(key);
}
const serverValue = [null, () => { }];
function useLocalStorageStateServer() {
    return serverValue;
}
/**
 * Sync state to local storage so that it persists through a page refresh. Usage is
 * similar to useState except we pass in a storage key so that we can default
 * to that value on page load instead of the specified initial value.
 *
 * Since the storage API isn't available in server-rendering environments, we
 * return null during SSR and hydration.
 */
function useLocalStorageStateBrowser(key, initializer = null) {
    const [initialValue] = React.useState(initializer);
    const area = window.localStorage;
    const subscribeKey = React.useCallback((callback) => subscribe(area, key, callback), [area, key]);
    const getKeySnapshot = React.useCallback(() => getSnapshot(area, key) ?? initialValue, [area, initialValue, key]);
    // Start with null for the hydration, and then switch to the actual value.
    const getKeyServerSnapshot = () => null;
    const storedValue = React.useSyncExternalStore(subscribeKey, getKeySnapshot, getKeyServerSnapshot);
    const setStoredValue = React.useCallback((value) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setValue(area, key, valueToStore);
    }, [area, key, storedValue]);
    const [nonStoredValue, setNonStoredValue] = React.useState(initialValue);
    if (!key) {
        return [nonStoredValue, setNonStoredValue];
    }
    return [storedValue, setStoredValue];
}
if (process.env.NODE_ENV !== 'production') {
    CodeVariantContext.displayName = 'CodeVariant';
}
function getCookie(name) {
    if (typeof document === 'undefined') {
        throw new Error('getCookie() is not supported on the server. Fallback to a different value when rendering on the server.');
    }
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts[1].split(';').shift();
    }
    return undefined;
}
function useFirstRender() {
    const firstRenderRef = React.useRef(true);
    React.useEffect(() => {
        firstRenderRef.current = false;
    }, []);
    return firstRenderRef.current;
}
function CodeVariantProvider({ children }) {
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
        return getCookie('codeVariant');
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
