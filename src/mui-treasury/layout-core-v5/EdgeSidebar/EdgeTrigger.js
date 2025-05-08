"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeTrigger = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var useEdgeSidebar_1 = require("./useEdgeSidebar");
var EdgeTriggerRoot = (0, styles_1.styled)("div", { name: "EdgeTrigger" })({});
var EdgeTrigger = function (_a) {
    var _b;
    var target = _a.target, _c = _a.display, display = _c === void 0 ? "inline-flex" : _c, children = _a.children, props = tslib_1.__rest(_a, ["target", "display", "children"]);
    var anchor = target.anchor, field = target.field;
    var _d = (0, useEdgeSidebar_1.useEdgeSidebar)({ anchor: anchor }), sidebarId = _d.sidebarId, edgeSidebar = _d.edgeSidebar, state = tslib_1.__rest(_d, ["sidebarId", "edgeSidebar"]);
    var sxDisplay = edgeSidebar === null || edgeSidebar === void 0 ? void 0 : edgeSidebar.getEdgeTriggerSxDisplay({ display: display, field: field });
    var setState = function (val) { };
    if (field === "collapsed") {
        setState = function (val) { return state.setCollapsed(sidebarId, val); };
    }
    if (field === "open") {
        setState = function (val) { return state.setOpen(sidebarId, val); };
    }
    return ((0, jsx_runtime_1.jsx)(EdgeTriggerRoot, tslib_1.__assign({}, props, { sx: tslib_1.__assign({ display: sxDisplay }, props.sx), children: typeof children === "function" &&
            children((_b = state[field]) !== null && _b !== void 0 ? _b : false, setState) })));
};
exports.EdgeTrigger = EdgeTrigger;
