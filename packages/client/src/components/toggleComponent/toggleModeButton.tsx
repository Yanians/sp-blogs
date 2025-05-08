
import * as React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, ListItemButton } from '@mui/material';

export default function ThemeToggleButton({handleChangeMode, mode}:{mode:'light'| 'dark' | any, handleChangeMode:(newMode:'light' | 'dark') => void}) {
     if(!mode) return null;
    const isDark = mode === 'dark';
  return (
        <IconButton edge="end" size="medium"
                onClick={()=> handleChangeMode(isDark ? 'light':'dark')}>
                  { isDark  
                    ? <LightModeIcon color={isDark ? 'danger':'inherit'} /> 
                    : <DarkModeIcon color={isDark  ? 'inherit':'danger'} />
                  }
        </IconButton>
  );
}
