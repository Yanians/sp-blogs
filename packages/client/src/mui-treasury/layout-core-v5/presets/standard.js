"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStandardScheme = void 0;
var getStandardScheme = function () { return ({
    header: {
        config: {
            xs: {
                position: "sticky",
                height: 56,
            },
            md: {
                position: "relative",
                height: 64,
                clipped: true,
            },
        },
    },
    leftEdgeSidebar: {
        autoCollapse: "sm",
        config: {
            xs: {
                variant: "temporary",
                width: 256,
            },
            sm: {
                variant: "permanent",
                width: 256,
                collapsible: true,
                collapsedWidth: 64,
                headerMagnetEnabled: true,
            },
        },
    },
}); };
exports.getStandardScheme = getStandardScheme;
