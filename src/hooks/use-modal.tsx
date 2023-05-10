import { useEffect, useCallback } from 'react';

type Image = {
  imgSrc: string;
  largeImage: string;
  alt: string;
  id: number;
};

type UseModalProps = {
  images: Image[];
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  tempImgSrc: string;
  setTempImgSrc: React.Dispatch<React.SetStateAction<string>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  largeImageIsLoading: boolean;
  setLargeImageIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const useModal = (props: UseModalProps) => {
  const {
    images,
    modal,
    setModal,
    tempImgSrc,
    setTempImgSrc,
    currentIndex,
    setCurrentIndex,
    setLargeImageIsLoading,
  } = props;

  const handlePrevClick = useCallback(() => {
    setLargeImageIsLoading(true);
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
    setLargeImageIsLoading(true);
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
    setTempImgSrc,
    handlePrevClick,
    handleNextClick,
  };
};

export default useModal;
