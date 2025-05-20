
import * as React from 'react';

import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

// ----------------------------------------------------------------------

declare module '@mui/system'{
 interface Theme {
    props:any;
 }
 
 interface ThemeOptions {
    props:any;
 }
}

type IconProps = {
    src:string;
    color:string;
    sx: SxProps<Theme>
}

export default function SvgIconStyle({ src, color = 'inherit', sx }:IconProps) {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        bgcolor: `${color}.main`,
        ...(color === 'inherit' && { bgcolor: 'currentColor' }),
        ...(color === 'action' && { bgcolor: 'action.active' }),
        ...(color === 'disabled' && { bgcolor: 'action.disabled' }),
        ...(color === 'paper' && { bgcolor: 'background.paper' }),
        ...sx
      }}
    />
  );
}
