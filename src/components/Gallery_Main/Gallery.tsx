import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './Gallery.module.css';
import Spinner from '../Spinner';
import Title from '../Title';
import Modal from '../Modal';
import { motion } from 'framer-motion';
import { CUSTOM_MOTION_PROPS } from '../../config/config';
import useGallery from '../../hooks/use-gallery';

interface GalleryProps {
  title: string;
  link: string;
  category: 'animals' | 'reportage' | 'studio' | 'travel' | 'wedding';
}

function Gallery(props: GalleryProps) {
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
  } = useGallery(props.category);

  return (
    <Fragment>
      <Modal
        modal={modal}
        setModal={setModal}
        tempImgSrc={tempImgSrc}
        setTempImgSrc={setTempImgSrc}
        largeImgIsLoading={largeImgIsLoading}
        handleLargeImageLoad={handleLargeImageLoad}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
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
