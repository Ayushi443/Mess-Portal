// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#6495ED',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <AppBar position="static" sx={footerStyle}>
      <Toolbar>
        <Typography variant="body1" component="div" sx={{ color: 'white' }}>
          &copy; 2024 Indian Institute of Technology, Jodhpur. All rights reserved. |{' '}
          <Link href="/privacy-policy" color="inherit">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="/terms-of-service" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
