import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import classes from './Contact.module.css';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { CUSTOM_MOTION_PROPS } from '../config/config';
import webpSupported from '../helpers/webpSupport';
import contactImage from '../assets/images/kontakt.jpg';
import contactImageWEBP from '../assets/webpimages/kontakt.webp';

const Contact = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta property='description' content='Kontakt: +48 722 265 649 / info@wielechowski.net' />
        <meta
          property='og:description'
          content='Kontakt: +48 722 265 649 / info@wielechowski.net'
        />
        <title>Kontakt: +48 722 265 649 / info@wielechowski.net</title>
      </Helmet>
      <motion.div {...CUSTOM_MOTION_PROPS} className={classes['contact-container']}>
        <div className={classes['contact-image']}>
          <img
            alt='info@wielechowski.net / +48 722 265 649 / Formularz Kontaktowy - Gdynia, Sopot, Gdańsk - Trójmiasto'
            src={webpSupported ? contactImageWEBP : contactImage}
          />
        </div>
        <div className={classes['contact-form-container']}>
          <div className={classes['contact-form']}>
            <ContactForm />
          </div>
          <div className={classes['contact-info-container']}>
            <div className={classes['contact-info']}>
              <p>
                <a href='tel:+48722265649'>+48 722 265 649</a>
              </p>
              <p>
                <a href='mailto:info@wielechowski.net'>info@wielechowski.net</a>
              </p>
              <p>Filip Wielechowski Fotografia - Trójmiasto</p>
            </div>
          </div>
        </div>
      </motion.div>
    </HelmetProvider>
  );
};

export default Contact;
