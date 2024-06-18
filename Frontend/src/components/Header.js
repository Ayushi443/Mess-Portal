// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic if needed

    // Redirect to the authentication page
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const headerStyle = {
    backgroundColor: '#6495ED',
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
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img src="/iitj_logo.png" alt="Institute Logo" style={logoStyle} />
        </IconButton>
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
        <div style={{ marginLeft: 'auto' }}>
          <IconButton color="inherit" onClick={handleProfileClick}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
