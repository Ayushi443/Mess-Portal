import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Link } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 



 
const Authentication = () => {
  const navigate = useNavigate(); 
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const data = new FormData();
    data.append('username', formData.username);
    data.append('password', formData.password);
    axios.post(`http://127.0.0.1:8000/authentication/login/`, data)
      .then(response => {
        console.log(response.data);
        // Redirect to meal selection page on successful login
        navigate('/meal-selection');
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Handle login error
      });
  };
  
  const handleSignUp = () => {
    const data = new FormData();
    data.append('username', formData.username);
    data.append('password', formData.password);
    data.append('email', formData.email);
    data.append('first_name', formData.first_name);
    data.append('last_name', formData.last_name);
  
    axios.post(`http://127.0.0.1:8000/authentication/signup/`, data)
      .then(response => {
        console.log(response.data);
        navigate('/meal-selection');
      })
      .catch(error => {
        if (error.response) {
          console.error('Sign up failed:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error', error.message);
        }
      });
  };
  

  const handleForgotPassword = () => {
    // Your forgot password logic goes here
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    minHeight: 'calc(100vh - 100px)',
    backgroundImage: 'url(/food2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  };

  const paperStyle = {
    marginTop: '50px',
    marginBottom: '50px',
    marginLeft: '200px',
    padding: '20px',
    maxWidth: '400px',
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  };

  const textFieldStyle = {
    marginBottom: '20px',
  };

  const buttonStyle = {
    marginTop: '10px',
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}></div>
      <Container maxWidth="md">
        <Paper elevation={3} sx={paperStyle}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Typography>
          {isSignUp ? (
            <>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button variant="contained" color="primary" fullWidth sx={buttonStyle} onClick={handleSignUp}>
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Link href="#" onClick={handleForgotPassword} sx={{ display: 'block', textAlign: 'right', marginBottom: '10px' }}>
                Forgot Password?
              </Link>
              <Button variant="contained" color="primary" fullWidth sx={buttonStyle} onClick={handleLogin}>
                Sign In
              </Button>
            </>
          )}
          <Typography variant="body2" sx={{ marginTop: '20px', textAlign: 'center' }}>
            {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
            <Link href="#" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Sign in here' : 'Sign up here'}
            </Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Authentication;
