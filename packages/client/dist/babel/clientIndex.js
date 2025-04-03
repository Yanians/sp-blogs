"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _store = require("./redux/store");
var _react2 = require("@emotion/react");
var _theme = _interopRequireDefault(require("./mui_lib/theme"));
var _createEmotionCache = _interopRequireDefault(require("./mui_lib/createEmotionCache"));
var _Routes = _interopRequireDefault(require("./Routes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var domNode = document.getElementById("root");

// InitialState();
var cache = (0, _createEmotionCache["default"])();
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

(0, _client.createRoot)(domNode).render(/*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: _store.store
}, /*#__PURE__*/_react["default"].createElement(_react2.CacheProvider, {
  value: cache
}, /*#__PURE__*/_react["default"].createElement(_react2.ThemeProvider, {
  theme: _theme["default"]
}, /*#__PURE__*/_react["default"].createElement(_CssBaseline["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_Routes["default"], null)))))));