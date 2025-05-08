"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsetOffset = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var Root_1 = require("../Root/Root");
var useScrollY_1 = require("../hooks/useScrollY");
var useScreen_1 = require("../hooks/useScreen");
var HeadersCompiler_1 = require("../MultiHeaders/HeadersCompiler");
var pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
var OffsetRoot = (0, styles_1.styled)("div", { name: "InsetSidebarOffset", slot: "Root" })(function (_a) {
    var theme = _a.theme;
    return ({
        transition: theme.transitions.create(["all"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short,
        }),
    });
});
var InsetOffset = function (_a) {
    var sidebar = _a.sidebar;
    var builder = (0, Root_1.useLayoutCtx)().builder;
    var screen = (0, useScreen_1.useScreen)();
    var insetConfig = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(sidebar === null || sidebar === void 0 ? void 0 : sidebar.config, screen);
    // @ts-ignore
    var headerMagnetEnabled = (insetConfig !== null && insetConfig !== void 0 ? insetConfig : {}).headerMagnetEnabled;
    // dont't calculate scrollY if not magnet for performance
    var scrollY = (0, useScrollY_1.useScrollY)(!headerMagnetEnabled);
    var _b = (0, HeadersCompiler_1.HeadersCompiler)([
        builder.header,
        builder.topHeader,
        builder.subheader,
    ]).getAllHeight(), totalHeight = _b.totalHeight, diffHeight = _b.diffHeight;
    // header magnet feature
    var style = {};
    if (headerMagnetEnabled) {
        var maxOffset = diffHeight && screen ? (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(diffHeight, screen) : 0;
        style.marginTop = "max(-".concat(scrollY !== null && scrollY !== void 0 ? scrollY : 0, "px, calc(-1 * ").concat(maxOffset, "))");
    }
    if ((insetConfig === null || insetConfig === void 0 ? void 0 : insetConfig.position) !== "fixed") {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(OffsetRoot, { sx: {
            display: sidebar === null || sidebar === void 0 ? void 0 : sidebar.getSxDisplay("initial"),
            height: totalHeight,
        }, style: style }));
};
exports.InsetOffset = InsetOffset;
