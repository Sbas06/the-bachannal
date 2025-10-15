import type { ImageMetadata } from 'astro';

export interface SliderContent {
  id?: string;
  bannerSpan?: string;
  bannerTitle?: string;
  slider?: { image: ImageMetadata; alt: string }[];
  image?: ImageMetadata;
  alt?: string;
}
export interface SliderImage {
  id?: string;
  image: string  | ImageMetadata; 
  alt?: string;
}

export interface SliderProps {
  id?: string;  
  customImages: SliderImage[];
  spaceBetween?: number;
  speed?: number;
  titleFollowUs?: string;
  titleInstagram?: string;
}

export interface TextImage {
  id?: string;
  image: ImageMetadata;
  width: number;
  height: number;
  alt?: string;
  title?: string;
  highlightText?: string;
  complementInfo?: string;
}
