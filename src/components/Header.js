// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Your Institute Name</h1>
      <nav>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Home</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Meal Selection</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Login</a>
      </nav>
    </header>
  );
};

export default Header;
