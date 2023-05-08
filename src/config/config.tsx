export const CUSTOM_MOTION_PROPS: object = {
  initial: { opacity: 0, position: 'absolute' },
  animate: { opacity: 1, position: 'relative', transition: { duration: 0.6 } },
  exit: {
    opacity: 0,
    position: 'absolute',
    transition: { duration: 0.6 },
  },
};

export const CUSTOM_MOTION_PROPS_MOBILE_MAIN_GALLERY: object = {
  initial: { opacity: 0, position: 'absolute' },
  animate: { opacity: 1, position: 'relative', transition: { duration: 0.6 } },
};
