import type { SliderContent } from "@/types/types"
import BacchanalTop from '@/assets/images/bacchanal-top-slider.webp'
import BacchanalSingle from '@/assets/images/single-slider.webp'
import BacchanalBottom from '@/assets/images/bacchanal-bottom-slider.webp'

export const topSliderContent: SliderContent =
{
  slider: [
    {
      image: BacchanalTop,
      alt: "A vibrant and colorful marquee and neon sign for 'Bacchanal Restaurante & Bar' glowing at night."
    },
    {
      image: BacchanalSingle,
      alt: 'A festive group of people wearing funny animal masks and posing playfully for the camera.'
    },
    {
      image: BacchanalBottom,
      alt: 'A smiling man and woman hugging each other warmly in a candid, black and white photograph.'
    },
  ],
  bannerSpan: 'Guatape-Colombia',
  bannerTitle: 'El Bacchanal'
}

export const singleBanner: SliderContent =
{
  image: BacchanalSingle,
  alt: 'A festive group of people wearing funny animal masks and posing playfully for the camera.'
}

export const bottomSliderContent: SliderContent =
{
  slider: [
    {
      image: BacchanalBottom,
      alt: 'A smiling man and woman hugging each other warmly in a candid, black and white photograph.'
    },
    {
      image: BacchanalTop,
      alt: "A vibrant and colorful marquee and neon sign for 'Bacchanal Restaurante & Bar' glowing at night."
    },
    {
      image: BacchanalSingle,
      alt: 'A festive group of people wearing funny animal masks and posing playfully for the camera.'
    },
  ],
  bannerSpan: 'The Perfect Night, Shared with',
  bannerTitle: 'The Perfect People'
}
