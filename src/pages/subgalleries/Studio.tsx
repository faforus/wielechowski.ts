import React from 'react';
import Gallery from '../../components/Gallery_Main/Gallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Studio = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Galeria Studio i Portret - Wizerunkowe i Biznesowe</title>
      </Helmet>
      <Gallery title='Studio' link='/galeria' category='studio' />
    </HelmetProvider>
  );
};

export default Studio;
