"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const clientOnly_1 = tslib_1.__importDefault(require("./clientOnly"));
const Layout_1 = tslib_1.__importDefault(require("./layout/Layout"));
const utils_1 = tslib_1.__importDefault(require("./utils"));
const Loader_1 = tslib_1.__importDefault(require("./components/Loader"));
const AuthContext_1 = require("./AuthContext");
const sx = { minWidth: { sm: 160 } };
const App = ({ sSrData, nonce }) => {
    return ((0, jsx_runtime_1.jsx)(clientOnly_1.default, { children: (0, jsx_runtime_1.jsx)(AuthContext_1.AuthProvider, { children: (0, jsx_runtime_1.jsx)(React.Suspense, { fallback: (0, jsx_runtime_1.jsx)(Loader_1.default, {}), children: (0, jsx_runtime_1.jsx)(utils_1.default, { nonce: nonce, children: (0, jsx_runtime_1.jsx)(Layout_1.default, { sSrData: sSrData }) }) }) }) }));
};
exports.default = App;
