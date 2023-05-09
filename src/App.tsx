import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './routes/AnimatedRoutes';

import classes from './components/WelcomeModal.module.css';
import Header from './layout/Header';
import WelcomeModal from './components/WelcomeModal';
import Footer from './layout/Footer';
import { preloadAppImages } from './helpers/preloadAppImages';

setTimeout(() => {
  preloadAppImages();
}, 3000);

function App() {
  const [loadedWelcome, setLoadedWelcome] = useState(false);

  useEffect(() => {
    const welcomeElement = document.querySelector(`.${classes.welcome}`) as HTMLElement;

    if (welcomeElement) {
      setTimeout(() => {
        welcomeElement.style.opacity = '0';
        setTimeout(() => {
          setLoadedWelcome(true);
        }, 400);
      }, 500);
    } else {
      setLoadedWelcome(true);
    }
  }, []);

  return (
    <Fragment>
      {!loadedWelcome &&
        ReactDOM.createPortal(<WelcomeModal />, document.getElementById('welcome') as HTMLElement)}
      <div className='container'>
        <BrowserRouter>
          <Header />
          <AnimatedRoutes />
          <Footer className='footer' />
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
