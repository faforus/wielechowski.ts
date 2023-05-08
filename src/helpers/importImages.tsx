import webpSupported from './webpSupport';

type WebpackContext = __WebpackModuleApi.RequireContext;

const importAll = (r: WebpackContext) => {
  return r.keys().map(r);
};

export function importAnimals() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context('../assets/webpimages/galleries/animals/', true, /\.(webp)$/),
    );
    thumbnailImages = importAll(
      require.context('../assets/webpimages/galleries/animals-thumbnails/', true, /\.(webp)$/),
    );
  } else {
    images = importAll(require.context('../assets/images/galleries/animals', true, /\.(jpe?g)$/));
    thumbnailImages = importAll(
      require.context('../assets/images/galleries/animals-thumbnails', true, /\.(jpe?g)$/),
    );
  }

  return { images, thumbnailImages };
}

export function importStudio() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context('../assets/webpimages/galleries/studio/', true, /\.(webp)$/),
    );
    thumbnailImages = importAll(
      require.context('../assets/webpimages/galleries/studio-thumbnails/', true, /\.(webp)$/),
    );
  } else {
    images = importAll(require.context('../assets/images/galleries/studio', true, /\.(jpe?g)$/));
    thumbnailImages = importAll(
      require.context('../assets/images/galleries/studio-thumbnails', true, /\.(jpe?g)$/),
    );
  }
  return { images, thumbnailImages };
}

export function importOutdoors() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context('../assets/webpimages/galleries/travel/', true, /\.(webp)$/),
    );
    thumbnailImages = importAll(
      require.context('../assets/webpimages/galleries/travel-thumbnails/', true, /\.(webp)$/),
    );
  } else {
    images = importAll(require.context('../assets/images/galleries/travel', true, /\.(jpe?g)$/));
    thumbnailImages = importAll(
      require.context('../assets/images/galleries/travel-thumbnails', true, /\.(jpe?g)$/),
    );
  }
  return { images, thumbnailImages };
}

export function importReportage() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context('../assets/webpimages/galleries/reportage/', true, /\.(webp)$/),
    );
    thumbnailImages = importAll(
      require.context('../assets/webpimages/galleries/reportage-thumbnails/', true, /\.(webp)$/),
    );
  } else {
    images = importAll(require.context('../assets/images/galleries/reportage', true, /\.(jpe?g)$/));
    thumbnailImages = importAll(
      require.context('../assets/images/galleries/reportage-thumbnails', true, /\.(jpe?g)$/),
    );
  }
  return { images, thumbnailImages };
}

export function importWedding() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context('../assets/webpimages/galleries/reportage/wedding/', true, /\.(webp)$/),
    );
    thumbnailImages = importAll(
      require.context(
        '../assets/webpimages/galleries/reportage-thumbnails/wedding/',
        true,
        /\.(webp)$/,
      ),
    );
  } else {
    images = importAll(
      require.context('../assets/images/galleries/reportage/wedding', true, /\.(jpe?g)$/),
    );
    thumbnailImages = importAll(
      require.context(
        '../assets/images/galleries/reportage-thumbnails/wedding',
        true,
        /\.(jpe?g)$/,
      ),
    );
  }
  return { images, thumbnailImages };
}
