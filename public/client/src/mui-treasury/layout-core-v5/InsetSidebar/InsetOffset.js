"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsetOffset = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Root_1 = require("../Root/Root");
const useScrollY_1 = require("../hooks/useScrollY");
const useScreen_1 = require("../hooks/useScreen");
const HeadersCompiler_1 = require("../MultiHeaders/HeadersCompiler");
const pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
const OffsetRoot = (0, styles_1.styled)("div", { name: "InsetSidebarOffset", slot: "Root" })(({ theme }) => ({
    transition: theme.transitions.create(["all"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short,
    }),
}));
const InsetOffset = ({ sidebar, }) => {
    const { builder } = (0, Root_1.useLayoutCtx)();
    const screen = (0, useScreen_1.useScreen)();
    const insetConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(sidebar?.config, screen);
    // @ts-ignore
    const { headerMagnetEnabled } = insetConfig ?? {};
    // dont't calculate scrollY if not magnet for performance
    const scrollY = (0, useScrollY_1.useScrollY)(!headerMagnetEnabled);
    const { totalHeight, diffHeight } = (0, HeadersCompiler_1.HeadersCompiler)([
        builder.header,
        builder.topHeader,
        builder.subheader,
    ]).getAllHeight();
    // header magnet feature
    const style = {};
    if (headerMagnetEnabled) {
        const maxOffset = diffHeight && screen ? (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(diffHeight, screen) : 0;
        style.marginTop = `max(-${scrollY ?? 0}px, calc(-1 * ${maxOffset}))`;
    }
    if (insetConfig?.position !== "fixed") {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(OffsetRoot, { sx: {
            display: sidebar?.getSxDisplay("initial"),
            height: totalHeight,
        }, style: style }));
};
exports.InsetOffset = InsetOffset;
