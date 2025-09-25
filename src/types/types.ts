import type { ImageMetadata } from "astro";

export interface SliderContent {
  bannerSpan?: string;
  bannerTitle?: string;
  slider?: { image: ImageMetadata; alt: string }[];
  image?: ImageMetadata;
  alt?: string;
}

