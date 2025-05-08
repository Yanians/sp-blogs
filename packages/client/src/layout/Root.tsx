import * as React from "react";
import { Root as Roots, ContextValue }  from "../../../../src/mui-treasury/layout-core-v5";

interface HEADERPROPS {
  children:React.ReactNode;
}

 export default function Root(props:HEADERPROPS){
  const { children } = props;
    return (
     <>
        <Roots scheme={{
           header: {
            config: {
              xs: {
                position: "fixed",
                top:0,
                height: 56,
                clipped:true,
              },
              sm: {
                position: "fixed",
                top:0,
                height: 56,
                clipped:true,
              },
              md: {
                position: "fixed",
                top:0,
                height: 48,
                clipped: true,
              },
          },
        },  
    
        leftEdgeSidebar: {
          config: {
            xs: {
              variant: "persistent",
              persistentBehavior: "fit",
              width:150,
              collapsible:true,
              collapsedWidth:0,
              headerMagnetEnabled: true,
            },
            sm: {
              variant: "persistent",
              persistentBehavior: "fit",
              width: 150,
              collapsible: true,
              collapsedWidth: 0,
              headerMagnetEnabled: true,
            },
             md: {
              variant: "persistent",
              persistentBehavior: "fit",
              width:0,
              collapsible: false,
              collapsedWidth: 320,
              headerMagnetEnabled: true,
            },
          },
        },
    
        rightEdgeSidebar: {
          config: {
            xs: {
              variant: "persistent",
              persistentBehavior: "fit",
              width:0,
              collapsible:true,
              collapsedWidth:0,
              headerMagnetEnabled: true,
            },
            sm: {
              variant: "persistent",
              persistentBehavior: "fit",
              width:0,
              collapsible:true,
              collapsedWidth:0,
              headerMagnetEnabled: true,
            },
             md: {
              variant: "persistent",
              persistentBehavior: "fit",
              width:0,
              collapsible:true,
              collapsedWidth:0,
              headerMagnetEnabled: true,
            },
             lg: {
              variant: "persistent",
              persistentBehavior: "fit",
              width:0,
              collapsible: true,
              collapsedWidth:0,
              headerMagnetEnabled: true,
            },
            xl: {
              variant: "persistent",
              persistentBehavior: "fit",
              width:0,
              collapsible: true,
              collapsedWidth:0,
              headerMagnetEnabled: true,
            },
          },
        }, 
    
        rightInsetSidebar: {
            config: {
              sm:{
                position: "fixed",
                top:2,
                width:'auto',
                // headerMagnetEnabled: true,
              },
                md:{
                  top:2,
               position: "fixed",
                width: 'auto',
                // headerMagnetEnabled: true,
              },
            },
          },
      
            leftInsetSidebar: {
              config:{
               xs:{
                position: "absolute",
                width:50,
                // headerMagnetEnabled: true,
              },
              sm:{
                position: "absolute",
                width:150,
                // headerMagnetEnabled: true,
              },
                md:{
               position: "absolute",
                width: 105,
                // headerMagnetEnabled: true,
              },
              lg:{
                position: "absolute",
                 width: 105,
                 // headerMagnetEnabled: true,
               },
            }
          } 
  }}   
           initialState={{
                leftEdgeSidebar: {
                  open: true,
                  collapsed: true,
                 },
           }}
        >
        {children}
    </Roots>
    </>  
    )
}    