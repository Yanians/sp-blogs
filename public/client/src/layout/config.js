"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
        config: {
            xs: {
                variant: "persistent",
                persistentBehavior: "fit",
                width: 60,
                collapsible: false,
                collapsedWidth: 20,
                headerMagnetEnabled: true,
            },
            sm: {
                variant: "persistent",
                persistentBehavior: "fit",
                width: 60,
                collapsible: true,
                collapsedWidth: 100,
                headerMagnetEnabled: true,
            },
            md: {
                variant: "persistent",
                persistentBehavior: "fit",
                width: 160,
                collapsible: true,
                collapsedWidth: 60,
                headerMagnetEnabled: true,
            },
        },
    },
    rightEdgeSidebar: {
        config: {
            xs: {
                variant: "persistent",
                persistentBehavior: "fit",
                width: 256,
                collapsible: true,
                collapsedWidth: 70,
                headerMagnetEnabled: true,
            },
            sm: {
                variant: "persistent",
                persistentBehavior: "fit",
                width: 256,
                collapsible: true,
                collapsedWidth: 80,
                headerMagnetEnabled: true,
            },
            md: {
                variant: "persistent",
                persistentBehavior: "fit",
                width: 256,
                collapsible: false,
                collapsedWidth: 120,
                headerMagnetEnabled: true,
            },
            lg: {
                variant: "persistent",
                persistentBehavior: "fit",
                width: 256,
                collapsible: false,
                collapsedWidth: 120,
                headerMagnetEnabled: true,
            },
        },
    },
    rightInsetSidebar: {
        config: {
            sm: {
                position: "fixed",
                width: 256,
            },
        },
    },
    insetSidebar: {
        leftInsetSidebar: {
            config: {
                xs: {
                    position: "permanent",
                    width: 150,
                    headerMagnetEnabled: true,
                },
                sm: {
                    position: "permanent",
                    width: 150,
                    headerMagnetEnabled: true,
                },
                md: {
                    variant: "persistent",
                    persistentBehavior: "fit",
                    width: 45,
                    collapsible: false,
                    collapsedWidth: 120,
                    headerMagnetEnabled: true,
                },
            }
        }
    }
};
// export default scheme;
