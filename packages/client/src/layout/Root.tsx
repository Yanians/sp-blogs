import * as React from "react";
import { Scheme } from "../mui-treasury/layout-core-v5/Root/Root";
import { Root as Roots, getStandardScheme }  from "../mui-treasury/layout-core-v5";
import { styled } from '@mui/material/styles';
import { ForkLeft } from "@mui/icons-material";
import { Collapse } from "@mui/material";

interface HEADERPROPS {
  children:React.ReactNode;
}

const Main = styled('div')(({theme})=>({
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
}));

 export default function Root(props:HEADERPROPS){
  const { children } = props;


  const standardScheme:Scheme = {
     header: {
    config: {
      xs: {
        position: "relative",
        height: 56,
        clipped:true,
      },
      md: {
        position: "sticky",
        height: 64,
        clipped: true,
      },
    },
  },
  leftEdgeSidebar: {
    // autoCollapse:'sm',
    // hidden:['md','lg','xl'],
    config: {
      xs: {
         variant: "persistent",
        width:0,
        persistentBehavior:'flexible',
        collapsible:true,
        collapsedWidth:85,
        headerMagnetEnabled: true,
      },
       sm: {
        variant: "persistent",
        width:0,
        collapsible: true,
        collapsedWidth:85,
        persistentBehavior:{
          header:'flexible',
          content:'flexible',
          footer:'none',
        }
        // headerMagnetEnabled: true,
      },
      md:{
          variant:'persistent',
          width:0,
          collapsible:false,
          collapsedWidth:0,
           persistentBehavior:{
            header:'flexible',
            content:'fit',
            footer:'none',
        }
      }
    },
  },     
       rightInsetSidebar: {
          hidden: ['xs','sm'],
         config:{
          md:{
             position: "sticky",
             top: "4rem",
             width:'auto',
            //  headerMagnetEnabled:true,
          },
            lg:{
             position: "sticky",
             top: "4rem",
             width:'auto',
            //  headerMagnetEnabled:true,
          }
        },
  }
}
    return (
     <Main>
        <Roots scheme={standardScheme} initialState={{
          leftEdgeSidebar:{
           open:false,
           collapsed:true,
        }
      }}
  //        scheme={{
  //          header: {
  //           config: {
  //             xs: {
  //               position: "sticky",
  //               top:5,
  //               height:70,
  //               clipped:true,
  //             },
  //             sm: {
  //               position: "sticky",
  //               top:0,
  //               height: 70,
  //               clipped:true,
  //             },
  //             md: {
  //               position: "sticky",
  //               top:0,
  //               height: 70,
  //               clipped: true,
  //             },
  //               lg: {
  //               position: "sticky",
  //               top:0,
  //               layer:1,
  //               height: 70,
  //               clipped: true,
  //             },
  //                xl: {
  //               position: "sticky",
  //               top:0,
  //               layer:1,
  //               height: 70,
  //               clipped: true,
  //             },
  //         },
  //       },  
    
  //       leftEdgeSidebar: {
  //         autoCollapse:"lg",
  //         hidden:['md','lg','xl'],
  //         config: {
  //           xs: {
  //             width:0,
  //             collapsible:true,
  //             collapsedWidth:110,
  //             headerMagnetEnabled: true,
  //             variant: "persistent",
  //               persistentBehavior: {
  //                 header: "none",
  //                 content: "none",
  //                 footer: "none",
  //               },
  //           },
  //           sm: {
  //             width:0,
  //             collapsible:true,
  //             collapsedWidth:126,
  //             headerMagnetEnabled: true,
  //             variant: "persistent",
  //               persistentBehavior: {
  //                 header: "flexible",
  //                 content: "flexible",
  //                 footer: "none",
  //               },
  //           },
  //            md: {
  //                width:0,
  //             collapsible:false,
  //             collapsedWidth:0,
  //             headerMagnetEnabled: true,
  //             variant: "persistent",
  //               persistentBehavior: {
  //                 header: "flexible",
  //                 content: "flexible",
  //                 footer: "none",
  //               },
  //           },
  //              lg: {
  //                width:0,
  //             collapsible:false,
  //             collapsedWidth:0,
  //               variant: "persistent",
  //               persistentBehavior: {
  //                 header: "flexible",
  //                 content: "flexible",
  //                 footer: "none",
  //               },
  //           },
  //         },
  //       },
    
  //       rightEdgeSidebar: {
  //         autoCollapse:"md",
  //         config: {
  //           xs: {
  //             variant: "temporary",
  //             // persistentBehavior: "fit",
  //             width:0,
  //             // collapsible:true,
  //             // collapsedWidth:0,
  //             // headerMagnetEnabled: true,
  //           },
  //           sm: {
              
  //             variant: "temporary",
  //             // persistentBehavior: "fit",
  //             width:0,
  //             // collapsible:true,
  //             // collapsedWidth:0,
  //             // headerMagnetEnabled: true,
  //           },
  //            md: {
  //             variant: "temporary",
  //             // persistentBehavior: "fit",
  //             width:0,
  //             // collapsible:true,
  //             // collapsedWidth:0,
  //             // headerMagnetEnabled: true,
  //           },
  //            lg: {
  //             variant: "temporary",
  //             // persistentBehavior: "fit",
  //             width:0,
  //             // collapsible: true,
  //             // collapsedWidth:0,
  //             // headerMagnetEnabled: true,
  //           },
  //           xl: {
  //             variant: "temporary",
  //             // persistentBehavior: "fit",
  //             width:0,
  //             // collapsible: true,
  //             // collapsedWidth:0,
  //             // headerMagnetEnabled: true,
  //           },
  //         },
  //       }, 
        
  //       rightInsetSidebar: {
  //         hidden: ['xs','sm'],
  //        config:{
  //         md:{
  //            position: "sticky",
  //            top: "4rem",
  //            width:156,
  //           //  headerMagnetEnabled:true,
  //         },
  //           lg:{
  //            position: "sticky",
  //            top: "4rem",
  //            width:156,
  //           //  headerMagnetEnabled:true,
  //         }
  //       }
  //           // config: {
  //           //   sm:{
  //           //     position: "absolute",
  //           //     top:2,
  //           //     width:'auto',
  //           //     // headerMagnetEnabled: true,
  //           //   },
  //             //   md:{
  //             //     top:2,
  //             //  position: "sticky",
  //             //   width: 'auto',
  //             //   // headerMagnetEnabled: true,
  //             // },

  //             // lg:{
  //             //   top:20,
  //             //  position: "fixed",
  //             //   width:156,
  //             //   headerMagnetEnabled: true,
  //             // },

  //             //  xl:{
  //             //   top:20,
  //             //  position: "fixed",
  //             //   width:156,
  //             //   headerMagnetEnabled: true,
  //             // },
  //           // },
  //         },
      
  //         //   leftInsetSidebar: {
  //         //     config:{
  //         //      xs:{
  //         //       position: "absolute",
  //         //       width:50,
  //         //       // headerMagnetEnabled: true,
  //         //     },
  //         //     sm:{
  //         //       position: "absolute",
  //         //       width:150,
  //         //       // headerMagnetEnabled: true,
  //         //     },
  //         //       md:{
  //         //      position: "absolute",
  //         //       width: 105,
  //         //       // headerMagnetEnabled: true,
  //         //     },
  //         //     lg:{
  //         //       position: "absolute",
  //         //        width: 105,
  //         //        // headerMagnetEnabled: true,
  //         //      },
  //         //   }
  //         // } 
  // }}   
  //          initialState={{
  //               leftEdgeSidebar: {
  //                 open: true,
  //                 collapsed:true,
  //                },
  //          }}
        >
        {children}
      </Roots>
    </Main>  
    )
}    