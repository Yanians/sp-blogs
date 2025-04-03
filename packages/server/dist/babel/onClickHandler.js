"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const OnClickHandler = () => {
  const [bgColor, setBgColor] = (0, _react.useState)(false);
  const [showForm, setShowForm] = (0, _react.useState)(false);
  const [hydrated, setHydrated] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    console.log("Hydration complete");
    setHydrated(true);
  }, []);

  // const handleBgClick=()=>{
  //    setBgColor((prev)=> (!prev  ? "#ffeb3b":"#ffffff"));
  // }

  // ✅ Optimized click handlers using `useCallback`
  const handleBackgroundClick = _react.default.useCallback(() => {
    if (!hydrated) return;
    console.log("Background clicked!"); // Debugging log
    setBgColor(prevColor => prevColor === "#ffffff" ? "#ffeb3b" : "#ffffff");
  }, [hydrated]);
  const handleShowFormClick = _react.default.useCallback(() => {
    if (!hydrated) return;
    console.log("Show form clicked!"); // Debugging log
    setShowForm(true);
  }, [hydrated]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      p: 3
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: handleBackgroundClick,
      style: {
        backgroundColor: bgColor || "",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #000"
      },
      children: "Click me to change background"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: handleShowFormClick,
      style: {
        marginTop: "20px",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #000"
      },
      children: "Click me to show form"
    }), showForm && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        mt: 3
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
        label: "Name",
        fullWidth: true,
        sx: {
          mb: 2
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
        label: "Email",
        fullWidth: true,
        sx: {
          mb: 2
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
        label: "Password",
        type: "password",
        fullWidth: true,
        sx: {
          mb: 2
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
        variant: "contained",
        color: "primary",
        children: "Submit"
      })]
    })]
  });
};
var _default = exports.default = OnClickHandler;