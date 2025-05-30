import React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { PropsWithFunctionChildren } from "../Root/Root";
type MainProps = React.JSX.IntrinsicElements["main"];
export type ContentClassKey = "root";
export interface ContentProps extends MainProps {
    sx?: SxProps<Theme>;
}
export declare const Content: ({ children, ...inProps }: PropsWithFunctionChildren<ContentProps>) => import("react/jsx-runtime").JSX.Element;
export {};
