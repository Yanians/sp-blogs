
import * as React from 'react';
import { SxProps, Theme, } from '@mui/system';
import { LinkProps } from 'react-router-dom';
import { propsToClassKey } from '@mui/styles';
interface TREEPROPS {
    children:React.ReactNode;
    className?:string;
    id?:string;
    // onClick?:React.MouseEvent<HTMLSpanElement>;
    [key:string]:any;
    sx?:SxProps<Theme>;
};

interface TITLE extends TREEPROPS{
    title?:string;
};

interface ULPROPS extends TREEPROPS{
 role?:string;
 id?:string;
 ariaLabel?:string;
 [key:string]:any;
};

type ariaOptions =  boolean | "page" | "false" | "true" | "step" | "location" | "date" | "time" | undefined;

type LINKPROPS<Component extends React.ElementType> = {
    href?:string;
    role?:string;
    type?:Component;
    ariaExpanded?: boolean;
    ariaOwns?:string;
    ariaCurrent?:ariaOptions;
    [key:string]:any;
} & TREEPROPS & Omit<React.ComponentPropsWithoutRef<Component>, "type"| "href">;

function Main({children,className}:TREEPROPS){
    return <main className={className}>{children}</main>
};

function Header({children, role}:ULPROPS){
    return (
        <header role={role}>
           {children}
        </header>
    )   
};

function Title({children,className}:TITLE){
    return <div className={className} id="id_website_title">{children}</div>
};

function Tagline({children}:TREEPROPS){
    return(
        <div className="tagline">
          {children}
      </div>
    )
};

function Div({children, className}:TREEPROPS){
    return (
        <div className={className}>{children}</div>
    )
};

function NavItem({children, ariaLabel}:ULPROPS){
    return(
        <nav aria-label={ariaLabel}>
             {children}
        </nav>
    ) 
};

function UlItem({children, role, id, className, ariaLabel}: ULPROPS){
    return(
        <ul className={className} role={role} aria-label={ariaLabel} id={id}>
            {children}
        </ul>
    ) 
}

function Tree({children, onClick, role}:ULPROPS){
    return(
        <li role={role} onClick={onClick}>
            {children}
        </li>
    )
};

function Anchor<Component extends React.ElementType>(props:LINKPROPS<Component>): React.JSX.Element {
    const {ariaExpanded, type: Component = 'a', role, href, to, children, ariaOwns, ariaCurrent, ...rest } = props;
    return (
        <Component aria-expanded={ariaExpanded}
         href={href}
         role={role}
         to={to}
         aria-current={ariaCurrent}
         aria-owns={ariaOwns}
        {...rest}>
            {children}
        </Component>
    )
}

function Span({children, onClick, className}:TREEPROPS){
    return (
        <span className={className} onClick={onClick}>
            {children}
        </span>
    )
}

export default {
    Main,
    Tree,
    Anchor,
    Span,
    NavItem,
    Header,
    Div,
    UlItem,
};






