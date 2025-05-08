import { Height } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import { withStyles } from '@mui/styles';
import React from "react";

interface FLEXPROPS {
 children:React.ReactNode;
 className:string;
 [key:string]:any;
}

const styles = (theme:any)=> ({
 root:{
    flexGrow: 1,
    background:
      theme.palette.mode === 'dark'
        ? `linear-gradient(180deg, ${theme.palette.primaryDark[900]} 0%,rgb(0, 60, 0) 100%)`
        : `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #FFFFFF 100%)`,
    backgroundSize: 'auto 250px ',
    backgroundRepeat: 'no-repeat',
    '& *':{
     boxSizing:'border-box',
    },
    '& .spacing-1':{
      padding:theme.spacing(1,1,0),
      gap: theme.spacing(1), 
    },
  '& strong': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[900],
  },

  '& pre': {
    fontSize: theme.typography.pxToRem(16),
  },

  '& summary': {
    padding: 8,
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
  },
} 
})

function Flex(props:FLEXPROPS): React.JSX.Element {
    const {  classes, children,} = props;
    return(
        <div className={classes.root}>
             {children}
        </div>
    )
}
const defaultTheme = createTheme();
export default withStyles(styles,{defaultTheme})(Flex);