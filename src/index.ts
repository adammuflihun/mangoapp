import '@splidejs/splide/css';
import '@splidejs/splide/css/core';

import { splideSlide } from '$utils/splideSlide';

window.Webflow ||= [];
window.Webflow.push(() => {
  splideSlide();
});
