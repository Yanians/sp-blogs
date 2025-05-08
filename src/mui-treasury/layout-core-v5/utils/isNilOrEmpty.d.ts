type Empty = "";
export declare const isNilOrEmpty: <T>(value: T | Empty | null | undefined) => value is Empty | null | undefined;
export declare const isNotNilOrEmpty: (value: any) => boolean;
export {};
