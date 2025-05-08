import { CSSProperties } from "react";
import { Breakpoint } from "@mui/system";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { ResponsiveBuilder } from "../shared/ResponsiveBuilder";
import { LEFT_EDGE_SIDEBAR_ID, RIGHT_EDGE_SIDEBAR_ID, HEADER_ID, CONTENT_ID, FOOTER_ID } from "../utils/constant";
import { Responsive } from "../utils/types";
export type PersistentBehavior = "fit" | "flexible" | "none";
export type DrawerAnchor = "left" | "right";
export type DrawerVariant = "temporary" | "persistent" | "permanent";
export type EdgeSidebarConfig = PersistentSidebarConfig | PermanentSidebarConfig | TemporarySidebarConfig;
export interface CollapsibleSidebarConfig {
    /**
     * If `true`, this sidebar can be collapsed
     */
    collapsible?: boolean;
    /**
     * If `collapsible: true`, when sidebar collapsed will have this width (support all CSS units)
     */
    collapsedWidth?: number | string;
    /**
     * If `collapsible: true`, when hover on collapsed sidebar it will expand to specified `width` without affecting other components.
     */
    uncollapsedOnHover?: boolean;
    /**
     * @deprecated autoExpanded will be remove in the next major version, use 'uncollapsedOnHover' instead
     */
    autoExpanded?: boolean;
    /**
     * sidebar's width (support all CSS units)
     */
    width: number | string;
    /**
     * If header with `position: relative` clip this sidebar, when scroll the page will cause this sidebar to stick with header
     */
    headerMagnetEnabled?: boolean;
}
export interface PermanentSidebarConfig extends CollapsibleSidebarConfig {
    /**
     * Material UI Drawer : permanent
     * https://material-ui.com/components/drawers/#permanent-drawer
     */
    variant: "permanent";
}
export interface PersistentSidebarConfig extends CollapsibleSidebarConfig {
    /**
     * Effect to other components when this sidebar open. Possible values are 'fit' | 'flexible' | 'none'
     */
    persistentBehavior: PersistentBehavior | Partial<Record<HEADER_ID | CONTENT_ID | FOOTER_ID, PersistentBehavior>>;
    /**
     * Material UI Drawer : persistent
     * https://material-ui.com/components/drawers/#persistent-drawer
     */
    variant: "persistent";
}
export interface TemporarySidebarConfig {
    /**
     * sidebar's width (support all CSS units)
     */
    width: number | string;
    /**
     * Material UI Drawer : persistent
     * https://material-ui.com/components/drawers/#temporary-drawer
     */
    variant: "temporary";
}
export type EdgeSidebarSetupParams = {
    config: Responsive<EdgeSidebarConfig>;
    hidden?: boolean | Breakpoint[];
    autoCollapse?: Breakpoint;
};
export type SidebarState = {
    collapsed?: boolean;
    open?: boolean;
};
export declare class EdgeSidebarBuilder extends ResponsiveBuilder<EdgeSidebarConfig> {
    id?: LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID;
    readonly autoCollapse: EdgeSidebarSetupParams["autoCollapse"];
    state?: SidebarState;
    effectedBy: {
        header?: HeaderBuilder;
    };
    constructor(params: EdgeSidebarSetupParams);
    setState(state: SidebarState): void;
    isFlexiblePersistent(breakpoint: Breakpoint, id?: HEADER_ID | CONTENT_ID | FOOTER_ID): boolean;
    getOccupiedSpace(id?: HEADER_ID | CONTENT_ID | FOOTER_ID): Partial<Record<Breakpoint, string | number>>;
    getZIndex(theme?: import("@mui/material").Theme): Partial<Record<Breakpoint, number>>;
    getWidth(): Partial<Record<Breakpoint, NonNullable<string | number | undefined>>>;
    getDrawerVariant(): Partial<Record<Breakpoint, NonNullable<"temporary" | "persistent" | "permanent">>>;
    getSxProps(theme?: import("@mui/material").Theme): {
        display?: Partial<Record<Breakpoint, string>> | undefined;
        width: Partial<Record<Breakpoint, NonNullable<string | number | undefined>>>;
        zIndex: Partial<Record<Breakpoint, number>>;
    };
    getFinalWidth: (config: CollapsibleSidebarConfig | undefined) => string | number | undefined;
    getEdgeTriggerSxDisplay(options: {
        field: "open" | "collapsed";
        display?: CSSProperties["display"];
    }): Partial<Record<Breakpoint, "ruby" | "table" | "flex" | (string & {}) | "grid" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "block" | "inline" | "run-in" | "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flow" | "flow-root" | "ruby-base" | "ruby-base-container" | "ruby-text" | "ruby-text-container" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group" | "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table" | "contents" | "list-item">>;
    static isPersistentConfig: (config?: EdgeSidebarConfig) => config is PersistentSidebarConfig;
    static isNonePersistentConfig: (config?: EdgeSidebarConfig, id?: HEADER_ID | CONTENT_ID | FOOTER_ID) => boolean;
    static isFlexiblePersistentConfig: (config?: EdgeSidebarConfig, id?: HEADER_ID | CONTENT_ID | FOOTER_ID) => boolean;
    static isCollapsibleConfig: (config?: EdgeSidebarConfig) => config is PersistentSidebarConfig | PermanentSidebarConfig;
    static isPermanentConfig: (config?: EdgeSidebarConfig) => config is PermanentSidebarConfig;
    static isTemporaryConfig: (config?: EdgeSidebarConfig) => config is TemporarySidebarConfig;
}
