import React from 'react';
import classes from './WelcomeModal.module.css';
import webpSupported from '../helpers/webpSupport';
import welcomeImg from '../assets/images/logo.jpg';
import welcomeImgWEBP from '../assets/webpimages/logo.webp';

const WelcomeModal = () => {
  return (
    <div className={classes.welcome}>
      <img src={webpSupported ? welcomeImgWEBP : welcomeImg} alt='welcome' />
    </div>
  );
};

export default WelcomeModal;
