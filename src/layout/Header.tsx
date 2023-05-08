import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Burger from '../components/Navigation/Burger';
import Navbar from '../components/Navigation/Navbar';
import { isMobileChecker } from '../helpers/isMobile';

const Header = () => {
  const [isMobile, setIsMobile] = useState(isMobileChecker());

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === 'm') {
        setIsMobile((prev) => !prev);
      }
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

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
