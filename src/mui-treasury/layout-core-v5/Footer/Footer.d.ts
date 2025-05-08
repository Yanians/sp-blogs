import React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { PropsWithFunctionChildren } from "../Root/Root";
type Props = React.JSX.IntrinsicElements["footer"];
export type FooterClassKey = "root";
export interface FooterProps extends Props {
    sx?: SxProps<Theme>;
}
export declare const Footer: ({ children, ...props }: PropsWithFunctionChildren<FooterProps>) => import("react/jsx-runtime").JSX.Element;
export {};
