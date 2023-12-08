// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <div className="buttons">
        <Link to="/auth/login" target='_blank' className="button">
          Login
        </Link>
        <Link to="/auth/register" target='_blank' className="button">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
