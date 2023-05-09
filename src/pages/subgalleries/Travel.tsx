import React from 'react';
import Gallery from '../../components/Gallery_Main/Gallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Travel = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Galeria Travel - Podróże / Architektura / Przyroda</title>
      </Helmet>
      <Gallery title='Travel' link='/galeria' category='travel' />
    </HelmetProvider>
  );
};

export default Travel;
