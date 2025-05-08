import { styled } from '@mui/material/styles';
import * as React from 'react';

const TextContentStyled = styled('div')(({theme})=> ({
    alignSelf:'center',
    margin:'0 0 0 15%',
    [theme.breakpoints.down('md')]:{
      margin:' 0 0 0 5%',
    },
  }));

interface CONTAINERPROPS {
    children?:React.ReactNode;
}

interface SUBPROPSCONTAINER extends CONTAINERPROPS{
 leftContainer?:React.JSX.Element;
 rightContainer?:React.JSX.Element;
};

function InnerContainer(props:CONTAINERPROPS):React.JSX.Element{
    const { children} = props;
    return(
        <div className="inner-grid-container">
             {children}
        </div>
    )
}

function SubContainer(props:SUBPROPSCONTAINER){
    const { leftContainer, rightContainer } = props;
      return(
           <InnerContainer>
              <div className="left-sub-item-container">
                   {leftContainer}
              </div>
                <TextContentStyled>
                    <div className="right-sub-item-container">
                    {rightContainer}
                    </div>
                </TextContentStyled>     
           </InnerContainer>
      )
}

export default SubContainer;