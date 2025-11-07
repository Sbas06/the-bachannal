import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ImageMetadata } from "astro"
import paradise1 from '@/assets//images/paradise1.webp'
import paradise2 from '@/assets//images/paradise2.webp'
import paradise3 from '@/assets//images/paradise3.webp'
import paradise4 from '@/assets//images/paradise4.webp'
import paradise5 from '@/assets//images/paradise5.webp'
import photograph1 from '@/assets//images/photograph1.webp'
import photograph2 from '@/assets//images/photograph2.webp'
import photograph3 from '@/assets//images/photograph3.webp'
import photograph4 from '@/assets//images/photograph4.webp'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const paradiseMedia: { url: ImageMetadata, alt: string }[] = [
  {
    url: paradise1,
    alt: 'A cobblestone street lined with colorful buildings under a vibrant canopy of multi-colored umbrellas'
  },
  {
    url: paradise2,
    alt: 'A close-up of a Boston Terrier wearing a red shirt and a harness'
  },
  {
    url: paradise3,
    alt: 'The red-tiled dome of a church tower rises behind a brightly colored building painted in horizontal stripes of orange and blue'
  },
  {
    url: paradise4,
    alt: 'A woman crouches in front of a colorful mural next to a sign advertising "Cerveza Cannabis Weed Beer."'
  },
  {
    url: paradise5,
    alt: 'A low- angle shot of brightly colored, stacked buildings painted in pastel shades of green, blue, purple, and peach against a solid pink sky'
  }
]

export const photographsMedia: { url: ImageMetadata, alt: string }[] = [
  {
    url: photograph1,
    alt: 'A group of men posing on a cobblestone street at night, with brightly colored colonial buildings in the background.'
  },
  {
    url: photograph2,
    alt: 'Two musicians playing acoustic guitars in front of a large Joker mural and a neon sign "@el_bacchanal" in a venue with red and green lights.'
  },
  {
    url: photograph3,
    alt: 'Two smiling, bearded men pose embracing on a cobblestone street with brightly colored colonial buildings in the background.'
  },
  {
    url: photograph4,
    alt: 'Red rubber toy in the shape of a chicken hanging in the foreground, inside a colorful bar full of lights.'
  }
]