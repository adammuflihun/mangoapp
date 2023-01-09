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

// $('body')
//   .append('<link rel="stylesheet" type="text/css" href="http://localhost:3000/hubspot.css">')
//   .delay(2000);

$('.hs-input').addClass('input-class-hubpsot').delay(2000);
