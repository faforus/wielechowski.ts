import React from 'react';
import lin from '../assets/images/lin.png';
import fb from '../assets/images/fb.png';
import ins from '../assets/images/ins.png';
import classes from './Links.module.css';

const Links = () => {
  return (
    <div className={classes['icons-container']}>
      <a
        href='https://www.instagram.com/wielechowski_fotografia/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className={classes.icons} src={ins} alt='Instagram' />
      </a>
      <a href='https://www.facebook.com/wielechowski.net' target='_blank' rel='noopener noreferrer'>
        <img className={classes.icons} src={fb} alt='Facebook' />
      </a>
      <a
        href='https://www.linkedin.com/in/filip-wielechowski-9302b0263/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className={classes.icons} src={lin} alt='Linkedin' />
      </a>
    </div>
  );
};

export default Links;
