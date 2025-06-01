import React from 'react';
import { Button, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import { UseAuth } from '../../AuthContext';
import Swal from 'sweetalert2';

const oauthConfig  = [
  { 
    name: 'facebook', 
    label: 'Login with Facebook', 
    clientId:process.env.FACEBOOK_APP_ID,
    icon: <FacebookIcon />, 
    url: '/api/auth/facebook?auth_type=reauthenticate',
  },
  // ?auth_type=reauthenticate
  { 
    name: 'google', 
    label: 'Login with Google', 
    clientId:process.env.GOOGLE_CLIENT_ID,
    icon: <GoogleIcon />, 
    url: '/api/auth/google', 
  },
  { 
    name: 'instagram', 
    label: 'Login with Instagram',
    clientId:process.env.INSTAGRAM_CLIENT_ID, 
    icon: <InstagramIcon />, 
    url: '/api/auth/instagram', 
  },
];

type SocialLoginButtonsProps = {
  onLogin: (
    data: { 
      user: { 
        name: string; 
        email: string; 
        photo: string 
      }; 
      token: string 
    }) => void;
};

export default function SocialLoginButtons({ onLogin }: SocialLoginButtonsProps) {
  const popupWidth = 500;
  const popupHeight = 600;

  // Open OAuth popup and listen for postMessage
  const openPopup = (url: string) => {
    const left = window.screenX + (window.outerWidth - popupWidth) / 2;
    const top = window.screenY + (window.outerHeight - popupHeight) / 2.5;
    const popup = window.open(
      url,
      'oauthPopup',
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`
    );

    if (!popup) {
      alert('Failed to open popup');
      return;
    }

    const handleMessage = (event: MessageEvent) => {
      if(event.origin !== window.location.origin){
         console.warn('Blocked message from unknown origin:', event.origin);
         return;
      }
      console.log('Received message from popup:', event.data); // ✅ Add this for debugging
      if (event.data?.token && event.data?.user) {
          onLogin(event.data);
          popup.close();
          window.removeEventListener('message', handleMessage);
        } else if (event.data?.message) {
          Swal.fire('Login Failed', event.data.message, 'error');
          popup.close();
          window.removeEventListener('message', handleMessage);
      }
    };
    window.addEventListener('message', handleMessage);
  };

  return (
    <Stack spacing={2} direction="column" alignItems="center">
      {oauthConfig.map(({ name, label, icon, url }) => (
        <Button
          key={name}
          variant="contained"
          startIcon={icon}
          onClick={() => openPopup(url)}
          // href={url}
          fullWidth
        >
          {label}
        </Button>
      ))}
    </Stack>
  );
}
