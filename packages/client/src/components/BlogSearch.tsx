import React, { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import type { FuseResult, FuseResultMatch } from 'fuse.js';
import { alpha, styled,} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { brandingDarkThemes as darkTheme, brandingLightThemes as lightTheme } from '../utils/brandingTheme'
import SearchIcon from '@mui/icons-material/Search';
import AvatarChip from './toggleComponent/AvatarChip';
import { authored } from '../blog/components/LayoutBlog';
import { Chip, Typography, Box, Modal, Fade, Backdrop, IconButton, Divider } from '@mui/material';
import { useNavigate, Link, useParams, Outlet } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery, useTheme } from '@mui/system';

const Search = styled('div')(({ theme }) => [
  {
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  position: 'relative',
  display:'flex',
  alignItems: 'center',
  gap: '1px',
  cursor: 'pointer',
  border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
  // borderRadius: (theme.vars || theme).shape.borderRadius,
  backgroundColor: alpha(darkTheme.palette.common.white, 0.95),
  '&:focus-visible': {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: '1px',
  },
  '&:hover': {
        background: alpha(darkTheme.palette.grey[50], 0.4),
        borderColor: alpha((lightTheme.vars || theme).palette.grey[100], 0.5),
        boxShadow: 'none',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(1),
    width: 'auto',
  },
  [theme.breakpoints.only('xs')]: {
        backgroundColor: 'transparent',
        padding: 0,
        justifyContent: 'center',
  },
},
   theme.applyDarkStyles({
        backgroundColor: alpha(darkTheme.palette.primaryDark[100], 0.5),
        borderColor: alpha(lightTheme.palette.grey[100], 0.99),
        boxShadow: `${alpha(theme.palette.primaryDark[600], 0.1)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
        '&:hover': {
          background: alpha((darkTheme.vars || theme).palette.primaryDark[500],.99),
          borderColor: alpha((darkTheme.vars || theme).palette.success[600],.75),
          boxShadow: `${alpha(theme.palette.primaryDark[600], 0.1)} 0 1px 0 inset, 
          ${(theme.vars || theme).palette.success[300]} 0 -1px 0 inset, 
          ${(theme.vars || theme).palette.primaryDark[200]} 0 1px 2px 0`,
        },
  }),
]);

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
 color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


  const Escape = styled('kbd')(({ theme }) => {
    return {
      all: 'unset',
      display:'flex',
      flexGrow:1,
      width:'50px',
      wrap:'no-wrap',
      fontSize: theme.typography.pxToRem(12),
      fontWeight:theme.typography.fontWeightBold,
      lineHeight: '19px',
      marginRight:5,
      // mx:5,
      // marginLeft: theme.spacing(1),
      border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
      backgroundColor: '#FFF',
      padding: theme.spacing(0, 0.5),
      borderRadius: 7,
      zIndex:1000,
      ...theme.applyStyles('dark',{
        color:theme.palette.primaryDark[900],
        borderColor: (theme.vars || theme).palette.grey[600],
        backgroundColor: (theme.vars || theme).palette.error.contrastText,
      }),

    };
  });

type SearchProps = {
  item?: { title?:string; description:string};
  [key:string]:any;
}

export function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')   // remove non-word characters
      .trim()
      .replace(/\s+/g, '-')       // replace spaces with -
  }

export default function BlogSearch({sSrData, open, onClose, }:{sSrData:any[]; open:boolean; onClose:()=>void}) {
  const [query, setQuery] = useState('');
  const { name, profile} = useParams();
  const navigate = useNavigate();
  const FADE_DURATION = 120; // ms
  const macOS = window.navigator.platform.toUpperCase().includes('MAC');

  const fuse = useMemo(() => new Fuse(sSrData, {
    keys: ['title', 'description', 'tags','authors'],
    includeMatches: true,
    threshold: 0.4,
    ignoreLocation: true,
    minMatchCharLength: 2,
  }), [sSrData]);

  const results = query.trim() ? fuse.search(query) : sSrData?.map((item: any) => ({ item }));

  const highlightMatch = (
    text: string, 
    matches: ReadonlyArray<FuseResultMatch> | undefined, 
    key: string) => {

    const match = matches?.find(m => m.key === key);
    if (!match?.indices.length) return text;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    match.indices.forEach(([start, end], i) => {
      if (start > lastIndex) {
        parts.push(text.slice(lastIndex, start));
      }
      parts.push(<mark key={i}>{text.slice(start, end + 1)}</mark>);
      lastIndex = end + 1;
    });

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  // const handleClick=(value:string)=>{
  //   console.log(value);
  //     navigate(value)
  // }

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'),{noSsr:true})
  return (
    <Modal
       open={open} 
        onClose={onClose} closeAfterTransition
           slots={{backdrop:Backdrop}}
           slotProps={{
            backdrop:{
              timeout:300,
            }
           }}
           sx={{
               zIndex:darkTheme.zIndex.tooltip + 100,
               backgroundColor:alpha((lightTheme.vars || lightTheme).palette.grey[50], 0.4),
               backdropFilter: 'blur(6px)',
            }}
        >
       <Fade in={open} appear>
            <Box
            sx={{
                position: "fixed",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                width: smDown ? "80%" : "60%",
                maxHeight: "80%",
                overflowY: "auto",
                transition: `opacity ${FADE_DURATION}ms`,
                opacity:0,
               zIndex:(themes)=>themes.zIndex.tooltip + 100,
                  ...theme.applyStyles('dark',{
                  backgroundColor: alpha((darkTheme.vars || theme).palette.primaryDark[800], 0.99),
              }),
              backdropFilter: 'blur(10px)',
              }}
            >
                <Box
                    sx={{
                        position: 'sticky',
                        top: 0,
                        left:0,
                        height:'auto',
                        color:'inherit',
                        backgroundColor:(theme)=> theme.palette.mode === 'dark' ?
                            theme.applyDarkStyles({
                            backgroundColor: alpha(theme.palette.secondary[900], 0.99),
                            borderColor: alpha(theme.palette.primaryDark[600], 0.8),
                            boxShadow: `${alpha(theme.palette.primaryDark[600], 0.4)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 1px 0`,
                            '&:hover': {
                              background: (theme.vars || theme).palette.warning[100],
                              borderColor: (theme.vars || theme).palette.common.white,
                              boxShadow: 'none',
                           },
                        }): theme.applyStyles('light', {
                            backgroundColor: alpha(theme.palette.common.white, 0.8),
                            borderColor: alpha(theme.palette.grey[600], 0.8),
                            boxShadow: `${alpha(theme.palette.grey[200], 0.5)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
                            '&:hover': {
                              background: alpha((lightTheme.vars || theme).palette.background.paper, .99),
                              color:lightTheme.palette.primaryDark[900],
                              borderColor: (theme.vars || theme).palette.common.white,
                              boxShadow: `${alpha((lightTheme.vars|| theme).palette.primaryDark[700], 0.5)} 0 1px 1px inset, 
                              ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, 
                              ${(theme.vars || theme).palette.common.black} 0 1px 1px 0`,
                           },
                          }),   
                        zIndex: 1000,
                        pb:-2,
                    }}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                  </Box>
                  <Box sx={{flexGrow:1,}}>
                      <Search>
                          <SearchIconWrapper>
                            <SearchIcon />
                          </SearchIconWrapper>
                             <StyledInputBase onChange={(e)=> setQuery(e.target.value)}
                                 placeholder="Search…"
                                 inputProps={{ 'aria-label': 'search' }}
                              />
                        <Escape aria-hidden="true">{macOS ? '⌘' : 'esc '}key</Escape>
                      </Search>     
                   </Box>
                </Box>

                 <Box 
                      sx={{
                        mb: 2,
                        padding:(theme)=>theme.spacing(1,2),
                          backgroundColor:
                      (theme)=>theme.palette.mode === 'dark'
                        ? theme.applyDarkStyles({
                          backgroundColor: alpha(lightTheme.palette.grey[900], 0.75),
                        }) :theme.applyStyles('light',{
                          backgroundColor: alpha(lightTheme.palette.grey[100], 0.89),
                        })   
                        }}
                  >
                {results.map((res:any,index:React.Key) => {
                    const { item, matches } = res as FuseResult<SearchProps>;
                    return (
                        <Box key={index} 
                           sx={{
                            display:'flex',
                            flexGrow:1,
                            flexDirection:'column',
                            justifyItems:'center',
                            padding:4,
                            border:(theme)=> alpha((lightTheme.vars || theme ).palette.grey[800],.45),
                            boxShadow:(theme)=> `${alpha(theme.palette.primaryDark[700], 0.5)} 0 1px 0 inset, 
                              ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, 
                              ${(theme.vars || theme).palette.common.black} 0 1px 0 0`,

                          }}>
                            <AvatarChip 
                                  tags={authored[slugify(item.authors.find((author:string)=>author))].name}
                                  img={authored[slugify(item.authors.find((author:string)=>author))].avatar} 
                                  altTitle={item.title} 
                                  link={'#'}
                                  onClick={()=>{
                                    onClose();
                                    setTimeout(()=>{
                                     navigate(`blogs/${slugify(item.tags.find((tag:string)=>tag))}/${slugify(item.authors.find((name:string)=>name))}/profile`)
                                   },200)  
                                  }}
                                  // link={`blogs/${slugify(item.authors.find((name:string)=>name))}`}
                               />   

                            <Typography variant="h6" color="default">
                            {highlightMatch(item.title, matches, 'title')}
                            </Typography>
                             <Box component="button" key={item.title}
                                 onClick={() => {
                                    onClose(); // trigger modal closing
                                       setTimeout(() => {
                                      navigate(`blogs/${slugify(item.title)}/searchId`);
                                    }, 100); // wait for transition (adjust if needed)
                                 }}
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
                                    textDecoration:'underline',
                                    fontFamily:darkTheme.typography.fontFamilyCode,
                                    fontVariantCaps:'titling-caps',
                                    fontFeatureSettings:'initial',
                                    fontWeight:'bold',
                                    fontStyle:'italic',
                                    color:(theme)=>
                                    theme.applyDarkStyles({
                                      color:darkTheme.palette.common.white,
                                    })
                                  }
                                }}
                             >
                               <Typography color="default" variant="body2" sx={{ mb: 1 }}>
                                 {highlightMatch(item.description, matches, 'description')}
                               </Typography>
                            </Box>
                        </Box>      
                      );
                })}
             </Box>   
            </Box> 
      </Fade>   
  </Modal> 
  );
}
