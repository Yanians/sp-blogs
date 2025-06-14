"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCozyScheme = void 0;
const getCozyScheme = () => ({
    header: {
        config: {
            xs: {
                position: "fixed",
                height: 56,
            },
            sm: {
                position: "fixed",
                height: 64,
            },
            md: {
                position: "fixed",
                height: 64,
                clipped: true,
            },
        },
    },
    leftEdgeSidebar: {
        autoCollapse: "md",
        config: {
            xs: {
                variant: "temporary",
                width: 256,
            },
            sm: {
                variant: "permanent",
                width: 256,
            },
            md: {
                variant: "permanent",
                width: 256,
                collapsible: true,
                collapsedWidth: 64,
            },
        },
    },
});
exports.getCozyScheme = getCozyScheme;
