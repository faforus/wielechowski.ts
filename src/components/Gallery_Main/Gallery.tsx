import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Gallery.module.css';
import Spinner from '../Spinner';
import Title from '../Title';
import Modal from '../Modal/Modal';
import { motion } from 'framer-motion';
import { CUSTOM_MOTION_PROPS } from '../../config/config';
import useGallery from '../../hooks/use-gallery';

interface GalleryProps {
  title: string;
  link: string;
  category: 'animals' | 'reportage' | 'studio' | 'travel' | 'wedding';
}

function Gallery(props: GalleryProps) {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [largeImageIsLoading, setLargeImageIsLoading] = useState(false);

  const { category } = props;

  const { isLoading, mappedImgs, mappedUnsortedImgs, sortedImages } = useGallery({
    category,
    modal,
    setModal,
    tempImgSrc,
    setTempImgSrc,
    currentIndex,
    setCurrentIndex,
    largeImageIsLoading,
    setLargeImageIsLoading,
  });

  return (
    <Fragment>
      <Modal
        modal={modal}
        setModal={setModal}
        tempImgSrc={tempImgSrc}
        setTempImgSrc={setTempImgSrc}
        images={sortedImages}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        largeImageIsLoading={largeImageIsLoading}
        setLargeImageIsLoading={setLargeImageIsLoading}
      />
      <motion.div {...CUSTOM_MOTION_PROPS} className={classes.wrapper}>
        <Title title={props.title} />
        {isLoading && <Spinner />}
        <div style={{ display: isLoading ? 'none' : 'block' }} className={classes.container}>
          {mappedImgs}
          {mappedUnsortedImgs}
        </div>
        <div className={classes['button-container']}>
          {props.link === 'empty' ? (
            ''
          ) : (
            <Link to={props.link}>
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                ‹‹‹
              </button>
            </Link>
          )}
        </div>
      </motion.div>
    </Fragment>
  );
}

export default Gallery;
