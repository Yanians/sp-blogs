"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Root = exports.LayoutConsumer = exports.useLayoutCtx = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importDefault(require("react"));
const EdgeSidebarBuilder_1 = require("../EdgeSidebar/EdgeSidebarBuilder");
const HeaderBuilder_1 = require("../Header/HeaderBuilder");
const InsetSidebarBuilder_1 = require("../InsetSidebar/InsetSidebarBuilder");
const constant_1 = require("../utils/constant");
const LayoutContext = react_1.default.createContext(undefined);
LayoutContext.displayName = "LayoutContext";
const useLayoutCtx = () => {
    const ctx = react_1.default.useContext(LayoutContext);
    if (!ctx) {
        throw new Error("useLayoutCtx must be rendered under LayoutProvider");
    }
    return ctx;
};
exports.useLayoutCtx = useLayoutCtx;
exports.LayoutConsumer = LayoutContext.Consumer;
const INITIAL_EDGE_SIDEBAR_STATE = { open: false, collapsed: false };
const setUpEdgeSidebar = (builder) => {
    const autoGenInitialState = {
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
const injectStateToEdgeSidebar = (builder, state) => {
    if (builder.leftEdgeSidebar) {
        builder.leftEdgeSidebar.setState(state.leftEdgeSidebar ?? {});
    }
    if (builder.rightEdgeSidebar) {
        builder.rightEdgeSidebar.setState(state.rightEdgeSidebar ?? {});
    }
};
const Root = ({ initialState: controlledInitialState, scheme, children, }) => {
    if (!scheme) {
        throw new Error("Missing scheme! fixed by passing `scheme` to <Root scheme={scheme} />");
    }
    const builder = {};
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
    const autoGenInitialState = setUpEdgeSidebar(builder);
    const [leftState, setLeftState] = react_1.default.useState({
        ...autoGenInitialState.leftEdgeSidebar,
        ...controlledInitialState?.leftEdgeSidebar,
    });
    const [rightState, setRightState] = react_1.default.useState({
        ...autoGenInitialState.rightEdgeSidebar,
        ...controlledInitialState?.rightEdgeSidebar,
    });
    const setOpen = (id, value) => {
        function setter(state) {
            return state.open === value ? state : { ...state, open: value };
        }
        if (id === constant_1.LEFT_EDGE_SIDEBAR_ID) {
            setLeftState(setter);
        }
        if (id === constant_1.RIGHT_EDGE_SIDEBAR_ID) {
            setRightState(setter);
        }
    };
    const setCollapsed = (id, value) => {
        function setter(state) {
            return state.collapsed === value ? state : { ...state, collapsed: value };
        }
        if (id === constant_1.LEFT_EDGE_SIDEBAR_ID) {
            setLeftState(setter);
        }
        if (id === constant_1.RIGHT_EDGE_SIDEBAR_ID) {
            setRightState(setter);
        }
    };
    const toggleLeftSidebarOpen = () => setLeftState((state) => ({ ...state, open: !state.open }));
    const toggleLeftSidebarCollapsed = () => setLeftState((state) => ({ ...state, collapsed: !state.collapsed }));
    const toggleRightSidebarOpen = () => setRightState((state) => ({ ...state, open: !state.open }));
    const toggleRightSidebarCollapsed = () => setRightState((state) => ({ ...state, collapsed: !state.collapsed }));
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
    const ctx = {
        state: { leftEdgeSidebar: leftState, rightEdgeSidebar: rightState },
        builder,
        setOpen,
        setCollapsed,
        toggleLeftSidebarOpen,
        toggleLeftSidebarCollapsed,
        toggleRightSidebarOpen,
        toggleRightSidebarCollapsed,
    };
    return ((0, jsx_runtime_1.jsx)(LayoutContext.Provider, { value: ctx, children: typeof children === "function" ? children(ctx) : children }));
};
exports.Root = Root;
