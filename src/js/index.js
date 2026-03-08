// // Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const bestSwiper = new Swiper(".best-swiper", {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       breakpoints: {
        780: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();


const modiweekSlider = new Swiper('.modiweek-slider', {
  slidesPerView: 4.25,
  spaceBetween: 20,
  loop: true,

  speed: 8000, // швидкість руху (чим більше — тим повільніше)

  autoplay: {
    delay: 2500, // без паузи між прокрутками
    disableOnInteraction: false,
  },

  freeMode: true,
  freeModeMomentum: false,

        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});