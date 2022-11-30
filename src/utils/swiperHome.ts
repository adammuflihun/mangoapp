import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const swiperHome = () => {
  console.log(`Hello ancol!`);

  const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
};
