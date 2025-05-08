import { Breakpoint } from "@mui/material";
import { Responsive } from "./types";
type Result = any;
/**
 *
 *
 * @param getValue the value the result object (undefined will be remove from result)
 * @param options
 *  - breakpoints: list of Breakpoints to be iterate
 *  - initialValue: if provided, will be used to compare if the value from getValue should be added or not
 * @returns object that can be passed to <MuiComponent sx={...} />
 */
export declare const createSxResult: <T extends Result = Result>(getValue: (bp: Breakpoint, lastValue: T | undefined) => T | undefined, options?: {
    breakpoints?: Breakpoint[];
    initialValue?: T;
}) => Responsive<NonNullable<T>>;
export {};
