"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeSidebarBuilder = void 0;
const ResponsiveBuilder_1 = require("../shared/ResponsiveBuilder");
const combineBreakpoints_1 = require("../utils/combineBreakpoints");
const constant_1 = require("../utils/constant");
const pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
class EdgeSidebarBuilder extends ResponsiveBuilder_1.ResponsiveBuilder {
    constructor(params) {
        super(params);
        this.effectedBy = {};
        this.getFinalWidth = (config) => {
            return config?.collapsible && this.state?.collapsed
                ? config.collapsedWidth ?? config.width
                : config?.width;
        };
        this.autoCollapse = params.autoCollapse;
    }
    setState(state) {
        this.state = state;
    }
    isFlexiblePersistent(breakpoint, id) {
        const config = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(this.config, breakpoint);
        return EdgeSidebarBuilder.isFlexiblePersistentConfig(config, id);
    }
    getOccupiedSpace(id) {
        return this.generateSxWithHidden({
            hiddenValue: 0,
            assignValue: (breakpointConfig, _, lastResultVal) => {
                if (EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)) {
                    if (lastResultVal !== undefined) {
                        return 0;
                    }
                    return undefined;
                    // do nothing for xs because temporary variant will be modal
                }
                if (EdgeSidebarBuilder.isPersistentConfig(breakpointConfig)) {
                    if (this.state?.open &&
                        !EdgeSidebarBuilder.isNonePersistentConfig(breakpointConfig, id)) {
                        return this.getFinalWidth(breakpointConfig);
                    }
                    else {
                        return 0;
                    }
                }
                if (EdgeSidebarBuilder.isPermanentConfig(breakpointConfig)) {
                    return this.getFinalWidth(breakpointConfig);
                }
            },
        });
    }
    getZIndex(theme = constant_1.DEFAULT_THEME) {
        const result = {};
        if (!this.effectedBy.header)
            return {};
        const breakpoints = (0, combineBreakpoints_1.combineBreakpoints)(this.effectedBy.header.config, this.config);
        for (const key of breakpoints) {
            const bp = key;
            if (this.id) {
                const isClipped = this.effectedBy.header.isClipped(this.id, bp);
                const isAboveSomeEdgeSidebar = this.effectedBy.header.isAboveSomeEdgeSidebar(bp);
                result[bp] =
                    theme.zIndex.drawer + (isAboveSomeEdgeSidebar && !isClipped ? 20 : 0);
            }
            else {
                console.warn("Cannot find EdgeSidebar id. This might be an internal bug, please open an issue in github.");
            }
        }
        return result;
    }
    getWidth() {
        return this.generateSx((breakpointConfig, bp) => EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)
            ? this.config[bp]?.width
            : this.getFinalWidth(breakpointConfig));
    }
    getDrawerVariant() {
        return this.generateSx((config) => config.variant);
    }
    getSxProps(theme = constant_1.DEFAULT_THEME) {
        const sxDisplay = this.getSxDisplay("flex");
        const displayKeys = Object.keys(sxDisplay);
        const shouldAttachDisplay = displayKeys.length > 1 ||
            (displayKeys.length === 1 && displayKeys[0] !== "xs");
        return {
            width: this.getWidth(),
            zIndex: this.getZIndex(theme),
            ...(shouldAttachDisplay && { display: sxDisplay }),
        };
    }
    getEdgeTriggerSxDisplay(options) {
        const { field, display = "inline-flex" } = options;
        return this.generateSxWithHidden({
            strict: true,
            hiddenValue: "none",
            assignValue: (config) => {
                if (field === "open") {
                    if (EdgeSidebarBuilder.isPermanentConfig(config)) {
                        return "none";
                    }
                    else {
                        return display;
                    }
                }
                if (field === "collapsed") {
                    if (EdgeSidebarBuilder.isCollapsibleConfig(config)) {
                        return display;
                    }
                    else {
                        return "none";
                    }
                }
            },
        });
    }
}
exports.EdgeSidebarBuilder = EdgeSidebarBuilder;
EdgeSidebarBuilder.isPersistentConfig = (config) => {
    return config?.variant === "persistent";
};
EdgeSidebarBuilder.isNonePersistentConfig = (config, id) => {
    return (!!config &&
        !!EdgeSidebarBuilder.isPersistentConfig(config) &&
        ((typeof config.persistentBehavior === "string" &&
            config.persistentBehavior === "none") ||
            (typeof config.persistentBehavior === "object" &&
                !!id &&
                config.persistentBehavior[id] === "none")));
};
EdgeSidebarBuilder.isFlexiblePersistentConfig = (config, id) => {
    return (!!config &&
        !!EdgeSidebarBuilder.isPersistentConfig(config) &&
        ((typeof config.persistentBehavior === "string" &&
            config.persistentBehavior === "flexible") ||
            (typeof config.persistentBehavior === "object" &&
                !!id &&
                config.persistentBehavior[id] === "flexible")));
};
EdgeSidebarBuilder.isCollapsibleConfig = (config) => {
    return ((EdgeSidebarBuilder.isPermanentConfig(config) ||
        EdgeSidebarBuilder.isPersistentConfig(config)) &&
        !!config?.collapsible);
};
EdgeSidebarBuilder.isPermanentConfig = (config) => {
    return config?.variant === "permanent";
};
EdgeSidebarBuilder.isTemporaryConfig = (config) => {
    return config?.variant === "temporary";
};
