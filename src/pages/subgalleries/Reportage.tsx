import React from 'react';
import useGallery from '../../hooks/use-gallery';
import Gallery from '../../components/Gallery_Main/Gallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Reportage = () => {
  const {
    modal,
    largeImgIsLoading,
    tempImgSrc,
    handleLargeImageLoad,
    setModal,
    setTempImgSrc,
    isLoading,
    mappedImgs,
    mappedUnsortedImgs,
    handlePrevClick,
    handleNextClick,
  } = useGallery('reportage');

  return (
    <HelmetProvider>
      <Helmet>
        <title>Galeria Reportaż - Okolicznościowy i Komercyjny</title>
      </Helmet>
      <Gallery
        category={'Reportaż'}
        link='/galeria'
        modal={modal}
        largeImgIsLoading={largeImgIsLoading}
        tempImgSrc={tempImgSrc}
        handleLargeImageLoad={handleLargeImageLoad}
        setModal={setModal}
        setTempImgSrc={setTempImgSrc}
        isLoading={isLoading}
        mappedImgs={mappedImgs}
        mappedUnsortedImgs={mappedUnsortedImgs}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </HelmetProvider>
  );
};

export default Reportage;
