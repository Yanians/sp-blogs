import * as React from 'react';
import Tabs from '@mui/material/Tabs';

function HeaderTabs({onChange, tabs, value,}:{
    onChange:any,
    value:number,
    tabs:React.ReactNode,
}): React.JSX.Element {
    return(
        <Tabs indicatorColor="secondary"
                 orientation='horizontal' 
                   value={value} 
                     onChange={onChange} 
                       aria-label="header-tab navigation">
               {tabs}
        </Tabs>
    )
}

export default HeaderTabs;