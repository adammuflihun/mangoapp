// import * as css from 'src/styles/swiper';
import { swiperslide } from '$utils/swiperHome';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperslide();
  $('body').append(
    '<link rel="stylesheet" type="text/css" href="https://mangoapp.vercel.app/dist/index.css">'
  );
});

// $('body').append('<link rel="stylesheet" type="text/css" href="http://localhost:3000/index.css">');
