// import {
//     SxProps,
//     SystemProps,
//     Breakpoint,
//     BreakpointOverrides,
//   } from '@mui/system';

//   import { IfEquals } from '@mui/types';

//   import { Theme } from '@mui/material/styles';
// //   import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
//   import { GridClasses } from '@mui/material/Grid';

//   import * as CSS from 'csstype';

// /**
//  * The `css` function accepts arrays as values for mobile-first responsive styles.
//  * Note that this extends to non-theme values also. For example `display=['none', 'block']`
//  * will also works.
//  * 
//  */
// export declare const borders: SimpleStyleFunction<
//   | 'border'
//   | 'borderTop'
//   | 'borderRight'
//   | 'borderBottom'
//   | 'borderLeft'
//   | 'borderColor'
//   | 'borderRadius'
// >;
// export declare const shadows: SimpleStyleFunction<'boxShadow'>;

// export declare const sizing: SimpleStyleFunction<
//   | 'width'
//   | 'maxWidth'
//   | 'minWidth'
//   | 'height'
//   | 'maxHeight'
//   | 'minHeight'
//   | 'sizeWidth'
//   | 'sizeHeight'
//   | 'boxSizing'
// >;

// export declare const spacing: SimpleStyleFunction<
//   | 'm'
//   | 'mt'
//   | 'mr'
//   | 'mb'
//   | 'ml'
//   | 'mx'
//   | 'my'
//   | 'p'
//   | 'pt'
//   | 'pr'
//   | 'pb'
//   | 'pl'
//   | 'px'
//   | 'py'
//   | 'margin'
//   | 'marginTop'
//   | 'marginRight'
//   | 'marginBottom'
//   | 'marginLeft'
//   | 'marginX'
//   | 'marginY'
//   | 'marginInline'
//   | 'marginInlineStart'
//   | 'marginInlineEnd'
//   | 'marginBlock'
//   | 'marginBlockStart'
//   | 'marginBlockEnd'
//   | 'padding'
//   | 'paddingTop'
//   | 'paddingRight'
//   | 'paddingBottom'
//   | 'paddingLeft'
//   | 'paddingX'
//   | 'paddingY'
//   | 'paddingInline'
//   | 'paddingInlineStart'
//   | 'paddingInlineEnd'
//   | 'paddingBlock'
//   | 'paddingBlockStart'
//   | 'paddingBlockEnd'
// >;

// export declare const typography: SimpleStyleFunction<
//   | 'typography'
//   | 'fontFamily'
//   | 'fontSize'
//   | 'fontStyle'
//   | 'fontWeight'
//   | 'letterSpacing'
//   | 'lineHeight'
//   | 'textAlign'
//   | 'textTransform'
// >;

// type ComposedArg<T> = T extends Array<(arg: infer P) => any> ? P : never;
// type ComposedOwnerState<T> = ComposedArg<T>;

// export type SimpleSystemKeys = keyof PropsFor<
//   ComposedStyleFunction<
//     [
//       typeof borders,
//       typeof display,
//       typeof flexbox,
//       typeof grid,
//       typeof palette,
//       typeof positions,
//       typeof shadows,
//       typeof sizing,
//       typeof spacing,
//       typeof typography,
//     ]
//   >
// >;
// export type ComposedStyleFunction<T extends Array<StyleFunction<any>>> = StyleFunction<
//   ComposedOwnerState<T>
// > & { filterProps: string[] };

// export type PropsFor<SomeStyleFunction> =
//   SomeStyleFunction extends StyleFunction<infer Props> ? Props : never;

// export type StyleFunction<Props> = (props: Props) => any;

// export type SimpleStyleFunction<PropKey extends keyof any> = StyleFunction<
//   Partial<Record<PropKey, any>>
// > & { filterProps: string[] };

// export declare const display: SimpleStyleFunction<
//   'display' | 'displayPrint' | 'overflow' | 'textOverflow' | 'visibility' | 'whiteSpace'
// >;

// export declare const flexbox: SimpleStyleFunction<
//   | 'flexBasis'
//   | 'flexDirection'
//   | 'flexWrap'
//   | 'justifyContent'
//   | 'alignItems'
//   | 'alignContent'
//   | 'order'
//   | 'flex'
//   | 'flexGrow'
//   | 'flexShrink'
//   | 'alignSelf'
//   | 'justifyItems'
//   | 'justifySelf'
// >;

// export declare const grid: SimpleStyleFunction<
//   | 'gap'
//   | 'columnGap'
//   | 'rowGap'
//   | 'gridColumn'
//   | 'gridRow'
//   | 'gridAutoFlow'
//   | 'gridAutoColumns'
//   | 'gridAutoRows'
//   | 'gridTemplateColumns'
//   | 'gridTemplateRows'
//   | 'gridTemplateAreas'
//   | 'gridArea'
// >;

// export const margin: SimpleStyleFunction<
//   | 'm'
//   | 'mt'
//   | 'mr'
//   | 'mb'
//   | 'ml'
//   | 'mx'
//   | 'my'
//   | 'margin'
//   | 'marginTop'
//   | 'marginRight'
//   | 'marginBottom'
//   | 'marginLeft'
//   | 'marginX'
//   | 'marginY'
//   | 'marginInline'
//   | 'marginInlineStart'
//   | 'marginInlineEnd'
//   | 'marginBlock'
//   | 'marginBlockStart'
//   | 'marginBlockEnd'>;

// export type MarginProps = PropsFor<typeof margin>;

// export const padding: SimpleStyleFunction<
//   | 'p'
//   | 'pt'
//   | 'pr'
//   | 'pb'
//   | 'pl'
//   | 'px'
//   | 'py'
//   | 'padding'
//   | 'paddingTop'
//   | 'paddingRight'
//   | 'paddingBottom'
//   | 'paddingLeft'
//   | 'paddingX'
//   | 'paddingY'
//   | 'paddingInline'
//   | 'paddingInlineStart'
//   | 'paddingInlineEnd'
//   | 'paddingBlock'
//   | 'paddingBlockStart'
//   | 'paddingBlockEnd'
// >;
// export function getValue(transformer: (prop: SpacingValueType) => SpacingValueType,
//     propValue: SpacingValueType,
//   ): SpacingValueType;

//   export type PaddingProps = PropsFor<typeof padding>;

// export type Direction = 'ltr' | 'rtl';

// export declare const palette: SimpleStyleFunction<'bgcolor' | 'color'>;

// export declare const positions: SimpleStyleFunction<
//   'zIndex' | 'position' | 'top' | 'right' | 'bottom' | 'left'
// >;

// export type PaletteMode = 'light' | 'dark';
// export interface Color {
//   50: string;
//   100: string;
//   200: string;
//   300: string;
//   400: string;
//   500: string;
//   600: string;
//   700: string;
//   800: string;
//   900: string;
//   A100: string;
//   A200: string;
//   A400: string;
//   A700: string;
// }

// export interface BreakpointOverrides {}

// export type Breakpoint = OverridableStringUnion<
//   'xs' | 'sm' | 'md' | 'lg' | 'xl',
//   BreakpointOverrides
// >;
// export const keys: Breakpoint[];

// export interface Breakpoints {
//   keys: Breakpoint[];
//   /**
//    * Each breakpoint (a key) matches with a fixed screen width (a value).
//    * @default {
//    *    // extra-small
//    *    xs: 0,
//    *    // small
//    *    sm: 600,
//    *    // medium
//    *    md: 900,
//    *    // large
//    *    lg: 1200,
//    *    // extra-large
//    *    xl: 1536,
//    * }
//    */
//   values: { [key in Breakpoint]: number };
//   /**
//    * @param key - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
//    * @returns A media query string ready to be used with most styling solutions, which matches screen widths greater than the screen size given by the breakpoint key (inclusive).
//    * @see [API documentation](https://mui.com/material-ui/customization/breakpoints/#theme-breakpoints-up-key-media-query)
//    */
//   up: (key: Breakpoint | number) => string;
//   /**
//    * @param key - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
//    * @returns A media query string ready to be used with most styling solutions, which matches screen widths less than the screen size given by the breakpoint key (exclusive).
//    * @see [API documentation](https://mui.com/material-ui/customization/breakpoints/#theme-breakpoints-down-key-media-query)
//    */
//   down: (key: Breakpoint | number) => string;
//   /**
//    * @param start - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
//    * @param end - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
//    * @returns A media query string ready to be used with most styling solutions, which matches screen widths greater than
//    *          the screen size given by the breakpoint key in the first argument (inclusive) and less than the screen size given by the breakpoint key in the second argument (exclusive).
//    * @see [API documentation](https://mui.com/material-ui/customization/breakpoints/#theme-breakpoints-between-start-end-media-query)
//    */
//   between: (start: Breakpoint | number, end: Breakpoint | number) => string;
//   /**
//    * @param key - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
//    * @returns A media query string ready to be used with most styling solutions, which matches screen widths starting from
//    *          the screen size given by the breakpoint key (inclusive) and stopping at the screen size given by the next breakpoint key (exclusive).
//    * @see [API documentation](https://mui.com/material-ui/customization/breakpoints/#theme-breakpoints-only-key-media-query)
//    */
//   only: (key: Breakpoint) => string;
//   /**
//    * @param key - A breakpoint key (`xs`, `sm`, etc.).
//    * @returns A media query string ready to be used with most styling solutions, which matches screen widths stopping at
//    *          the screen size given by the breakpoint key (exclusive) and starting at the screen size given by the next breakpoint key (inclusive).
//    */
//   not: (key: Breakpoint) => string;
//   /**
//    * The unit used for the breakpoint's values.
//    * @default 'px'
//    */
//   unit?: string | undefined;
// }

// export interface BreakpointsOptions extends Partial<Breakpoints> {
//   /**
//    * The increment divided by 100 used to implement exclusive breakpoints.
//    * For example, `step: 5` means that `down(500)` will result in `'(max-width: 499.95px)'`.
//    * @default 5
//    */
//   step?: number | undefined;
//   /**
//    * The unit used for the breakpoint's values.
//    * @default 'px'
//    */
//   unit?: string | undefined;
// }

// export default function createBreakpoints(options: BreakpointsOptions): Breakpoints;

// /**
//  * usefule access of props;
//  * 
//  */

// export type ComponentsProps = {
//     [Name in keyof ComponentsPropsList]?: Partial<ComponentsPropsList[Name]>;
// };

// export interface Theme {
//     shape: Shape;
//     breakpoints: Breakpoints;
//     direction: Direction;
//     palette: Record<string, any> & { mode: 'light' | 'dark' };
//     shadows?: unknown;
//     spacing: Spacing;
//     transitions?: unknown;
//     components?: Record<string, any>;
//     mixins?: unknown;
//     typography?: unknown;
//     zIndex?: unknown;
//     unstable_sxConfig: SxConfig;
//     unstable_sx: (props: SxProps<Theme>) => CSSObject;
//   }

//   export interface CommonColors {
//     black: string;
//     white: string;
//   }

//   export type ColorPartial = Partial<Color>;

//   export interface TypeText {
//     primary: string;
//     secondary: string;
//     disabled: string;
//   }

//   export interface TypeAction {
//     active: string;
//     hover: string;
//     hoverOpacity: number;
//     selected: string;
//     selectedOpacity: number;
//     disabled: string;
//     disabledOpacity: number;
//     disabledBackground: string;
//     focus: string;
//     focusOpacity: number;
//     activatedOpacity: number;
//   }

//   export interface TypeBackground {
//     default: string;
//     paper: string;
//   }

//   export type TypeDivider = string;

//   export type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial;

//   export interface SimplePaletteColorOptions {
//     light?: string;
//     main: string;
//     dark?: string;
//     contrastText?: string;
//   }

//   export interface PaletteColor {
//     light: string;
//     main: string;
//     dark: string;
//     contrastText: string;
//   }

//   export interface TypeObject {
//     text: TypeText;
//     action: TypeAction;
//     divider: TypeDivider;
//     background: TypeBackground;
//   }

//   export type PaletteTonalOffset =
//     | number
//     | {
//         light: number;
//         dark: number;
//       };

//   export const light: TypeObject;
//   export const dark: TypeObject;

//   export interface PaletteAugmentColorOptions {
//     color: PaletteColorOptions;
//     mainShade?: number | string;
//     lightShade?: number | string;
//     darkShade?: number | string;
//     name?: number | string;
//   }

//   export interface Palette {
//     common: CommonColors;
//     mode: PaletteMode;
//     contrastThreshold: number;
//     tonalOffset: PaletteTonalOffset;
//     primary: PaletteColor;
//     secondary: PaletteColor;
//     error: PaletteColor;
//     warning: PaletteColor;
//     info: PaletteColor;
//     success: PaletteColor;
//     grey: Color;
//     text: TypeText;
//     divider: TypeDivider;
//     action: TypeAction;
//     background: TypeBackground;
//     getContrastText: (background: string) => string;
//     augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
//   }

//   export interface Channels {
//     mainChannel: string;
//     lightChannel: string;
//     darkChannel: string;
//     contrastTextChannel: string;
//   }

//   export type PartialTypeObject = { [P in keyof TypeObject]?: Partial<TypeObject[P]> };

//   export interface PaletteOptions {
//     primary?: PaletteColorOptions;
//     secondary?: PaletteColorOptions;
//     error?: PaletteColorOptions;
//     warning?: PaletteColorOptions;
//     info?: PaletteColorOptions;
//     success?: PaletteColorOptions;
//     mode?: PaletteMode;
//     tonalOffset?: PaletteTonalOffset;
//     contrastThreshold?: number;
//     common?: Partial<CommonColors>;
//     grey?: ColorPartial;
//     text?: Partial<TypeText>;
//     divider?: string;
//     action?: Partial<TypeAction>;
//     background?: Partial<TypeBackground>;
//     getContrastText?: (background: string) => string;
//   }

// export type Variant =
//   | 'h1'
//   | 'h2'
//   | 'h3'
//   | 'h4'
//   | 'h5'
//   | 'h6'
//   | 'subtitle1'
//   | 'subtitle2'
//   | 'body1'
//   | 'body2'
//   | 'caption'
//   | 'button'
//   | 'overline';

//   export interface FontStyle {
//     fontFamily: React.CSSProperties['fontFamily'];
//     fontSize: number;
//     fontWeightLight: React.CSSProperties['fontWeight'];
//     fontWeightRegular: React.CSSProperties['fontWeight'];
//     fontWeightMedium: React.CSSProperties['fontWeight'];
//     fontWeightBold: React.CSSProperties['fontWeight'];
//     htmlFontSize: number;
//   }

//   export type NormalCssProperties = CSS.Properties<number | string>;
// export type Fontface = CSS.AtRule.FontFace & { fallbacks?: CSS.AtRule.FontFace[] };

// /**
//  * Allows the user to augment the properties available
//  */
// export interface BaseCSSProperties extends NormalCssProperties {
//   '@font-face'?: Fontface | Fontface[];
// }

// export interface CSSProperties extends BaseCSSProperties {
//   // Allow pseudo selectors and media queries
//   // `unknown` is used since TS does not allow assigning an interface without
//   // an index signature to one with an index signature. This is to allow type safe
//   // module augmentation.
//   // Technically we want any key not typed in `BaseCSSProperties` to be of type
//   // `CSSProperties` but this doesn't work. The index signature needs to cover
//   // BaseCSSProperties as well. Usually you would use `BaseCSSProperties[keyof BaseCSSProperties]`
//   // but this would not allow assigning React.CSSProperties to CSSProperties
//   [k: string]: unknown | CSSProperties;
// }

// export interface FontStyleOptions extends Partial<FontStyle> {
//   allVariants?: React.CSSProperties;
// }

// // TODO: which one should actually be allowed to be subject to module augmentation?
// // current type vs interface decision is kept for historical reasons until we
// // made a decision
// export type TypographyStyle = CSSProperties;
// export interface TypographyStyleOptions extends TypographyStyle {}

// export interface TypographyUtils {
//   pxToRem: (px: number) => string;
// }

// export interface Typography extends Record<Variant, TypographyStyle>, FontStyle, TypographyUtils {}

// export interface TypographyOptions
//   extends Partial<Record<Variant, TypographyStyleOptions> & FontStyleOptions> {}

// export function createTypography(
//   palette: Palette,
//   typography: TypographyOptions | ((palette: Palette) => TypographyOptions),
// ): Typography;

// export type ResponsiveStyleValue<T> = T | Array<T | null> | { [key: string]: T | null };

// export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

// export type GridSpacing = number | string;

// export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

// export type GridSize = 'auto' | number;

// export interface RegularBreakpoints {
//   /**
//    * If a number, it sets the number of columns the grid item uses.
//    * It can't be greater than the total number of columns of the container (12 by default).
//    * If 'auto', the grid item's width matches its content.
//    * If false, the prop is ignored.
//    * If true, the grid item's width grows to use the space available in the grid container.
//    * The value is applied for the `lg` breakpoint and wider screens if not overridden.
//    * @default false
//    */
//   lg?: boolean | GridSize;
//   /**
//    * If a number, it sets the number of columns the grid item uses.
//    * It can't be greater than the total number of columns of the container (12 by default).
//    * If 'auto', the grid item's width matches its content.
//    * If false, the prop is ignored.
//    * If true, the grid item's width grows to use the space available in the grid container.
//    * The value is applied for the `md` breakpoint and wider screens if not overridden.
//    * @default false
//    */
//   md?: boolean | GridSize;
//   /**
//    * If a number, it sets the number of columns the grid item uses.
//    * It can't be greater than the total number of columns of the container (12 by default).
//    * If 'auto', the grid item's width matches its content.
//    * If false, the prop is ignored.
//    * If true, the grid item's width grows to use the space available in the grid container.
//    * The value is applied for the `sm` breakpoint and wider screens if not overridden.
//    * @default false
//    */
//   sm?: boolean | GridSize;
//   /**
//    * If a number, it sets the number of columns the grid item uses.
//    * It can't be greater than the total number of columns of the container (12 by default).
//    * If 'auto', the grid item's width matches its content.
//    * If false, the prop is ignored.
//    * If true, the grid item's width grows to use the space available in the grid container.
//    * The value is applied for the `xl` breakpoint and wider screens if not overridden.
//    * @default false
//    */
//   xl?: boolean | GridSize;
//   /**
//    * If a number, it sets the number of columns the grid item uses.
//    * It can't be greater than the total number of columns of the container (12 by default).
//    * If 'auto', the grid item's width matches its content.
//    * If false, the prop is ignored.
//    * If true, the grid item's width grows to use the space available in the grid container.
//    * The value is applied for all the screen sizes with the lowest priority.
//    * @default false
//    */
//   xs?: boolean | GridSize;
// }

// type CustomBreakpoints = Partial<Record<Breakpoint, boolean | GridSize>>;

// interface BreakpointOverridesEmpty {}

// type Breakpoints = IfEquals<
//   BreakpointOverrides,
//   BreakpointOverridesEmpty,
//   RegularBreakpoints,
//   CustomBreakpoints
// >;

// export interface GridOwnProps extends SystemProps<Theme>, Breakpoints {
//   /**
//    * The content of the component.
//    */
//   children?: React.ReactNode;
//   /**
//    * Override or extend the styles applied to the component.
//    */
//   classes?: Partial<GridClasses>;
//   /**
//    * The number of columns.
//    * @default 12
//    */
//   columns?: ResponsiveStyleValue<number>;
//   /**
//    * Defines the horizontal space between the type `item` components.
//    * It overrides the value of the `spacing` prop.
//    */
//   columnSpacing?: ResponsiveStyleValue<GridSpacing>;
//   /**
//    * If `true`, the component will have the flex *container* behavior.
//    * You should be wrapping *items* with a *container*.
//    * @default false
//    */
//   container?: boolean;
//   /**
//    * Defines the `flex-direction` style property.
//    * It is applied for all screen sizes.
//    * @default 'row'
//    */
//   direction?: ResponsiveStyleValue<GridDirection>;
//   /**
//    * If `true`, the component will have the flex *item* behavior.
//    * You should be wrapping *items* with a *container*.
//    * @default false
//    */
//   item?: boolean;
//   /**
//    * Defines the vertical space between the type `item` components.
//    * It overrides the value of the `spacing` prop.
//    */
//   rowSpacing?: ResponsiveStyleValue<GridSpacing>;
//   /**
//    * Defines the space between the type `item` components.
//    * It can only be used on a type `container` component.
//    * @default 0
//    */
//   spacing?: ResponsiveStyleValue<GridSpacing>;
//   /**
//    * The system prop that allows defining system overrides as well as additional CSS styles.
//    */
//   sx?: SxProps<Theme>;
//   /**
//    * Defines the `flex-wrap` style property.
//    * It's applied for all screen sizes.
//    * @default 'wrap'
//    */
//   wrap?: GridWrap;
//   /**
//    * If `true`, it sets `min-width: 0` on the item.
//    * Refer to the limitations section of the documentation to better understand the use case.
//    * @default false
//    */
//   zeroMinWidth?: boolean;
// }

// export default function createPalette(palette: PaletteOptions): Palette;

// export function createUnaryUnit<Spacing>(
//     theme: { spacing: Spacing },
//     themeKey: string,
//     defaultValue: Spacing,
//     propName: string,
//   ): Spacing extends number
//     ? (abs: SpacingValueType) => number | number
//     : Spacing extends any[]
//       ? <Index extends number>(abs: Index | string) => Spacing[Index] | string
//       : Spacing extends (...args: unknown[]) => unknown
//         ? Spacing
//         : undefined; // warns in Dev
//           () => undefined;

// export type SpacingValueType = string | number | null | undefined;
// export type SpacingProps = PropsFor<typeof spacing>;
// export function createUnarySpacing<Spacing>(theme: { spacing: Spacing }): Spacing extends number
//   ? (abs: number | string) => number | number
//   : Spacing extends any[]
//     ? <Index extends number>(abs: Index | string) => Spacing[Index] | string
//     : Spacing extends (...args: unknown[]) => unknown
//       ? Spacing
//       : () => undefined; // warns in Dev
"use strict";