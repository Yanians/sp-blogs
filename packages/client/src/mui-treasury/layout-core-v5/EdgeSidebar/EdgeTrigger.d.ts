import React, { ReactNode } from "react";
import { DrawerAnchor } from "./EdgeSidebarBuilder";
declare const EdgeTriggerRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React.ClassAttributes<HTMLDivElement> | keyof React.HTMLAttributes<HTMLDivElement>>, {}>;
export type EdgeTriggerProps = Omit<Parameters<typeof EdgeTriggerRoot>[0], "children"> & {
    target: {
        anchor?: DrawerAnchor;
        field: "open" | "collapsed";
    };
    display?: string;
    children?: (state: boolean, setState: (newState: boolean) => void) => ReactNode;
};
export declare const EdgeTrigger: ({ target, display, children, ...props }: EdgeTriggerProps) => import("react/jsx-runtime").JSX.Element;
export {};
