"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _store = require("./redux/store");
var _react2 = require("@emotion/react");
var _theme = _interopRequireDefault(require("./mui_lib/theme"));
var _createEmotionCache = _interopRequireDefault(require("./mui_lib/createEmotionCache"));
var _App = _interopRequireDefault(require("./App"));
var _jsxRuntime = require("react/jsx-runtime");
const domNode = document.getElementById("root");

// InitialState();
const cache = (0, _createEmotionCache.default)();
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

(0, _client.createRoot)(domNode).render(/*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.StrictMode, {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRedux.Provider, {
    store: _store.store,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.CacheProvider, {
      value: cache,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.ThemeProvider, {
        theme: _theme.default,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CssBaseline.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_App.default, {})
        })]
      })
    })
  })
}));