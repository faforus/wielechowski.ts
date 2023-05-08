import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './Gallery.module.css';
import Spinner from '../Spinner';
import Title from '../Title';
import Modal from '../Modal';
import { motion } from 'framer-motion';
import { CUSTOM_MOTION_PROPS } from '../../config/config';

type GalleryProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  tempImgSrc: string | number;
  setTempImgSrc: React.Dispatch<React.SetStateAction<string | number>>;
  largeImgIsLoading: boolean;
  handleLargeImageLoad: () => void;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  category: string;
  isLoading: boolean;
  mappedImgs: JSX.Element[];
  mappedUnsortedImgs: JSX.Element[];
  link: string;
};

function Gallery(props: GalleryProps) {
  return (
    <Fragment>
      <Modal
        modal={props.modal}
        setModal={props.setModal}
        tempImgSrc={props.tempImgSrc}
        setTempImgSrc={props.setTempImgSrc}
        largeImgIsLoading={props.largeImgIsLoading}
        handleLargeImageLoad={props.handleLargeImageLoad}
        handlePrevClick={props.handlePrevClick}
        handleNextClick={props.handleNextClick}
      />
      <motion.div {...CUSTOM_MOTION_PROPS} className={classes.wrapper}>
        <Title title={props.category} />
        {props.isLoading && <Spinner />}
        <div style={{ display: props.isLoading ? 'none' : 'block' }} className={classes.container}>
          {props.mappedImgs}
          {props.mappedUnsortedImgs}
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
