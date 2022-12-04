import '@splidejs/splide/css';
import '@splidejs/splide/css/core';

import { splideSlide } from '$utils/swiperHome';

window.Webflow ||= [];
window.Webflow.push(() => {
  splideSlide();
});
