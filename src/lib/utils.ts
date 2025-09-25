import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const paradiseMedia: { url: string, alt: string }[] = [
  {
    url: '/paradise1.webp',
    alt: 'A cobblestone street lined with colorful buildings under a vibrant canopy of multi-colored umbrellas'
  },
  {
    url: '/paradise2.webp',
    alt: 'A close-up of a Boston Terrier wearing a red shirt and a harness'
  },
  {
    url: '/paradise3.webp',
    alt: 'The red-tiled dome of a church tower rises behind a brightly colored building painted in horizontal stripes of orange and blue'
  },
  {
    url: '/paradise4.webp',
    alt: 'A woman crouches in front of a colorful mural next to a sign advertising "Cerveza Cannabis Weed Beer."'
  },
  {
    url: '/paradise5.webp',
    alt: 'A low- angle shot of brightly colored, stacked buildings painted in pastel shades of green, blue, purple, and peach against a solid pink sky'
  }
]
