
import * as React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import  Stack from '@mui/material/Stack';

import Paper from "@mui/material/Paper";
import { withStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import withTextStyles from '../../components/lib/WithTextStyles';
import { authored } from './LayoutBlog';
import MarkdownElement  from './markdownElement';
import { styled, createTheme } from "@mui/material/styles";
// import Search from '../../components/Search';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Divider } from '@mui/material';

const TextLink = withTextStyles;
const ModifiedLink = withTextStyles;

const Avatarx = styled(Avatar)(({theme})=>({
  ...theme.typography.caption,
  margin:theme.spacing(2),
  [theme.breakpoints.down('sm')]:{
    width:'auto',
    height:'auto',
  },
  
}));

const Root = styled('div')(({theme}) => ({
  '& .getting-started-background-image':{
    background:'rgba(194, 194, 194, 0.27) url("/circles-white-gradient.png") no-repeat fixed center',
    Opacity:'0.2',
    backgroundBlendMode: 'lighten',
    width:'100%',
    height:'100%',
  },

    [theme.breakpoints.down('md')]:{
    '& .MuiAvatar-root-square-blog':{
       width:'20vh',
      heigth:'10vh',
    },
  },   
  }
));

interface COUNTPROPS {
  counting?:string[];
  numberOfBlogs?:number;

}

function GettingStarted(props:any){
    const { sSrData } = props;
    const { blogsId, title } = useParams();
    const location = useLocation();
    console.log(blogsId)
    const stored:any[] = [];
    const [state, setState] = React.useState<[key:string] | COUNTPROPS>({
       counting:[sSrData?.map((item:any)=>item = stored.push(item.title))],
    }) as COUNTPROPS as any;

     const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'),{noSsr:true})

       if(blogsId){
          return <Outlet />
       } else if(location.pathname === `/blogs/${title}/searchId`){
           console.log('TRUE============================')
           return <Outlet />
       }

    return (  
            <Root>
                    <Box sx={{
                      display:'grid',
                      width:'100%',
                      gridAutoColumns:'1fr',
                      gridAutoRows:'auto',
                    }}>
                      <Stack direction={'row'} spacing={1}>
                          {sSrData?.map((item: any,index: any)=>(
                            <div key={index + item}>
                                <Paper variant='outlined'>
                                  <Avatar variant='square'
                                      sx={{width:80, height:48,}} 
                                          alt='slider-image' 
                                              src={`${authored[item.authors.find((author:any)=>author)].avatar}`} 
                                                  srcSet={`${authored[item.authors.find((author:any)=>author)].avatar}`} />
                                </Paper>         
                            </div>
                          ))}  

                      </Stack>
                    </Box>

           <Box sx={{
                          width:'100%',
                        display:'grid',
                gridAutoColumns:'1fr', 
                   gridAutoRows:'auto',
                            gap:1}} component={'div'} 
                >
                    {sSrData?.map((content:{authors:any[],tags:any,title:string,description:string},index: any)=>(
                      <>
                         {/* <Search /> */}
                        <Divider component={'div'} variant='middle' orientation='horizontal' sx={{pt:1,}}/>
                               <Stack direction={smDown ? "column" : "row"} spacing={2}> 
                                  <Avatarx variant="square" className="MuiAvatar-root-square-blog"
                                        sx={{ width: smDown ? 750 : 190 , height: smDown ? 430 : 110}}
                                      alt="profile"
                                      src={`${authored[content.authors.find((author:any)=>author)].img}`}
                                    srcSet={`${authored[content.authors.find((author:any)=>author)].avatar}?s=${32 * 2} 2x`}
                                  />
                                  <Divider component={'div'} variant='middle' orientation='horizontal' sx={{pt:1,}}/>
                               <Stack direction={"column"} spacing={smDown ? 1 : 2 } sx={{pt:smDown ? 1 : 2}}> 
                                  <ModifiedLink serve={Link} sx={{textDecoration:'none',hover:'cyan'}}
                                  to={`${content?.tags}`}
                                  color="primary"
                                    textContent={
                                    <TextLink types="typography" color='error' gadget wrap variant='h6' innocent
                                      textContent={`${content.title}`} />
                                  }     
                                  /> 
                                  <Stack direction={'row'} spacing={2} >
                                     <ModifiedLink types='typography' gadget textContent={`By: `+authored[content.authors.find(author=>author)].name} 
                                                         color='info' innocent variant='caption' sx={{letterSpacing:1,}} />
                                     <Avatarx variant="square" className="MuiAvatar-root-square-blog"
                                        sx={{ width: 30 , height:30}}
                                      alt={content.tags}
                                      src={`${authored[content.authors.find((author:any)=>author)].avatar}`}
                                    srcSet={`${authored[content.authors.find((author:any)=>author)].avatar}?s=${32 * 2} 2x`}
                                  />
                                  </Stack>
                                    
                                  <MarkdownElement renderedMarkdown={content.description} />
                               </Stack>      
                          </Stack>   
                        </>   
                    ))} 
                </Box>
        </Root> 
    )
}

const defaultTheme = createTheme()
  export default withStyles({}, {defaultTheme})(GettingStarted);
