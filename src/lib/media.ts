import type { SliderContent, TextImage } from "@/types/types"
import BacchanalTop from '@/assets/images/bacchanal-top-slider.webp'
import BacchanalSingle from '@/assets/images/single-slider.webp'
import BacchanalBottom from '@/assets/images/bacchanal-bottom-slider.webp'
import Cheers from '@/assets/images/whatdoes.webp';
import Montain from '@/assets/images/mountain-image.webp';

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

export const textImageBacchanalMean: TextImage = {
  image: Cheers,
  width: 851,
  height: 521,
  alt: 'Two people clinking a cocktail mug and a skull-shaped glass with drinks in a festive, neon-lit bar.',
  title: 'What Does',
  highlightText: "'El Bacchanal' mean?",
  complementInfo: '"Bacchanal" is an English word derived from "Bacchanalia", which refers to the ancient Roman festivals in honor of Bacchus (the Roman god of wine, equivalent to the Greek Dionysus). These celebrations were known for wild, drunken revelry and excess'
}

export const textImageBacchanalStory: TextImage = {
  image: Montain,
  width: 510,
  height: 440,
  alt: 'A steep mountain with a winding staircase carved into its face, set against a blue sky.',
  title: 'Our Story',
  highlightText: "A Taste of Guatapé's Soul",
  complementInfo: "El Bacchanal isn't just a restaurant—it's a celebration of Guatapé's spirit. Nestled among the town's iconic zocalos (vibrant painted murals), we bring together the bold flavors of Antioquia with a contemporary twist."
}
