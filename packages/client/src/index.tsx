import React, { Suspense, } from "react";
import { hydrateRoot, createRoot, } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from "./App";
import './index.css';
import '@docsearch/css';
import 'prismjs/themes/prism-tomorrow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollToTop from "./components/ScrollToTop";
import ScrollRestoration from './components/ScrollRestoration';
// import LoaderCss from "./components/Loader";
const nonce = document.querySelector('style[name="client_extraction"]')?.getAttribute('nonce') ?? undefined;

const root = document.getElementById("root")!;

 const jsx = <React.StrictMode>
              <ErrorBoundary>
                  <Provider store={store}>
                    <BrowserRouter> 
                     <ScrollToTop />
                      {/* <ScrollRestoration /> */}
                       <App sSrData={window.__PRELOADED_STATE__} nonce={nonce} />
                    </BrowserRouter>        
                  </Provider> 
                       {/* <LoaderCss /> */}
                </ErrorBoundary>   
            </React.StrictMode>

// const hydrate = () => {
//   return React.startTransition( () => {
//         hydrateRoot(root, jsx);
//   }) 
// }
  
// if (window.requestIdleCallback) {
//   window.requestIdleCallback(hydrate);
// } else {
//   // Safari doesn't support requestIdleCallback
//   // https://caniuse.com/requestidlecallback
//   setTimeout(hydrate, 1);
// }

/***** THIS IS USED IN DEVELOPMENT */
if(root){
    if(root.hasChildNodes()){
       console.log('🚀 SSR scripts');
      React.startTransition(()=>{
          hydrateRoot(root, jsx);
      })
    } 
    else {
      console.log('🚀 CSR scripts');
      console.log('first element inside body tag ',document.body.firstElementChild)
      const roots = createRoot(root!);
      roots.render(jsx);
    }
  } else {
      console.log('This page is from Client');
  }  