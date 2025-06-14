import { Breakpoint } from "@mui/system";
import { LEFT_EDGE_SIDEBAR_ID, RIGHT_EDGE_SIDEBAR_ID } from "../utils/constant";
import { Responsive } from "../utils/types";
import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { ResponsiveBuilder } from "../shared/ResponsiveBuilder";
export type ClippableElement = LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID;
export type HeaderConfig = {
    /**
     * css position. For calculating offset in other components.
     */
    position: "relative" | "sticky" | "fixed";
    /**
     * css height, support all unit that works in CSS. For calculating offset in other components.
     */
    height: number | string;
    /**
     * css top, support all unit that works in CSS.
     */
    top?: number | string;
    /**
     * to identify which Header stay on top of other (the larger number).
     */
    layer?: number;
    /**
     * If `true`, stay on top of EdgeSidebar and EdgeSidebar's width have no effect on Header.
     */
    clipped?: boolean | Partial<Record<ClippableElement, boolean>>;
};
export type HeaderSetupParams = {
    config: Responsive<HeaderConfig>;
    hidden?: boolean | Breakpoint[];
};
export declare class HeaderBuilder extends ResponsiveBuilder<HeaderConfig> {
    effectedBy: {
        leftEdgeSidebar?: EdgeSidebarBuilder;
        rightEdgeSidebar?: EdgeSidebarBuilder;
    };
    constructor(params: HeaderSetupParams);
    isClipped(clippableId: ClippableElement, breakpoint: Breakpoint): boolean | undefined;
    isAboveSomeEdgeSidebar(breakpoint: Breakpoint): boolean;
    getOffsetHeight(): Partial<Record<Breakpoint, string | number>>;
    getSxHeight(): {
        height?: Partial<Record<Breakpoint, string | number>> | undefined;
    };
    getSxMarginHorizontal(): {
        marginRight?: Partial<Record<Breakpoint, string | number>> | undefined;
        marginLeft?: Partial<Record<Breakpoint, string | number>> | undefined;
    };
    getSxWidth(): {
        width?: Partial<Record<Breakpoint, string | number>> | undefined;
    };
    getSxZIndex(theme?: import("@mui/material").Theme): {
        zIndex?: Partial<Record<Breakpoint, number>> | undefined;
    };
    getSxProps(theme?: import("@mui/material").Theme): object;
}
