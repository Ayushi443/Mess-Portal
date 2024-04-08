import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Authentication = () => {
  const navigate = useNavigate(); 
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = () => {
    // Your login logic goes here
    // If login is successful, navigate to the meal selection page
    navigate('/meal-selection'); 
  };

  const handleSignUp = () => {
    // Your sign up logic goes here
    // After successful sign up, you can navigate to login or meal selection page
    navigate('/meal-selection'); 
  };

  const handleForgotPassword = () => {
    // Your forgot password logic goes here
  };

  const pageStyle = {
    //marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative', // Make the position relative to contain the background image
    minHeight: 'calc(100vh - 100px)', // Set the minimum height to cover the viewport
    backgroundImage: 'url(/food2.jpg)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust opacity here (0.5 = 50% opacity)
  };

  const paperStyle = {
    marginTop: '50px',
    marginBottom: '50px',
    marginLeft: '200px',
    padding: '20px',
    maxWidth: '400px',
    width: '100%',
    position: 'relative', // Ensure the paper is positioned relative to the page
    //zIndex: 1, // Ensure the paper appears above the overlay
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
      {/* Overlay with opacity */}
      <div style={overlayStyle}></div>
      <Container maxWidth="md">
        <Paper elevation={3} sx={paperStyle}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Typography>
          {isSignUp ? (
            <>
              {/* Sign Up Form */}
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
              />
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
              />
              <Button variant="contained" color="primary" fullWidth sx={buttonStyle} onClick={handleSignUp}>
                Sign Up
              </Button>
            </>
          ) : (
            <>
              {/* Sign In Form */}
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={textFieldStyle}
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
