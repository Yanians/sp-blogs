import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Button, Box } from '@mui/material';
import axios from 'axios';

const SocialAuthButtons = () => {

   const handleGoogleLogin = () => {
    // Redirect to your backend Google login route
    window.location.href = `http://localhost:5000/api/auth/google`;
    // console.log("REACT_APP_SERVER_URL =", process.env.REACT_APP_SERVER_URL);
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<GoogleIcon />}
        //  onClick={handleGoogleLogin}
        href="http://localhost:5000/api/auth/google"
        sx={{ marginBottom: 1 }}
      >
        Login with Google
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<FacebookIcon />}
        href="http://localhost:5000/api/auth/facebook"
        sx={{ marginBottom: 1 }}
      >
        Login with Facebook
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<InstagramIcon />}
        href="http://localhost:5000/api/auth/instagram"
      >
        Login with Instagram
      </Button>
    </Box>
  );
};

export default SocialAuthButtons;