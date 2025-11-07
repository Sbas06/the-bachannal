import type { SliderContent, TextImage, PDFImage, HeaderAboutImage, StoryAboutImage, MomentsAboutImage } from "@/types/types"
import BacchanalTop from '@/assets/images/bacchanal-top-slider.webp'
import BacchanalTopMobile from '@/assets/images/bacchanal-top-slider-mobile.webp';
import BacchanalSingle from '@/assets/images/single-slider.webp'
import BacchanalSingleMobile from '@/assets/images/single-slider-mobile.webp';
import BacchanalBottom from '@/assets/images/bacchanal-bottom-slider.webp'
import BacchanalBottomMobile from '@/assets/images/bacchanal-bottom-slider-mobile.webp';
import Cheers from '@/assets/images/whatdoes.webp';
import Montain from '@/assets/images/mountain-image.webp';
import Drinks from '@/assets/images/PDF-viewer-image.webp';
import DesktopHeader from '@/assets/images/header-about-image-desktop.webp';
import MobileHeader from '@/assets/images/header-about-image-mobile.webp';
import BrindisImage from '@/assets/images/brindis-image.webp';
import DesktopMoments from '@/assets/images/about-moments-desktop.webp';
import MobileMoments from '@/assets/images/about-moments-mobile.webp';


export const topSliderContent: SliderContent =
{
  id: 'topSlider',
  slider: [
    {
      image: BacchanalTop,
      mobileImage: BacchanalTopMobile,
      alt: "A vibrant and colorful marquee and neon sign for 'Bacchanal Restaurante & Bar' glowing at night."
    },
    {
      image: BacchanalSingle,
      mobileImage: BacchanalSingleMobile,
      alt: 'A festive group of people wearing funny animal masks and posing playfully for the camera.'
    },
    {
      image: BacchanalBottom,
      mobileImage: BacchanalBottomMobile,
      alt: 'A smiling man and woman hugging each other warmly in a candid, black and white photograph.'
    },
  ],
  bannerSpan: 'Guatape-Colombia',
  bannerTitle: 'El Bacchanal'
}

export const singleBanner: SliderContent =
{
  id: 'bottomSlider',
  image: BacchanalSingle,
  mobileImage: BacchanalSingleMobile,
  alt: 'A festive group of people wearing funny animal masks and posing playfully for the camera.'
}

export const singleBannerSecond: SliderContent =
{
  id: 'bottomSlider',
  image: BacchanalTop,
  mobileImage: BacchanalTopMobile,
  alt: "A vibrant and colorful marquee and neon sign for 'Bacchanal Restaurante & Bar' glowing at night."
}

export const singleBannerThird: SliderContent =
{
  id: 'bottomSlider',
  image: BacchanalBottom,
  mobileImage: BacchanalBottomMobile,
  alt: "A smiling man and woman hugging each other warmly in a candid, black and white photograph."
}

export const bottomSliderContent: SliderContent =
{
  slider: [
    {
      image: BacchanalBottom,
      mobileImage: BacchanalBottomMobile,
      alt: 'A smiling man and woman hugging each other warmly in a candid, black and white photograph.'
    },
    {
      image: BacchanalTop,
      mobileImage: BacchanalTopMobile,
      alt: "A vibrant and colorful marquee and neon sign for 'Bacchanal Restaurante & Bar' glowing at night."
    },
    {
      image: BacchanalSingle,
      mobileImage: BacchanalSingleMobile,
      alt: 'A festive group of people wearing funny animal masks and posing playfully for the camera.'
    },
  ],
  bannerSpan: 'The Perfect Night, Shared with',
  bannerTitle: 'The Perfect People'
}

export const textImageBacchanalMean: TextImage = {
  id: 'bacchanalMean',
  image: Cheers,
  width: 851,
  height: 521,
  alt: 'Two people clinking a cocktail mug and a skull-shaped glass with drinks in a festive, neon-lit bar.',
  title: 'What Does',
  highlightText: "'El Bacchanal' mean?",
  complementInfo: '"Bacchanal" is an English word derived from "Bacchanalia", which refers to the ancient Roman festivals in honor of Bacchus (the Roman god of wine, equivalent to the Greek Dionysus). These celebrations were known for wild, drunken revelry and excess'
}

export const textImageBacchanalStory: TextImage = {
  id: 'bacchanalStory',
  image: Montain,
  width: 510,
  height: 440,
  alt: 'A steep mountain with a winding staircase carved into its face, set against a blue sky.',
  title: 'Our Story',
  highlightText: "A Taste of Guatapé's Soul",
  complementInfo: "El Bacchanal isn't just a restaurant—it's a celebration of Guatapé's spirit. Nestled among the town's iconic zocalos (vibrant painted murals), we bring together the bold flavors of Antioquia with a contemporary twist."
}

export const PdfImage: PDFImage = {
  id: 'pdfImageDrinks',
  image: Drinks,
  width: 280,
  height: 440,
  alt: 'A drinks skuuuuullll.'
}

export const headerAboutImage: HeaderAboutImage = {
  id: 'hedaerAboutImage',
  image: DesktopHeader,
  mobileImage: MobileHeader,
  alt: 'Image shake.'
}

export const storyAboutImage: StoryAboutImage = {
  id: 'storyAboutImage',
  image: BrindisImage,
  alt: 'Image of drink.'
}

export const momentsAboutImage: MomentsAboutImage = {
  id: 'hedaerAboutImage',
  image: DesktopMoments,
  mobileImage: MobileMoments,
  alt: 'Image from bachannal.'
}