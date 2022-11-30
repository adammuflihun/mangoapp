// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

export const swiperHome = () => {
  //installation swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2.5,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
  //installation swiper

  console.log(swiper);
};
