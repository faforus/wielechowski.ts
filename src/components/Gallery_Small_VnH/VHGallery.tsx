import React, { Fragment, useState, useRef, useEffect, useMemo } from 'react';
import classesH from './HGallery.module.css';
import classesV from './VGallery.module.css';
import Modal from '../Modal/Modal';

type Image = {
  id: number;
  imgSrc: string;
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
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [largeImageIsLoading, setLargeImageIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    imgSrc: '',
    largeImage: '',
    alt: '',
    id: 0,
  });

  const mappedImages = useMemo(() => {
    return images.map((img, index) => {
      return (
        <img
          onClick={() => {
            setCurrentImage({
              imgSrc: images[index].imgSrc,
              largeImage: images[index].largeImage,
              alt: images[index].imgSrc
                .replace(/%20/g, ' ')
                .replace('/static/media/', '')
                .replace(/\..*$/, '')
                .slice(1),
              id: images[index].id,
            });
          }}
          src={img.imgSrc}
          alt={img.imgSrc
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
      imgSrc: images[0].imgSrc,
      largeImage: images[0].largeImage,
      alt: images[0].imgSrc
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
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        largeImageIsLoading={largeImageIsLoading}
        setLargeImageIsLoading={setLargeImageIsLoading}
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
              src={currentImage.imgSrc}
              alt={currentImage.alt}
              onClick={() => {
                if (currentImage.largeImage !== tempImgSrc) {
                  setLargeImageIsLoading(true);
                }
                setModal(true);
                setCurrentIndex(currentImage.id);
                setTempImgSrc(currentImage.largeImage);
              }}
              onLoad={() => {
                setLargeImageIsLoading(false);
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
