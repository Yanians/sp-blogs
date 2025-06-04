"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importStar(require("react"));
const material_1 = require("@mui/material");
const OnClickHandler = () => {
    const [bgColor, setBgColor] = (0, react_1.useState)(false);
    const [showForm, setShowForm] = (0, react_1.useState)(false);
    const [hydrated, setHydrated] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        console.log("Hydration complete");
        setHydrated(true);
    }, []);
    // const handleBgClick=()=>{
    //    setBgColor((prev)=> (!prev  ? "#ffeb3b":"#ffffff"));
    // }
    // ✅ Optimized click handlers using `useCallback`
    const handleBackgroundClick = react_1.default.useCallback(() => {
        if (!hydrated)
            return;
        console.log("Background clicked!"); // Debugging log
        setBgColor((prevColor) => (prevColor === "#ffffff" ? "#ffeb3b" : "#ffffff"));
    }, [hydrated]);
    const handleShowFormClick = react_1.default.useCallback(() => {
        if (!hydrated)
            return;
        console.log("Show form clicked!"); // Debugging log
        setShowForm(true);
    }, [hydrated]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { p: 3 }, children: [(0, jsx_runtime_1.jsx)("div", { onClick: handleBackgroundClick, style: {
                    backgroundColor: bgColor || "",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                    border: "1px solid #000",
                }, children: "Click me to change background" }), (0, jsx_runtime_1.jsx)("div", { onClick: handleShowFormClick, style: {
                    marginTop: "20px",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                    border: "1px solid #000",
                }, children: "Click me to show form" }), showForm && ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { mt: 3 }, children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { label: "Name", fullWidth: true, sx: { mb: 2 } }), (0, jsx_runtime_1.jsx)(material_1.TextField, { label: "Email", fullWidth: true, sx: { mb: 2 } }), (0, jsx_runtime_1.jsx)(material_1.TextField, { label: "Password", type: "password", fullWidth: true, sx: { mb: 2 } }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", color: "primary", children: "Submit" })] }))] }));
};
exports.default = OnClickHandler;
