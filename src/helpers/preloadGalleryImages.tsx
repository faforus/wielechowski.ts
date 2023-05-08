import webpSupported from '../helpers/webpSupport';

type WebpackContext = __WebpackModuleApi.RequireContext;

const importAll = (r: WebpackContext) => {
  return r.keys().map(r);
};

let set1, set2, set3, set4;

if (webpSupported) {
  set1 = importAll(
    require.context('../assets/webpimages/galleries/studio-thumbnails/', true, /\.(webp)$/),
  );
  set2 = importAll(
    require.context('../assets/webpimages/galleries/reportage-thumbnails/', true, /\.(webp)$/),
  );
  set3 = importAll(
    require.context('../assets/webpimages/galleries/animals-thumbnails/', true, /\.(webp)$/),
  );
  set4 = importAll(
    require.context('../assets/webpimages/galleries/travel-thumbnails/', true, /\.(webp)$/),
  );
} else {
  set1 = importAll(
    require.context('../assets/images/galleries/studio-thumbnails/', true, /\.(jpe?g)$/),
  );
  set2 = importAll(
    require.context('../assets/images/galleries/reportage-thumbnails/', true, /\.(jpe?g)$/),
  );
  set3 = importAll(
    require.context('../assets/images/galleries/animals-thumbnails/', true, /\.(jpe?g)$/),
  );
  set4 = importAll(
    require.context('../assets/images/galleries/travel-thumbnails/', true, /\.(jpe?g)$/),
  );
}

const imagesToPreload = [...set1, ...set2, ...set3, ...set4] as string[];

export const preloadGalImages = () => {
  imagesToPreload.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};
