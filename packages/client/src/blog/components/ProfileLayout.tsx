
import * as React from 'react';
import { Link, useParams, useNavigate, } from 'react-router-dom';
import { Stack, Box, Grid, Typography, Avatar, Divider, SvgIcon, } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/system';
import { brandingDarkThemes as darkTheme, brandingLightThemes as lightTheme } from '../../utils/brandingTheme';
import { authored } from './LayoutBlog';
import { CoverImgStyle } from './GettingStarted';
import { slugify } from '../../components/BlogSearch';
import AvatarChip from '../../components/toggleComponent/AvatarChip';
import withTextStyles from '../../components/lib/WithTextStyles';
import { PassThrough } from '../../components/lib/utilityTypes';

const ModifiedButton = PassThrough;
const TextLink = withTextStyles;
function ProfileDetails({src, key, socialLogo, srcSet, alt, fullName, profileDescription}:{
src:string;
alt:string;
key?:number;
fullName:string;
srcSet:string;
socialLogo:[];
profileDescription:string
}){
const theme = useTheme();
const mdDown = useMediaQuery(theme.breakpoints.down('md'),{noSsr:true});

return(
        <Box sx={{
          display:'grid',
          padding:1,
          justifyContent:'center',
          gridTemplateColumns: mdDown ? '' : '1fr 3fr auto',
          gridAutoColumns:'repeat(auto-fill, minmax(33.5%, 1fr))',
          gridAutoRows:'auto auto auto',
          gap:'1em',
          gridAutoFlow:'dense',
        }} key={key}>
         <Box 
            sx={{
                margin:0,
                gridColumnStart: mdDown ? '': '1',
                gridRowStart:mdDown ? '':'2',
                justifySelf:'center',
                alignSelft:'center',
                }}>
                 <Avatar sx={{width:mdDown ? 75 : 120, height:mdDown ? 75 : 120}} src={src} alt={alt} srcSet={srcSet} />
         </Box>
                <Box color={'primary'}
                sx={{
                    ...theme.applyDarkStyles({
                             color: (theme.vars || theme).palette.primary[600],
                            backgroundColor: alpha(theme.palette.info[50], 0.5),
                            borderColor:(theme.vars || theme).palette.success[700],
                            boxShadow: `${alpha(theme.palette.grey[300], 0.5)} 0 -1px 0 1px inset, 
                            ${alpha(theme.palette.grey[100], 0.5)} 0 1px 1px 0`,
                    }),    
                    gridColumnStart:'span 3',
                    gridRowStart:'1',
                    width:'auto',
                    borderRadius:'.5em',
                    paddingRight:'.5em',
                    paddingBottom:'.5em',
                    borderBox:alpha(theme.palette.divider,0.7),
                    color: (theme.vars || theme).palette.primary[600],
                    backgroundColor: alpha(theme.palette.info[50], 0.5),
                    borderColor:(theme.vars || theme).palette.success[700],
                    boxShadow: `${alpha(theme.palette.info[300], 0.5)} 0 -1px 0 1px inset, ${alpha(theme.palette.info[100], 0.5)} 0 1px 2px 0`,
                }}
              
             >

                    <Box sx={{
                        margin:0,
                        justifySelf:'center',
                        alignSelft:'center',
                        gridColumnStart: mdDown ? '': 'span 2',
                        gridRowStart:mdDown ? '':'1',
                        padding:1,
                        }}>
                        <Typography variant='h1' 
                           sx={{
                            color:(theme)=>({color:theme.vars.palette.text.secondary}),
                           }}
                        >{fullName}</Typography>
                        </Box>

                     <Box sx={{
                            margin:0,
                            justifySelf:'flex-end',
                            alignSelft:'end',
                            gridColumnStart: mdDown ? '': '3',
                            gridRowStart:mdDown ? '':'1',
                            gap:(theme)=>({gap:theme.spacing(1)}),
                        }}
                     >
                        { 
                        socialLogo.map((item:any)=>{
                             return(
                                <TextLink 
                                  serve={Link} 
                                  
                                rel='noreferrer' 
                                  aria-label={item.link}
                                  target="_blank"
                                to={item.link} 
                                className="s17ojqon" 
                                   textContent={
                                        <SvgIcon className='s17ojqon'
                                            color='action' 
                                            fontSize='small'
                                            sx={{
                                                margin:theme.spacing(0,1),
                                                width:mdDown ? 'default' : 30, 
                                                height:mdDown ? 'default' : 30,
                                            }}
                                            viewBox='0 0 448 512'>{item.icon}
                                        </SvgIcon>
                                     }
                                    />
                             )
                        })}
                     </Box>
               </Box>
         <Box sx={{
            margin:0,
            justifySelf:'center',
            alignSelft:'center',
                gridColumnStart: mdDown ? '': 'span 3',
                gridRowStart:mdDown ? '':'2',
                }}>
                  <Typography variant={mdDown ? 'caption' : 'h5'}
                  sx={{
                    color:theme.palette.common.black,
                    fontFamily:theme.typography.fontFamilySystem,
                    ...theme.applyDarkStyles({
                        color:alpha(theme.palette.common.white,0.9),
                    })
                  }}
                   >{profileDescription}</Typography>
                </Box>
        </Box>
    )
}

function Profile({sSrData}:{sSrData:any[]}){
    const { name } = useParams() as any;
    const Navigate = useNavigate();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('md'),{noSsr:true});
    console.log(name)
    const handleClick=(value:any)=>{
         Navigate(`/blogs/${value}`)
    }
                 return(
                       <Grid container>
                        <Grid size={{xs:12}}>
                            <ProfileDetails 
                                src={authored[name].avatar}
                                alt={authored[name].name}
                                srcSet={authored[name].avatar}
                                fullName={authored[name].name}
                                profileDescription={authored[name].codename}
                                socialLogo={authored[name].socialAccount}
                            />
                        </Grid>
                         <Divider 
                            orientation='horizontal' 
                            sx={{
                                paddingTop: theme.spacing(7),
                                paddingBottom:theme.spacing(2),
                             }}>
                                <TextLink 
                                    types='typography' 
                                    innocent 
                                    tahoma 
                                    sx={{
                                        color:theme.palette.info[600],
                                        ...theme.applyDarkStyles({
                                            color:alpha(lightTheme.palette.grey[50],0.7),
                                        })
                                    }}
                                    variant={smDown ?'h4':'h2'} 
                                    textContent={
                                        authored[name].name + '\'s'+' POST'
                                } />
                          </Divider>   
                       {sSrData.map((item:{
                            image:string,
                            title:string,
                            description:string,
                            tags:any,
                            date:Date,
                            authors:any[],
                        },index:number)=>{
                    if(name === slugify(item.authors.find((name)=>name))){        
                       return(
                         <Grid size={{xs:12}} key={index}>
                        <Divider component={'div'} variant='middle' orientation='horizontal' sx={{pt:1,}}/>
                            <Stack direction={smDown ? "column" : "row"} spacing={2}> 
                                    <CoverImgStyle 
                                        sx={{ width:190, height:110}}
                                        alt={item.title} 
                                            src={`/${item?.image}`}
                                            />
                                <Divider component={'div'} variant='middle' orientation='horizontal' sx={{pt:1,}}/>
                            <Stack direction={"column"} spacing={smDown ? 1 : 2 } sx={{pt:smDown ? 1 : 2}}> 
                                <ModifiedButton condition='button' className='link-tags'
                                   to='#'
                                   sx={{
                                    border:'none',
                                    content:"''",
                                    cursor:'pointer',
                                    pointerEvents:'visible',
                                    margin:'0 0 0',
                                    textDecoration:'none',
                                    background:'inherit',
                                    backgroundColor:'inherit',
                                    color:lightTheme.palette.success[700],
                                    '& :hover':{
                                    background:'none',
                                    backgroundColor:'none',
                                    textDecoration:'underline',
                                    fontFamily:darkTheme.typography.fontFamilyCode,
                                    fontVariantCaps:'titling-caps',
                                    fontFeatureSettings:'initial',
                                    fontWeight:'bold',
                                    fontStyle:'italic',
                                    }
                                   }}
                                onClick={()=>handleClick(item.tags)}
                                color="primary"
                                >
                                    <TextLink types="typography" color='error' gadget variant='h5' innocent
                                    textContent={`${item.title}`}
                                    sx={{
                                        '& :hover':{
                                        textDecoration:'italic',
                                        },
                                        textDecoration:'none'}}
                                    />
                               </ModifiedButton> 
                                <Stack direction={'row'} spacing={2} >
                                    <TextLink types="typography" textContent={`${item.date}`}/>
                                    <AvatarChip
                                        tags={item.tags}
                                        // img={authored[slugify(item.authors.find((author:string)=>author))].avatar} 
                                        link='#'
                                        onClick={
                                            ()=> {
                                           setTimeout(()=>{
                                             Navigate(`blogs/${slugify(item.tags.find((tag:string)=>tag))}`)
                                           },200)     
                                        }
                                    }   
                                        altTitle={item.tags}
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
                                        {item.description}
                                    </Typography>
                                    
                            </Stack>      
                        </Stack>   
                    </Grid>   
                    )    
                 } 
                })}     
                     </Grid>   
                   )        
                }

export default Profile;