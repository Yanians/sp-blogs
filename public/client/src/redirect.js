"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Authentication = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const error = params.get('error');
        if (error) {
            console.error('Login failed error ', error);
            //show error message to user
            return;
        }
        if (token) {
            localStorage.setItem('authToken', token);
            // Optionally decode token and store user info
            navigate('/'); // redirect to homepage or dashboard
        }
    }, [navigate]);
    return;
};
exports.default = Authentication;
