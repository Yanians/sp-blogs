import * as React from 'react';

import { useMemo } from 'react';

import { CacheProvider } from '@emotion/react';

import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

import palette from './palette';

import shape from './shape';

import typography from './typography';

import GlobalStyles from './globalStyles';

import breakpoints from './breakpoints';

import shadows,{ customShadows } from './shadows';

import ComponentsOverride from './overrides';

import CreateEmotionCache from './createEmotionCache';

interface configProps {
    children?:React.ReactNode;
    checkTheme?:boolean;
    themes?:any;
    nonce?:any;
};

export default function ThemeConfig({ children, nonce}: configProps){
const themeOptions:any = useMemo(()=>({customShadows, breakpoints, palette,shape,typography,shadows,GlobalStyles,}),[]);
      console.log('themes index checking: ',themeOptions);

    const cache = CreateEmotionCache(nonce);  //client Side
    const theme = createTheme(themeOptions);
          theme.components = ComponentsOverride(theme);
  return(
  	 <CacheProvider value={cache}> 
    	<StyledEngineProvider injectFirst>
    	    <ThemeProvider theme={theme}> 
                <CssBaseline />
    		     {children}
    		</ThemeProvider>
    	</StyledEngineProvider>
      </CacheProvider> 
   )             
} 
