// Authentication.js
import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import AuthHeader from './AuthHeader';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Authentication = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = () => {
    // Your login logic goes here

    // If login is successful, navigate to the meal selection page
    navigate('/meal-selection'); // Use navigate instead of history.push
  };

  const pageStyle = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const paperStyle = {
    padding: '20px',
    maxWidth: '400px',
    width: '100%',
  };

  const textFieldStyle = {
    marginBottom: '20px',
  };

  const buttonStyle = {
    marginTop: '10px',
  };

  return (
    <div>
      <AuthHeader />
      <Container maxWidth="md" sx={pageStyle}>
        <Paper elevation={3} sx={paperStyle}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Login to Mess Portal
          </Typography>
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
          <Button variant="contained" color="primary" fullWidth sx={buttonStyle} onClick={handleLogin}>
            Login
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default Authentication;
