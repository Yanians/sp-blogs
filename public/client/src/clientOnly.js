"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ClientOnly;
const react_1 = require("react");
function ClientOnly({ children }) {
    const [isClient, setIsClient] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => setIsClient(true), []);
    return isClient ? children : null;
}
