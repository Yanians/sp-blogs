import { Breakpoint } from "@mui/system";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { Responsive } from "../utils/types";
import { ResponsiveBuilder } from "../shared/ResponsiveBuilder";
export type DrawerAnchor = "left" | "right";
export type FixedInsetSidebarConfig = {
    /**
     * css position of the root element
     */
    position: "fixed";
    /**
     * width of the sidebar (support all CSS units)
     */
    width: number | string;
    /**
     * css top of the body element
     */
    top?: number | string;
    /**
     * If header has `position: relative`, when scroll the page will cause this sidebar to stick with header
     */
    headerMagnetEnabled?: boolean;
};
export type AbsoluteInsetSidebarConfig = {
    /**
     * css position of the root element
     */
    position: "absolute";
    /**
     * width of the sidebar (support all CSS units)
     */
    width: number | string;
    /**
     * css top of the body element
     */
    top?: number | string;
};
export type StickyInsetSidebarConfig = {
    /**
     * css position of the root element
     */
    position: "sticky";
    /**
     * width of the sidebar (support all CSS units)
     */
    width: number | string;
    /**
     * css top of the body element
     */
    top?: number | string;
};
export type InsetSidebarConfig = FixedInsetSidebarConfig | AbsoluteInsetSidebarConfig | StickyInsetSidebarConfig;
export type InsetSetupParams = {
    config: Responsive<InsetSidebarConfig>;
    hidden?: Breakpoint[] | boolean;
};
export declare class InsetSidebarBuilder extends ResponsiveBuilder<InsetSidebarConfig> {
    anchor?: DrawerAnchor;
    effectedBy: {
        header?: HeaderBuilder;
    };
    constructor(params: InsetSetupParams);
    getFixedArea(modifier?: number): any;
    getSxBody(): {
        marginRight?: any;
        paddingRight?: any;
        marginLeft?: any;
        paddingLeft?: any;
        height: any;
        width: any;
        position: any;
        top: any;
    };
    getSxRoot(): {
        display: any;
        width: any;
    };
    getOccupiedSpace(): any;
}
