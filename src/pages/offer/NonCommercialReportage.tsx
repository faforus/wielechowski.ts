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

const NonCommercialReportage = () => {
  let images: string[];
  let thumbnailImages: string[];

  if (webpSupported) {
    images = importAll(
      require.context(
        '../../assets/webpimages/galleries/reportage/noncorporate/',
        true,
        /\.(webp)$/,
      ),
    ) as string[];
    thumbnailImages = importAll(
      require.context(
        '../../assets/webpimages/galleries/reportage-thumbnails/noncorporate/',
        true,
        /\.(webp)$/,
      ),
    ) as string[];
  } else {
    images = importAll(
      require.context('../../assets/images/galleries/reportage/noncorporate/', true, /\.(jpe?g)$/),
    ) as string[];
    thumbnailImages = importAll(
      require.context(
        '../../assets/images/galleries/reportage-thumbnails/noncorporate/',
        true,
        /\.(jpe?g)$/,
      ),
    ) as string[];
  }

  const mappedObjectImages = images.map((img, index) => {
    return { id: index + 1, imgSrc: thumbnailImages[index], largeImage: img, alt: '' };
  });

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          property='description'
          content='wieczory panieńskie / kawalerskie / chrzciny / pierwsza komunia / zaręczyny / urodziny / imieniny'
        />
        <meta
          property='og:description'
          content='wieczory panieńskie / kawalerskie / chrzciny / pierwsza komunia / zaręczyny / urodziny / imieniny'
        />
        <title>
          Reportaż Okolicznościowy - Wieczory Panieńskie / Kawalerskie / Chrzciny / Urodziny / ...
        </title>
      </Helmet>
      <motion.div {...CUSTOM_MOTION_PROPS} className={classes.wrapper}>
        <Title title='Reportaż Okolicznościowy' />
        <div className={classes.main}>
          <div className={classes['main-container']}>
            <div className={classes['main-left']}>
              <p>Między innymi:</p>
              <p>wieczory panieńskie / kawalerskie</p>
              <p>chrzciny / pierwsza komunia</p>
              <p>zaręczyny</p>
              <p>urodziny / imieniny</p>
            </div>
            <div className={classes['main-right']}>
              <VHGallery
                images={mappedObjectImages}
                container='mini-gallery-horizontal'
                first='mini-gallery-top'
                second='mini-gallery-bottom'
                arrowOne='arrowleft'
                arrowTwo='arrowright'
                directionOne='left'
                directionTwo='right'
              />
            </div>
          </div>
        </div>
        <div className={classes.price}>
          <p>Ceny od:</p>
          <p className={classes['price-large']}>
            750<span className={classes['price-currency']}> zł</span>
          </p>
        </div>
        <div className={classes.main}>
          <p>
            Cena jest zależna od długości wydarzenia, lokalizacji, ilości zdjęć i rodzaju obróbki.
          </p>
        </div>
      </motion.div>
    </HelmetProvider>
  );
};

export default NonCommercialReportage;
