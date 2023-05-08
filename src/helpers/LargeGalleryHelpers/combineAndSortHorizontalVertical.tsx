interface CombineImage {
  imgSrc: string;
  largeImage: string;
  alt: string;
  isHorizontal: boolean;
}

export const combineAndSortHorizontalVertical = (
  images: string[],
  thumbnailImages: string[],
): { horizontalImages: CombineImage[]; verticalImages: CombineImage[] } => {
  if (images.length !== thumbnailImages.length) {
    console.log('Images and Thumbnails arrays have different lenghts.');
    return { horizontalImages: [], verticalImages: [] };
  }

  const horizontalImages: CombineImage[] = [];
  const verticalImages: CombineImage[] = [];
  thumbnailImages.forEach((img, index) => {
    if (img.replace(/%20/g, ' ').replace('/static/media/', '').replace(/\..*$/, '')[0] === 'h') {
      horizontalImages.push({
        imgSrc: img,
        largeImage: images[index],
        alt: img.replace(/%20/g, ' ').replace('/static/media/', '').replace(/\..*$/, '').slice(1),
        isHorizontal:
          img.replace(/%20/g, ' ').replace('/static/media/', '').replace(/\..*$/, '')[0] === 'h'
            ? true
            : false,
      });
    } else {
      verticalImages.push({
        imgSrc: img,
        largeImage: images[index],
        alt: img.replace(/%20/g, ' ').replace('/static/media/', '').replace(/\..*$/, '').slice(1),
        isHorizontal:
          img.replace(/%20/g, ' ').replace('/static/media/', '').replace(/\..*$/, '')[0] === 'h'
            ? true
            : false,
      });
    }
  });

  return { horizontalImages, verticalImages };
};
