import React from 'react';
import useGallery from '../../hooks/use-gallery';
import Gallery from '../../components/Gallery_Main/Gallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Animals = () => {
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
  } = useGallery('animals');

  return (
    <HelmetProvider>
      <Helmet>
        <title>FW Fotografia - Galeria Zwierzęta - Dzikie i Udomowione</title>
      </Helmet>
      <Gallery
        category={'Zwierzęta'}
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

export default Animals;
