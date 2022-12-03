// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

export const swiperHome = () => {
  //installation swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2.5,
    centeredSlides: 1,
    centerInsufficientSlides: 1,
    centeredSlidesBounds: 1,
    autoplay: {
      delay: 2000,
    },

    navigation: {
      prevEl: '.swiper-button-prev.prev-swipe',
      nextEl: '.swiper-button-next.next-swipe',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        // slidesPerView: 1,
        slidesPerView: 1.2,
        centeredSlides: true,
        centerInsufficientSlides: 1,
        centeredSlidesBounds: 1,

        autoplay: false,

        // loop: false,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.2,

        autoplay: false,

        centeredSlides: true,

        centerInsufficientSlides: 1,
        centeredSlidesBounds: 1,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1.2,
        centeredSlides: true,
        centerInsufficientSlides: true,
        centeredSlidesBounds: true,
      },
      980: {
        slidesPerView: 2.2,
        centeredSlides: true,
        centerInsufficientSlides: true,
        centeredSlidesBounds: true,
      },
    },
  });
  //installation swiper

  console.log(swiper);
};
