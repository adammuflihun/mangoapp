import { swiperslide } from '$utils/swiperHome';
import { tabCustom } from '$utils/tabCustom';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperslide();
  tabCustom();
});

// $('body').append('<link rel="stylesheet" type="text/css" href="http://localhost:3000/index.css">');
