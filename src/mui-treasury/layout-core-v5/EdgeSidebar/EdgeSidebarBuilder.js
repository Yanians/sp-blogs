"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeSidebarBuilder = void 0;
var tslib_1 = require("tslib");
var ResponsiveBuilder_1 = require("../shared/ResponsiveBuilder");
var combineBreakpoints_1 = require("../utils/combineBreakpoints");
var constant_1 = require("../utils/constant");
var pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
var EdgeSidebarBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(EdgeSidebarBuilder, _super);
    function EdgeSidebarBuilder(params) {
        var _this = _super.call(this, params) || this;
        _this.effectedBy = {};
        _this.getFinalWidth = function (config) {
            var _a, _b;
            return (config === null || config === void 0 ? void 0 : config.collapsible) && ((_a = _this.state) === null || _a === void 0 ? void 0 : _a.collapsed)
                ? (_b = config.collapsedWidth) !== null && _b !== void 0 ? _b : config.width
                : config === null || config === void 0 ? void 0 : config.width;
        };
        _this.autoCollapse = params.autoCollapse;
        return _this;
    }
    EdgeSidebarBuilder.prototype.setState = function (state) {
        this.state = state;
    };
    EdgeSidebarBuilder.prototype.isFlexiblePersistent = function (breakpoint, id) {
        var config = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(this.config, breakpoint);
        return EdgeSidebarBuilder.isFlexiblePersistentConfig(config, id);
    };
    EdgeSidebarBuilder.prototype.getOccupiedSpace = function (id) {
        var _this = this;
        return this.generateSxWithHidden({
            hiddenValue: 0,
            assignValue: function (breakpointConfig, _, lastResultVal) {
                var _a;
                if (EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)) {
                    if (lastResultVal !== undefined) {
                        return 0;
                    }
                    return undefined;
                    // do nothing for xs because temporary variant will be modal
                }
                if (EdgeSidebarBuilder.isPersistentConfig(breakpointConfig)) {
                    if (((_a = _this.state) === null || _a === void 0 ? void 0 : _a.open) &&
                        !EdgeSidebarBuilder.isNonePersistentConfig(breakpointConfig, id)) {
                        return _this.getFinalWidth(breakpointConfig);
                    }
                    else {
                        return 0;
                    }
                }
                if (EdgeSidebarBuilder.isPermanentConfig(breakpointConfig)) {
                    return _this.getFinalWidth(breakpointConfig);
                }
            },
        });
    };
    EdgeSidebarBuilder.prototype.getZIndex = function (theme) {
        if (theme === void 0) { theme = constant_1.DEFAULT_THEME; }
        var result = {};
        if (!this.effectedBy.header)
            return {};
        var breakpoints = (0, combineBreakpoints_1.combineBreakpoints)(this.effectedBy.header.config, this.config);
        for (var _i = 0, breakpoints_1 = breakpoints; _i < breakpoints_1.length; _i++) {
            var key = breakpoints_1[_i];
            var bp = key;
            if (this.id) {
                var isClipped = this.effectedBy.header.isClipped(this.id, bp);
                var isAboveSomeEdgeSidebar = this.effectedBy.header.isAboveSomeEdgeSidebar(bp);
                result[bp] =
                    theme.zIndex.drawer + (isAboveSomeEdgeSidebar && !isClipped ? 20 : 0);
            }
            else {
                console.warn("Cannot find EdgeSidebar id. This might be an internal bug, please open an issue in github.");
            }
        }
        return result;
    };
    EdgeSidebarBuilder.prototype.getWidth = function () {
        var _this = this;
        return this.generateSx(function (breakpointConfig, bp) {
            var _a;
            return EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)
                ? (_a = _this.config[bp]) === null || _a === void 0 ? void 0 : _a.width
                : _this.getFinalWidth(breakpointConfig);
        });
    };
    EdgeSidebarBuilder.prototype.getDrawerVariant = function () {
        return this.generateSx(function (config) { return config.variant; });
    };
    EdgeSidebarBuilder.prototype.getSxProps = function (theme) {
        if (theme === void 0) { theme = constant_1.DEFAULT_THEME; }
        var sxDisplay = this.getSxDisplay("flex");
        var displayKeys = Object.keys(sxDisplay);
        var shouldAttachDisplay = displayKeys.length > 1 ||
            (displayKeys.length === 1 && displayKeys[0] !== "xs");
        return tslib_1.__assign({ width: this.getWidth(), zIndex: this.getZIndex(theme) }, (shouldAttachDisplay && { display: sxDisplay }));
    };
    EdgeSidebarBuilder.prototype.getEdgeTriggerSxDisplay = function (options) {
        var field = options.field, _a = options.display, display = _a === void 0 ? "inline-flex" : _a;
        return this.generateSxWithHidden({
            strict: true,
            hiddenValue: "none",
            assignValue: function (config) {
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
    };
    EdgeSidebarBuilder.isPersistentConfig = function (config) {
        return (config === null || config === void 0 ? void 0 : config.variant) === "persistent";
    };
    EdgeSidebarBuilder.isNonePersistentConfig = function (config, id) {
        return (!!config &&
            !!EdgeSidebarBuilder.isPersistentConfig(config) &&
            ((typeof config.persistentBehavior === "string" &&
                config.persistentBehavior === "none") ||
                (typeof config.persistentBehavior === "object" &&
                    !!id &&
                    config.persistentBehavior[id] === "none")));
    };
    EdgeSidebarBuilder.isFlexiblePersistentConfig = function (config, id) {
        return (!!config &&
            !!EdgeSidebarBuilder.isPersistentConfig(config) &&
            ((typeof config.persistentBehavior === "string" &&
                config.persistentBehavior === "flexible") ||
                (typeof config.persistentBehavior === "object" &&
                    !!id &&
                    config.persistentBehavior[id] === "flexible")));
    };
    EdgeSidebarBuilder.isCollapsibleConfig = function (config) {
        return ((EdgeSidebarBuilder.isPermanentConfig(config) ||
            EdgeSidebarBuilder.isPersistentConfig(config)) &&
            !!(config === null || config === void 0 ? void 0 : config.collapsible));
    };
    EdgeSidebarBuilder.isPermanentConfig = function (config) {
        return (config === null || config === void 0 ? void 0 : config.variant) === "permanent";
    };
    EdgeSidebarBuilder.isTemporaryConfig = function (config) {
        return (config === null || config === void 0 ? void 0 : config.variant) === "temporary";
    };
    return EdgeSidebarBuilder;
}(ResponsiveBuilder_1.ResponsiveBuilder));
exports.EdgeSidebarBuilder = EdgeSidebarBuilder;
