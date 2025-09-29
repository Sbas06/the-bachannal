import type { SliderProps } from "@/types/types"

import img1 from '../assets/images/El-bacchanal-Slider-Image1.webp';
import img2 from '../assets/images/El-bacchanal-Slider-Image2.webp';
import img3 from '../assets/images/El-bacchanal-Slider-Image3.webp';
import img4 from '../assets/images/El-bacchanal-Slider-Image4.webp';
import imginstagram1 from '../assets/images/El-bacchanal-Slider-instagram-Image1.webp';
import imginstagram2 from '../assets/images/El-bacchanal-Slider-instagram-Image2.webp';
import imginstagram3 from '../assets/images/El-bacchanal-Slider-instagram-Image3.webp';
import imginstagram4 from '../assets/images/El-bacchanal-Slider-instagram-Image4.webp';
import imginstagram5 from '../assets/images/El-bacchanal-Slider-instagram-Image5.webp';
import imginstagram6 from '../assets/images/El-bacchanal-Slider-instagram-Image6.webp';
import imginstagram7 from '../assets/images/El-bacchanal-Slider-instagram-Image7.webp';

export const sliderContent: SliderProps =
{
  customImages: [
    {
      image: img1,
      alt: 'slider image 1'
    },
    {
      image: img2,
      alt: 'slider image 2'
    },
    {
      image: img3,
      alt: 'slider image 3'
    },
    {
      image: img4,
      alt: 'slider image 4'
    },
  ],
  spaceBetween: 12,
  speed: 4000,
}

export const sliderInstagramContent: SliderProps =
{
  customImages: [
    {
      image: imginstagram1,
      alt: 'slider instagram image 1'
    },
    {
      image: imginstagram2,
      alt: 'slider instagram image 2'
    },
    {
      image: imginstagram3,
      alt: 'slider instagram image 3'
    },
    {
      image: imginstagram4,
      alt: 'slider instagram image 4'
    },
    {
      image: imginstagram5,
      alt: 'slider instagram image 5'
    },
    {
      image: imginstagram6,
      alt: 'slider instagram image 6'
    },
    {
      image: imginstagram7,
      alt: 'slider instagram image 7'
    },
  ],
  spaceBetween: 6,
  speed: 4000,
  titleFollowUs: 'Follow Us On Social',
  titleInstagram: '@EL_BACCHANALL'
}
