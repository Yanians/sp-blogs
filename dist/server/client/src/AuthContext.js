"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseAuth = exports.AuthProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const AuthContext = (0, react_1.createContext)(undefined);
const AuthProvider = ({ children }) => {
    const [user, setUser] = (0, react_1.useState)(null);
    const [token, setToken] = (0, react_1.useState)(null);
    const Navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
    }, []);
    const login = (newUser, newToken) => {
        setUser(newUser);
        setToken(newToken);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
        sessionStorage.removeItem('secureLogin');
    };
    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        sessionStorage.setItem('secureLogin', 'true');
        Navigate('/authentication', { replace: true });
    };
    return ((0, jsx_runtime_1.jsx)(AuthContext.Provider, { value: { user, token, login, logout }, children: children }));
};
exports.AuthProvider = AuthProvider;
const UseAuth = () => {
    const ctx = (0, react_1.useContext)(AuthContext);
    if (!ctx)
        throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};
exports.UseAuth = UseAuth;
