//@ts-ignore
import * as React from 'react';

import Toolbar from '@mui/material/Toolbar';
import  SearchIcon  from '@mui/icons-material/Search';
import { Header as Head } from '@treasury/layout-core-v5';
import Directives from '../components/lib/directives';
import { ListItem, Box } from '@mui/material';
import WithFont from '../components/lib/WithTextStyles';
import { useNavigate } from 'react-router-dom';

interface ROUTEPROPS {
      link?: ROUTEPROPS[],
        id?: number;
  pathname?: string;
      icon?: string;
      name?:string;
     title?: string;
};

const pages: readonly ROUTEPROPS[] = [
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

export default function Header(){
  const {  Search, StyledInputBase, SearchIconWrapper, ListItemStyle } = Directives();
  const TextHeader = WithFont;
  const HeaderButton = WithFont;
  const Navigate = useNavigate();
       
     const handleClick=(event:any)=>{
            const name = event.target.textContent;
            if(name === 'home'){
                Navigate('/');
            }else {
              const paths = pages.map((find, _)=>find.pathname)
              Navigate(`${paths}/${name}`);
            }
            
     }
 
  return (
           <Head>
              <Toolbar  variant='dense'>
                <ListItem>
                    <TextHeader 
                          platino 
                            variant='h6' 
                            pumpkin types='typography' 
                              textContent={"Glass Layout"} />
                </ListItem>
                <Search>
                       <SearchIconWrapper>
                          <SearchIcon />
                       </SearchIconWrapper>
                          <StyledInputBase
                                // onClick={handleSearchClick}
                                placeholder="Search…"
                                  inputProps={{ 'aria-label': 'search' }}
                              />
                </Search>
                    <Box component={'div'} sx={{display:'flex',flexGrow:1}}>
                      {
                        pages.map((find) =>{
                            return find['link']?.map((path)=>{
                               return (
                                <div key={path.name}>
                                <HeaderButton selected mui 
                                disableTouchRipple size='large'
                                      onClick={(e)=>handleClick(e)} 
                                           serve={ListItemStyle} alignItems='center' 
                                            textContent={`${path.name?.replace(/^\//g, '')}`}
                                    />
                               </div>     
                               )
                            })
                        })
                      }
                   </Box>
               </Toolbar>      
           </Head>
  )
}
// concat(path.name?.replace(/^\//g, ''))