import { Responsive } from "./types";
/**
 * use with `display` property
 */
export declare const flattenStrict: <T>(value: Responsive<T>) => any;
/**
 * use with other css key that is not `display` for the consumer to override
 */
export declare const flattenLoose: <T>(value: Responsive<T>) => any;
