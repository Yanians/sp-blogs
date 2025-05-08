export type WidthStyle = {
    width: string | number;
};
export interface IWidth {
    value: number | string | undefined;
    getStyle: () => WidthStyle;
    combine: (w: IWidth) => IWidth;
}
export declare const getCssWidth: (externalGap?: string | number) => string;
export declare const sumExternalGap: (a?: string | number | null, b?: string | number | null) => string | number | undefined;
export declare const createWidthInterface: (externalGap?: string | number) => IWidth;
