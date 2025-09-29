import type { ImageMetadata } from 'astro';

export interface SliderContent {
  slider: { image: string; alt: string }[];
  bannerSpan: string;
  bannerTitle: string;
}
export interface SliderImage {
  image: string  | ImageMetadata; 
  alt?: string;
}

export interface SliderProps {
  customImages: SliderImage[];
  spaceBetween?: number;
  speed?: number;
  titleFollowUs?: string;
  titleInstagram?: string;
}
