"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AvatarChips;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Avatar_1 = tslib_1.__importDefault(require("@mui/material/Avatar"));
const Chip_1 = tslib_1.__importDefault(require("@mui/material/Chip"));
const Stack_1 = tslib_1.__importDefault(require("@mui/material/Stack"));
const react_router_dom_1 = require("react-router-dom");
function AvatarChips({ link, sx, altTitle, tags, img, onClick }) {
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, { direction: "row", spacing: 1, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: link, children: (0, jsx_runtime_1.jsx)(Chip_1.default, { avatar: (0, jsx_runtime_1.jsx)(Avatar_1.default, { sizes: 'small', alt: altTitle, src: img }), label: tags, sx: sx, onClick: onClick, variant: "outlined" }) }) }));
}
