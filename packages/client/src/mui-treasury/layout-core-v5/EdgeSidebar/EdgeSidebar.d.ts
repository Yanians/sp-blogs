import React from "react";
import { DrawerProps } from "@mui/material/Drawer";
import { PropsWithFunctionChildren, ContextValue } from "../Root/Root";
import { DrawerAnchor } from "./EdgeSidebarBuilder";
import { EDGE_SIDEBAR_ID } from "../utils/constant";
export type EdgeSidebarClassKey = "root" | "paperExpanded";
export interface EdgeSidebarProps extends Omit<DrawerProps, "anchor" | "variant"> {
    anchor: "left" | "right";
}
export declare const SidebarContext: React.Context<{
    id: EDGE_SIDEBAR_ID;
    anchor: DrawerAnchor;
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
} | undefined>;
export declare const useSidebarCtx: () => {
    id: EDGE_SIDEBAR_ID;
    anchor: DrawerAnchor;
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const useLooseSidebarCtx: () => {
    id: EDGE_SIDEBAR_ID;
    anchor: DrawerAnchor;
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
} | undefined;
export declare const EdgeSidebar: ({ children, ...inProps }: PropsWithFunctionChildren<EdgeSidebarProps, ContextValue & {
    expanded: boolean;
    entered: boolean;
    isMouseOverSidebar: boolean;
}>) => import("react/jsx-runtime").JSX.Element | null;
