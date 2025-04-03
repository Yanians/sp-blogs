
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography/Typography';
import { Footer as Footers } from '@treasury/layout-core-v5';

export default function Footer(){
    return (
        <Footers>
        <Box
          component="footer"
          sx={{
            p: 2,
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,0.3)',
            backdropFilter: 'blur(10px)',
            mt: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2025 Glass Layout by MUI Treasury + MUI
          </Typography>
        </Box>
      </Footers>
    )
}