import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Title from '../../components/Title';
import classes from './Offer.module.css';
import webpSupported from '../../helpers/webpSupport';
import VHGallery from '../../components/Gallery_Small_VnH/VHGallery';
import { motion } from 'framer-motion';
import { CUSTOM_MOTION_PROPS } from '../../config/config';

type WebpackContext = __WebpackModuleApi.RequireContext;

const importAll = (r: WebpackContext) => {
  return r.keys().map(r);
};

const Image = () => {
  let images: string[];
  let thumbnailImages: string[];

  if (webpSupported) {
    images = importAll(
      require.context('../../assets/webpimages/galleries/studio/image/', true, /\.(webp)$/),
    ) as string[];
    thumbnailImages = importAll(
      require.context(
        '../../assets/webpimages/galleries/studio-thumbnails/image/',
        true,
        /\.(webp)$/,
      ),
    ) as string[];
  } else {
    images = importAll(
      require.context('../../assets/images/galleries/studio/image/', true, /\.(jpe?g)$/),
    ) as string[];
    thumbnailImages = importAll(
      require.context('../../assets/images/galleries/studio-thumbnails/image/', true, /\.(jpe?g)$/),
    ) as string[];
  }

  const mappedObjectImages = images
    .map((img, index) => {
      return { id: index + 1, src: thumbnailImages[index], largeImage: img, alt: '' };
    })
    .reverse();

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          property='description'
          content='Zdjęcia w plenerze lub w studiu. Idealne na media społecznościowe, stronę www lub do CV. Zdjęcia są poddawane profesjonalnemu retuszowi'
        />
        <meta
          property='og:description'
          content='Zdjęcia w plenerze lub w studiu. Idealne na media społecznościowe, stronę www lub do CV. Zdjęcia są poddawane profesjonalnemu retuszowi'
        />
        <title>Sesja Wizerunkowa - Portret / Sesja Wizerunkowa</title>
      </Helmet>
      <motion.div {...CUSTOM_MOTION_PROPS} className={classes.wrapper}>
        <Title title='portret / sesja wizerunkowa' />
        <div className={classes.main}>
          <div className={classes['main-container']}>
            <div className={classes['main-left']}>
              <p>Zdjęcia w plenerze lub w studiu.</p>
              <p>Idealne na media społecznościowe, stronę www lub do CV</p>
              <p>Zdjęcia są poddawane profesjonalnemu retuszowi*</p>
              <p>Wysoka rozdzielczość zdjęć**</p>
            </div>
            <div className={classes['main-right']}>
              <VHGallery
                images={mappedObjectImages}
                container='mini-gallery'
                first='mini-gallery-left'
                second='mini-gallery-right'
                arrowOne='arrowup'
                arrowTwo='arrowdown'
                directionOne='up'
                directionTwo='down'
              />
            </div>
          </div>
        </div>
        <div className={classes.squares}>
          <div className={classes.square}>
            <p>3 zdjęcia</p>
            <p>250 zł</p>
          </div>
          <div className={classes.square}>
            <p>5 zdjęć</p>
            <p>350 zł</p>
          </div>
          <div className={classes.square}>
            <p>7 zdjęć</p>
            <p>400 zł</p>
          </div>
          <div className={classes.square}>
            <p>8+ zdjęć</p>
            <p>do</p>
            <p>uzgodnienia</p>
          </div>
        </div>
        <div className={classes['additional-info']}>
          <div className={classes['additional-info-container']}>
            <p>
              * podstawowy retusz to korekta cery, oczu, sylwetki oraz lekkie wybielanie zębów. Na
              życzenie klienta można wykonać bardziej zaawansowany retusz.
            </p>
            <p>** zdjęcia bez kadrowania są w rozdzielczości 8640 x 5760.</p>
          </div>
        </div>
      </motion.div>
    </HelmetProvider>
  );
};

export default Image;
