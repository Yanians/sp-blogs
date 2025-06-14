"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentBasedScheme = void 0;
const getContentBasedScheme = () => ({
    header: {
        config: {
            xs: {
                position: "relative",
                height: 56,
            },
            md: {
                position: "relative",
                height: 64,
            },
        },
    },
    leftEdgeSidebar: {
        config: {
            xs: {
                variant: "temporary",
                width: 256,
            },
            sm: {
                variant: "persistent",
                width: 256,
                persistentBehavior: "flexible",
            },
        },
    },
});
exports.getContentBasedScheme = getContentBasedScheme;
