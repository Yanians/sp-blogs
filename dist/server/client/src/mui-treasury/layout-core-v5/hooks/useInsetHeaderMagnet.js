"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInsetHeaderMagnet = void 0;
const useScreen_1 = require("./useScreen");
const Root_1 = require("../Root/Root");
const useScrollY_1 = require("./useScrollY");
const pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
const HeadersCompiler_1 = require("../MultiHeaders/HeadersCompiler");
// todo write test
const useInsetHeaderMagnet = (disabled) => {
    // this hook will run only for <InsetSidebar position="fixed" />
    const { builder } = (0, Root_1.useLayoutCtx)();
    const screen = (0, useScreen_1.useScreen)();
    // dont't calculate scrollY if not magnet for performance
    const scrollY = (0, useScrollY_1.useScrollY)(disabled);
    if (disabled)
        return { marginTop: "" };
    const offset = (0, HeadersCompiler_1.HeadersCompiler)([
        builder.header,
        builder.topHeader,
        builder.subheader,
    ]).getAllHeight().diffHeight;
    const maxOffset = offset && screen ? (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(offset, screen) : 0;
    return {
        marginTop: `max(-${scrollY ?? 0}px, calc(-1 * ${maxOffset}))`,
    }; // inline style
};
exports.useInsetHeaderMagnet = useInsetHeaderMagnet;
