//@ts-ignore
import * as React from 'react';
import MuiToolbar from '@mui/material/Toolbar';
import { Header, EdgeTrigger, useLayoutCtx, } from '../../../../src/mui-treasury/layout-core-v5';
import { Button, ButtonGroup, IconButton, } from '@mui/material';
import { useColorSchemeShim, useChangeTheme } from '../utils';
import Menu from '@mui/icons-material/Menu';
import HeaderTabs from '../components/HeaderTabs';
import BlogSearch from '../components/BlogSearch';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Box from '@mui/material/Box';
import ArticleIcon from '@mui/icons-material/Article';
import ThemeToggleButton from '../components/toggleComponent/toggleModeButton';
import { useDocSearchKeyboardEvents } from '@docsearch/react';
import ToggleButton from '../components/toggleComponent/ToggleButton';
import { useMediaQuery } from '@mui/system';
import Tabs from '@mui/material/Tab';

 import { buttonGroupClasses } from '@mui/material/ButtonGroup';

import { styled, useColorScheme } from '@mui/material/styles';
import { brandingLightThemes as lightTheme, brandingDarkThemes as darkTheme } from '../utils/brandingTheme';
import { useTheme, alpha, } from '@mui/material/styles';
import WithFont from '../components/lib/WithTextStyles';
import { useNavigate } from 'react-router-dom';

  const TextHeader = WithFont;
  const HeaderButton = WithFont;
  const TabsModified = WithFont;
interface ROUTEPROPS {
      link?: ROUTEPROPS[],
        id?: number;
  pathname?: string;
      icon?: string;
      name?:string;
     title?: string;
};

export const pages: readonly ROUTEPROPS[] = [
  {
    id:1,
    pathname: '/getting-started',
        icon: 'HomeIcon',
        link: [
            { name:'/home'},
            { name:'/blogs'},
            { name:'/management'},
          ]
  }    
];

const HeaderStyle = styled(Header)(({theme})=>({

}))


const StyledToolbar = styled(MuiToolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

  const tabMenu = [
    {
      name:'Blogs',
      icon:<NewspaperIcon fontSize='small' />,
    },
    {
      name:'News',
      icon:<ArticleIcon fontSize='small' />,
    }
  ]

export default function Headers({sSrData}:{sSrData:any[],}){

  const { state:{leftEdgeSidebar,rightEdgeSidebar},
  toggleLeftSidebarOpen,
  toggleRightSidebarOpen,
 } = useLayoutCtx();

    const { mode, setMode } = useColorSchemeShim();
    const dispatch = useChangeTheme();
    const [state, setState ] = React.useState({
      setStateTabs:0,
      openLeft:false,
    });
    const [isOpen, setIsOpen ] = React.useState(false);
    const Navigate = useNavigate();
    const theme = useTheme();
    const { setMode:setModes } = useColorScheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'),{noSsr:false})     
    const searchButtonRef = React.useRef(null);

      const handleClick=(event:any)=>{
            const name = event.target.textContent;
            if(name === 'home'){
                return Navigate('/');
            }else if(name === 'blogs'){
                return Navigate('/blogs');
            }else if(name === "documentation"){
              return Navigate('/documentation');
            }else if(name === "tooling"){
              return Navigate('/tooling');
            }else if(name === 'news'){
              return Navigate('/news');
            }else if(name === "projects"){
              return Navigate('/projects');
            }else if(name === 'management'){
              return Navigate('/management');
            }else {
              const paths = pages.map((find, _)=>find.pathname)
              Navigate(`${paths}`);
            }     
     }

     const handleChangeMode = () => {
      const nextMode = mode === 'dark' ? 'light' : 'dark';
      console.log(nextMode);
         setMode(nextMode); // sets 'mui-mode' and triggers calculatedMode effect
         setModes(nextMode);
        dispatch({ type: 'CHANGE', payload: { paletteMode: nextMode } });
    };

    const handleChangeTabs=(event:React.SyntheticEvent, newValue:number)=> {
           setState({...state, setStateTabs:newValue,})
    }

         const onOpen = React.useCallback(() => {
                     setIsOpen(true)
           }, [isOpen]);
     
         const onClose = React.useCallback(() => {
                    setIsOpen(false)
           }, [state]);

        useDocSearchKeyboardEvents({
          isOpen,
          onOpen,
          onClose,
          searchButtonRef,
        });

  const { setStateTabs,openLeft, } = state;
  console.log(setStateTabs);

  const handleLeftSibarOpen=()=>{
    setState({...state, openLeft:!openLeft,});
        toggleLeftSidebarOpen();
  }

  return (
    <Box sx={{flexGrow:1,}} flexDirection={'row'}>
      
          <Header sx={{display:'flex', width:'inherit', height:'inherit',marginTop:5,}}>
            <MuiToolbar>
                    
                      <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
                            {(open, setOpen) => (
                                <HeaderButton serve={IconButton} onClick={e=>{
                                     openLeft ? setOpen(!open):handleLeftSibarOpen();
                                }}
                                  textContent={
                                    <Menu fontSize="small" color='inherit' /> 
                                  }
                                />
                             )}
                      </EdgeTrigger>
                     
                            <TextHeader sx={{flexGrow:1}} noWrap color='success'
                              platino 
                                mui
                                variant='h6' 
                                 types='typography' 
                                  textContent={"SP-Blogs"} 
                            />    
                             <TabsModified  mui gadget textContent={
                                <HeaderTabs value={setStateTabs} onChange={handleChangeTabs} tabs={
                                   tabMenu.map((item,_)=>{
                                      return (
                                          <Tabs iconPosition='top'  label={item.name} icon={item.icon} />
                                      )
                                })
                             } />
                             } />
                             <Box sx={{flexGrow:1}}  />
                      
                            <ToggleButton willOpen={onOpen} />
                            <BlogSearch sSrData={sSrData} open={isOpen} onClose={onClose} />
                         <Box sx={{flexGrow:1}}  />
                          <ButtonGroup 
                          // color={lightTheme.palette.mode === 'dark' ? "primary" : "secondary"}
                          variant="outlined" aria-label="Basic button group" color="primary">
                              {
                                mdDown ? null: pages.map((find) => {
                                    return find['link']?.map((path)=>{
                                      return (
                                            <div key={path.name}>   
                                                     <Button 
                                                     sx={{ 
                                                      textAlign: 'center',
                                                      color:alpha((lightTheme.vars || theme).palette.primaryDark[900],.99),   
                                                     }}
                                                       onClick={(e)=>handleClick(e)}>
                                                          {path.name?.replace(/\//g, '')}
                                                      </Button> 
                                            </div>     
                                         )
                                    })
                                })
                              }
                         </ButtonGroup>    
                        <Box sx={{flexGrow:1}}  />
                            <ThemeToggleButton  handleChangeMode={handleChangeMode} mode={mode}/>
                </MuiToolbar>   
            </Header>
          </Box>            
      
  )
}