
import { alpha } from '@mui/material/styles';

export default function AppBar(theme:any){
	return {
		'MuiAppBar':{
           styleOverrides:{
	          root:{
	           	minHeight:'auto',
	           	  background:[
	           	   `hsl(113, 100.00%, 15.70%)`,
	               `-moz-linear-gradient(75deg, ${alpha(theme.palette.success.darker,.8)} 0%, ${alpha(theme.palette.primary.main,.8)} 100%)`,
	               `-webkit-linear-gradient(75deg, ${alpha(theme.palette.teal.dark, .7)} 0%, ${alpha(theme.palette.teal.darker,.7)} 100%)`,
	               `linear-gradient(360deg, ${alpha(theme.palette.teal.main,.8)} 100%, ${alpha(theme.palette.teal.dark,.8)} 100%)`
	              ],
	          },
           },
		}
  }
}