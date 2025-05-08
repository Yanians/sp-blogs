import React from "react";
import { EdgeSidebarBuilder, EdgeSidebarSetupParams } from "../EdgeSidebar/EdgeSidebarBuilder";
import { HeaderBuilder, HeaderSetupParams } from "../Header/HeaderBuilder";
import { InsetSetupParams, InsetSidebarBuilder } from "../InsetSidebar/InsetSidebarBuilder";
import { EDGE_SIDEBAR_ID } from "../utils/constant";
type SidebarState = {
    collapsed?: boolean;
    open?: boolean;
};
type State = {
    leftEdgeSidebar?: SidebarState;
    rightEdgeSidebar?: SidebarState;
};
type Builder = {
    header?: HeaderBuilder;
    topHeader?: HeaderBuilder;
    subheader?: HeaderBuilder;
    leftEdgeSidebar?: EdgeSidebarBuilder;
    rightEdgeSidebar?: EdgeSidebarBuilder;
    leftInsetSidebar?: InsetSidebarBuilder;
    rightInsetSidebar?: InsetSidebarBuilder;
};
export type ContextValue = {
    state: State;
    builder: Builder;
    setOpen: (id: EDGE_SIDEBAR_ID, value: boolean) => void;
    toggleLeftSidebarOpen: () => void;
    toggleLeftSidebarCollapsed: () => void;
    setCollapsed: (id: EDGE_SIDEBAR_ID, value: boolean) => void;
    toggleRightSidebarOpen: () => void;
    toggleRightSidebarCollapsed: () => void;
};
export type PropsWithFunctionChildren<Props = any, Params = ContextValue> = Omit<Props, "children"> & {
    children?: React.ReactNode | ((ctx: Params) => React.ReactNode);
};
export declare const useLayoutCtx: () => ContextValue;
export declare const LayoutConsumer: React.Consumer<ContextValue | undefined>;
export type Scheme = {
    header?: HeaderSetupParams;
    topHeader?: HeaderSetupParams;
    subheader?: HeaderSetupParams;
    leftEdgeSidebar?: EdgeSidebarSetupParams;
    rightEdgeSidebar?: EdgeSidebarSetupParams;
    leftInsetSidebar?: InsetSetupParams;
    rightInsetSidebar?: InsetSetupParams;
};
export type RootProps = {
    initialState?: State;
    scheme: Scheme;
};
export declare const Root: ({ initialState: controlledInitialState, scheme, children, }: PropsWithFunctionChildren<RootProps>) => import("react/jsx-runtime").JSX.Element;
export {};
