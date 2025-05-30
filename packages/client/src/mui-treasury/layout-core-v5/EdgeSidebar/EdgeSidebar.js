"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeSidebar = exports.useLooseSidebarCtx = exports.useSidebarCtx = exports.SidebarContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importStar(require("react"));
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var styles_1 = require("@mui/material/styles");
var Drawer_1 = tslib_1.__importStar(require("@mui/material/Drawer"));
var Root_1 = require("../Root/Root");
var useScreen_1 = require("../hooks/useScreen");
var pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
var useSidebarAutoCollapse_1 = require("../hooks/useSidebarAutoCollapse");
var constant_1 = require("../utils/constant");
var EdgeOffset_1 = require("./EdgeOffset");
var WindowContext_1 = require("../WindowContext");
exports.SidebarContext = react_1.default.createContext(undefined);
var useSidebarCtx = function () {
    var ctx = (0, react_1.useContext)(exports.SidebarContext);
    if (!ctx) {
        throw new Error("useSidebarCtx must be called under <EdgeSidebar />");
    }
    return ctx;
};
exports.useSidebarCtx = useSidebarCtx;
var useLooseSidebarCtx = function () {
    return (0, react_1.useContext)(exports.SidebarContext);
};
exports.useLooseSidebarCtx = useLooseSidebarCtx;
var hasAutoExpanded = function (config
// @ts-ignore
) {
    return (!!config &&
        (typeof config.autoExpanded === "boolean" ||
            typeof config.uncollapsedOnHover ===
                "boolean"));
};
var EdgeSidebarRoot = (0, styles_1.styled)(Drawer_1.default, {
    name: "AppEdgeSidebar",
    slot: "Root",
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var ownerState = _a.ownerState;
    return (tslib_1.__assign({}, ((ownerState.entered ||
        ownerState.variant === "permanent" ||
        ownerState.variant === "persistent") && (_b = {},
        _b["& .".concat(Drawer_1.drawerClasses.paper)] = {
            transition: "".concat(constant_1.CSS_TRANSITION, " !important"),
            transitionProperty: "all !important",
        },
        _b))));
});
var EdgeSidebar = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var children = _a.children, inProps = tslib_1.__rest(_a, ["children"]);
    var props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppEdgeSidebar",
    });
    var anchor = props.anchor;
    if (!anchor) {
        throw new Error('Missing prop "anchor" on EdgeSidebar component');
    }
    var screen = (0, useScreen_1.useScreen)();
    var iDocument = (0, WindowContext_1.useWindowCtx)().iDocument;
    var ctx = (0, Root_1.useLayoutCtx)();
    var builder = ctx.builder, layoutState = ctx.state, setOpen = ctx.setOpen;
    var sidebarId = "".concat(anchor, "EdgeSidebar");
    var edgeSidebar = builder[sidebarId];
    var sidebarState = layoutState[sidebarId];
    var config = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(edgeSidebar === null || edgeSidebar === void 0 ? void 0 : edgeSidebar.config, screen);
    (0, useSidebarAutoCollapse_1.useSidebarAutoCollapse)(sidebarId);
    // auto-expanded feature
    var _j = react_1.default.useState(false), entered = _j[0], setEntered = _j[1];
    var _k = react_1.default.useState(false), expanded = _k[0], setExpanded = _k[1];
    var isMouseOverSidebar = react_1.default.useRef(false);
    var isAutoExpanded = hasAutoExpanded(config) &&
        (config.autoExpanded || config.uncollapsedOnHover);
    var onMouseEnter = function (event) {
        var _a, _b;
        (_b = (_a = props.PaperProps) === null || _a === void 0 ? void 0 : _a.onMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        if ((sidebarState === null || sidebarState === void 0 ? void 0 : sidebarState.collapsed) && isAutoExpanded) {
            isMouseOverSidebar.current = true;
            setTimeout(function () {
                if (isMouseOverSidebar.current) {
                    setExpanded(true);
                }
            }, constant_1.EDGE_SIDEBAR_EXPAND_DELAY);
        }
    };
    var onMouseLeave = function (event) {
        var _a, _b;
        (_b = (_a = props.PaperProps) === null || _a === void 0 ? void 0 : _a.onMouseLeave) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        isMouseOverSidebar.current = false;
        setExpanded(false);
    };
    var onEntered = function () {
        var _a, _b;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        (_b = (_a = props.SlideProps) === null || _a === void 0 ? void 0 : _a.onEntered) === null || _b === void 0 ? void 0 : _b.call.apply(_b, tslib_1.__spreadArray([_a], args, false));
        setEntered(true);
    };
    var onExit = function () {
        var _a, _b;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        (_b = (_a = props.SlideProps) === null || _a === void 0 ? void 0 : _a.onExit) === null || _b === void 0 ? void 0 : _b.call.apply(_b, tslib_1.__spreadArray([_a], args, false));
        setEntered(false);
    };
    react_1.default.useEffect(function () {
        if (!(sidebarState === null || sidebarState === void 0 ? void 0 : sidebarState.collapsed)) {
            setExpanded(false);
        }
    }, [sidebarState === null || sidebarState === void 0 ? void 0 : sidebarState.collapsed]);
    var sidebarValue = react_1.default.useMemo(function () { return ({ id: sidebarId, anchor: anchor, expanded: expanded, setExpanded: setExpanded }); }, [sidebarId, anchor, expanded, setExpanded]);
    if (!screen)
        return null;
    if (!edgeSidebar || !edgeSidebar.id)
        return null;
    var responsiveVariant = edgeSidebar.getDrawerVariant();
    var variant = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(responsiveVariant, screen);
    if (!variant)
        return null;
    var ownerState = tslib_1.__assign(tslib_1.__assign({}, props), { entered: entered, variant: variant });
    return ((0, jsx_runtime_1.jsx)(exports.SidebarContext.Provider, { value: sidebarValue, children: (0, jsx_runtime_1.jsxs)(EdgeSidebarRoot, tslib_1.__assign({}, props, { open: (_b = layoutState[sidebarId]) === null || _b === void 0 ? void 0 : _b.open, anchor: anchor, variant: variant, ownerState: ownerState, onClose: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call.apply(_a, tslib_1.__spreadArray([props], args, false));
                setOpen(sidebarId, false);
            }, SlideProps: tslib_1.__assign(tslib_1.__assign({}, props.SlideProps), { onEntered: onEntered, onExit: onExit }), ModalProps: tslib_1.__assign(tslib_1.__assign({}, props.ModalProps), { container: (_c = iDocument === null || iDocument === void 0 ? void 0 : iDocument.body) !== null && _c !== void 0 ? _c : (_d = props.ModalProps) === null || _d === void 0 ? void 0 : _d.container }), PaperProps: tslib_1.__assign(tslib_1.__assign({}, props.PaperProps), { className: (0, clsx_1.default)(expanded && "AppEdgeSidebar-paperExpanded", (_e = props.PaperProps) === null || _e === void 0 ? void 0 : _e.className), style: tslib_1.__assign(tslib_1.__assign({}, (_f = props.PaperProps) === null || _f === void 0 ? void 0 : _f.style), (expanded && { width: config === null || config === void 0 ? void 0 : config.width, overflow: "visible" })), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, sx: tslib_1.__assign(tslib_1.__assign({}, (_g = props.PaperProps) === null || _g === void 0 ? void 0 : _g.sx), (_h = builder[sidebarId]) === null || _h === void 0 ? void 0 : _h.getSxProps()) }), children: [variant && variant !== "temporary" && ((0, jsx_runtime_1.jsx)(EdgeOffset_1.EdgeOffset, { sidebarId: sidebarId })), typeof children === "function"
                    ? children(tslib_1.__assign(tslib_1.__assign({}, ctx), { expanded: expanded, entered: entered, isMouseOverSidebar: isMouseOverSidebar.current }))
                    : children] })) }));
};
exports.EdgeSidebar = EdgeSidebar;
