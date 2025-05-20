import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({theme})=>({
    '& .portfolio > figure': {
    // display:'flex', 
    // flexDirection:'column', 
    // margin:0,
    },

   '& .portfolio img ':{
      flex: 1, 
      objectFit: 'cover', 
      width: '100%',
    },

    'figure > figcaption': {
      padding:'0.3em 0.8em',
      backgroundColor:'rgba(0,0,0, 0.5)',
      color:'#fff',
      textAlign:'right',
  },
}))

const StyleCoverImage = styled('img')(({theme})=>({
    maxWidth:'100%',
    maxHeight:'100%',
    objectFit:'cover',
}));

function GridContainerBox({src, alt,name}:{
    src:string;
    alt:string;
    name:string;
}){
     return(
       <Root>
        <Box component={'div'} className="portfolio" sx={{
            display:'grid',
            border:'3px solid white',
            gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows:'1fr',
            gap:'1em',
            gridAutoFlow:'dense',
        }}>
            <Box component={'figure'} className="featured"
                sx={{
                 margin:0,
                 border:'3px solid white',
                 gridColumn:'span 2',        
                 gridRow:'span 2',
                }}
            >
               <StyleCoverImage src={src} alt={alt} />
               <Box component='figcaption'>{name}</Box>
            </Box>
            <Box></Box>
        </Box>
      </Root>   
     )
}

export default GridContainerBox;