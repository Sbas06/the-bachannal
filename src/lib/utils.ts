import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ImageMetadata } from "astro"
import paradise1 from '@/assets//images/paradise1.webp'
import paradise2 from '@/assets//images/paradise2.webp'
import paradise3 from '@/assets//images/paradise3.webp'
import paradise4 from '@/assets//images/paradise4.webp'
import paradise5 from '@/assets//images/paradise5.webp'


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
