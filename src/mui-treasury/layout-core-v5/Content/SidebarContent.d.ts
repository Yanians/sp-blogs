import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
type Props = React.JSX.IntrinsicElements["div"];
export type SidebarContentClassKey = "root";
export interface SidebarContentProps extends Props {
    sx?: SxProps<Theme>;
}
export declare const SidebarContent: (props: SidebarContentProps) => import("react/jsx-runtime").JSX.Element;
export {};
