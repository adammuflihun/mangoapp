import Swiper from 'swiper/bundle';
import styles from 'swiper/css/bundle';
import styles from 'src/styles/swiper';


// import 'swiper/css';

export const swiperslide = () => {
  // const swiper = new Swiper(...);

  console.log("anjay");


  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 0,
    initialSlide: 3,
    watchOverflow: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
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
        slidesPerView: 1.2,
        spaceBetween: 10,
        initialSlide: 3,
        watchOverflow: true,
        centeredSlides: true,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        initialSlide: 3,
        watchOverflow: true,
        centeredSlides: true,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1.2,
        spaceBetween: 15,
        initialSlide: 3,
        watchOverflow: true,
        centeredSlides: true,
      },
      980: {
        slidesPerView: 2.2,
        spaceBetween: 25,
        initialSlide: 3,
        watchOverflow: true,
        centeredSlides: true,
      },
    },
  });
};
