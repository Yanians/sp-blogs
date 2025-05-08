//@ts-ignore
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Header, EdgeTrigger } from '../../../../src/mui-treasury/layout-core-v5';
import Directives from '../components/lib/directives';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import { useColorSchemeShim, useChangeTheme } from '../utils';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/icons-material/Menu';
import BlogSearch from '../components/BlogSearch';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ThemeToggleButton from '../components/toggleComponent/toggleModeButton';
import { useDocSearchKeyboardEvents } from '@docsearch/react';
import ToggleButton from '../components/toggleComponent/ToggleButton';
import { useMediaQuery } from '@mui/system';
import { styled, useColorScheme } from '@mui/material/styles';
import { useTheme, } from '@mui/material/styles';
import WithFont from '../components/lib/WithTextStyles';
import { useNavigate } from 'react-router-dom';

  const TextHeader = WithFont;
  const HeaderButton = WithFont;

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
            { name:'/news'},
            { name:'/blogs'},
            { name:'/tooling'},
            { name:'/management'},
            { name:'/projects'},
            { name:'/documentation',title:'Guides & understanding',}
          ]
  }    
];

  const Root = styled('div')(({ theme })=>({
  '& .MuiPaper-root':{
    color:theme.palette.background.paper,
    background:'MediumSeaGreen url("/circles-white-gradient.png") no-repeat fixed center',
    backgroundBlendMode: 'lighten',
    width:'100%',
  }
  }));

export default function Headers({sSrData}:{sSrData:any[],}){
    const { ListItemStyle } = Directives();
    const { mode, setMode } = useColorSchemeShim();
    const dispatch = useChangeTheme();
    const [isOpen, setIsOpen] = React.useState(false);
    const Navigate = useNavigate();
    const theme = useTheme();
    const { setMode:setModes } = useColorScheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'),{noSsr:false})     

    type buttonprops = {searchButtonRef?:HTMLButtonElement,toggleMode?:boolean};

    const [state, setState ] = React.useState<buttonprops>({
       toggleMode:false,
       //@ts-ignore
       searchButtonRef:null,
    })

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
      console.log('I ma triggered!')
      const nextMode = mode === 'light' ? 'dark' : 'light';
      console.log(nextMode);
         setMode(nextMode); // sets 'mui-mode' and triggers calculatedMode effect
         setModes(nextMode);
        dispatch({ type: 'CHANGE', payload: { paletteMode: nextMode } });
    };
     
      React.useEffect(()=>{
      },[state.searchButtonRef])
     
         const onOpen = React.useCallback(() => {
             setIsOpen(true);
           }, [setIsOpen]);
     
         const onClose = React.useCallback(() => {
             setIsOpen(false); // DO NOT call setIsOpen inside a timeout (it causes scroll issue).
           }, [setIsOpen]);

  return (
        <Root>
          <Header>
            <Toolbar variant='dense'>

              <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
                    {(open, setOpen) => (
                        <HeaderButton serve={IconButton} onClick={e=>setOpen(!open)}
                          textContent={
                            mdDown ? <Menu fontSize="small" sx={{color:open ? 'black':'inherit'}}  /> : null 
                          }
                        />
                    )}

    {/* : <ArrowLeft fontSize="small" sx={{color:open ? 'error.main':'inherit'}} />  */}
              </EdgeTrigger>

            <TextHeader component={"div"} sx={{flexGrow:1}} noWrap
                          platino 
                            variant='h6' 
                            pumpkin types='typography' 
                              textContent={"SP-Blogs"} />    
                              <ToggleButton willOpen={onOpen} />
                               <BlogSearch sSrData={sSrData} open={isOpen} onClose={onClose} />
                              {
                                mdDown ? null: pages.map((find) =>{
                                    return find['link']?.map((path)=>{
                                      return (
                                        <div key={path.name}>
                                        <HeaderButton selected mui
                                        disableTouchRipple size='small'
                                              onClick={(e)=>handleClick(e)} 
                                                  serve={ListItemButton} alignItems='center' 
                                                    textContent={`${path.name?.replace(/\//g, '')}`}
                                            />
                                      </div>     
                                      )
                                    })
                                })
                              }
                              <ThemeToggleButton  handleChangeMode={handleChangeMode} mode={mode}/>
              </Toolbar>
          </Header>
        </Root>   
  )
}