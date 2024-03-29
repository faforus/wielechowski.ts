import React, { useEffect, useState, useCallback } from 'react';
import classes from '../components/Gallery_Main/Gallery.module.css';
import {
  importAnimals,
  importStudio,
  importOutdoors,
  importReportage,
  importWedding,
} from '../helpers/importImages';
import { sortImagesIntoGrid } from '../helpers/LargeGalleryHelpers/sortImagesIntoGrid';
import { combineAndSortHorizontalVertical } from '../helpers/LargeGalleryHelpers/combineAndSortHorizontalVertical';

type UseGalleryProps = {
  category: string;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  tempImgSrc: string;
  setTempImgSrc: React.Dispatch<React.SetStateAction<string>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  largeImageIsLoading: boolean;
  setLargeImageIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function useGallery(props: UseGalleryProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  const { category, setModal, setTempImgSrc, setCurrentIndex, setLargeImageIsLoading } = props;

  let images;
  let thumbnailImages;

  switch (category) {
    case 'animals':
      ({ images, thumbnailImages } = importAnimals());
      break;
    case 'studio':
      ({ images, thumbnailImages } = importStudio());
      break;
    case 'travel':
      ({ images, thumbnailImages } = importOutdoors());
      break;
    case 'reportage':
      ({ images, thumbnailImages } = importReportage());
      break;
    case 'wedding':
      ({ images, thumbnailImages } = importWedding());
      break;
    default:
      console.log('No default');
  }

  const typedImages = images as string[];
  const typedThumbnailImages = thumbnailImages as string[];

  const { horizontalImages, verticalImages } = combineAndSortHorizontalVertical(
    typedImages,
    typedThumbnailImages,
  );

  const { newSortedImages: sortedImages, indexWithoutAppropriateProportion } = sortImagesIntoGrid(
    horizontalImages,
    verticalImages,
    typedImages.length,
  );

  interface Image {
    imgSrc: string;
    largeImage: string;
    alt: string;
    isHorizontal: boolean;
    id: number;
  }

  const splitInt14AndMapImages = (sortedImages: Image[]) => {
    let doesNotFitCount = 0;
    let temporaryFittingImagesArray: JSX.Element[] = [];
    let temporaryRemainingImagesArray: JSX.Element[] = [];
    const mappedImgs: JSX.Element[] = [];
    const mappedUnsortedImgs: JSX.Element[] = [];

    let sortedFittingImages = sortedImages;

    if (indexWithoutAppropriateProportion !== undefined) {
      const sliceIndex = Math.ceil(indexWithoutAppropriateProportion / 14) * 14;

      sortedFittingImages = sortedImages.slice(0, sliceIndex);
      const sortedRemainingImages = sortedImages.slice(sliceIndex);

      sortedRemainingImages.forEach((item, index) => {
        temporaryRemainingImagesArray.push(
          <div
            key={index}
            className={
              item.isHorizontal
                ? classes['horizontal-image-proportions']
                : classes['vertical-image-proportions']
            }
          >
            <img
              src={item.imgSrc}
              alt={item.alt}
              onClick={() => {
                setLargeImageIsLoading(true);
                setTempImgSrc(item.largeImage);
                setCurrentIndex(item.id);
                setModal(true);
                preloadTwoImages(item.id);
              }}
              onLoad={() => {
                setLoadedImages((prevCount) => prevCount + 1);
              }}
            />
          </div>,
        );
        if ((index + 1) % 12 === 0 || index === sortedRemainingImages.length - 1) {
          const isLastGrid = index === sortedRemainingImages.length - 1;
          const numOfImgsInGrid = isLastGrid ? temporaryRemainingImagesArray.length : 12;

          mappedUnsortedImgs.push(
            <div
              className={item.isHorizontal ? classes['grid-horizontal'] : classes['grid-vertical']}
              key={`grid-${index}`}
            >
              {temporaryRemainingImagesArray.slice(0, numOfImgsInGrid)}
            </div>,
          );
          temporaryRemainingImagesArray = [];
        }
      });
    }

    sortedFittingImages.forEach((item, index) => {
      temporaryFittingImagesArray.push(
        <div key={index} className={classes['horizontal-image-proportions']}>
          <img
            src={item.imgSrc}
            alt={item.alt}
            onClick={() => {
              setLargeImageIsLoading(true);
              setTempImgSrc(item.largeImage);
              setCurrentIndex(item.id);
              setModal(true);
              preloadTwoImages(item.id);
            }}
            onLoad={() => {
              setLoadedImages((prevCount) => prevCount + 1);
            }}
          />
        </div>,
      );

      if (((index + 1) % 14 === 0 && doesNotFitCount === 0) || index === sortedImages.length - 1) {
        const isLastGrid = index === sortedImages.length - 1;
        const numOfImgsInGrid = isLastGrid ? temporaryFittingImagesArray.length : 14;

        mappedImgs.push(
          <div className={classes.grid} key={`grid-${index}`}>
            {temporaryFittingImagesArray.slice(0, numOfImgsInGrid)}
          </div>,
        );
        temporaryFittingImagesArray = [];
        doesNotFitCount = 0;
      }
    });
    return { mappedImgs, mappedUnsortedImgs };
  };

  const { mappedImgs, mappedUnsortedImgs } = splitInt14AndMapImages(sortedImages);

  const preloadTwoImages = useCallback(
    (passedID: number) => {
      const currentImageIndex = sortedImages.findIndex((img) => img.id === passedID);
      const currentImage = new Image();
      currentImage.src = sortedImages[currentImageIndex].largeImage;

      const nextIndex = (currentImageIndex + 1) % sortedImages.length;
      const nextImg = new Image();
      nextImg.src = sortedImages[nextIndex].largeImage;

      const prevIndex = (currentImageIndex + sortedImages.length - 1) % sortedImages.length;
      const prevImg = new Image();
      prevImg.src = sortedImages[prevIndex].largeImage;
    },
    [sortedImages],
  );

  useEffect(() => {
    if (loadedImages !== 0 && loadedImages === images.length) {
      setIsLoading(false);
    }
  }, [loadedImages, typedImages.length]);

  return {
    isLoading,
    mappedImgs,
    mappedUnsortedImgs,
    sortedImages,
  };
}

export default useGallery;
