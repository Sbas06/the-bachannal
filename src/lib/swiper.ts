import Swiper from "swiper";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-banner', {
    slidesPerView: 1,
    modules: [Pagination, Autoplay],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 3500,
    }
  })
})
