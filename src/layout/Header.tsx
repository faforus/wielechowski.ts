import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Burger from '../components/Navigation/Burger';
import Navbar from '../components/Navigation/Navbar';
import { isMobileChecker } from '../helpers/isMobile';

const Header = () => {
  const isMobile = isMobileChecker();

  return (
    <header className={classes.header}>
      <Link to='/'>
        <h1>Filip Wielechowski</h1>
      </Link>
      {isMobile ? <Burger /> : <Navbar />}
    </header>
  );
};

export default Header;
