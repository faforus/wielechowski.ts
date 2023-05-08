import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Burger.module.css';
import { preloadNavImages } from '../../helpers/preloadNavigationImages';
import { isMobileChecker } from '../../helpers/isMobile';
import classNames from 'classnames';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Burger = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [toggleBurger, setToggleBurger] = useState(false);
  const isMobile = isMobileChecker();

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [innerHeight]);

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (toggleBurger && isMobile && windowHeight >= 475) {
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
    }
    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [toggleBurger, isMobile, windowHeight]);

  const toggleBurgerMenuHandler = () => {
    setToggleBurger((prev) => !prev);
  };

  const scrollToTopAndClose = () => {
    toggleBurgerMenuHandler();
    scrollToTop();
  };

  const activeHandler = ({ isActive }: { isActive: boolean }) => {
    return isActive ? classes.activeB : undefined;
  };

  return (
    <div className={classes['burger-overflow-hidden']}>
      <div
        onClick={() => {
          toggleBurgerMenuHandler();
          preloadNavImages();
        }}
        className={classNames(classes.button, {
          [classes.move]: toggleBurger,
        })}
      >
        <div className={classes['menu-icon']}>
          <span
            className={classNames({
              [classes['top-line']]: toggleBurger,
            })}
          ></span>
          <span
            className={classNames({
              [classes['middle-line']]: toggleBurger,
            })}
          ></span>
          <span
            className={classNames({
              [classes['bottom-line']]: toggleBurger,
            })}
          ></span>
        </div>
      </div>
      <div
        className={classNames(classes.container, {
          [classes.hidden]: !toggleBurger,
        })}
      >
        <div className={classes.subcontainer}>
          <nav className={classes['burger-nav']}>
            <ul className={classes['burger-ul']}>
              <li>
                <NavLink className={activeHandler} onClick={scrollToTopAndClose} to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to=''>Oferta</NavLink>
                <ul className={classes['dropdown-content']}>
                  <li>
                    <NavLink
                      className={activeHandler}
                      onClick={scrollToTopAndClose}
                      to='/oferta/sesja-biznesowa'
                    >
                      Sesja Biznesowa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={activeHandler}
                      onClick={scrollToTopAndClose}
                      to='/oferta/sesja-wizerunkowa'
                    >
                      Sesja Wizerunkowa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={activeHandler}
                      onClick={scrollToTopAndClose}
                      to='/oferta/reportaz-slubny'
                    >
                      Reportaż Ślubny
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={activeHandler}
                      onClick={scrollToTopAndClose}
                      to='/oferta/reportaz-okolicznosciowy'
                    >
                      Reportaż Okolicznościowy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={activeHandler}
                      onClick={scrollToTopAndClose}
                      to='/oferta/reportaz-firmowy'
                    >
                      Eventy Firmowe / Sportowe
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className={activeHandler} onClick={scrollToTopAndClose} to='/galeria'>
                  Galeria
                </NavLink>
              </li>
              <li>
                <NavLink className={activeHandler} onClick={scrollToTopAndClose} to='/kontakt'>
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Burger;
