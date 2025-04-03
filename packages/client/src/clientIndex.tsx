import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider, CacheProvider } from '@emotion/react';
import theme from './mui_lib/theme';
import createEmotionCache from './mui_lib/createEmotionCache';
import App from "./App";

const domNode = document.getElementById("root");

// InitialState();
const cache = createEmotionCache();
// function InitialState(){

//   const [dome, setDome ] = React.useState<null | HTMLElement | string>(null)
  
//   React.useEffect(()=>{
//      const domeNode = document.getElementById("app")!;     
//      if(domeNode){
//          if(domeNode.hasChildNodes()){
//                setDome(domeNode)
//          } else {
//            setDome("root does not exist");
//          }
//      }
//   },[])

//   if(dome){

//   const timeoutId =  setTimeout(()=>{

//         return hydrateRoot(dome as Element,
//            <React.StrictMode>
//               <Provider store={store}>
//                  <CacheProvider value={cache}>
//                     <ThemeProvider theme={theme}>
//                        <CssBaseline />
//                           <BrowserRouter>
//                              <App />
//                           </BrowserRouter>  
//                        </ThemeProvider>
//                     </CacheProvider> 
//                  </Provider>  
//            </React.StrictMode>   
//            );  
//              console.log("Hydration complete")
//       }, 1000)
//       return ()=> clearTimeout(timeoutId);
//   } else {
//      { dome }
//      const root = document.getElementById("app") as Element;
//   return createRoot(root)
//   .render(
//            <React.StrictMode>
//               <Provider store={store}>
//                  <CacheProvider value={cache}>
//                     <ThemeProvider theme={theme}>
//                        <CssBaseline />
//                           <BrowserRouter>
//                              <App />
//                           </BrowserRouter>  
//                        </ThemeProvider>
//                     </CacheProvider> 
//                  </Provider>  
//            </React.StrictMode>  
//      ); 
//  }
// }

createRoot(domNode as Element)
   .render(
      <React.StrictMode>
         <Provider store={store}>
            <CacheProvider value={cache}>
               <ThemeProvider theme={theme}>
                  <CssBaseline />
                     <BrowserRouter>
                        <App />
                     </BrowserRouter>  
                  </ThemeProvider>
               </CacheProvider> 
            </Provider>  
      </React.StrictMode>   
   );  