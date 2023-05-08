const GRID_LAYOUT = [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];

interface SortImage {
  imgSrc: string;
  largeImage: string;
  alt: string;
  isHorizontal: boolean;
}

interface NewSortImage extends SortImage {
  id: number;
}

export const sortImagesIntoGrid = (
  horizontalImages: SortImage[],
  verticalImages: SortImage[],
  arrayLength: number,
) => {
  let horizontalIndex = 0;
  let verticalIndex = 0;
  let idCounter = 1;
  const newSortedImages: NewSortImage[] = [];
  let isFirstUnfitImage = true;
  let indexWithoutAppropriateProportion = undefined;

  while (newSortedImages.length < arrayLength) {
    for (let i = 0; i < GRID_LAYOUT.length && newSortedImages.length < arrayLength; i++) {
      const isHorizontal = GRID_LAYOUT[i] === 1;
      let image: NewSortImage | undefined;
      let imageAvailable = true;

      if (isHorizontal) {
        if (horizontalIndex < horizontalImages.length) {
          const horizontalImage = horizontalImages[horizontalIndex++];
          image = {
            ...horizontalImage,
            id: idCounter++,
          };
        } else {
          imageAvailable = false;
        }
      } else {
        if (verticalIndex < verticalImages.length) {
          const verticalImage = verticalImages[verticalIndex++];
          image = {
            ...verticalImage,
            id: idCounter++,
          };
        } else {
          imageAvailable = false;
        }
      }

      if (!imageAvailable && isFirstUnfitImage) {
        isFirstUnfitImage = false;
        indexWithoutAppropriateProportion = newSortedImages.length;
      }

      if (image) {
        newSortedImages.push(image);
      }
    }
  }

  return { newSortedImages, indexWithoutAppropriateProportion };
};
