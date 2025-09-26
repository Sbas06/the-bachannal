import type { ImageMetadata } from "astro";

export interface SliderContent {
  bannerSpan?: string;
  bannerTitle?: string;
  slider?: { image: ImageMetadata; alt: string }[];
  image?: ImageMetadata;
  alt?: string;
}

export interface TextImage {
  image: ImageMetadata;
  width: number;
  height: number;
  alt: string;
  title: string;
  highlightText: string;
  complementInfo: string;
}

