import { swiperslide } from '$utils/swiperHome';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperslide();
});

$('body').append(
  '<link rel="stylesheet" type="text/css" href="https://mangoapp.vercel.app/src/styles/swiper.css">'
);
