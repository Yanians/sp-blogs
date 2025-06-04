"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const UniversalButton = () => {
    (0, react_1.useEffect)(() => {
        const btn = document.getElementById("universal-btn");
        const handleClick = () => {
            console.log("✅ Manual DOM Button Clicked");
            alert("The button is alive!");
        };
        if (btn) {
            btn.addEventListener("click", handleClick);
        }
        else {
            console.warn("❌ Button element not found!");
        }
        return () => {
            if (btn) {
                btn.removeEventListener("click", handleClick);
            }
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("button", { id: "universal-btn", style: { fontSize: "20px", padding: "10px" }, children: "Click Me" }));
};
exports.default = UniversalButton;
