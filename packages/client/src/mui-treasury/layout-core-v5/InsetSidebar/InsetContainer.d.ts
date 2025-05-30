import React from "react";
import { ContainerProps } from "@mui/material/Container";
export type DivProps = React.JSX.IntrinsicElements["div"];
export type InsetContainerProps = {
    leftSidebar?: React.ReactElement;
    rightSidebar?: React.ReactElement;
    children: React.ReactElement;
} & Omit<ContainerProps, "children">;
export declare const InsetContainer: ({ children, leftSidebar, rightSidebar, ...inProps }: InsetContainerProps) => import("react/jsx-runtime").JSX.Element;
