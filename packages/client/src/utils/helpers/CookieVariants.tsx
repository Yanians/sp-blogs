import * as React from 'react';
import PropTypes from 'prop-types';
import { getCookie } from './helpers';

const DIRECTIVE_EXTENSIONS = {
    JS: 'JS',
    TS: 'TS',
  };

type variantPROPS = {
    codeVariant: string;
    noSsrCodeVariant?: string;
    setCodeVariant: React.Dispatch<React.SetStateAction<string>>;
};

const CodeVariantContext = React.createContext<variantPROPS>({
  codeVariant: DIRECTIVE_EXTENSIONS.TS,
  setCodeVariant: () => {},
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

 function CookieVariantProvider({children}:{children:React.ReactNode}) {

  const [codeVariant, setCodeVariant] = React.useState(DIRECTIVE_EXTENSIONS.TS);

  const navigatedCodeVariant = React.useMemo(() => {
    const navigatedCodeVariantMatch =
      typeof window !== 'undefined' ? window.location.hash.match(/\.(js|tsx)$/) : null;

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
  const noSsrCodeVariant =
    isFirstRender === true
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

  return <CodeVariantContext.Provider value={contextValue}>{children}</CodeVariantContext.Provider>;
}

export function useCodeVariant() {
  return React.useContext(CodeVariantContext).codeVariant;
}

export function useNoSsrCodeVariant() {
  return React.useContext(CodeVariantContext).noSsrCodeVariant;
}

export function useSetCodeVariant() {
  return React.useContext(CodeVariantContext).setCodeVariant;
}

export default CookieVariantProvider;
