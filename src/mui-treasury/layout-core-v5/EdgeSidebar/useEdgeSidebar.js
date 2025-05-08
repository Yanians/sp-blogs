"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEdgeSidebar = void 0;
var tslib_1 = require("tslib");
var Root_1 = require("../Root/Root");
var EdgeSidebar_1 = require("./EdgeSidebar");
var useEdgeSidebar = function (options) {
    var _a;
    var anchor = (options !== null && options !== void 0 ? options : {}).anchor;
    var sidebar = (0, EdgeSidebar_1.useLooseSidebarCtx)();
    var _b = (0, Root_1.useLayoutCtx)(), state = _b.state, builder = _b.builder, triggers = tslib_1.__rest(_b, ["state", "builder"]);
    if (!sidebar && !anchor) {
        throw new Error('Missing "anchor" property because this component is rendered outside of <EdgeSidebar />');
    }
    var sidebarAnchor = (_a = sidebar === null || sidebar === void 0 ? void 0 : sidebar.anchor) !== null && _a !== void 0 ? _a : anchor;
    var sidebarId = sidebar
        ? sidebar.id
        : "".concat(sidebarAnchor, "EdgeSidebar");
    var sidebarState = state[sidebarId];
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ sidebarId: sidebarId }, sidebarState), triggers), { edgeSidebar: builder[sidebarId] });
};
exports.useEdgeSidebar = useEdgeSidebar;
