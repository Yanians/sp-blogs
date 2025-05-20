
import * as React from 'react';

export default function LoaderCss(){
    
    return(
        <div id="loader-wrapper">
            <div id="loader"></div>
            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
        </div>
    )
}