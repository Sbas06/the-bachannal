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
  id: 'sliderGallery',
  customImages: [
    {
      image: img1,
      alt: 'Chili-frosted mason jar cocktail'
    },
    {
      image: img2,
      alt: 'Cocktail in a martini glass decorated with a heart-shaped lemon peel strip'
    },
    {
      image: img3,
      alt: 'Red cocktail in a martini glass with chili frosting, cherry, and lemon peel garnish'
    },
    {
      image: img4,
      alt: 'Two cocktails in a short glass, one light with mint and one dark, both garnished with a lemon slice'
    },
  ],
  spaceBetween: 12,
  speed: 4000,
}

export const sliderInstagramContent: SliderProps =
{
  id: 'sliderInstagram',
  customImages: [
    {
      image: imginstagram1,
      alt: 'instagram-post-01'
    },
    {
      image: imginstagram2,
      alt: 'instagram-post-02'
    },
    {
      image: imginstagram3,
      alt: 'instagram-post-03'
    },
    {
      image: imginstagram4,
      alt: 'instagram-post-04'
    },
    {
      image: imginstagram5,
      alt: 'instagram-post-05'
    },
    {
      image: imginstagram6,
      alt: 'instagram-post-06'
    },
    {
      image: imginstagram7,
      alt: 'instagram-post-07'
    },
  ],
  spaceBetween: 6,
  speed: 4000,
  titleFollowUs: 'Follow Us On Social',
  titleInstagram: '@EL_BACCHANALL'
}
