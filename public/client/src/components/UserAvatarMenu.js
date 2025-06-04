"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserAvatarMenu;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importDefault(require("react"));
const material_1 = require("@mui/material");
const AuthContext_1 = require("../AuthContext");
function UserAvatarMenu() {
    const { user, logout } = (0, AuthContext_1.UseAuth)();
    const [anchorEl, setAnchorEl] = react_1.default.useState(null);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => setAnchorEl(null);
    if (!user)
        return null;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { edge: 'end', size: 'small', onClick: handleOpen, children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { sizes: 'small', variant: 'rounded', src: user.photo, alt: user.name }) }), (0, jsx_runtime_1.jsxs)(material_1.Menu, { anchorEl: anchorEl, open: !!anchorEl, onClose: handleClose, children: [(0, jsx_runtime_1.jsx)(material_1.MenuItem, { onClick: handleClose, children: "Profile" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { onClick: handleClose, children: "Settings" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { onClick: () => { logout(); handleClose(); }, children: "Logout" })] })] }));
}
