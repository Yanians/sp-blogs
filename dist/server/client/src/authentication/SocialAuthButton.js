"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Google_1 = tslib_1.__importDefault(require("@mui/icons-material/Google"));
const Facebook_1 = tslib_1.__importDefault(require("@mui/icons-material/Facebook"));
const Instagram_1 = tslib_1.__importDefault(require("@mui/icons-material/Instagram"));
const material_1 = require("@mui/material");
const OpenPopup_1 = require("../utils/helpers/OpenPopup");
// interface Props {
//   onLogin: (data: { 
//     token: string; 
//       user: { 
//         name: string; 
//         email: string; 
//         photo: string 
//       } 
//   }) => void;
// }
const SocialAuthButtons = ({ onLogin }) => {
    const handleGoogleLogin = () => {
        // Redirect to your backend Google login route
        window.location.href = `http://localhost:5000/api/auth/google`;
        // console.log("REACT_APP_SERVER_URL =", process.env.REACT_APP_SERVER_URL);
    };
    const handleFacebookLogin = () => {
        const popup = (0, OpenPopup_1.OpenPopup)('/api/auth/facebook');
        const handleMessage = (event) => {
            if (event.origin !== window.location.origin)
                return;
            if (event.data?.token) {
                onLogin(event.data);
            }
            window.removeEventListener('message', handleMessage);
        };
        window.addEventListener('message', handleMessage);
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { marginTop: 2 }, children: [(0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", color: "primary", fullWidth: true, startIcon: (0, jsx_runtime_1.jsx)(Google_1.default, {}), 
                //  onClick={handleGoogleLogin}
                href: "http://localhost:5000/api/auth/google", sx: { marginBottom: 1 }, children: "Login with Google" }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", color: "primary", fullWidth: true, onClick: handleFacebookLogin, startIcon: (0, jsx_runtime_1.jsx)(Facebook_1.default, {}), 
                // href="http://localhost:5000/api/auth/facebook"
                sx: { marginBottom: 1 }, children: "Login with Facebook" }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", color: "primary", fullWidth: true, startIcon: (0, jsx_runtime_1.jsx)(Instagram_1.default, {}), href: "http://localhost:5000/api/auth/instagram", children: "Login with Instagram" })] }));
};
exports.default = SocialAuthButtons;
