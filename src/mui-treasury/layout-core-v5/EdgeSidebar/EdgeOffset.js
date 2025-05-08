"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeOffset = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var Root_1 = require("../Root/Root");
var useScreen_1 = require("../hooks/useScreen");
var EdgeSidebarBuilder_1 = require("./EdgeSidebarBuilder");
var pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
var useScrollY_1 = require("../hooks/useScrollY");
var HeadersCompiler_1 = require("../MultiHeaders/HeadersCompiler");
var getEdgeOffsetSxProps_1 = require("./getEdgeOffsetSxProps");
var OffsetRoot = (0, styles_1.styled)("div", { name: "EdgeSidebarOffset", slot: "Root" })({});
var EdgeOffset = function (_a) {
    var sidebarId = _a.sidebarId;
    var builder = (0, Root_1.useLayoutCtx)().builder;
    var theme = (0, styles_1.useTheme)();
    var screen = (0, useScreen_1.useScreen)();
    var edgeSidebar = builder[sidebarId];
    var sidebarConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(edgeSidebar === null || edgeSidebar === void 0 ? void 0 : edgeSidebar.config, screen);
    var headerMagnetEnabled = (EdgeSidebarBuilder_1.EdgeSidebarBuilder.isPermanentConfig(sidebarConfig) ||
        EdgeSidebarBuilder_1.EdgeSidebarBuilder.isPersistentConfig(sidebarConfig)) &&
        (sidebarConfig === null || sidebarConfig === void 0 ? void 0 : sidebarConfig.headerMagnetEnabled);
    // dont't calculate scrollY if not magnet for performance
    var scrollY = (0, useScrollY_1.useScrollY)(!headerMagnetEnabled);
    var _b = (0, HeadersCompiler_1.HeadersCompiler)([
        builder.header,
        builder.topHeader,
        builder.subheader,
    ]).getClippedHeight(sidebarId), totalHeight = _b.totalHeight, diffHeight = _b.diffHeight;
    // header magnet geature
    var style = {};
    if (headerMagnetEnabled) {
        var maxOffset = diffHeight && screen ? (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(diffHeight, screen) : 0;
        style.marginTop = "max(-".concat(scrollY !== null && scrollY !== void 0 ? scrollY : 0, "px, calc(-1 * ").concat(maxOffset, "))");
    }
    // header offset
    var sxProps = (0, getEdgeOffsetSxProps_1.getEdgeOffsetSxProps)(edgeSidebar, totalHeight);
    return ((0, jsx_runtime_1.jsx)(OffsetRoot, { className: "EdgeHeaderOffset", sx: tslib_1.__assign(tslib_1.__assign({}, sxProps), { transition: theme.transitions.create(["all"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.short,
            }) }), style: style }));
};
exports.EdgeOffset = EdgeOffset;
