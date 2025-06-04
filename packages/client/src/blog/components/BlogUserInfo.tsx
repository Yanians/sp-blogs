import * as React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import { styled,alpha, useTheme,  } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from '@mui/system';
import Card from '@mui/material/Card';
import { brandingLightThemes as lightTheme } from '../../utils/brandingTheme';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const Root = styled('div')(({theme})=>({
display:'grid',
    alignItems:'center',
    width:'100%',
    boxSizing:'initial',
    gridAutoColumns: '1fr',
    gridAutoRows: 'auto',
    backgroundBlendMode:`${alpha(lightTheme.vars.palette.grey[100],0.85)}`,
    opacity:0.3,
}))

const ImageStyle = styled('img')(({theme})=>({
position:'absolute',

}))



function BlogUserInfo(){

    return(
        <Root>
            <Box sx={{
                
            }}>
                <Grid container spacing={1}>
                    <Grid size={{xs:12}}>
                        
                    </Grid>
                </Grid>
                <Divider 
                    orientation='horizontal' 
                        sx={{
                             p:((theme:any)=>({p:theme.spacing(1)})),
                             }} />
            </Box>

        </Root>
    )
    
}