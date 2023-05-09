import { useEffect, useCallback, useState } from 'react';

type Image = {
  imgSrc: string;
  largeImage: string;
  alt: string;
  id: number;
};

const useModal = (images: Image[]) => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [largeImgIsLoading, setLargeImgIsLoading] = useState(false);

  const handlePrevClick = useCallback(() => {
    setLargeImgIsLoading(true);
    const currentImageIndex = images.findIndex((img) => img.id === currentIndex);
    const newIndex = (currentImageIndex + images.length - 1) % images.length;
    setTempImgSrc(images[newIndex].largeImage);
    setCurrentIndex(images[newIndex].id);
    const newImg = new Image();
    newImg.src = images[newIndex].largeImage;

    const prevIndex = (newIndex + images.length - 1) % images.length;
    const prevImg = new Image();
    prevImg.src = images[prevIndex].largeImage;
  }, [images, currentIndex]);

  const handleNextClick = useCallback(() => {
    setLargeImgIsLoading(true);
    const currentImageIndex = images.findIndex((img) => img.id === currentIndex);
    const newIndex = (currentImageIndex + 1) % images.length;
    setTempImgSrc(images[newIndex].largeImage);
    setCurrentIndex(images[newIndex].id);
    const newImg = new Image();
    newImg.src = images[newIndex].largeImage;

    const nextIndex = (newIndex + 1) % images.length;
    const nextImg = new Image();
    nextImg.src = images[nextIndex].largeImage;
  }, [images, currentIndex]);

  const handleLargeImageLoad = () => {
    setLargeImgIsLoading(false);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  return {
    modal,
    setModal,
    tempImgSrc,
    setLargeImgIsLoading,
    currentIndex,
    setCurrentIndex,
    setTempImgSrc,
    handleLargeImageLoad,
    largeImgIsLoading,
    handlePrevClick,
    handleNextClick,
  };
};

export default useModal;
