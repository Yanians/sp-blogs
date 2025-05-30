
import * as React from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import  Stack from '@mui/material/Stack';
import { slugify } from '../../components/searchComponents/BlogSearch';
import AvatarChip from '../../components/toggleComponent/AvatarChip';
import { withStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import withTextStyles from '../../components/lib/WithTextStyles';
import { authored } from './LayoutBlog';
import { styled, createTheme,alpha, } from "@mui/material/styles";
import {brandingLightThemes as lightTheme, } from '../../utils/brandingTheme'
import { PassThrough } from "../../components/lib/utilityTypes";
import BlogCard from './BlogSingleCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Divider, } from '@mui/material';
import Typography from '@mui/material/Typography';

const ModifiedButton = PassThrough;
const TextLink = withTextStyles;
const ModifiedLink = withTextStyles;

export const CoverImgStyle = styled('img')({
  top: 0,
  objectFit:'cover',
  position: 'relative',
  width:'100%',
});

const Root = styled('div')(({theme}) => ({
  '& .getting-started-background-image':{
    background:'hsl(195, 9.10%, 91.40%) url("/circles-white-gradient.png") no-repeat fixed center',
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

interface routeProps {
  imageDir?: {
    id?:string,
    blogImage?:string,
  },
  [key:string]:any;
}

function GettingStarted(props:any){
    const { sSrData } = props;
    const { blogsId, title, name, } = useParams();
    const location = useLocation();
    const Navigate = useNavigate();
    const [routeMeta, setRouteMeta ] = React.useState<null | routeProps>(null);
    const stored:any[] = [];
    const [state, setState] = React.useState<[key:string] | COUNTPROPS>({
       counting:[sSrData?.map((item:any)=>item = stored.push(item.title))],
    }) as COUNTPROPS as any;
const handleClick=(value:string)=>{
    Navigate(value);
    console.log(value);
}
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'), {noSsr:true})
       if(blogsId){
          return <Outlet />
       } else if(location.pathname === `/blogs/${title}/searchId`){
           console.log('TRUE============================')
          return <Outlet />
       } 

    return (  
            <Root>
                {/* <Grid container spacing={1}>
                    {sSrData.map((item:any,index:number) => (
                        <BlogCard data={item} index={index+1}/>           
                    ))}
                </Grid> */}
           <Box sx={{
                      width:'100%',
                    display:'grid',
            gridAutoColumns:'repeat(auto-fill, minmax(50%, 1fr))', 
               gridAutoRows:'auto',
               gridAutoFlow:'dense',
                        gap:1,
                }} 
                component={'div'} 
                >
                    {sSrData?.map((content:{authors:any[],tags:any,image:string,title:string,description:string},index: React.Key)=>(
                      <>
                         <div key={index}>
                        <Divider component={'div'} variant='middle' orientation='horizontal' sx={{pt:1,}}/>
                               <Stack direction={smDown ? "column" : "row"} spacing={2}> 
                                      <CoverImgStyle 
                                        sx={{ width:190, height:110}}
                                          alt={content.title} 
                                            src={`${content.image}`}
                                            />
                                  <Divider component={'div'} variant='middle' orientation='horizontal' sx={{pt:1,}}/>
                               <Stack direction={"column"} spacing={smDown ? 1 : 2 } sx={{pt:smDown ? 1 : 2}}> 
                                  <ModifiedButton condition='button' className='link-tags'
                                  to="#"
                                  onClick={()=> handleClick(`${slugify(content.title)}/searchId`)}
                                  color="primary"
                                   sx={{
                                            border:'none',
                                            content:"''",
                                            cursor:'pointer',
                                            pointerEvents:'visible',
                                            margin:'0 0 0',
                                            textDecoration:'none',
                                            background:'transparent',
                                            backgroundColor:'transparent',
                                            color:lightTheme.palette.success[700],
                                            '& :hover':{
                                            background:'transparent',
                                            backgroundColor:'transparent',
                                            textDecoration:'underline',
                                            color:lightTheme.palette.success[700],
                                            fontFamily:(theme:any)=>({fontFamily:theme.typography.fontFamilyCode}),
                                            fontVariantCaps:'titling-caps',
                                            fontFeatureSettings:'initial',
                                            fontWeight:'bold',
                                            fontStyle:'italic',
                                            }
                                      }}
                                  >
                                    <TextLink types="typography" color='error' gadget variant='h5' innocent
                                      textContent={`${content.title}`}
                                       />
                                  </ModifiedButton> 
                                  <Stack direction={'row'} spacing={2} >
                                     <ModifiedLink types='typography' gadget textContent={`By: `+authored[slugify(content.authors.find(author=>author))].name} 
                                              color='info' variant='caption' sx={{letterSpacing:1,}} />
                                     <AvatarChip
                                        tags={content.tags}
                                         img={authored[slugify(content.authors.find(author=>author))].avatar} 
                                         link={`${slugify(content.tags.find((tag:string)=>tag))}/${slugify(content.authors.find((name:string)=>name))}/profile`}
                                        altTitle={content.tags}
                                  />
                                  </Stack>
                                    <Typography color='' sx={{
                                      fontFamily:((theme:any)=>({
                                        ...theme.typography.body2,
                                        fontFamily:theme.typography.fontFamilySystem,
                                        color:theme.applyStyles('dark',{
                                          color:`${alpha((lightTheme.vars|| theme).palette.common.white,0.9)}`,
                                          boxShadow:`${alpha(theme.palette.primaryDark[700], 0.5)} 0 1px 0 inset, 
                                            ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, 
                                            ${(theme.vars || theme).palette.common.black} 0 1px 0 0`,
                                        }),
                                      }))
                                    }}>
                                        {content.description}
                                    </Typography>
                                      
                               </Stack>      
                          </Stack>   
                         </div>
                      </>   
                    ))} 
                </Box>
        </Root> 
    )
}

const defaultTheme = createTheme()
  export default withStyles({}, {defaultTheme})(GettingStarted);
