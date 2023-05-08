import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import classes from './ErrorPage.module.css';
import errorImg from '../assets/images/errorpig.jpg';

const ErrorPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 - Dziki zjadły tę stronę.</title>
      </Helmet>
      <div className={classes.error}>
        <img alt='error' src={errorImg} />
        <h1>404 - Dziki zjadły tę stronę.</h1>
      </div>
    </HelmetProvider>
  );
};

export default ErrorPage;
