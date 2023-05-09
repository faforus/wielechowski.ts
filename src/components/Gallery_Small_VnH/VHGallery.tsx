import React, { Fragment, useState, useRef, useEffect, useMemo } from 'react';
import classesH from './HGallery.module.css';
import classesV from './VGallery.module.css';
import Modal from '../Modal';
import useModal from '../../hooks/use-modal';

type Image = {
  id: number;
  src: string;
  largeImage: string;
  alt: string;
};

type Props = {
  images: Array<Image>;
  container: string;
  first: string;
  second: string;
  arrowOne: string;
  arrowTwo: string;
  directionOne: 'left' | 'right' | 'up' | 'down';
  directionTwo: 'left' | 'right' | 'up' | 'down';
};

const VHGallery = ({
  images,
  container,
  first,
  second,
  arrowOne,
  arrowTwo,
  directionOne,
  directionTwo,
}: Props) => {
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
    tempImgSrc: string;
    setTempImgSrc: React.Dispatch<React.SetStateAction<string>>;
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

  function scroll(direction: 'left' | 'right' | 'up' | 'down') {
    if (myDivRef.current) {
      switch (direction) {
        case 'left':
          myDivRef.current.scrollBy({
            left: -myDivRef.current.clientWidth * 0.3,
            behavior: 'smooth',
          });
          break;
        case 'right':
          myDivRef.current.scrollBy({
            left: myDivRef.current.clientWidth * 0.3,
            behavior: 'smooth',
          });
          break;
        case 'up':
          myDivRef.current.scrollBy({
            top: myDivRef.current.clientHeight,
            behavior: 'smooth',
          });
          break;
        case 'down':
          myDivRef.current.scrollBy({
            top: -myDivRef.current.clientHeight,
            behavior: 'smooth',
          });
          break;
        default:
          break;
      }
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
      <div className={directionOne === 'left' ? classesH[container] : classesV[container]}>
        <div className={directionOne === 'left' ? classesH[first] : classesV[first]}>
          <p
            onClick={() => {
              scroll(directionOne);
            }}
            className={directionOne === 'left' ? classesH[arrowOne] : classesV[arrowOne]}
          >
            ›
          </p>{' '}
          <p
            onClick={() => {
              scroll(directionTwo);
            }}
            className={directionOne === 'left' ? classesH[arrowTwo] : classesV[arrowTwo]}
          >
            ›
          </p>
          <div style={{ height: '100%' }}>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              onClick={() => {
                setModal(true);
                setCurrentIndex(currentImage.id);
                setTempImgSrc(currentImage.largeImage);
              }}
            />
          </div>
        </div>
        <div
          ref={myDivRef}
          className={directionOne === 'left' ? classesH[second] : classesV[second]}
        >
          {mappedImages}
        </div>
      </div>
    </Fragment>
  );
};

export default VHGallery;
