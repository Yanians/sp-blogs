import React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { PropsWithFunctionChildren } from "../Root/Root";
import { DrawerAnchor } from "./InsetSidebarBuilder";
type DivProps = React.JSX.IntrinsicElements["div"];
export type InsetSidebarClassKey = "root" | "body";
export interface InsetSidebarProps extends DivProps {
    anchor?: DrawerAnchor;
    RootProps?: DivProps;
    rootSx?: SxProps<Theme>;
    classes?: {
        root?: string;
        paper?: string;
    };
    sx?: SxProps<Theme>;
}
export declare const InsetSidebar: ({ anchor, children, classes, RootProps, rootSx, ...props }: PropsWithFunctionChildren<InsetSidebarProps>) => import("react/jsx-runtime").JSX.Element;
export {};
