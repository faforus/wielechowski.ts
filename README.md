This is most up to date TypeScript version of this project!
This project is constantly updated.

[https://wielechowski.net/] - Page is LIVE


[https://nextjs-e44af.web.app/] - Next.js demo also available

(not optimised and not updated)


2-in-1 Photography and React Portfolio


I built this website from scratch, and all the photographs used in the project were taken and edited by me.

[IN-DEVELOPMENT]:

-Tailwind implementation


[FEATURES]

Eslint, PostCss and prettier integrated.

Single Page Application with routing.

Facebook-ready with Open Graph (OG) image integration and descriptions. No server side rendering yet.

Responsive design for large screens, regular screens, and mobile devices.

Animated burger menu.

Preloading of crucial images.

WEBP image support.

Appropriate image types loaded without the picture element for devices that either support or do not support .WEBP images, with the help of the ua-parser-js library.

Smooth page transitions using the Framer Motion library.

Functional contact form set up with Firebase functions, Fetch API, Express, and Nodemailer library.

Two mini galleries with custom scroll - vertical and horizontal with modal.

One large gallery with modal and image sorting.

Custom gallery hook and component, same goes for modal.

Modal compatibility with Large, Horizontal, and Vertical Galleries.

Custom repeating grid layout for 14 images, including 4 vertical and 10 horizontal images.

Automatic importing of images from the selected folder, along with thumbnail images.

Efficient loading and sorting of images, ensuring horizontal images are placed in designated spaces within the grid, as well as the vertical images.

When there are no more appropriate images available, the grid populating cycle is completed, and a new grid is rendered based on the remaining images, either horizontal or vertical. This can be observed in the Studio and Travel galleries. In the Studio gallery, the layout changes to vertical images after the first 14, while in the Travel gallery, the grid changes to horizontal after 28 images.

Automatic generation of image alt attributes from modified src strings.

Loading state management.

Keyboard navigation support. No touch implemented yet.

Loading state and animation management.

Upon opening the modal, the next and previous images are preloaded, and subsequent images are preloaded when navigating right or left.

TO BE [IMPLEMENTED] - Features I have learned but have not yet had the time to implement.

Add swiping functionality to modal on mobile devices.

Utilize Router to send HTTP requests for the contact form.

Implement server-side validation for the contact form.

Create unique routes/links for large images in modal.

Manage WEBP support using Redux.

Implement lazy loading for galleries.

Enhance SEO.