import React from 'react';
import Gallery from '../../components/Gallery_Main/Gallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Animals = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>FW Fotografia - Galeria Zwierzęta - Dzikie i Udomowione</title>
      </Helmet>
      <Gallery title='Zwierzęta' link='/galeria' category='animals' />
    </HelmetProvider>
  );
};

export default Animals;
