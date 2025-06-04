"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeOffset = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Root_1 = require("../Root/Root");
const useScreen_1 = require("../hooks/useScreen");
const EdgeSidebarBuilder_1 = require("./EdgeSidebarBuilder");
const pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
const useScrollY_1 = require("../hooks/useScrollY");
const HeadersCompiler_1 = require("../MultiHeaders/HeadersCompiler");
const getEdgeOffsetSxProps_1 = require("./getEdgeOffsetSxProps");
const OffsetRoot = (0, styles_1.styled)("div", { name: "EdgeSidebarOffset", slot: "Root" })({});
const EdgeOffset = ({ sidebarId }) => {
    const { builder } = (0, Root_1.useLayoutCtx)();
    const theme = (0, styles_1.useTheme)();
    const screen = (0, useScreen_1.useScreen)();
    const edgeSidebar = builder[sidebarId];
    const sidebarConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(edgeSidebar?.config, screen);
    const headerMagnetEnabled = (EdgeSidebarBuilder_1.EdgeSidebarBuilder.isPermanentConfig(sidebarConfig) ||
        EdgeSidebarBuilder_1.EdgeSidebarBuilder.isPersistentConfig(sidebarConfig)) &&
        sidebarConfig?.headerMagnetEnabled;
    // dont't calculate scrollY if not magnet for performance
    const scrollY = (0, useScrollY_1.useScrollY)(!headerMagnetEnabled);
    const { totalHeight, diffHeight } = (0, HeadersCompiler_1.HeadersCompiler)([
        builder.header,
        builder.topHeader,
        builder.subheader,
    ]).getClippedHeight(sidebarId);
    // header magnet geature
    const style = {};
    if (headerMagnetEnabled) {
        const maxOffset = diffHeight && screen ? (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(diffHeight, screen) : 0;
        style.marginTop = `max(-${scrollY ?? 0}px, calc(-1 * ${maxOffset}))`;
    }
    // header offset
    const sxProps = (0, getEdgeOffsetSxProps_1.getEdgeOffsetSxProps)(edgeSidebar, totalHeight);
    return ((0, jsx_runtime_1.jsx)(OffsetRoot, { className: "EdgeHeaderOffset", sx: {
            ...sxProps,
            transition: theme.transitions.create(["all"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.short,
            }),
        }, style: style }));
};
exports.EdgeOffset = EdgeOffset;
