import * as React from 'react';
import { styled, createTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';;
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

const Root = styled('div')(({theme})=>({
    display: 'flex',
    position:'relative',
    top:0,
    left:0,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface RotateProps extends IconButtonProps {
  rotate:boolean,
};

const drawerWidth: number = 200;

export const Rotate20Deg = styled(IconButton,{
  shouldForwardProp:(prop) => prop !== 'open',
})<RotateProps>(({theme, rotate})=>({
   transform:rotate ? 'rotate(-20deg' :'rotate(0deg)',
   transition:theme.transitions.create('transform',{
    duration:theme.transitions.duration.complex,   
   })
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      flexShrink:0,
      transform:open ? 'rotate(-20deg' :'rotate(0deg)',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

function DashboardContent() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return (
        <AppBar position='relative'>
        <Toolbar>
        <Drawer anchor="left" variant="persistent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <ChevronLeftIcon />
          </Toolbar>
          <Divider />

          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
       </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[700],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid size={{xs:12, md:8, lg:9,}}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                      }}
                    >
                      <Chart />
                    </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid size={{xs:12,md:4,lg:3,}}>
                      <Paper
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 240,
                        }}
                      >
                        <Deposits />
                      </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid size={{xs:12}}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                       <Orders />
                    </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
        </Toolbar>
    </AppBar>      
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
