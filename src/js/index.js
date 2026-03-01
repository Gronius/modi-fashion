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

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
