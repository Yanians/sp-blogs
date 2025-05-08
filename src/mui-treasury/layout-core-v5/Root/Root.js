"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Root = exports.LayoutConsumer = exports.useLayoutCtx = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var EdgeSidebarBuilder_1 = require("../EdgeSidebar/EdgeSidebarBuilder");
var HeaderBuilder_1 = require("../Header/HeaderBuilder");
var InsetSidebarBuilder_1 = require("../InsetSidebar/InsetSidebarBuilder");
var constant_1 = require("../utils/constant");
var LayoutContext = react_1.default.createContext(undefined);
LayoutContext.displayName = "LayoutContext";
var useLayoutCtx = function () {
    var ctx = react_1.default.useContext(LayoutContext);
    if (!ctx) {
        throw new Error("useLayoutCtx must be rendered under LayoutProvider");
    }
    return ctx;
};
exports.useLayoutCtx = useLayoutCtx;
exports.LayoutConsumer = LayoutContext.Consumer;
var INITIAL_EDGE_SIDEBAR_STATE = { open: false, collapsed: false };
var setUpEdgeSidebar = function (builder) {
    var autoGenInitialState = {
        leftEdgeSidebar: {},
        rightEdgeSidebar: {},
    };
    if (builder.leftEdgeSidebar) {
        builder.leftEdgeSidebar.id = constant_1.LEFT_EDGE_SIDEBAR_ID;
        autoGenInitialState.leftEdgeSidebar = INITIAL_EDGE_SIDEBAR_STATE;
    }
    if (builder.rightEdgeSidebar) {
        builder.rightEdgeSidebar.id = constant_1.RIGHT_EDGE_SIDEBAR_ID;
        autoGenInitialState.rightEdgeSidebar = INITIAL_EDGE_SIDEBAR_STATE;
    }
    return autoGenInitialState;
};
var injectStateToEdgeSidebar = function (builder, state) {
    var _a, _b;
    if (builder.leftEdgeSidebar) {
        builder.leftEdgeSidebar.setState((_a = state.leftEdgeSidebar) !== null && _a !== void 0 ? _a : {});
    }
    if (builder.rightEdgeSidebar) {
        builder.rightEdgeSidebar.setState((_b = state.rightEdgeSidebar) !== null && _b !== void 0 ? _b : {});
    }
};
var Root = function (_a) {
    var controlledInitialState = _a.initialState, scheme = _a.scheme, children = _a.children;
    if (!scheme) {
        throw new Error("Missing scheme! fixed by passing `scheme` to <Root scheme={scheme} />");
    }
    var builder = {};
    if (scheme.header)
        builder.header = new HeaderBuilder_1.HeaderBuilder(scheme.header);
    if (scheme.topHeader)
        builder.topHeader = new HeaderBuilder_1.HeaderBuilder(scheme.topHeader);
    if (scheme.subheader)
        builder.subheader = new HeaderBuilder_1.HeaderBuilder(scheme.subheader);
    if (scheme.leftEdgeSidebar)
        builder.leftEdgeSidebar = new EdgeSidebarBuilder_1.EdgeSidebarBuilder(scheme.leftEdgeSidebar);
    if (scheme.rightEdgeSidebar)
        builder.rightEdgeSidebar = new EdgeSidebarBuilder_1.EdgeSidebarBuilder(scheme.rightEdgeSidebar);
    if (scheme.rightInsetSidebar)
        builder.rightInsetSidebar = new InsetSidebarBuilder_1.InsetSidebarBuilder(scheme.rightInsetSidebar);
    if (scheme.leftInsetSidebar)
        builder.leftInsetSidebar = new InsetSidebarBuilder_1.InsetSidebarBuilder(scheme.leftInsetSidebar);
    var autoGenInitialState = setUpEdgeSidebar(builder);
    var _b = react_1.default.useState(tslib_1.__assign(tslib_1.__assign({}, autoGenInitialState.leftEdgeSidebar), controlledInitialState === null || controlledInitialState === void 0 ? void 0 : controlledInitialState.leftEdgeSidebar)), leftState = _b[0], setLeftState = _b[1];
    var _c = react_1.default.useState(tslib_1.__assign(tslib_1.__assign({}, autoGenInitialState.rightEdgeSidebar), controlledInitialState === null || controlledInitialState === void 0 ? void 0 : controlledInitialState.rightEdgeSidebar)), rightState = _c[0], setRightState = _c[1];
    var setOpen = function (id, value) {
        function setter(state) {
            return state.open === value ? state : tslib_1.__assign(tslib_1.__assign({}, state), { open: value });
        }
        if (id === constant_1.LEFT_EDGE_SIDEBAR_ID) {
            setLeftState(setter);
        }
        if (id === constant_1.RIGHT_EDGE_SIDEBAR_ID) {
            setRightState(setter);
        }
    };
    var setCollapsed = function (id, value) {
        function setter(state) {
            return state.collapsed === value ? state : tslib_1.__assign(tslib_1.__assign({}, state), { collapsed: value });
        }
        if (id === constant_1.LEFT_EDGE_SIDEBAR_ID) {
            setLeftState(setter);
        }
        if (id === constant_1.RIGHT_EDGE_SIDEBAR_ID) {
            setRightState(setter);
        }
    };
    var toggleLeftSidebarOpen = function () {
        return setLeftState(function (state) { return (tslib_1.__assign(tslib_1.__assign({}, state), { open: !state.open })); });
    };
    var toggleLeftSidebarCollapsed = function () {
        return setLeftState(function (state) { return (tslib_1.__assign(tslib_1.__assign({}, state), { collapsed: !state.collapsed })); });
    };
    var toggleRightSidebarOpen = function () {
        return setRightState(function (state) { return (tslib_1.__assign(tslib_1.__assign({}, state), { open: !state.open })); });
    };
    var toggleRightSidebarCollapsed = function () {
        return setRightState(function (state) { return (tslib_1.__assign(tslib_1.__assign({}, state), { collapsed: !state.collapsed })); });
    };
    injectStateToEdgeSidebar(builder, {
        leftEdgeSidebar: leftState,
        rightEdgeSidebar: rightState,
    });
    // assign Effect
    if (builder.header) {
        builder.header.effectedBy = {
            leftEdgeSidebar: builder.leftEdgeSidebar,
            rightEdgeSidebar: builder.rightEdgeSidebar,
        };
    }
    if (builder.topHeader) {
        builder.topHeader.effectedBy = {
            leftEdgeSidebar: builder.leftEdgeSidebar,
            rightEdgeSidebar: builder.rightEdgeSidebar,
        };
    }
    if (builder.subheader) {
        builder.subheader.effectedBy = {
            leftEdgeSidebar: builder.leftEdgeSidebar,
            rightEdgeSidebar: builder.rightEdgeSidebar,
        };
    }
    if (builder.leftInsetSidebar) {
        builder.leftInsetSidebar.anchor = "left";
        builder.leftInsetSidebar.effectedBy = {
            header: builder.header,
        };
    }
    if (builder.rightInsetSidebar) {
        builder.rightInsetSidebar.anchor = "right";
        builder.rightInsetSidebar.effectedBy = {
            header: builder.header,
        };
    }
    var ctx = {
        state: { leftEdgeSidebar: leftState, rightEdgeSidebar: rightState },
        builder: builder,
        setOpen: setOpen,
        setCollapsed: setCollapsed,
        toggleLeftSidebarOpen: toggleLeftSidebarOpen,
        toggleLeftSidebarCollapsed: toggleLeftSidebarCollapsed,
        toggleRightSidebarOpen: toggleRightSidebarOpen,
        toggleRightSidebarCollapsed: toggleRightSidebarCollapsed,
    };
    return ((0, jsx_runtime_1.jsx)(LayoutContext.Provider, { value: ctx, children: typeof children === "function" ? children(ctx) : children }));
};
exports.Root = Root;
