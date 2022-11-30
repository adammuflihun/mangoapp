// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

export const swiperHome = () => {
  //installation swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  //installation swiper

  console.log(swiper);
};
