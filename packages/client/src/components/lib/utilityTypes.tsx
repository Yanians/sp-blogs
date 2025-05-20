import * as React from 'react';
import Typography,{ TypographyProps } from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import { CSSObject } from '@emotion/react';
import { Link, LinkProps } from 'react-router-dom';
import Button, {ButtonProps} from '@mui/material/Button';
import Paper, { PaperProps } from '@mui/material/Paper';
import TextField, { TextFieldProps, } from '@mui/material/TextField';
import Card, { CardProps } from '@mui/material/Card'
import type * as CSS from 'csstype';
// combine all the props
export type CombineProps<P> = {
  [Name in keyof P]?: Partial<P[Name]>;
};

/****************** USABLE SECTION**************/

type OriginalProps<OriginalComponent extends React.ElementType> = {
  add?:OriginalComponent;
//  [key:string]:any;// allow passing through arbitrary props 
} & Omit<React.ComponentPropsWithoutRef<OriginalComponent>, 'add' | 'children'>;

type CopyPropsFromOriginalComponent<OriginalComponent extends React.ElementType> = 
     OriginalProps<OriginalComponent>
      & AddedProps 
      & TypographyProps 
      & TextFieldProps
      & CardProps
      & PaperProps
      & ButtonProps
      & LinkProps
      & BoxProps;

interface ConditionalProps {
    variant?: 'filled'|'outlined'|'standard' | undefined;
  condition?: 'typography'|'box'|'textfield'|'card' | 'paper' | 'button' | 'link' | undefined;
};

interface AddedProps extends ConditionalProps {
  style?:React.CSSProperties;
}

export function PassThrough<Component extends React.ElementType>
  (props:CopyPropsFromOriginalComponent<Component>)
  : React.JSX.Element {
    const { 
      children,
      variant,
      add:Component = 'div',
      condition,
      basename,
      to,
      style, 
      ...rest 
    } = props;

      switch(condition){
        case 'typography' :{
          return <Typography {...rest}>{children}</Typography>
        }
        case 'textfield':{
          return <TextField {...rest}>{children}</TextField>
        }
        case 'box':{
          return <Box {...rest}>{children}</Box>
        }
        case 'paper':{
          return <Paper {...rest}>{children}</Paper>
        }
        case 'card':{
          return <Card {...rest}>{children}</Card>
        }
        case 'button':{
          return <Button {...rest}>{children}</Button>
        }
         case 'link':{
          return <Link {...rest} to={to} basename={basename}>{children}</Link>
        }
        default:{
          return <Component {...rest} style={style}>{children}</Component>
        }
      }
  }

/********************* END USABLE SECTION***************/

// if you need to break the unknown options of the component or anything you want to exclude 
// use this signature

//@ts-ignore
export type CSSPseudos = { [K in CSS.Pseudos]?: unknown | CSSObject };

/**
 * To disable custom properties, use module augmentation
 *
 * @example
 * declare module '@mui/material/styles' {
 *   interface CssThemeVariables {
 *     enabled: true;
 *   }
 * }
 */

type ConsistentProps<TargetProps, injectedProps> = {
 [P in keyof TargetProps]: P extends keyof injectedProps
  ? injectedProps[P] extends  TargetProps[P]
  ? TargetProps[P] : injectedProps[P] : TargetProps[P]
}

/**
 * For internal usage in `@mui/system` package
 */

//@ts-ignore
export function internal_mutateStyles(
  tag: React.ElementType,
  processor: (styles: any) => any,
): void;

type PartotOfAnotherProps = TypographyProps & Omit<TextFieldProps, 'variants'>

interface CSSObjectWithVariants<Props> extends Omit<PartotOfAnotherProps, 'variants'> {
  variants: Array<{
    props: Props | ((props: Props) => boolean);
    style:
      | PartotOfAnotherProps
      | ((args: Props extends { theme: any } ? { theme: Props['theme'] } : any) => CSSObject);
  }>;
}

type TRESComponent<P> = {
  props:P;
  (props:P):React.JSX.Element;
}

// const Consumer2 = ({ as: Component }: Props) => {
//   return <Component />;
// };

// (Consumer2 as TRESComponent<Props>).props = {} as Props; // Satisfies TRES typing

// export { Consumer2 } ;

export const Cards = (
  { title, children, ...props }:
  { title: string, children:React.ReactNode }
  & React.ComponentProps<typeof Box> // new utility, see below
) => (
  <Box {...props}>
    {title}: {children}
  </Box>
);
     <Cards title="Name spae" >Someday</Cards>


/******************************************************************/     

/*******************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
   function Buttons(props:{as:React.ElementType<any>, children:React.ReactNode}){
        const { as: Component, children, ...rest } = props;
        return <Component {...rest}>{children}</Component>;
    }

    <Buttons as={Typography}>click me</Buttons>
    
   export const withPropsInheritance = <
    C extends React.ComponentType<any>, 
    D extends Partial<React.ComponentProps<C>>>() => {};

const ShadowsProps = <
  C extends React.ComponentType<any>,
  D extends Partial<React.ComponentProps<C>>, 
  ExtraProps = {},
>(defaults: D,Component: C,) : React.ComponentType<React.ComponentProps<C> & Partial<D> & ExtraProps>  => {
  const WrappedComponent = (props: React.ComponentProps<C> & Partial<D> & ExtraProps) => {
    const { fontFamily = {}, style, ...rest } = props as any;
    
  const shadows = {
    '1px 1px 1px rgba(19, 16, 16, 0.96)':props.shadowblack,
    '1px 2px 1px black rgba(173, 167, 167, 0.43)':props.shadow1black,
    '1px 2px 2px black rgba(173, 167, 167, 0.43)':props.shadow2black,
    '2px 2px 2px black rgba(173, 167, 167, 0.43)':props.shadow3black,
    '1px 1px 1px red rgba(177, 23, 23, 0.57)':props.shadowred,
    '3px 3px 6px rgba(218, 109, 176, 0.47)':props.shadowsofia,
    '1px 2px 1px red':props.shadow1red,
    '1px 2px 2px red':props.shadow2red,
    '2px 2px 2px red':props.shadow3red,
    '1px 1px 1px grey':props.shadowgrey,
    '1px 1px 1px rgba(66, 95, 66, 0.16)':props.shadowgreylight,
    '1px 1px 2px grey':props.shadow1grey,
    '1px 2px 1px grey':props.shadow2grey,
    '2px 2px 2px grey':props.shadow3grey,
  }

  const activeFont = Object.entries(shadows).find(([_, isEnabled]) => isEnabled)?.[0];

    return (
        <Component 
          {...defaults}
          {...rest}
          style={{
            ...style,
            ...(activeFont ? { textShadow: activeFont } : {}),
          }}
        />
   );
} 

  WrappedComponent.displayName = `(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
};
 
interface ReactGlobalProps {
  handleClick:(
    event:React.MouseEvent<HTMLDivElement,MouseEvent>,
  ) => void;
  style?:React.CSSProperties;
  children?:React.ReactNode;
};

interface ButtonPropses extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  style: React.CSSProperties;
  children: React.ReactNode;
}

export function Buttonis({style, children}:ButtonPropses){
  return <button style={style}>{children}</button>
}

// This applies to combining or chaining props between or across many Props declaration
// It can consume any other props from different function using it.
//refers to example below
type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? React.JSX.LibraryManagedAttributes<T, P>
  : never;
/**
 * example usage of above type ComponentProps
 */

  interface IProps {
    name?: string;
  }
  const defaultProp = {
    age: 25,
  };
  const GreetComponent = ({ name, age }: IProps & typeof defaultProp) => (
    <div>{`Hello, my name is ${name}, ${age}`}</div>
  );
  GreetComponent.defaultProp = defaultProp;

  type newType = ComponentProps<typeof GreetComponent>

  const TestComponent=(props:newType)=>{
    return <h1 />
  }

  // const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
  //   return <h1 />;
  // };
  
  // Property 'age' is missing in type '{ name: string; }' but required in type '{ age: number; }'
  const el = <TestComponent name="foo" age={0} />;

// type WithFont = {
//   cursive?:boolean;
// }
//    export const Texts = DefaultProps<typeof Typography,{}, Shadows>({ variant:'h4'}, Typography);
interface JSProps {
children?:React.ReactNode;
};

type ComponentProp<T extends React.ComponentType<any>> = React.ComponentProps<T>;

interface AsProp<T extends React.ComponentType<any>> {
  as: T;
}

const UserConsumer1 = <C extends React.ComponentType<any>>({
  as: C,
}: AsProp<C> & React.ComponentProps<C> & ComponentProp<C>) => {
   const {as:Component = 'div'} = C;
     return <Component />;
};

<UserConsumer1 as={Typography} />

// declare namespace TRESS {
//   interface ElementAttributesProperty {
//     Props:React.ComponentType<any>;
//   }
// }

//not able to  recognise props from Component

function upperCaseFirst(string:string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}
//@ts-ignore
function moduleIDToJSIdentifier(moduleID:string) {
  const delimiter = /(\.|-|\/)/;
  return moduleID
    .split(delimiter)
    .filter((part) => !delimiter.test(part))
    .map((part) => (part.length === 0 ? '$' : part))
    .map(upperCaseFirst)
    .join('');
}