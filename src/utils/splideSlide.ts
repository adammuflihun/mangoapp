// Default theme
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import '@splidejs/splide/css/core';

export const splideSlide = () => {
  //installation Splide
  new Splide('.splide', {
    type: 'loop',
    perPage: 3,
  });
};
