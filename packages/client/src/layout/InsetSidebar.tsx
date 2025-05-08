
import * as React from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { InsetSidebar } from '../../../../src/mui-treasury/layout-core-v5';

export default function InsetSideBars(){
    return (
        <InsetSidebar>
            <Paper sx={{ height: '100%', p: 2 }}>
             <Typography variant="h6">Right Inset Sidebar</Typography>
              <Typography>This area can contain widgets or filters.</Typography>
            </Paper>
      </InsetSidebar>
    )
}