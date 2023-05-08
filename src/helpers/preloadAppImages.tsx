import webpSupported from '../helpers/webpSupport';

import wgal1 from '../assets/webpimages/reportaz1.webp';
import wgal2 from '../assets/webpimages/studio.webp';
import wgal3 from '../assets/webpimages/animals.webp';
import wgal4 from '../assets/webpimages/plener.webp';
import wkon1 from '../assets/webpimages/kontakt.webp';

import gal1 from '../assets/images/reportaz1.jpg';
import gal2 from '../assets/images/studio.jpg';
import gal3 from '../assets/images/animals.jpg';
import gal4 from '../assets/images/plener.jpg';
import kon1 from '../assets/images/kontakt.jpg';

let imagesToPreload: string[] = [];
if (webpSupported) {
  imagesToPreload = [wgal1, wgal2, wgal3, wgal4, wkon1];
} else {
  imagesToPreload = [gal1, gal2, gal3, gal4, kon1];
}

export const preloadAppImages = () => {
  imagesToPreload.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};
