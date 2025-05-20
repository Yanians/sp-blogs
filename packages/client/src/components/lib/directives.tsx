
import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import ListItemButton, { ListItemButtonProps} from '@mui/material/ListItemButton';
import { ButtonProps } from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { LinkProps, Link } from 'react-router-dom';
// export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
//     specialProp?: string;
// }

  // type OriginalProps<OriginalComponent extends React.ElementType> = {
  //   add?:OriginalComponent;
  //  [key:string]:any;// allow passing through arbitrary props 
  // } & Omit<React.ComponentPropsWithoutRef<OriginalComponent>, 'add' | 'children'>;
  
  // type CopyPropsFromOriginalComponent<OriginalComponent extends React.ElementType> = 
  //      OriginalProps<OriginalComponent>; 
      
  // export function ModifiedLinkFromReactRouterDom<Component extends React.ElementType>
  //   (props:CopyPropsFromOriginalComponent<Component>)
  //   : React.JSX.Element {
  //     const { 
  //       children,
  //       add:Component = 'div',
  //       style, 
  //       ...rest } = props;
  //           return <Component {...rest} style={style} />
  //       }

  export function Button(props: ButtonProps) {
    const {...rest } = props;
    // do something with specialProp
    return <button {...rest} />;
  }

function Directives(){
  
 const Search = styled('div')(({ theme }) => ({
    display:'flex',
    zIndex: 99,
    position: 'relative',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    boxShadow: theme.shadows[12],
    // backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.mode ==='dark' ? alpha(theme.palette.success.main,0.25):alpha(theme.palette.common.black,0.18),
    '&:hover': {
      backgroundColor:theme.palette.mode ==='dark' ? alpha(theme.palette.common.white, 0.07):alpha(theme.palette.common.white, 0.9) ,
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

   const LinkModified = styled((props:LinkProps) : React.JSX.Element =>{
    const { to, ...rest } = props;
        return <Link to={to} {...rest} />
  })(
    ({theme})=> ({
    textDecoration:'none',
        "& :hover":{
          textDecoration:'underline',
          fontStyle:'italic',
          color:theme.palette.mode ==='dark' ? 
          alpha(theme.palette.success.dark,0.99) : 
          alpha(theme.palette.error.dark,0.99),}, color:theme.palette.mode ==='dark' ? 
          alpha(theme.palette.common.white,0.99):alpha(theme.palette.common.black,0.99),
    }));
  
   const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    display:'flex',
    zIndex: 99,
    // position: 'relative',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    boxShadow: theme.shadows[10],
    backgroundColor: `${alpha(theme.palette.background.paper, 0.72)}`,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
   
   const ListItemStyle = styled((props:ListItemButtonProps) => {
    const { children, ...rest} = props;
    return <ListItemButton {...rest}>{children}</ListItemButton>
   })(
    ({ theme }) => ({
      ...theme.typography.body2,
      position: 'relative',
      width:'auto',
      textTransform: 'capitalize',
      paddingRight: theme.spacing(2),
      '&:hover':{
        backgroundColor:theme.palette.mode === 'dark' ? alpha(theme.palette.success.dark,0.25) :'inherit',
        color:theme.palette.error[700],
        fontStyle:'italic',
        textDecoration:'none',

      },
      '&:before': {
        top: 0,
        right: 0,
        width: 3,
        bottom: 0,
        content: "''",
        display: 'none',
        position: 'relative',
      }
    })
  );
  
   const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));  

  return { Search, StyledInputBase, SearchIconWrapper, ListItemStyle, LinkModified }
}

export default Directives;