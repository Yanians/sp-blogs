import * as React from "react";
import { Root as Roots }  from '@treasury/layout-core-v5';

 export default function Root({children}:{children:React.ReactNode}){
    return (
     <>
        <Roots scheme={{
           header: {
            config: {
              xs: {
                position: "sticky",
                top:1,
                height: 56,
                layer:5,
              },
              md: {
                position: "relative",
                height: 64,
                clipped: true,
              },
          },
        },  
    
        leftEdgeSidebar: {
          config: {
            xs: {
              variant: "persistent",
              persistentBehavior: "fit",
              width: 100,
              collapsible:false,
              collapsedWidth: 20,
              headerMagnetEnabled: true,
            },
            sm: {
              variant: "persistent",
              persistentBehavior: "fit",
              width: 60,
              collapsible: true,
              collapsedWidth: 200,
              headerMagnetEnabled: true,
            },
             md: {
              variant: "persistent",
              persistentBehavior: "flexible",
              width: 200,
              collapsible: true,
              collapsedWidth: 120,
              headerMagnetEnabled: true,
            },
          },
        },
    
        rightEdgeSidebar: {
          config: {
            xs: {
              variant: "persistent",
              persistentBehavior: "fit",
              width: 256,
              collapsible: true,
              collapsedWidth: 70,
              headerMagnetEnabled: true,
            },
            sm: {
              variant: "persistent",
              persistentBehavior: "fit",
              width: 256,
              collapsible: true,
              collapsedWidth: 80,
              headerMagnetEnabled: true,
            },
             md: {
              variant: "persistent",
              persistentBehavior: "fit",
              width: 256,
              collapsible: false,
              collapsedWidth: 120,
              headerMagnetEnabled: true,
            },
             lg: {
              variant: "persistent",
              persistentBehavior: "fit",
              width: 256,
              collapsible: false,
              collapsedWidth: 120,
              headerMagnetEnabled: true,
            },
          },
        }, 
    
     rightInsetSidebar: {
        config: {
          sm: {
            position: "absolute",
            width: 256,
          },
        },
      },
  
        leftInsetSidebar: {
          config:{
           xs:{
            position: "fixed",
            width:150,
            headerMagnetEnabled: true,
          },
          sm:{
            position: "fixed",
            width:150,
            headerMagnetEnabled: true,
          },
            md:{
           position: "fixed",
            width: 45,
            headerMagnetEnabled: true,
          },
         }
       } 
  
  }}   
           initialState={{
                leftEdgeSidebar: {
                  open: true,
                  collapsed: true,
                 }
           }}
        >
        {children}
    </Roots>
    </>  
    )
}    