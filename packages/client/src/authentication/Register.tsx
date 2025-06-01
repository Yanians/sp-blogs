
import * as React from 'react';

import * as Yup from 'yup';

import { useState, useEffect, useRef } from 'react';

import  Icon from '@mui/material/Icon';

import { useFormik, Formik, Form, FormikProvider, Field, ErrorMessage } from 'formik';

import EyeFill from '@mui/icons-material/Visibility';

import EyeOffFill from '@mui/icons-material/VisibilityOff';

import Divider from '@mui/material/Divider';

import SocialAuthButtons from './SocialAuthButton';

import { useNavigate, } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment, Box, Button, CircularProgress } from '@mui/material';

import { UseAuth } from '../AuthContext';

import SocialLoginButton from '../utils/helpers/SocialLoginButton';

import Swal from 'sweetalert2';

interface User {
    name:string;
    email:string;
    photo:string;
}

// ----------------------------------------------------------------------
export default function RegisterForm() {

  const Navigate = useNavigate();
  window.history.forward(); //do not allow back history
  const { user, login } = UseAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const resetFormRef = useRef<() => void>(() => {});

useEffect(() => {
  const handlePopState = () => {
    window.history.pushState(null, '', window.location.href);
  };

  window.history.pushState(null, '', window.location.href);
  window.addEventListener('popstate', handlePopState);

  return () => {
    window.removeEventListener('popstate', handlePopState);
  };
}, []);
  
useEffect(() => {
  if (user) {
    console.log('[Already Logged In] Redirecting to /blogs');
    Navigate('/blogs');
  }
}, [user]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    resetFormRef.current();
  // if (resetFormRef) resetFormRef(); // reset when switching modes
  };

  const handleLogin = ({ user, token }: { user:User; token: string }) => {
    console.log('[Login Triggered]', { user, token }); // DEBUG

    if (user && token) {
      login(user, token);
        Swal.fire({
        icon: 'success',
        title: `Welcome ${user.name || user.email}`,
        text: 'Login successful!',
        confirmButtonText: 'Continue',
      }).then(() => {
        Navigate('/blogs');
      });
    } else {
      console.error('[Login Failed] Missing user or token');
    }
 };

   const handleSubmit = async (values:any, resetForm:()=> void) => {
    setLoading(true);
    setError('');
    try {
      const url = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  password: values.password,
                })
              });

if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
}
   const data = await response.json();
   console.log(data);
   Swal.fire('Success', data.message, 'success');
    resetForm(); // ✅ clear form on success
  Swal.fire('Success', isLogin ? 'Login successful!' : 'Registration successful!', 'success');
  if(isLogin){
    // navigate goes here.
    Navigate('/');
  }
} catch (err: any) {
   console.error('Registration error:', err.message);
    setError(err.message || 'Something went wrong!');
    Swal.fire('Error', err.message || 'Something went wrong!', 'error');
  // setError(err.response?.data?.message || 'Something went wrong!');
} finally {
  setLoading(false);
}
};

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(25, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(25, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null as any], 'Passwords must match').required('Confirm Password is required'),
  });

  
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

console.log(user);

  return (
  <>
   <Stack spacing={1} direction={'column'}>
      <Button onClick={() => Navigate('/',{replace:true})}>
          Go to Homepage
      </Button>
     <SocialLoginButton onLogin={({user, token}) => handleLogin({user, token})} />
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
        validationSchema={isLogin ? LoginSchema : RegisterSchema}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      { ({ touched, errors, isSubmitting, resetForm }) => {
        resetFormRef.current = resetForm; // ✅ Always store latest resetForm
        return(
        <Form autoComplete="off" noValidate>
          <Stack spacing={3}>
            {!isLogin && (
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Field name="firstName">
                  {/* @ts-ignore */}
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      label="First Name"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
                <Field name="lastName">
                  {/* @ts-ignore */}
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      label="Last Name"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Stack>
            )}

            <Field name="email">
              {/* @ts-ignore */}
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Email address"
                  fullWidth
                  autoComplete="email"
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            <Field name="password">
              {/* @ts-ignore */}
              {({ field, meta }) => (
                <TextField
                  {...field}
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  autoComplete="current-password"
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                  slotProps={{
                      input:{
                      endAdornment: (
                      <InputAdornment position="end">
                        <IconButton 
                          edge="end" 
                            onClick={() => setShowPassword((prev) => !prev)}
                            tabIndex={-1}
                            >
                          <Icon fontSize="small">
                              {/* @ts-ignore */}
                            { showPassword ? <EyeFill /> : <EyeOffFill /> }
                          </Icon>
                        </IconButton>
                      </InputAdornment>
                    )
                  } 
                  }}
                />
              )}
            </Field>

            {!isLogin && (
              <Field name="confirmPassword">
                {/* @ts-ignore */}
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            )}

            <Box sx={{ marginTop: 2 }}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={loading || isSubmitting}
              >
                {loading ? <CircularProgress size={24} /> : isLogin ? 'Login' : 'Register'}
              </Button>
            </Box>

            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <Button variant="text" onClick={toggleForm}>
                {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
              </Button>
            </Box>
          </Stack>
        </Form>
      )
        }
      }
   </Formik>
   </Stack>   
     </>
  );
 }

