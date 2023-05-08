import React from 'react';
import classes from './Footer.module.css';
import Links from '../components/Links';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <Links />
      <p className={classes.copyright}>© 2023 Filip Wielechowski Fotografia</p>
    </footer>
  );
};

export default Footer;
