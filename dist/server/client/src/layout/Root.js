"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_core_v5_1 = require("../mui-treasury/layout-core-v5");
const styles_1 = require("@mui/material/styles");
const Main = (0, styles_1.styled)('div')(({ theme }) => ({
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
}));
function Root(props) {
    const { children } = props;
    const standardScheme = {
        header: {
            config: {
                xs: {
                    position: "relative",
                    height: 56,
                    clipped: true,
                },
                md: {
                    position: "sticky",
                    height: 64,
                    clipped: true,
                },
            },
        },
        leftEdgeSidebar: {
            // autoCollapse:'sm',
            // hidden:['md','lg','xl'],
            config: {
                xs: {
                    variant: "persistent",
                    width: 0,
                    persistentBehavior: 'flexible',
                    collapsible: true,
                    collapsedWidth: 85,
                    headerMagnetEnabled: true,
                },
                sm: {
                    variant: "persistent",
                    width: 0,
                    collapsible: true,
                    collapsedWidth: 85,
                    persistentBehavior: {
                        header: 'flexible',
                        content: 'flexible',
                        footer: 'none',
                    }
                    // headerMagnetEnabled: true,
                },
                md: {
                    variant: 'persistent',
                    width: 0,
                    collapsible: false,
                    collapsedWidth: 0,
                    persistentBehavior: {
                        header: 'flexible',
                        content: 'fit',
                        footer: 'none',
                    }
                }
            },
        },
        rightInsetSidebar: {
            hidden: ['xs', 'sm'],
            config: {
                md: {
                    position: "sticky",
                    top: "4rem",
                    width: 'auto',
                    //  headerMagnetEnabled:true,
                },
                lg: {
                    position: "sticky",
                    top: "4rem",
                    width: 'auto',
                    //  headerMagnetEnabled:true,
                }
            },
        }
    };
    return ((0, jsx_runtime_1.jsx)(Main, { children: (0, jsx_runtime_1.jsx)(layout_core_v5_1.Root, { scheme: standardScheme, initialState: {
                leftEdgeSidebar: {
                    open: false,
                    collapsed: true,
                }
            }, children: children }) }));
}
