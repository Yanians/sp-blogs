import * as React from 'react';
import { gridAutoFlow, gridAutoRows, gridColumn, gridTemplateColumns, styled as styling } from '@mui/system';
import styled from '@emotion/styled';

/**
 * AppBar - is a header element
 * Container -is a div element
 * 
 */
const Root = styling('div')(({theme})=>({

    '& .portfolio':{
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr));',
    gridAutoRows:'1fr',
    gridGap:'1em',
    gridAutoFlow:'dense',
 },

      '& .portfolio.featured': {
      margin:0,
      gridRow:'span 2',
      gridColumn:'span 2',
    },

    '& .portfolio > figure': {
    display:'flex', 
    flexDirection:'column', 
    margin:0,
    },

   '& .portfolio img ':{
      flex: 1, 
      objectFit: 'cover', 
      maxWidth: '100%',
    },

    'figure > figcaption': {
      padding:'0.3em 0.8em',
      backgroundColor:'rgba(0,0,0, 0.5)',
      color:'#fff',
      textAlign:'right',
  },

'@supports (display: grid)':{
       'div':{
       },
    },

    '*':{
     backgroundColor:'darkgrey',
     color:'white',
     borderRadius:'0.5em',
   },
}));

const CoverImgStyle = styled.img`
  top:0,
  object-fit:cover,
`;
const Gridcontainer = styled.div`
 display:inline-grid;
 grid-template-columns: 1fr;
 grid-template-rows: 1fr;
 grid-gap:0.5em;
 max-width:1080px;   
`;

const Portfoliocontainer = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows:1fr;
  grid-gap:1em;
  grid-auto-flow:dense;
`;

 const Figurecontainer = styled.figure`
  margin:0;
  grid-row:span 2;
  grid-column:span 2;
`;



const Griditem = styled.div`
  
`;

export type GridProps = {
    children:React.ReactNode;
};

export type ImgProps = {
    src?:string;
    alt?:string;
    name?:React.JSX.Element;
} & Omit<GridProps, "children">;

export function PortFolioContainer(props:GridProps){
    const { children,} = props;
     return(
           <Root>
             <div className="portfolio">
               {children}
             </div>
          </Root>  
     )
}

export function FigureContainer(props:ImgProps){
    const { src, alt, name, } = props;
    return(
           <figure className='featured'>
             <img src={src} alt={alt} />
               <figcaption>{name}</figcaption>
           </figure>
    )
}

// function Grid(props:GridProps){
//       const { children, ...other } = props;
//      return(
//         <Gridcontainer { ...other}>
//            {children}
//         </Gridcontainer>
//      )
// }

// function GridItem(props:GridProps):React.JSX.Element {
//     const {children, ...other } = props;

//       return (
//         <Griditem {...other}>
//             {children}
//         </Griditem>
//       )
// }