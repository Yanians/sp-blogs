import { DrawerAnchor } from "./EdgeSidebarBuilder";
export declare const useEdgeSidebar: (options?: {
    anchor?: DrawerAnchor;
}) => {
    edgeSidebar: import("./EdgeSidebarBuilder").EdgeSidebarBuilder | undefined;
    setOpen: (id: import("../utils/constant").EDGE_SIDEBAR_ID, value: boolean) => void;
    toggleLeftSidebarOpen: () => void;
    toggleLeftSidebarCollapsed: () => void;
    setCollapsed: (id: import("../utils/constant").EDGE_SIDEBAR_ID, value: boolean) => void;
    toggleRightSidebarOpen: () => void;
    toggleRightSidebarCollapsed: () => void;
    collapsed?: boolean;
    open?: boolean;
    sidebarId: import("../utils/constant").EDGE_SIDEBAR_ID;
};
