import { EdgeSidebarBuilder } from "./EdgeSidebarBuilder";
import { Responsive } from "../utils/types";
export declare const getEdgeOffsetSxProps: (edgeSidebar: EdgeSidebarBuilder | undefined, sxClippedHeight: Responsive<string | number>) => {
    height?: Partial<Record<Breakpoint, string | number>> | undefined;
};
