import Swiper from 'swiper';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-banner', {
    slidesPerView: 1,
    modules: [Pagination, Autoplay],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3500,
    },
  });

  new Swiper('.swiper-findus', {
    slidesPerView: 1,
    modules: [Pagination, Autoplay],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
    },
  });

  new Swiper('.my-slider', {
    loop: true,
    modules: [Autoplay, FreeMode],
    slidesPerView: 1.2,
    freeMode: {
      enabled: true,
      sticky: false,
      momentum: false,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    speed: 4000,
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1640: { slidesPerView: 4 },
    },
  });
});
