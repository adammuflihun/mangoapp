import Swiper from 'swiper';
import 'swiper/css/bundle';

export const swiperHome = () => {
  //installation swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  //installation swiper

  console.log(swiper);
};
