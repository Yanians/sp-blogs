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
console.log("🚀 Client script is running!");
var cache = (0, _createEmotionCache["default"])();
var root = document.getElementById("root");
if (root) {
  if (root.hasChildNodes()) {
    (0, _client.hydrateRoot)(root, /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: _store.store
    }, /*#__PURE__*/_react["default"].createElement(_react2.CacheProvider, {
      value: cache
    }, /*#__PURE__*/_react["default"].createElement(_react2.ThemeProvider, {
      theme: _theme["default"]
    }, /*#__PURE__*/_react["default"].createElement(_CssBaseline["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_Routes["default"], null)))))));
  } else {
    console.log("No pre-rendered content found. Creating a new root...");
    (0, _client.createRoot)(root).render(/*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: _store.store
    }, /*#__PURE__*/_react["default"].createElement(_react2.CacheProvider, {
      value: cache
    }, /*#__PURE__*/_react["default"].createElement(_react2.ThemeProvider, {
      theme: _theme["default"]
    }, /*#__PURE__*/_react["default"].createElement(_CssBaseline["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_Routes["default"], null)))))));
  }
} else {
  console.log("The Dom element div has no child nodes");
}
// const ClientApp = () => {
//   const [rehydrate, setRehydrate] = React.useState(false);

//   // Re-hydrate with a delay to avoid server mismatch issues
//   React.useEffect(() => {
//     const timer = setTimeout(() => {
//       console.log("🔄 Triggering rehydration...");
//       setRehydrate(true);
//     }, 500); // Adjust delay as needed

//     return () => clearTimeout(timer);
//   }, []);

//   return rehydrate ? <AppWithCallback /> : <App />;
// };

// const AppWithCallback = () => {
//   const handleClick = React.useCallback(() => {
//     console.log("✅ Button Clicked!");
//   }, []);

//   return (
//     <button onClick={handleClick} style={{ padding: 10, fontSize: 18 }}>
//       Click Me!
//     </button>
//   );
// };

// if (rootElement) {

//    if (rootElement.hasChildNodes()) {

//      console.log("Hydrating existing content...");
//      hydrateRoot(rootElement, 
//       <React.StrictMode>
//       <Provider store={store}>
//          <CacheProvider value={cache}>
//             <ThemeProvider theme={theme}>
//                <CssBaseline />
//                   <BrowserRouter>
//                      <App />
//                   </BrowserRouter>  
//                </ThemeProvider>
//             </CacheProvider> 
//          </Provider>  
//    </React.StrictMode>
//      );
//    } else{
//      console.log("No pre-rendered content found. Creating a new root...");
//      const root = createRoot(rootElement);
//      root.render(
//       <React.StrictMode>
//       <Provider store={store}>
//          <CacheProvider value={cache}>
//             <ThemeProvider theme={theme}>
//                <CssBaseline />
//                   <BrowserRouter>
//                      <App />
//                   </BrowserRouter>  
//                </ThemeProvider>
//             </CacheProvider> 
//          </Provider>  
//    </React.StrictMode>
//      );
//    }