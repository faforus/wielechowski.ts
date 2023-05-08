export const combineImages = (images: string[], thumbnails: string[]) => {
  return images.map((image, index) => {
    return {
      src: image,
      thumbnailSrc: thumbnails[index],
    };
  });
};
