import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { swiperHome } from '$utils/swiperHome';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperHome();
});
