import * as React from 'react';

import { CacheProvider } from '@emotion/react';

import CssBaseline from '@mui/material/CssBaseline';

import { getDesignTokens, getThemedComponent, getThemedComponents, getMetaThemeColor } from './brandingTheme';

import { Theme } from '@mui/material/styles';

import { deepmerge } from '@mui/utils';

import { getCookie } from '../components/lib/helpers/helper';

import useLocalStorageState from '@mui/utils/useLocalStorageState';
import { 
  ThemeProvider, 
  StyledEngineProvider, 
  createTheme as createMdTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  extendTheme,
  createColorScheme,
  PaletteColorOptions,
 } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';

import palette from './palette';

import shape from './shape';

import { surfacesCustomizations } from './surfaceCustomization';

import { dataDisplayCustomizations} from './ListItemDataDisplay'

import { inputsCustomizations } from './InputOvierrides';

import { feedbackCustomizations } from './feedbackUrl';

import { navigationCustomizations } from './navigationOverrides';

// import typography from './typography';

import GlobalStyles from './globalStyles';

import breakpoints from './breakpoints';

import { colorSchemes } from './primitiveTheme';

import shadows,{ customShadows } from './shadows';

import CreateEmotionCache from './createEmotionCache';

import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material/utils';

import CookieVariantProvider from './helpers/CookieVariants';

import InitColorSchemeScript from '@mui/system/InitColorSchemeScript';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    primaryDark?: PaletteColorOptions;
  }
}

interface configProps {
    children?:React.ReactNode;
    checkTheme?:boolean;
    themes?:any;
    nonce?:any;
};

interface themeProps{
  dense?:boolean;
  direction?:string;
  paletteColors?: any;
  spacing?:number;
  paletteMode?:string;
};

const themeInitialOptions:themeProps = {
    dense: false,
    direction: 'ltr',
    paletteColors: {},
    spacing: 8, // spacing unit
    paletteMode: 'light',
  };
  
  export const highDensity = {
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


  interface DISPATCHPROPS {
    [key:string]: string | any;
  }
  
  export const DispatchContext = React.createContext<DISPATCHPROPS | any>(() => {
    throw new Error('Forgot to wrap component in `ThemeProvider`');
    // {}
  });
  
// if (process.env.NODENV !== 'production') {
//   DispatchContext.displayName = 'ThemeDispatchContext';
// }

if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  DispatchContext.displayName = 'ThemeDispatchContext';
}

  export default function ThemeConfig({ children, nonce}: configProps){
    
  const [themeOption, dispatch] = React.useReducer((state:any, action:any) => {
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
        if (
          (!action.payload.paletteMode || action.payload.paletteMode === state.paletteMode) &&
          (!action.payload.direction || action.payload.direction === state.direction) &&
          (!action.payload.paletteColors || action.payload.paletteColors === state.paletteColors)
        ) {
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

  useEnhancedEffect(() => {
    let nextPaletteColors = JSON.parse(getCookie('paletteColors') || 'null');
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

  useEnhancedEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  useEnhancedEffect(() => {
    // To support light and dark mode images in the docs
    if (paletteMode === 'dark') {
      document.body.classList.remove('mode-light');
      document.body.classList.add('mode-dark');
    } else {
      document.body.classList.remove('mode-dark');
      document.body.classList.add('mode-light');
    }

    const metas = document.querySelectorAll('meta[name="theme-color"]');
    metas.forEach((meta) => {
      meta.setAttribute('content', getMetaThemeColor(paletteMode));
    });
  }, [paletteMode]);
  
    const theme = React.useMemo(() => {
       const { palette: lightPalette, typography, ...designTokens } = getDesignTokens('light');
       const { palette: darkPalette } = getDesignTokens('dark');

        const brandingDesignTokens = getDesignTokens(paletteMode);
        const nextPalette = deepmerge(brandingDesignTokens.palette, paletteColors);
  
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
          typography: deepmerge(typography, {
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
          ...getThemedComponents(),
        };

        let nextTheme = typeof createColorScheme === 'function' ? createMdTheme(
          {
            direction,
            ...brandingDesignTokens,
            ...themeOptin,
            cssVariables: {
              cssVarPrefix: 'tres-paylas-theme',
              colorSchemeSelector: 'data-mui-color-scheme',
            },
            ...colorSchemes,
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
          },
          dense ? highDensity : null as any,
          {
            components: {
              MuiCssBaseline: {
                defaultProps: {
                  // TODO: Material UI v6, makes this the default
                  enableColorScheme: true,
                },
              },
              ...surfacesCustomizations,
              ...feedbackCustomizations,
              ...dataDisplayCustomizations,
              ...inputsCustomizations,
              ...navigationCustomizations,
            },
          },
          {customShadows, paletteMode, breakpoints, palette, shape, typography, shadows, GlobalStyles,}
          
        ): extendTheme({
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
        dense ? highDensity : null,
        {
          components: {
            MuiCssBaseline: {
              defaultProps: {
                // TODO: Material UI v6, makes this the default
                enableColorScheme: true,
              },
            },
          },
        },
      )  
            nextTheme = deepmerge(nextTheme, getThemedComponents());
        //  getThemedComponents()
      return nextTheme;
  }, [ dense, direction, customShadows, breakpoints, palette,shape, shadows, GlobalStyles, paletteColors, spacing,]
);

console.log(theme);
React.useEffect(() => {
     //@ts-ignore
       window.theme = theme;
       //@ts-ignore
       window.createTheme = createMdTheme;
  }, [theme]);
  
  const cache = CreateEmotionCache(nonce);  //client Side

  return(
       <CookieVariantProvider>
          <CacheProvider value={cache}> 
          <InitColorSchemeScript 
                     attribute="data" 
                        modeStorageKey="tres-paylas-mode" 
                        colorSchemeStorageKey="tres-paylas-mode"   
                           nonce={nonce}/>
              <ThemeProvider 
                  theme={theme} 
                   colorSchemeStorageKey="mui-mode" 
              > 
                  <StyledEngineProvider injectFirst>  
                      <DispatchContext.Provider value={dispatch}>
                        <CssBaseline enableColorScheme />
                          {children}
                      </DispatchContext.Provider>        
                  </StyledEngineProvider>
              </ThemeProvider>   
          </CacheProvider> 
      </CookieVariantProvider>
   )             
} 

export const dbImgCover = (index:any) => `../../static/mock-images/covers/cover_${index}.jpg`;

export const dbImgProduct = (index:any) => `../../static/video-rental/images/movie_${index}.png`;

export const dbImgAvatar = (index:any) => `../../static/mock-images/avatars/avatar_${index}.jpg`;

export function useChangeTheme() {
    const dispatch = React.useContext(DispatchContext);
    return React.useCallback((options: any) => dispatch({ type: 'CHANGE', payload: options }), [dispatch]);
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

export function useColorSchemeShim() {
    const [mode, setMode] = useLocalStorageState('mui-mode', 'system');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
    const systemMode = prefersDarkMode ? 'dark' : 'light';
  
    return {
      mode,
      systemMode,
      setMode,
    };
  }

