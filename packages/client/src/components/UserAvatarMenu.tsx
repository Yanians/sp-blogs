import React from 'react';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { UseAuth } from '../AuthContext';

export default function UserAvatarMenu() {
    
  const { user, logout } = UseAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  if (!user) return null;

  return (
    <>
        <IconButton edge='end' size='small' onClick={handleOpen}>
          <Avatar sizes='small' variant='rounded' src={user.photo} alt={user.name} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={() => { logout(); handleClose(); }}>Logout</MenuItem>
        </Menu>
    </>
  );
}
