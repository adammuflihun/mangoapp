import { aboutUs } from '$utils/about';
import { swiperslide } from '$utils/swiperHome';
import { tabCustom } from '$utils/tabCustom';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperslide();
  tabCustom();
});

aboutUs();

// $('body').append('<link rel="stylesheet" type="text/css" href="http://localhost:3000/index.css">');
$(document).ready(function () {
  $('.swiper-button-next.next-swipe').click();
});

$(function () {
  setTimeout(function () {
    $('.hbspt-form').append(
      '<link rel="stylesheet" type="text/css" href="https://mangoapp.vercel.app/dist/hubspot.css">'
    );
  }, 2500);
});
