"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FacebookLoginButton;
exports.SocialLogin = SocialLogin;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = tslib_1.__importDefault(require("@mui/material/Button"));
const OpenPopup_1 = require("./OpenPopup");
function FacebookLoginButton({ onLogin }) {
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
    return ((0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleFacebookLogin, children: "Login with Facebook" }));
}
function SocialLogin({ onLogin }) {
    const handleSocialLogin = () => {
        const popup = (0, OpenPopup_1.OpenPopup)('/authentication');
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
    return ((0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", variant: 'outlined', onClick: handleSocialLogin, children: "Login" }));
}
