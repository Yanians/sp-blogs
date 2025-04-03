
import * as React from 'react';

import Container from "@mui/material/Container";
import { Content as Contents, InsetContainer } from "@treasury/layout-core-v5";
import { Routes } from '@routes/routes';
import { PassThrough } from '@lib/utilityTypes';
import Directives from '@lib/directives';
import Checkbox from "@mui/material/Checkbox";
import { InsetSidebar } from '@treasury/layout-core-v5';
import Hidden from '@mui/material/Hidden';
import { Box, FormControlLabel } from '@mui/material';
export default function Content({children}:{children:React.ReactNode}){
 const { ListItemStyle, LinkModified, } = Directives();
 const [headerMagnet, setHeaderMagnet] = React.useState(false);
 const ItemButton = PassThrough;
 const Text = PassThrough;
    return (
     <Contents sx={{bgcolor:'Background.default'}}>
        <InsetContainer
         maxWidth={"xl"}
        sx={{
            color:'grey.600',
            bgcolor:'background.paper',
          }}
         leftSidebar={
            <InsetSidebar>
               <Box sx={{position:'static',background:'background.paper'}}>
                          { Routes.map((item,index)=>{
                            return (
                                <LinkModified to={item.link}>
                                   <ItemButton dense key={index}
                                      add={ListItemStyle}
                                   >
                                      <Text align='center' noWrap condition='typography'>
                                         {item.Title}
                                      </Text>  
                                  </ItemButton>       
                                </LinkModified>  
                                )
                            })   
                          }
            </Box>              
            </InsetSidebar>
          
        } >
            <Box pl={15} height={"1000px"} width="100%">
                     <p>
                        Scroll the content, then enable header magnet and scroll again
                     </p>
                     <FormControlLabel
                        label="Header Magnet Enabled"
                        control={<Checkbox />}
                        onChange={(_, checked) => setHeaderMagnet(checked)}
                     />
                     {children}
            </Box>
        </InsetContainer>
     </Contents>

   // <Contents>
   //      <InsetContainer
   //        maxWidth={"md"}
   //        leftSidebar={
   //          <InsetSidebar sx={{ bgcolor: "background.paper" }}>
   //            <Box p={2}>Hello test</Box>
   //          </InsetSidebar>
   //        }
   //      >
   //        <Box p={2} height={"1000px"} width="100%">
   //          <p>
   //            Scroll the content, then enable header magnet and scroll again
   //          </p>
   //          <FormControlLabel
   //            label="Header Magnet Enabled"
   //            control={<Checkbox />}
   //            onChange={(_, checked) => setHeaderMagnet(checked)}
   //          />
   //          {children}
   //        </Box>
   //      </InsetContainer>
   //    </Contents>

    )
}
