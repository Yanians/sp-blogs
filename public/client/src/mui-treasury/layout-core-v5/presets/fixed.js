"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFixedScheme = void 0;
const getFixedScheme = () => ({
    header: {
        config: {
            xs: {
                position: "sticky",
                height: 56,
            },
            md: {
                position: "relative",
                height: 64,
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
            md: {
                variant: "permanent",
                width: 256,
                collapsible: true,
                collapsedWidth: 64,
            },
        },
    },
});
exports.getFixedScheme = getFixedScheme;
