
import * as React from 'react';
import { Content as Contents, InsetContainer, } from "../../../../src/mui-treasury/layout-core-v5";
import ListItemButton from '@mui/material/ListItemButton';
import Container from '@mui/material/Container';
import { InsetSidebar } from '../../../../src/mui-treasury/layout-core-v5';
import { Link, useLocation, useParams } from 'react-router-dom';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import { useMediaQuery} from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import withTextStyles from '../components/lib/WithTextStyles';
import { authored } from '../blog/components/LayoutBlog';
import { Avatar } from '@mui/material';

const ModifiedButton = withTextStyles;
const Root = styled('div')(({theme})=>({
   flexGrow:1,
   display:'flex',
   width:'100%',
   '& .MuiContainer-root':{
      width:'100%',
      paddingLeft:6,
      paddingRight:6,
      [theme.breakpoints.down('sm')]: {
         width:'100%',
         marginLeft:0,
         paddingRight:10,
         paddingLeft:10
      }
   }
}))

type CONTENTPROPS = {
   children:React.ReactNode;
   sSrData?:any;
};

export default function Content(props:CONTENTPROPS){
 const { children, sSrData } = props;
 const [headerMagnet, setHeaderMagnet] = React.useState(false);

 const theme = useTheme();
 const { blogsId } = useParams();
const location = useLocation();
 console.log(blogsId);
 const smDown = useMediaQuery(theme.breakpoints.down('sm'),{noSsr:true})
  
    return (
          <Root>
            <Contents sx={{bgcolor:'background.paper'}}>
            <InsetContainer sx={{
                   width:'auto',
                   marginTop:2,
                   marginLeft:0,
                   marginRight:0,
                  }}
                rightSidebar={
                  <InsetSidebar anchor='right' sx={{
                       width:'auto',
                     //   marginTop:2,
                       marginLeft:0,
                       marginRight:0,
                       }}>
                         {sSrData?.map((item: { tags: any | null | undefined; authors: any[]; },index: any): any =>{
                           if(location.pathname.includes("/news") 
                              || location.pathname.includes("/home")
                              || location.pathname.includes("/tooling")
                              || location.pathname.includes("/management")
                              || location.pathname.includes("/projects")
                              || location.pathname.includes("/documentation")
                           ){
                              return null;
                          };

                           return smDown ? null :
                                  (
                                    <List dense disablePadding >
                                      <ListItemButton dense selected disableRipple>
                                       <Stack direction="row" spacing={1}>
                                           <Avatar src={`${authored[item.authors.find(author=>author)].img}`}
                                               sx={{width:20,height:20}} variant='square' /> 
                                                <ModifiedButton serve={Link} to={`blogs/${item.tags}`} key={item.tags} textContent={
                                                   <ModifiedButton size='small' types="typography" color="primary" textContent={
                                                         item.tags.find((name:any)=>name)
                                                      } sx={{fontSize:12,}} />
                                                } />   
                                       </Stack>
                                     </ListItemButton>
                                    </List>         
                                    )
                              }
                           )
                     }   
                  </InsetSidebar> 
                }>
                   <Container maxWidth={'xl'}>
                      {children}
                   </Container>
                  
                </InsetContainer>
            </Contents>
         </Root>
   )  
}
