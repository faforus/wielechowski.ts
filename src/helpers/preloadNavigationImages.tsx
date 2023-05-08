import webpSupported from './webpSupport';

import p1 from '../assets/images/partners/emporium.png';
import p2 from '../assets/images/partners/fedex.png';
import p3 from '../assets/images/partners/hebe.png';
import p4 from '../assets/images/partners/hevelianum.png';
import p5 from '../assets/images/partners/pepsico.png';
import p6 from '../assets/images/partners/png.png';
import p7 from '../assets/images/partners/pomerania.png';
import p8 from '../assets/images/partners/zabka.png';
import p9 from '../assets/images/partners/arrow.png';

const logos = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

type WebpackContext = __WebpackModuleApi.RequireContext;

const importAll = (r: WebpackContext) => {
  return r.keys().map(r);
};

let set1, set2, set3, set4;

if (webpSupported) {
  set1 = importAll(
    require.context(
      '../assets/webpimages/galleries/studio-thumbnails/business/',
      true,
      /\.(webp)$/,
    ),
  );
  set2 = importAll(
    require.context(
      '../assets/webpimages/galleries/reportage-thumbnails/corporate/',
      true,
      /\.(webp)$/,
    ),
  );
  set3 = importAll(
    require.context('../assets/webpimages/galleries/studio-thumbnails/image/', true, /\.(webp)$/),
  );
  set4 = importAll(
    require.context(
      '../assets/webpimages/galleries/reportage-thumbnails/noncorporate/',
      true,
      /\.(webp)$/,
    ),
  );
} else {
  set1 = importAll(
    require.context('../assets/images/galleries/studio-thumbnails/business/', true, /\.(jpe?g)$/),
  );
  set2 = importAll(
    require.context(
      '../assets/images/galleries/reportage-thumbnails/corporate/',
      true,
      /\.(jpe?g)$/,
    ),
  );
  set3 = importAll(
    require.context('../assets/images/galleries/studio-thumbnails/image/', true, /\.(jpe?g)$/),
  );
  set4 = importAll(
    require.context(
      '../assets/images/galleries/reportage-thumbnails/noncorporate/',
      true,
      /\.(jpe?g)$/,
    ),
  );
}

const imagesToPreload = [...logos, ...set1, ...set2, ...set3, ...set4] as string[];

export const preloadNavImages = () => {
  imagesToPreload.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};
