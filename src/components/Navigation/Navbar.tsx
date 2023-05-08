import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import { preloadNavImages } from '../../helpers/preloadNavigationImages';

const Navbar = () => {
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [hovering, setHovering] = useState(false);

  const handleHover = () => {
    if (dropdownRef.current) {
      const dropdownElement = dropdownRef.current as HTMLElement;
      dropdownElement.style.opacity = '1';
      dropdownElement.style.transition = 'none';
      setHovering(true);
    }
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  const handleClick = () => {
    if (dropdownRef.current) {
      const dropdownElement = dropdownRef.current as HTMLElement;
      dropdownElement.style.transition = 'opacity 0.3s ease-in';
      dropdownElement.style.opacity = '0';
      setTimeout(() => {
        setHovering(false);
      }, 300);
    }
  };

  const activeHandler = ({ isActive }: { isActive: boolean }) => {
    return isActive ? classes.active : undefined;
  };

  return (
    <nav className={classes.navigation}>
      <ul onMouseOut={handleMouseOut} className={classes['menu-main']}>
        <li>
          <NavLink className={activeHandler} to='/'>
            Home
          </NavLink>
        </li>
        <li className={classes.dropdown}>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
            }}
            onMouseOver={() => {
              handleHover();
              preloadNavImages();
            }}
            to='/oferta'
            className={activeHandler}
          >
            Oferta
          </NavLink>
          <ul
            ref={dropdownRef}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
            style={{
              display: hovering ? 'block' : 'none',
            }}
            className={classes['dropdown-content']}
          >
            <li>
              <NavLink className={activeHandler} onClick={handleClick} to='/oferta/sesja-biznesowa'>
                Sesja Biznesowa
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeHandler}
                onClick={handleClick}
                to='/oferta/sesja-wizerunkowa'
              >
                Sesja Wizerunkowa
              </NavLink>
            </li>
            <li>
              <NavLink className={activeHandler} onClick={handleClick} to='/oferta/reportaz-slubny'>
                Reportaż Ślubny
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeHandler}
                onClick={handleClick}
                to='/oferta/reportaz-okolicznosciowy'
              >
                Reportaż Okolicznościowy
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeHandler}
                onClick={handleClick}
                to='/oferta/reportaz-firmowy'
              >
                <span className={classes['last-dropdown-item']}>Eventy Firmowe / Sportowe</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink className={activeHandler} to='/galeria'>
            Galeria
          </NavLink>
        </li>
        <li>
          <NavLink className={activeHandler} to='/kontakt'>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
