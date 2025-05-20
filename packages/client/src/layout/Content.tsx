
import * as React from 'react';
import { Content as Contents, InsetContainer, } from "../../../../src/mui-treasury/layout-core-v5";

import Container from '@mui/material/Container';
import { InsetSidebar } from '../../../../src/mui-treasury/layout-core-v5';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery} from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import withTextStyles from '../components/lib/WithTextStyles';
import { authored } from '../blog/components/LayoutBlog';
import { Avatar, ButtonGroup, Button, Stack, } from '@mui/material';
import Typography from '@mui/material/Typography';

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
 const theme = useTheme();
 const { blogsId } = useParams();
const location = useLocation();
const Navigate = useNavigate();
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
                       marginLeft:0,
                       marginRight:0,
                       }}>

                         {sSrData?.map((item: {image:string, tags: any | null | undefined; authors: any[]; },index: any): any =>{
                           if(location.pathname.includes("/news") 
                              || location.pathname.includes("/home")
                              || location.pathname.includes("/tooling")
                              || location.pathname.includes("/management")
                              || location.pathname.includes("/projects")
                              || location.pathname.includes("/documentation")
                           ){
                              return null;
                          };

                           return smDown ? null :location.pathname.includes('/managment') ? null :
                              (
                              <ButtonGroup fullWidth size='small'
                                 orientation="vertical"
                                 aria-label="Vertical button group"
                                 variant="text"
                              >
                                       <Button size="small" key={index + 1} startIcon={
                                             <Avatar sizes='small' src={`/${item.image}`}
                                                sx={{width:20,height:20}} variant='square' />
                                       } onClick={()=>
                                          Navigate(`blogs/${item.tags}`)
                                       } >
                                          <Typography align='left' fontSize={'small'} component="div" noWrap sx={{flexGrow:1}}>
                                             {item.tags.find((name:any)=>name)}
                                          </Typography>   
                                        </Button>
                              </ButtonGroup>
                              )
                            })
                        }
                  </InsetSidebar> 
                }>
                   <Container disableGutters maxWidth={'xl'}>
                      {children}
                   </Container>
                  
                </InsetContainer>
            </Contents>
         </Root>
   )  
}
