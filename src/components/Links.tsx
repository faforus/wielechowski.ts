import React from 'react';
import lin from '../assets/images/lin.png';
import fb from '../assets/images/fb.png';
import ins from '../assets/images/ins.png';
import classes from './Links.module.css';

const Links = () => {
  const insHandler = () => {
    window.open('https://www.instagram.com/wielechowski_fotografia/', '_blank');
  };

  const fbHandler = () => {
    window.open('https://www.facebook.com/wielechowski.net', '_blank');
  };

  const linHandler = () => {
    window.open('https://www.linkedin.com/in/filip-wielechowski-9302b0263/', '_blank');
  };

  return (
    <div className={classes['icons-container']}>
      <button onClick={insHandler}>
        <img className={classes.icons} src={ins} alt='Instagram' />
      </button>
      <button onClick={fbHandler}>
        <img className={classes.icons} src={fb} alt='Facebook' />
      </button>
      <button onClick={linHandler}>
        <img className={classes.icons} src={lin} alt='Linkedin' />
      </button>
    </div>
  );
};

export default Links;
