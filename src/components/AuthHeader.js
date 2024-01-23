// AuthHeader.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AuthHeader = () => {
  const headerStyle = {
    backgroundColor: '#07AB17',
    height: '100px', // Set the height to 100 pixels
    padding: '5px 0', // 5px padding above and below
  };

  const logoStyle = {
    width: 'auto',
    height: '90px', // Adjusted to fit the height with padding
  };

  return (
    <AppBar position="static" sx={headerStyle}>
      <Toolbar>
        <img src="/iitj_logo.png" alt="Institute Logo" style={logoStyle} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px' }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: '2px' }}>
            INDIAN INSTITUTE OF TECHNOLOGY, JODHPUR
          </Typography>
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', marginRight: '8px' }}>
              MESS MEAL BOOKING PORTAL
            </Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AuthHeader;
