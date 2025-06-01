import * as React from 'react';
import Button from '@mui/material/Button';
import { OpenPopup } from './OpenPopup';

interface Props {
  onLogin: (data: { 
    token: string; 
      user: { 
        name: string; 
        email: string; 
        photo: string 
      } 
  }) => void;
}

export default function FacebookLoginButton({ onLogin }: Props) {
  const handleFacebookLogin = () => {
    const popup = OpenPopup('/api/auth/facebook');

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.token) {
        onLogin(event.data);
      }
      window.removeEventListener('message', handleMessage);
    };

    window.addEventListener('message', handleMessage);
  };

  return (
    <Button onClick={handleFacebookLogin}>
      Login with Facebook
    </Button>
  );
}

export function SocialLogin({ onLogin }: Props) {

  const handleSocialLogin = () => {
    
    const popup = OpenPopup('/authentication');

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.token) {
        onLogin(event.data);
      }
      window.removeEventListener('message', handleMessage);
    };

    window.addEventListener('message', handleMessage);
  };

  return (
    <Button size="small" variant='outlined' onClick={handleSocialLogin}>
      Login
    </Button>
  );
}