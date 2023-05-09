import React from 'react';
import Gallery from '../../components/Gallery_Main/Gallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Reportage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Galeria Reportaż - Okolicznościowy i Komercyjny</title>
      </Helmet>
      <Gallery title='Reportaż' link='/galeria' category='reportage' />
    </HelmetProvider>
  );
};

export default Reportage;
