import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import classes from './Home.module.css';
import webpSupported from '../helpers/webpSupport';
import top from '../assets/images/top.jpg';
import topWEBP from '../assets/webpimages/top.webp';
import bottom from '../assets/images/bottom.jpg';
import bottomWEBP from '../assets/webpimages/bottom.webp';
import topSmall from '../assets/images/topsmall.jpg';
import topSmallWEBP from '../assets/webpimages/topsmall.webp';
import bottomSmall from '../assets/images/bottomsmall.jpg';
import bottomSmallWEBP from '../assets/webpimages/bottomsmall.webp';
import color from '../assets/images/color.png';
import { motion } from 'framer-motion';
import { CUSTOM_MOTION_PROPS } from '../config/config';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [innerWidth]);

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          property='description'
          content='Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto'
        />
        <meta
          property='og:description'
          content='Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto'
        />
        <title>FW Fotografia</title>
      </Helmet>
      <motion.div {...CUSTOM_MOTION_PROPS} className={classes['img-container']}>
        {windowWidth > 800 ? (
          <img
            className={classes.color}
            alt='Filip Wielechowski Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto'
            src={color}
          />
        ) : (
          ''
        )}
        <img
          className={classes['img-top']}
          alt='Filip Wielechowski Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto'
          src={
            windowWidth > 800
              ? webpSupported
                ? topWEBP
                : top
              : webpSupported
              ? topSmallWEBP
              : topSmall
          }
        />
        <div className={classes.stripe}>
          <p>Filip Wielechowski Fotografia</p>
        </div>
        <img
          className={classes['img-bottom']}
          alt='Filip Wielechowski Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto'
          src={
            windowWidth > 800
              ? webpSupported
                ? bottomWEBP
                : bottom
              : webpSupported
              ? bottomSmallWEBP
              : bottomSmall
          }
        />
      </motion.div>
    </HelmetProvider>
  );
};
// redo
export default Home;
