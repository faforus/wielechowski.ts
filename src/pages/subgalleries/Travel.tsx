import React from 'react';
import useGallery from '../../hooks/use-gallery';
import Gallery from '../../components/Gallery_Main/Gallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Travel = () => {
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
  } = useGallery('outdoors');

  return (
    <HelmetProvider>
      <Helmet>
        <title>Galeria Travel - Podróże / Architektura / Przyroda</title>
      </Helmet>
      <Gallery
        category={'Travel'}
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

export default Travel;
