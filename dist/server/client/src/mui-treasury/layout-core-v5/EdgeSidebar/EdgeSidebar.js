"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeSidebar = exports.useLooseSidebarCtx = exports.useSidebarCtx = exports.SidebarContext = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importStar(require("react"));
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const styles_1 = require("@mui/material/styles");
const Drawer_1 = tslib_1.__importStar(require("@mui/material/Drawer"));
const Root_1 = require("../Root/Root");
const useScreen_1 = require("../hooks/useScreen");
const pickNearestBreakpoint_1 = require("../utils/pickNearestBreakpoint");
const useSidebarAutoCollapse_1 = require("../hooks/useSidebarAutoCollapse");
const constant_1 = require("../utils/constant");
const EdgeOffset_1 = require("./EdgeOffset");
const WindowContext_1 = require("../WindowContext");
exports.SidebarContext = react_1.default.createContext(undefined);
const useSidebarCtx = () => {
    const ctx = (0, react_1.useContext)(exports.SidebarContext);
    if (!ctx) {
        throw new Error("useSidebarCtx must be called under <EdgeSidebar />");
    }
    return ctx;
};
exports.useSidebarCtx = useSidebarCtx;
const useLooseSidebarCtx = () => {
    return (0, react_1.useContext)(exports.SidebarContext);
};
exports.useLooseSidebarCtx = useLooseSidebarCtx;
const hasAutoExpanded = (config
// @ts-ignore
) => {
    return (!!config &&
        (typeof config.autoExpanded === "boolean" ||
            typeof config.uncollapsedOnHover ===
                "boolean"));
};
const EdgeSidebarRoot = (0, styles_1.styled)(Drawer_1.default, {
    name: "AppEdgeSidebar",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
})(({ ownerState }) => ({
    ...((ownerState.entered ||
        ownerState.variant === "permanent" ||
        ownerState.variant === "persistent") && {
        [`& .${Drawer_1.drawerClasses.paper}`]: {
            transition: `${constant_1.CSS_TRANSITION} !important`,
            transitionProperty: "all !important",
        },
    }),
}));
const EdgeSidebar = ({ children, ...inProps }) => {
    const props = (0, styles_1.useThemeProps)({
        props: inProps,
        name: "AppEdgeSidebar",
    });
    const { anchor } = props;
    if (!anchor) {
        throw new Error('Missing prop "anchor" on EdgeSidebar component');
    }
    const screen = (0, useScreen_1.useScreen)();
    const { iDocument } = (0, WindowContext_1.useWindowCtx)();
    const ctx = (0, Root_1.useLayoutCtx)();
    const { builder, state: layoutState, setOpen } = ctx;
    const sidebarId = `${anchor}EdgeSidebar`;
    const edgeSidebar = builder[sidebarId];
    const sidebarState = layoutState[sidebarId];
    const config = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(edgeSidebar?.config, screen);
    (0, useSidebarAutoCollapse_1.useSidebarAutoCollapse)(sidebarId);
    // auto-expanded feature
    const [entered, setEntered] = react_1.default.useState(false);
    const [expanded, setExpanded] = react_1.default.useState(false);
    const isMouseOverSidebar = react_1.default.useRef(false);
    const isAutoExpanded = hasAutoExpanded(config) &&
        (config.autoExpanded || config.uncollapsedOnHover);
    const onMouseEnter = (event) => {
        props.PaperProps?.onMouseEnter?.(event);
        if (sidebarState?.collapsed && isAutoExpanded) {
            isMouseOverSidebar.current = true;
            setTimeout(() => {
                if (isMouseOverSidebar.current) {
                    setExpanded(true);
                }
            }, constant_1.EDGE_SIDEBAR_EXPAND_DELAY);
        }
    };
    const onMouseLeave = (event) => {
        props.PaperProps?.onMouseLeave?.(event);
        isMouseOverSidebar.current = false;
        setExpanded(false);
    };
    const onEntered = (...args) => {
        // @ts-ignore
        props.SlideProps?.onEntered?.(...args);
        setEntered(true);
    };
    const onExit = (...args) => {
        // @ts-ignore
        props.SlideProps?.onExit?.(...args);
        setEntered(false);
    };
    react_1.default.useEffect(() => {
        if (!sidebarState?.collapsed) {
            setExpanded(false);
        }
    }, [sidebarState?.collapsed]);
    const sidebarValue = react_1.default.useMemo(() => ({ id: sidebarId, anchor, expanded, setExpanded }), [sidebarId, anchor, expanded, setExpanded]);
    if (!screen)
        return null;
    if (!edgeSidebar || !edgeSidebar.id)
        return null;
    const responsiveVariant = edgeSidebar.getDrawerVariant();
    const variant = (0, pickNearestBreakpoint_1.pickNearestBreakpoint)(responsiveVariant, screen);
    if (!variant)
        return null;
    const ownerState = { ...props, entered, variant };
    return ((0, jsx_runtime_1.jsx)(exports.SidebarContext.Provider, { value: sidebarValue, children: (0, jsx_runtime_1.jsxs)(EdgeSidebarRoot, { ...props, open: layoutState[sidebarId]?.open, anchor: anchor, variant: variant, ownerState: ownerState, onClose: (...args) => {
                props.onClose?.(...args);
                setOpen(sidebarId, false);
            }, SlideProps: {
                ...props.SlideProps,
                onEntered,
                onExit,
            }, ModalProps: {
                ...props.ModalProps,
                container: iDocument?.body ?? props.ModalProps?.container,
            }, PaperProps: {
                ...props.PaperProps,
                className: (0, clsx_1.default)(expanded && "AppEdgeSidebar-paperExpanded", props.PaperProps?.className),
                style: {
                    ...props.PaperProps?.style,
                    ...(expanded && { width: config?.width, overflow: "visible" }),
                },
                onMouseEnter,
                onMouseLeave,
                sx: {
                    ...props.PaperProps?.sx,
                    ...builder[sidebarId]?.getSxProps(),
                },
            }, children: [variant && variant !== "temporary" && ((0, jsx_runtime_1.jsx)(EdgeOffset_1.EdgeOffset, { sidebarId: sidebarId })), typeof children === "function"
                    ? children({
                        ...ctx,
                        expanded,
                        entered,
                        isMouseOverSidebar: isMouseOverSidebar.current,
                    })
                    : children] }) }));
};
exports.EdgeSidebar = EdgeSidebar;
