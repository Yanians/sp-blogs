import * as React from 'react';
import { useParams } from 'react-router-dom';
import  {createTheme, alpha, useTheme, styled,  } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { Avatar, Divider, Stack, useMediaQuery } from '@mui/material';
import { Link, Outlet, } from 'react-router-dom';
import withTextStyles from '../../components/lib/WithTextStyles';
import MarkdownElement from './markdownElement';
import { authored } from './LayoutBlog';
import Box from '@mui/material/Box';
import { slugify } from '../../components/searchComponents/BlogSearch';
import { CoverImgStyle } from './GettingStarted';
const TextBlogTitle = withTextStyles;
const TextLink = withTextStyles;
const Description = withTextStyles;

const styles = (theme:any) => ({
    root:{
      ...theme.typography.caption,
      postion:'relative',
        flexGrow:1,
        fontFamily:theme.typography.fontFamilyCode,
        background:theme.palette.mode === 'dark'
        ? `linear-gradient(180deg, ${theme.palette.gradients.teal}  0%,rgb(13, 63, 0) 100%))`
        : `linear-gradient(180deg, ${theme.palette.gradients.warning}  0%,rgb(206, 169, 8) 100%))`,
        backgroundSize:'auto auto',
        backgroundRepeat:'no-repeat',
        color:theme.palette.mode === 'dark' ? 'white' : 'inherit',
    },
    back:{
         display: 'flex',
      alignItems: 'center',
    marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(-1),
    },
    container: {
        paddingTop: 60 + 20,
        marginBottom: theme.spacing(8),
        maxWidth: `calc(740px + ${theme.spacing(12)})`,
        '& h1': {
          marginBottom: theme.spacing(3),
          color:theme.palette.mode === 'dark' ? 'white':'inherit',
        },
        '& .markdown-body': {
          fontSize: theme.typography.pxToRem(16),
          lineHeight: 1.7,
          color:theme.palette.mode === 'dark' ? 'white':'inherit',
        },
        '& img, & video': {
          display: 'block',
          margin: 'auto',
        },
        '& strong': {
          // color: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[900],
          color:theme.palette.mode === 'dark' ? 'white':'inherit',
        },
        '& pre': {
          fontSize: theme.typography.pxToRem(16),
        },
        '& summary': {
          padding: 8,
          fontSize: theme.typography.pxToRem(14),
          fontWeight: theme.typography.fontWeightMedium,
          // color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
          color:theme.palette.mode === 'dark' ? 'white':'inherit',
        },
        '& details': {
          paddingLeft: 16,
          paddingRight: 16,
          background:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.primary[900], 0.3)
              : alpha(theme.palette.grey[50], 0.5),
          border: '1px solid',
          borderRadius: 10,
          borderColor:
            theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[200],
          transitionProperty: 'all',
          transitionTiming: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '200ms',
          '&:hover, &:focus-visible': {
            background:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary[900], 0.4)
                : theme.palette.grey[50],
            borderColor:
              theme.palette.mode === 'dark' ? theme.palette.primaryDark[500] : theme.palette.grey[300],
          },
        },
        '& th': {
          textAlign: 'left',
          borderBottom: `3px solid rgba(62, 80, 96, 0.2) !important`,
        },
        '& .blog-description': {
          fontSize: theme.typography.pxToRem(13),
          textAlign: 'left',
          color: theme.palette.grey[600],
          '& a': {
            color:
              theme.palette.mode === 'dark' ? theme.palette.primary[300] : theme.palette.primary[600],
            textDecoration: 'underline',
          },
        },
      },
      time: {
        color: theme.palette.text.secondary,
        ...theme.typography.caption,
        fontWeight: 500,
      },
});

const Background = styled('div')(({theme})=>({
  '& .blog-overview-background':{
  background: 'url("/gradient-degrees.png") no-repeat fixed center',
  padding:theme.spacing(2),
   width:'inherit',
   height:'auto',
  },

  '& .markdown-body':{
    [theme.breakpoints.down('sm')]:{
       '& p, & strong, & pre, & blockquote, & summary, & code, & details, h1, & h2, & h3, & h4, & h5, & .MuiAvatar-root, & img':{
        width:'auto',
        fontSize: theme.typography.pxToRem(12),
        height:'auto',
       }
    }
  },
}));

function BlogsOverview(props:any){
    const { classes, sSrData } = props;
    const { blogsId, name, profile, } = useParams();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'),{noSsr:true,})
        if(name){
          return <Outlet />
        }
    return (
            <Background>
              <Box 
                  sx={{
                      display:'flex', 
                      flexDirection:'row',
                      flexWrap:'nowrap',
                      flexFlow:'row',
                      justifyContent:'flex-start',
                      width:'100%',
                      padding:(theme)=>({padding:theme.spacing(2)}),
                    }}
                  >
                  { sSrData?.map((post:any) : any  =>{
                      if(blogsId === post.tags.find(((tag:any)=>tag))){
                        return (
                          <>
                              <Box 
                                  sx={{
                                    width:'70%',
                                  }}
                                  className="blog-overview-background"
                              >
                                  <Box sx={{gridRow:'1', gap:1}}>
                                        <Stack direction='row' spacing={1}>
                                            <Avatar sx={{width:26, height:26}} variant='rounded' src={`${authored[slugify(post.authors.find((name:any)=>name))].avatar}`}/>
                                              <TextBlogTitle  textContent={post.slug} variant="subtitle2" shadow2red andali />
                                              <TextLink serve={Link} to={`${slugify(post.authors.find((author:string)=>author))}/profile`} 
                                                  textContent={slugify(post.authors.find((author:any)=>author))} 
                                                    variant="subtitle2" shadow2red andali />
                                                    <Description shadow2red variant='subtitle2' andali textContent={post.date} />
                                        </Stack>
                                        
                                  </Box>  

                                  <Box component={'div'}
                                    sx={{
                                      display:'flex',
                                      flexFlow:'no-wrap',
                                      justifyContent:'flex-start',
                                      width:'100%',
                                    }}>
                                      <Box component="div"
                                      sx={{width:'100%',flexGrow:1}}>
                                          <TextBlogTitle
                                              types='typography' 
                                              color='success' 
                                                gadget
                                                focus
                                                sx={{letterSpacing:1}}
                                                  variant="h2" 
                                                    textContent={post.title}
                                            />
                                      </Box>
                                  </Box>

                                  <Box sx={{gridColumn:1, gap:1, py:5}}>
                                    <Avatar 
                                    sx={{
                                          width:450,
                                          height:310,
                                        }} 
                                            variant='square'  
                                              src={`${authored[slugify(post.authors.find((author:any)=>author))].img}`}
                                                alt={`${authored[slugify(post.authors.find((author:any)=>author))].name}`}
                                                srcSet={`${authored[slugify(post.authors.find((author:any)=>author))].avatar}?s=${32 * 2} 2x`}
                                            />
                                  </Box> 

                                  <Box sx={{ gridColumn:1}} component="div">
                                    {/* <Stack direction={'column'} spacing={1}> */}
                                        <Description gadget variant='h4'  color='inherit'  types='typography' textContent={post.description} />
                                        <MarkdownElement renderedMarkdown={post.outputRender} />
                                    {/* </Stack> */}
                                  </Box>  
                              </Box>  
                              <Box sx={{
                                width:'30%',
                                }} 
                                className="blog-overview-background"
                              >
                                  <Stack direction={'row'} spacing={1}>
                                      <Avatar className='square'
                                            sx={{width:50,height:50}} 
                                            variant='square'
                                              src={`${authored[slugify(post.authors.find((author:any)=>author))].avatar}`} 
                                              />
                                      <Stack direction={'column'}>
                                        {authored[slugify(post.authors.find((author:any)=>author))].name}
                                            <Divider orientation='horizontal' variant='middle' textAlign='left' sx={{p:1}}>
                                              <Stack direction={'row'} spacing={1}>
                                                  <Avatar src="/m16.jpg" variant='square' sx={{width:25,height:25,}} />
                                                  <Avatar variant='square' sx={{width:25,height:25,}} />
                                                  <Avatar variant='square' sx={{width:25,height:25,}} />
                                              </Stack>
                                            </Divider>
                                      </Stack>        
                                  </Stack>
                                        {post.authors.find((author: any) => author)}
                                      <MarkdownElement codename={
                                        `<ul class='feature-list'>
                                          <li>
                                              <code>
                                              ${authored[slugify(post.authors.find((author: any) => author))].codename}
                                              </code>
                                          </li>
                                        </ul>`
                                        } />
                              </Box>
                          </>   
                        )
                  }
                  })}
              </Box>       
            </Background>       
    )
}

const defaultTheme = createTheme();

export default withStyles({}, { defaultTheme})(BlogsOverview)