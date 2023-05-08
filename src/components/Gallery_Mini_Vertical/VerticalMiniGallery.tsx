import React, { Fragment, useState, useRef, useEffect, useMemo } from 'react';
import classes from './VerticalMiniGallery.module.css';
import Modal from '../../components/Modal';
import useModal from '../../hooks/use-modal';

type Image = {
  id: number;
  src: string;
  largeImage: string;
  alt: string;
};

type Props = {
  images: Array<Image>;
};

const HorizontalMiniGallery = ({ images }: Props) => {
  const myDivRef = useRef<HTMLDivElement | null>(null);
  const [currentImage, setCurrentImage] = useState({
    src: '',
    largeImage: '',
    alt: '',
    id: 0,
  });

  const {
    modal,
    setModal,
    tempImgSrc,
    setTempImgSrc,
    setCurrentIndex,
    largeImgIsLoading,
    handleLargeImageLoad,
    handlePrevClick,
    handleNextClick,
  }: {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    tempImgSrc: string | number;
    setTempImgSrc: React.Dispatch<React.SetStateAction<string | number>>;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    largeImgIsLoading: boolean;
    handleLargeImageLoad: () => void;
    handlePrevClick: () => void;
    handleNextClick: () => void;
  } = useModal(images);

  const mappedImages = useMemo(() => {
    return images.map((img, index) => {
      return (
        <img
          onClick={() => {
            setCurrentImage({
              src: images[index].src,
              largeImage: images[index].largeImage,
              alt: images[index].src
                .replace(/%20/g, ' ')
                .replace('/static/media/', '')
                .replace(/\..*$/, '')
                .slice(1),
              id: images[index].id,
            });
          }}
          src={img.src}
          alt={img.src
            .replace(/%20/g, ' ')
            .replace('/static/media/', '')
            .replace(/\..*$/, '')
            .slice(1)}
          key={index}
        />
      );
    });
  }, [images, setCurrentIndex, setModal, setTempImgSrc]);

  useEffect(() => {
    setCurrentImage({
      src: images[0].src,
      largeImage: images[0].largeImage,
      alt: images[0].src
        .replace(/%20/g, ' ')
        .replace('/static/media/', '')
        .replace(/\..*$/, '')
        .slice(1),
      id: images[0].id,
    });
    setCurrentIndex(images[0].id);
    setTempImgSrc(images[0].largeImage);
  }, [setCurrentImage, setCurrentIndex, setTempImgSrc, images]);

  function scroll(direction: 'up' | 'down') {
    if (myDivRef.current) {
      const sign = direction === 'up' ? -1 : 1;
      myDivRef.current.scrollBy({
        top: sign * myDivRef.current.clientHeight,
        behavior: 'smooth',
      });
    }
  }

  return (
    <Fragment>
      <Modal
        modal={modal}
        setModal={setModal}
        tempImgSrc={tempImgSrc}
        setTempImgSrc={setTempImgSrc}
        setCurrentIndex={setCurrentIndex}
        largeImgIsLoading={largeImgIsLoading}
        handleLargeImageLoad={handleLargeImageLoad}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <div className={classes['mini-gallery']}>
        <div className={classes['mini-gallery-left']}>
          <p
            onClick={() => {
              scroll('up');
            }}
            className={classes.arrowdown}
          >
            ›
          </p>
          <p
            onClick={() => {
              scroll('down');
            }}
            className={classes.arrowup}
          >
            ›
          </p>
          <div
            onClick={() => {
              setModal(true);
            }}
            style={{ height: '100%' }}
          >
            <img src={currentImage.src} alt={currentImage.alt} />
          </div>
        </div>
        <div ref={myDivRef} className={classes['mini-gallery-right']}>
          {mappedImages}
        </div>
      </div>
    </Fragment>
  );
};

export default HorizontalMiniGallery;
