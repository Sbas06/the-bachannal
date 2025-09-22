import { NavMenu } from '@/components/NavBar/navMenu';
import { Gradient } from '@/components/Gradient/gradient';

export function NavBar() {
  return (
    <Gradient
      as='header'
      className='grid w-full grid-cols-3 items-center justify-items-center gap-x-10 p-[11px] before:bottom-px'
    >
      <NavMenu />
      <img
        src='/bacchanal-icon-image.webp'
        width={90}
        height={70}
        alt='Logo for El Bacchanal, a bar in Guatapé, Colombia, featuring a red, yellow, and green gradient background, a firecracker icon, a cocktail glass, and the Instagram handle @el_bacchanal.'
      />
    </Gradient>
  );
}
