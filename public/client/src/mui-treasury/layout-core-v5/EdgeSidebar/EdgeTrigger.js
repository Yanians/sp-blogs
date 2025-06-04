"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeTrigger = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const useEdgeSidebar_1 = require("./useEdgeSidebar");
const EdgeTriggerRoot = (0, styles_1.styled)("div", { name: "EdgeTrigger" })({});
const EdgeTrigger = ({ target, display = "inline-flex", children, ...props }) => {
    const { anchor, field } = target;
    const { sidebarId, edgeSidebar, ...state } = (0, useEdgeSidebar_1.useEdgeSidebar)({ anchor });
    const sxDisplay = edgeSidebar?.getEdgeTriggerSxDisplay({ display, field });
    let setState = (val) => { };
    if (field === "collapsed") {
        setState = (val) => state.setCollapsed(sidebarId, val);
    }
    if (field === "open") {
        setState = (val) => state.setOpen(sidebarId, val);
    }
    return ((0, jsx_runtime_1.jsx)(EdgeTriggerRoot, { ...props, sx: { display: sxDisplay, ...props.sx }, children: typeof children === "function" &&
            children(state[field] ?? false, setState) }));
};
exports.EdgeTrigger = EdgeTrigger;
