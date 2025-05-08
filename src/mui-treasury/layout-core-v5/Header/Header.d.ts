import React from "react";
import { AppBarProps } from "@mui/material/AppBar";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { PropsWithFunctionChildren } from "../Root/Root";
type DivProps = React.JSX.IntrinsicElements["div"];
export interface TopHeaderProps extends DivProps {
    sx?: SxProps<Theme>;
}
export type TopHeaderClassKey = "root";
export declare const TopHeader: ({ children, ...inProps }: PropsWithFunctionChildren<TopHeaderProps>) => import("react/jsx-runtime").JSX.Element;
export interface SubheaderProps extends DivProps {
    sx?: SxProps<Theme>;
}
export type SubheaderClassKey = "root";
export declare const Subheader: ({ children, ...inProps }: PropsWithFunctionChildren<SubheaderProps>) => import("react/jsx-runtime").JSX.Element;
export interface HeaderProps extends AppBarProps {
}
export type HeaderClassKey = "root";
export declare const Header: ({ children, ...inProps }: PropsWithFunctionChildren<HeaderProps>) => import("react/jsx-runtime").JSX.Element;
export {};
