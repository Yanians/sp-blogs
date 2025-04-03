
import * as React from 'react';

import ListSubheader from '@mui/material/ListSubheader';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import { 
    EdgeSidebar, 
    useLayoutCtx, 
    SidebarContent, 
    EdgeTrigger,
 } from '@treasury/layout-core-v5';
import { Routes } from '@routes/routes';
import { Avatar, ButtonBase, List, ListItem, ListItemButton } from '@mui/material';
import Directives from '@lib/directives';
import Hidden from '@mui/material/Hidden';
import { PassThrough } from '@lib/utilityTypes';
import Swal from 'sweetalert2';

interface EdgeProps {
    colorChange?:boolean;
}

const TriggerUsingHook=(props:EdgeProps)=>{
 const [open, isClose] = React.useState(false);
 const { ListItemStyle, LinkModified, } = Directives();
 const ItemButton = PassThrough;
 const Text = PassThrough;
 //@ts-ignore
  const {state:{
      leftEdgeSidebar, rightEdgeSidebar },
      toggleLeftSidebarOpen,
      toggleRightSidebarOpen,
      toggleLeftSidebarCollapsed,
      toggleRightSidebarCollapsed,
  } = useLayoutCtx();

  const handleChange=()=> {
    toggleRightSidebarOpen();
        isClose(!open);
  }
   
  return (
    <>
        <ItemButton add={ListItemStyle} dense onClick={handleChange} >
           <Text aligns='center' noWrap condition='typography'>
              {open ? 'close tab' : 'right tab'}
            </Text>
        </ItemButton>
          {Routes.map((item,index) =>{
              return(
                <div key={item.id}>
                    <Hidden smDown>
                      <LinkModified to={item.link} >
                          <ItemButton
                                      add={ListItemStyle}
                          >
                             <Text align='center' noWrap condition='typography'
                                  sx={{
                                    flexGrow:1,
                                    color:props?.colorChange ? 'grey.400':'success.dark',
                                  }}
                                 >{item.Title}</Text>  
                          </ItemButton>
                      </LinkModified>
                    </Hidden>  
                </div>
              )
          }) }
    </>
  )
};

export default function EdgeSideBar(props:EdgeProps){
   
  const handleFocus=()=> {
     Swal.fire({
      title:'This is focusable',
      text:'Nothing more accurate than this focus features',
     })
  }

return (
  <EdgeSidebar anchor="left">
    {({ state: { leftEdgeSidebar }, toggleLeftSidebarCollapsed }) => (

      <SidebarContent>
        <Avatar alt="unknown Avatar"
              sx={{
                ...(leftEdgeSidebar?.collapsed && { width: 40, height: 40 }),
              }}
            >
            A
          </Avatar>

          <List sx={{bgcolor:'inherit'}}>
            <ListSubheader inset sx={{bgcolor:'inherit'}}>
                Management
            </ListSubheader>
            <TriggerUsingHook colorChange={props?.colorChange} />
          </List>

          <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
            {(collapsed, setCollapsed) => (
              <ButtonBase onFocusVisible={handleFocus}
                onClick={() => setCollapsed(!collapsed)}
                sx={{
                  minHeight:40,
                  width: "100%",
                  bgcolor: "inherit",
                  borderTop: "1px solid",
                  borderColor: "grey.200",
                }}
              >
                {collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </ButtonBase>
            )}
          </EdgeTrigger>
      </SidebarContent> 
   )}   
   </EdgeSidebar>
 ) 
}
