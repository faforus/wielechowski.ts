import React from 'react';
import useGallery from '../../hooks/use-gallery';
import Gallery from '../../components/Gallery_Main/Gallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Studio = () => {
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
  } = useGallery('studio');

  return (
    <HelmetProvider>
      <Helmet>
        <title>Galeria Studio i Portret - Wizerunkowe i Biznesowe</title>
      </Helmet>
      <Gallery
        category={'Studio / Portret'}
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

export default Studio;
