//@ts-nocheck
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { spacing, useMediaQuery } from '@mui/system';
import Stack from '@mui/material/Stack';
import Home from './Home';
import { UseAuth } from '../AuthContext';
import Typography from '@mui/material/Typography';
import withTextStyles from '../components/lib/WithTextStyles';

const ModifiedText = withTextStyles;
const Root = styled(Container)(({theme})=>({
      display:'flex',
      overflow:'hidden',
      '& .left-grid-layout':{
            backgroundBlendMode:'lighten',
      },

      '& .right-grid-layout':{
            backgroundBlendMode:'lighten',
      },

      '& .background-one':{
         background:' url("/abstract-vector.jpg") no-repeat center',
         with:'100%',
         height:'auto',
         backgroundOrigin:'initial',
         backgroundBlendMode:'lighten',
      },
      '& .background-two':{
         background:' url("/ampere-porting-advisor.jpg") no-repeat center',
         with:'100%',
         height:'auto',
         backgroundOrigin:'initial',
         backgroundBlendMode:'lighten',
      },
}));

export default function MainRoute(){
const { token } = UseAuth();
const theme = useTheme();
const smDown = useMediaQuery(theme.breakpoints.down('sm'),{noSsr:true});

     return(
      <Root maxWidth="xl" disableGutters>
            {/* Parent element grid */}
            <Box component="div" 
                    sx={{
                        display:'grid',
                        width:'100%',
                        gridAutoColumns:smDown ? '100%': '50% 50% 100%',
                        gridAutoRows:'auto auto auto',
                    }}
                >

                 {/* first element grid left */}
                  <Box className="left-grid-layout"
                   sx={{
                        width:'100%',
                        alignSelft:'center',
                        height:'auto',
                        gridColumnStart:smDown ? 1 : 1,
                        gridRowStart:smDown ? 2 : 1,
                  }}>
                        {/* inside first element grid left */}
                              <Box 
                              sx={{
                                    display:'grid',
                                    width:'100%',
                                    gridAutoColumns:'65% 25%',
                                    gridAutoRows:'auto auto',
                              }}
                              >
                                    <Box sx={{
                                          width:'100%',
                                          height:'auto',
                                          alignSelft:'center',
                                          gridColumnStart: 1,
                                    }}>    
                                          <Avatar variant='square' src='/user-profile-bg.jpg' alt="usre-profile-bg" 
                                          sx={{width:'100%', height:'auto'}}/>               
                                    </Box>
                                  {/* two boxes */}
                                    <Box component={'div'} sx={{
                                          display:'grid',
                                          flexGrow:2,
                                          width:'100%',
                                          height:'auto',
                                          alignSelft:'center',
                                          gridColumnStart: 2,
                                    }}>
                                          <Stack direction={'column'} spacing={2}  
                                            sx={{ 
                                                flexGrow:1,width:'100%', height:'auto',m:2,
                                                position:'relative',top:10, left:0,
                                                }}>
                                                <Paper variant="outlined" className='background-one' 
                                                   sx={{pl:1}}
                                                   >
                                                  <ModifiedText types='typography' mui impact component={'div'} noWrap
                                                  variant="h4" color="success" textContent="News Update" />
                                                </Paper>   
                                                <Paper variant="outlined" className='background-two'
                                                   sx={{pl:1, width:'default', height:100}}
                                                   >
                                                  <ModifiedText types='typography' mui impact component={'div'} noWrap
                                                  variant="h4" color="secondary" textContent="Blogs 2025" />
                                                </Paper>   
                                          </Stack>    

                                    </Box>
                              </Box>
                              
                              <Box component={'div'} sx={{
                                          flexGrow:1,
                                          width:'100%',
                                          height:'auto',
                                          alignSelft:'center',
                                          gridColumnStart:1,
                                          gridRowStart:2,
                                    }}>
                                        <Avatar variant='square' src="/blog-cluster.jpg" alt="javascript-language" sx={{width:'100%', height:'auto'}} />
                              </Box>
                       
                  </Box>

                  {/* Second element grid */}
                  <Box  className="right-grid-layout"
                  sx={{
                        width:'100%',
                        height:'auto',
                        alignSelft:'center',
                        gridColumnStart:smDown ? 1 : 2,
                        gridRowStart:smDown ? 1 : 1,
                  }}>
                    <Avatar variant='square' src='/bloggers-markdown.jpg' sx={{width:'100%',height:'auto'}} alt="bloggers-markdown.jpg" />
                  </Box>

                  <Divider variant="middle" orientation="vertical" spacing={1}  />

                  {/* third element grid  */}
                  <Box  className="right-grid-layout"
                  sx={{
                        width:'100%',
                        height:'auto',
                        alignSelft:'center',
                        gridColumnStart:smDown ? 1 : 'span 2',
                        gridRowStart:smDown ? 3 : 2,
                  }}>
                    <Avatar variant='square'  src='/NEWS-UI.jpg' sx={{width:'100%',height:'auto'}} alt="bloggers-markdown.jpg" />
                  </Box>
            </Box>
      </Root>
     )
}