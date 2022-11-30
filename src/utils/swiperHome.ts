// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

export const swiperHome = () => {
  //installation swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2.5,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
    },
    spaceBetween: 25,
    navigation: {
      prevEl: '.swiper-button-prev.prev-swipe',
      nextEl: '.swiper-button-next.next-swipe',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  //installation swiper

  console.log(swiper);
};
