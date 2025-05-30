
import * as React from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import ListSubheader from '@mui/material/ListSubheader';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import { useTheme, useMediaQuery, ButtonGroup, Button } from '@mui/material';
import { 
    EdgeSidebar, 
    useLayoutCtx, 
    SidebarContent, 
    EdgeTrigger,
 } from "../mui-treasury/layout-core-v5";
 
import withFonts from '../components/lib/WithTextStyles';
import * as Invoker from './Header';
import Directives from '../components/lib/directives';
import TreeView from './Skeleton/Treeview';
import { Avatar, Box, ButtonBase, List } from '@mui/material';
import { PassThrough } from '../components/lib/utilityTypes';

const HeaderButton = withFonts;

interface EdgeProps {
    sSrData?:any;
}

const TriggerUsingHook=(props:EdgeProps)=>{
  const {
    Tree,
    Anchor,
    Span,
    NavItem,
    Header,
    Div,
    UlItem,
    } = TreeView;

 const [open, isClose] = React.useState(false);
 const [openLeft, setOpenLeft] = React.useState(false);
//  const { ListItemStyle, LinkModified, } = Directives();
 const ItemButton = PassThrough;
 const Text = PassThrough;
 //@ts-ignore
  const {state:{
      leftEdgeSidebar, rightEdgeSidebar },
      toggleLeftSidebarOpen,
      toggleRightSidebarOpen,
      toggleLeftSidebarCollapsed,
      toggleRightSidebarCollapsed,
      setOpen,
      setCollapsed,
  } = useLayoutCtx();

  const [ state, setState ] = React.useState({
    spblogExpanded:false,
    packagesExpanded:false,
    clientExpanded:false,
    serverExpanded:false,
    isSelected:false,
  });

  const handleLeftChange=()=>{
    toggleLeftSidebarOpen();
       setOpenLeft(!openLeft)
  }

  const handleRightChange=()=> {
    toggleRightSidebarOpen();
        isClose(!open);
  }
 
  const {isSelected, spblogExpanded, packagesExpanded, clientExpanded, serverExpanded } = state;

const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
  event.stopPropagation();
  event.preventDefault();
  const conts = event.currentTarget.parentElement?.textContent;
       if(conts === "sp-blogs"){
           setState({
          ...state,
          spblogExpanded:!spblogExpanded,
          isSelected:!isSelected,
        });
      } else if(conts === "packages"){
          setState({
            ...state,
            packagesExpanded:!packagesExpanded,
            isSelected:!isSelected,
          });
     } else if(conts === "client"){
      setState({
        ...state,
        clientExpanded:!clientExpanded,
        isSelected:!isSelected,
      });
     } else if(conts === "server"){
      setState({
        ...state,
        serverExpanded:!serverExpanded,
        isSelected:!isSelected,
      });
     }
}
  return (
    <>
        <Box sx={{p:1,}}>
          <Div className='page'>
            <Header role='banner'>
                 <Div className='title' id="id_website_title">
                    Project Structure
                 </Div>
                 <Div className='tagline'>Management</Div>
            </Header>
          </Div>   
           
        <Div className='body'>
        <NavItem role='none' aria-label="Mythical University">
          <UlItem role="tree" aria-label="Mythical University" className="treeview-navigation">
            {/* <Tree role='none'>
                  <Anchor role='treeitem' aria-expanded="false" aria-owns="id-about-subtree" href='#About'>
                    <Span className='label'>
                    <Span className='icon'>
                              <svg xmlns="http://www.w3.org/2000/svg"
                                  width="13"
                                  height="10"
                                  viewBox="0 0 13 10">
                                <polygon points="2 1, 12 1, 7 9"></polygon>
                              </svg>
                          </Span>
                        About
                    </Span>
                  </Anchor>
             </Tree> */}

             <Tree role="none" >
                 <Anchor role='treeitem' type={Link} to="/sp-blogs" ariaExpanded={spblogExpanded} ariaOwns="id-about-subtree">
                    <Span className='label'>
                          <Span className='icon' onClick={(e:any)=>handleClick(e)}>
                              <svg xmlns="http://www.w3.org/2000/svg" 
                                  width="13"
                                  height="10"
                                  viewBox="0 0 13 10">
                                <polygon points="2 1, 12 1, 7 9"></polygon>
                              </svg>
                          </Span>
                        sp-blogs
                    </Span>
                  </Anchor>
                 
                <UlItem aria-label='packages' id="id-report-subtree" role="group" className='treeview-group'>

                       <Tree role='none' className="li-report-tree">
                            <Anchor type={Link} to="sp-blogs/packages" role='treeitem' ariaExpanded={packagesExpanded}>
                                  <Span className='label'>
                                      <Span className='icon' onClick={(e:any)=>handleClick(e)}>
                                          <svg xmlns="http  ://www.w3.org/2000/svg"
                                              width="13"
                                              height="10"
                                              viewBox="0 0 13 10">
                                            <polygon points="2 1, 12 1, 7 9"></polygon>
                                          </svg>
                                      </Span>
                                    packages
                                  </Span>  
                            </Anchor>

                            <UlItem aria-label='server-client' id="id-about-folders" role="group">
                              {['client','server'].map((name)=>{
                                 return(
                                  <Tree role='none' key={name}>  
                                      <Anchor type={Link} to={`sp-blogs/packages/${name}`} role='treeitem'
                                        ariaExpanded={name === "client" ? clientExpanded : serverExpanded}>
                                        <Span className='label'>
                                            <Span className='icon' onClick={(e:any)=>handleClick(e)}>
                                              <svg xmlns="http  ://www.w3.org/2000/svg"
                                                  width="13"
                                                  height="10"
                                                  viewBox="0 0 13 10">
                                                <polygon points="2 1, 12 1, 7 9"></polygon>
                                              </svg>
                                            </Span>
                                            {name}
                                        </Span>
                                      </Anchor>
                                  {name === "server" ? (
                                        <UlItem aria-label='components' id="id-about-design" role="group">
                                          {['dist','node_modules','public','src','babel.config.json','packagelock.json','package.json','tsconfig.json','webpack.config.js']
                                           .map((type)=>{
                                            return(
                                              <Tree role='none' key={type}>
                                                <Anchor type={Link} to={`sp-blogs/packages/${name}/${type}`} role="treeitem">
                                                   <Span className='label'>
                                                     {type}
                                                   </Span>
                                                </Anchor>
                                              </Tree>
                                            )
                                          })}   
                                        </UlItem>
                                  ): (
                                      <UlItem aria-label='components' id="id-about-design" role="group">
                                        {['blog','dist','ecommerse','node_modules','public','src','babel.config.json','packagelock.json','package.json','tsconfig.json','webpack.config.js','webpack.build.js']
                                         .map((type)=>{
                                          return(
                                            <Tree role='none' key={type}>
                                              <Anchor type={Link} to={`sp-blogs/packages/${name}/${type}`} role="treeitem">
                                                 <Span className='label'>
                                                   {type}
                                                 </Span>
                                              </Anchor>
                                            </Tree>
                                          )
                                        })}   
                                      </UlItem>
                                  )}
                                </Tree>  
                                 )
                              })}
                            </UlItem>     
                        </Tree>
                      {['.babelrc','.eslintrc','.gitignore','.mui-treasury.config.js','package-lock.json','package.json','tsconfig.json','webpack.config.js']
                        .map((name)=>{
                           return(
                            <Tree role='none' key={name}>  
                                <Anchor type={Link} to={`/sp-blogs/${name}`} role='treeitem'>
                                    <Span className='label'>
                                      {name}
                                    </Span>  
                                </Anchor>
                            </Tree>
                           )
                        })
                      }
                </UlItem>    
             </Tree>
          </UlItem>
        </NavItem>
       </Div>   
      </Box>  
    </>
  ) 
}

export default function EdgeSideBar(props:EdgeProps){
  
  const { sSrData } = props;
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'),{noSsr:true});
  const Navigate = useNavigate();
  const { ListItemStyle } = Directives();
  // const { data } = UseBlogPost();
  const {toggleLeftSidebarCollapsed, toggleRightSidebarCollapsed,  toggleRightSidebarOpen} = useLayoutCtx();

  // const data:Record<string, number | any> = [];

     const handleClick=(event:any)=>{
      toggleLeftSidebarCollapsed();
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
                const paths = Invoker?.pages.map((find, _)=>find.pathname)
                Navigate(`${paths}`);
              }     
       }

return (
    <>
      <EdgeSidebar anchor="left" >
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
                {/* <TriggerUsingHook colorChange={props?.colorChange} /> */}
              </List>
              <ButtonGroup
               sx={{
                display:'flex',
                flexGrow:1,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
               }}
               orientation='vertical' variant='text' aria-label="vertical-page-group">
                  {
                      mdUp ? null: Invoker.pages.map((find) =>{
                          return find['link']?.map((path)=>{
                              return (
                              <div key={path.name}>
                              <HeaderButton color='inherit'
                                    onClick={(e)=>handleClick(e)} gadget 
                                          serve={Button}
                                          textContent={`${path.name?.replace(/\//g, '')}`}
                                    />
                              </div>     
                              )
                          })
                      })
                    }
              </ButtonGroup>
              <EdgeTrigger target={{ anchor: "left", field:"collapsed"}}>
                {(collapsed, setCollapsed) => (
                  <ButtonBase 
                    onClick={() => setCollapsed(!collapsed)}
                    sx={{
                      width:'100%',
                      minHeight:40,
                      bgcolor: "inherit",
                      borderTop: "1px solid grey",
                      borderColor: "grey.400",
                    }}
                  >
                    {collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  </ButtonBase>
                )}
              </EdgeTrigger>
          </SidebarContent> 
      )}   
      </EdgeSidebar>

    </> 
 ) 
}