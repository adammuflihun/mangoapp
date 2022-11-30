import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const swiperHome = () => {
  console.log(`Hello ancol!`);
  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
};
