import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('authToken', token);
      // Optionally decode token and store user info
      navigate('/'); // redirect to homepage or dashboard
    }
  }, [navigate]);

  return <p>Logging you in...</p>;
};

export default Authentication;
