"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowCtx = exports.WindowConsumer = exports.WindowProvider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const WindowContext = react_1.default.createContext({
    iWindow: typeof window !== "undefined" ? window : undefined,
    iDocument: typeof document !== "undefined" ? document : undefined,
});
exports.WindowProvider = WindowContext.Provider;
exports.WindowConsumer = WindowContext.Consumer;
const useWindowCtx = () => react_1.default.useContext(WindowContext);
exports.useWindowCtx = useWindowCtx;
