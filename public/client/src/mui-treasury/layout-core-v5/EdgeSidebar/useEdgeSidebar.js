"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEdgeSidebar = void 0;
const Root_1 = require("../Root/Root");
const EdgeSidebar_1 = require("./EdgeSidebar");
const useEdgeSidebar = (options) => {
    const { anchor } = options ?? {};
    const sidebar = (0, EdgeSidebar_1.useLooseSidebarCtx)();
    const { state, builder, ...triggers } = (0, Root_1.useLayoutCtx)();
    if (!sidebar && !anchor) {
        throw new Error('Missing "anchor" property because this component is rendered outside of <EdgeSidebar />');
    }
    const sidebarAnchor = sidebar?.anchor ?? anchor;
    const sidebarId = sidebar
        ? sidebar.id
        : `${sidebarAnchor}EdgeSidebar`;
    const sidebarState = state[sidebarId];
    return {
        sidebarId,
        ...sidebarState,
        ...triggers,
        edgeSidebar: builder[sidebarId],
    };
};
exports.useEdgeSidebar = useEdgeSidebar;
