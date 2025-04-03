
import { alpha } from '@mui/material/styles';

export default function AppBar(theme:any){

	return {
		'MuiAppBar':{
           styleOverrides:{
	          root:{
	           	minHeight:'auto',
	           	  background:[
	           	   // `rgb(255,0,0)`,
	               `-moz-linear-gradient(75deg, ${alpha(theme.palette.success.darker)} 0%, ${alpha(theme.palette.primary.main)} 100%)`,
	               `-webkit-linear-gradient(75deg, ${alpha(theme.palette.teal.dark)} 0%, ${alpha(theme.palette.teal.darker)} 100%)`,
	               `linear-gradient(360deg, ${alpha(theme.palette.teal.main)} 100%, ${alpha(theme.palette.teal.dark)} 100%)`
	              ],
	          },
           },
		}
  }
}