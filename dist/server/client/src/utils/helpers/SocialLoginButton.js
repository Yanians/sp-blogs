"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SocialLoginButtons;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Facebook_1 = tslib_1.__importDefault(require("@mui/icons-material/Facebook"));
const Google_1 = tslib_1.__importDefault(require("@mui/icons-material/Google"));
const Instagram_1 = tslib_1.__importDefault(require("@mui/icons-material/Instagram"));
const sweetalert2_1 = tslib_1.__importDefault(require("sweetalert2"));
const oauthConfig = [
    {
        name: 'facebook',
        label: 'Login with Facebook',
        clientId: process.env.FACEBOOK_APP_ID,
        icon: (0, jsx_runtime_1.jsx)(Facebook_1.default, {}),
        url: '/api/auth/facebook?auth_type=reauthenticate',
    },
    // ?auth_type=reauthenticate
    {
        name: 'google',
        label: 'Login with Google',
        clientId: process.env.GOOGLE_CLIENT_ID,
        icon: (0, jsx_runtime_1.jsx)(Google_1.default, {}),
        url: '/api/auth/google',
    },
    {
        name: 'instagram',
        label: 'Login with Instagram',
        clientId: process.env.INSTAGRAM_CLIENT_ID,
        icon: (0, jsx_runtime_1.jsx)(Instagram_1.default, {}),
        url: '/api/auth/instagram',
    },
];
function SocialLoginButtons({ onLogin }) {
    const popupWidth = 500;
    const popupHeight = 600;
    // Open OAuth popup and listen for postMessage
    const openPopup = (url) => {
        const left = window.screenX + (window.outerWidth - popupWidth) / 2;
        const top = window.screenY + (window.outerHeight - popupHeight) / 2.5;
        const popup = window.open(url, 'oauthPopup', `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
        if (!popup) {
            alert('Failed to open popup');
            return;
        }
        const handleMessage = (event) => {
            if (event.origin !== window.location.origin) {
                console.warn('Blocked message from unknown origin:', event.origin);
                return;
            }
            console.log('Received message from popup:', event.data); // ✅ Add this for debugging
            if (event.data?.token && event.data?.user) {
                onLogin(event.data);
                popup.close();
                window.removeEventListener('message', handleMessage);
            }
            else if (event.data?.message) {
                sweetalert2_1.default.fire('Login Failed', event.data.message, 'error');
                popup.close();
                window.removeEventListener('message', handleMessage);
            }
        };
        window.addEventListener('message', handleMessage);
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Stack, { spacing: 2, direction: "column", alignItems: "center", children: oauthConfig.map(({ name, label, icon, url }) => ((0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", startIcon: icon, onClick: () => openPopup(url), 
            // href={url}
            fullWidth: true, children: label }, name))) }));
}
