"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
class ErrorBoundary extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        // You can log this to a reporting service
    }
    render() {
        if (this.state.hasError) {
            return ((0, jsx_runtime_1.jsxs)("div", { style: { padding: '2rem', textAlign: 'center', color: 'red' }, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Something went wrong." }), (0, jsx_runtime_1.jsx)("p", { children: this.state.error?.message }), process.env.NODE_ENV !== 'development' && ((0, jsx_runtime_1.jsx)("pre", { style: { whiteSpace: 'pre-wrap', color: 'green', border: '1px dashed grey', padding: 1, }, children: this.state.error?.stack }))] }));
        }
        return this.props.children;
    }
}
exports.default = ErrorBoundary;
