import { Breakpoint } from "@mui/system";
import { Responsive } from "../utils/types";
type Result = string | number | undefined;
export declare class ResponsiveBuilder<T> {
    readonly config: Responsive<T>;
    readonly hidden?: boolean | Breakpoint[];
    readonly breakpointKeys: Breakpoint[];
    constructor(params: {
        config: Responsive<T>;
        hidden?: boolean | Breakpoint[];
    });
    isHidden(breakpoint: Breakpoint): boolean;
    /**
     * use target as base breakpoints, the result will start from the minimum of target
     *          xs | sm | md | lg | xl
     *  target     | y  |    |  y |
     *   this   y  |    | y  |    |
     *  ===============================
     *  result     | y  | y  | y  |
     */
    mergeBreakpoints(target: Responsive<any> | Breakpoint[]): Breakpoint[];
    generateSxWithHidden<R extends Result = Result>(options: {
        assignValue: (breakpointConfig: T, bp: Breakpoint, lastResultVal: R | undefined) => R | undefined;
        hiddenValue?: R;
        /**
         * if true, will calculate from xs
         */
        strict?: boolean;
    }): Partial<Record<Breakpoint, R>>;
    generateSx<R extends any = Result>(getValue: (breakpointConfig: T, bp: Breakpoint) => R, initialValue?: R): Partial<Record<Breakpoint, NonNullable<R>>>;
    getSxDisplay(appearance: string): Partial<Record<Breakpoint, string>>;
}
export {};
