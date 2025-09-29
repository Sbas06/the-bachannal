import Swiper from "swiper";
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';

const init = () => {
  const sliders = Array.from(document.querySelectorAll<HTMLElement>('.my-slider'));

  sliders.forEach((el) => {
    if ((el as any).__swiperInitialized) return;

    const ds = el.dataset;
    const spaceBetween = Number.parseInt(ds.spaceBetween ?? '12', 10) || 12;

    (el as any).__swiperInitialized = true;

    new Swiper(el as HTMLElement, {
      loop: true,
      modules: [Autoplay, FreeMode],
      spaceBetween,
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
        1640: { slidesPerView: 4 }
      }
    });
  });
};

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}

export default init;
