import type { SliderContent } from "@/types/types"

export const topSliderContent: SliderContent =
{
  slider: [
    {
      image: '/bacchanal-top-slider.webp',
      alt: ''
    },
    {
      image: '/single-slider.webp',
      alt: ''
    },
    {
      image: '/bacchanal-bottom-slider.webp',
      alt: ''
    },
  ],
  bannerSpan: 'Guatape-Colombia',
  bannerTitle: 'El Bacchanal'
}

export const singleBanner: { image: string, alt: string } =
{
  image: '/single-slider.webp',
  alt: ''
}

export const bottomSliderContent: SliderContent =
{
  slider: [
    {
      image: '/bacchanal-bottom-slider.webp',
      alt: ''
    },
    {
      image: '/bacchanal-top-slider.webp',
      alt: ''
    },
    {
      image: '/single-slider.webp',
      alt: ''
    },
  ],
  bannerSpan: 'The Perfect Night, Shared with',
  bannerTitle: 'The Perfect People'
}
