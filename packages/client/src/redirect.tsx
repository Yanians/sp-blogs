import React, { useEffect } from 'react';
import Layout from './layout/Layout';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
     const error = params.get('error');

     if(error){
      console.error('Login failed error ', error);
      //show error message to user
      return;
     }
    if (token) {
      localStorage.setItem('authToken', token);
      // Optionally decode token and store user info
      navigate('/'); // redirect to homepage or dashboard
    }
  }, [navigate]);

  return; 
};

export default Authentication;
