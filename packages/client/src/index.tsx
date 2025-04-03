import React, { Suspense, } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider, CacheProvider } from '@emotion/react';
// import theme from './mui_lib/theme';
import createEmotionCache from './mui_lib/createEmotionCache';
import ThemeConfig from "./mui_lib";
import Swal from "sweetalert2";
import App from "./App";

import '@docsearch/css';
const nonce = document.querySelector('style[name="client_extraction"]')?.getAttribute('nonce') ?? undefined;
// const nonce = document.querySelector('meta[tag="emotion-nonce"]')?.getAttribute('content') ?? undefined;
const cache = createEmotionCache(nonce);
const root = document.getElementById("root")!;

 const jsx = <React.StrictMode>
                <Provider store={store}>
                  <ThemeConfig
                        nonce={nonce}
                  >
                    <BrowserRouter basename="/">
                        <Suspense fallback={<div>loading...</div>}>
                          <App />
                        </Suspense>   
                    </BrowserRouter>  
                  </ThemeConfig>  
                </Provider>  
            </React.StrictMode>
if(root){
if(root.hasChildNodes()){
    console.log('🚀 SSR scripts');
     hydrateRoot(root, jsx);
   } else {
    console.log('🚀 CSR scripts');
    console.log('first element inside body tag ',document.body.firstElementChild)
     const roots = createRoot(root!);
     roots.render(jsx);
   }
  }else {
    console.log('This page is from Client');
  }  