import { Responsive } from "./types";
export declare const toResponsiveCssValue: (value: Responsive<string | number>) => Partial<Record<Breakpoint, string>>;
export declare const toValidCssValue: (value: string | number) => string;
