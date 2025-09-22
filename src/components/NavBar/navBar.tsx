import { NavMenu } from '@/components/NavBar/navMenu';
import { Gradient } from '@/components/Gradient/gradient';

export function NavBar() {
  return (
    <Gradient
      as='header'
      className='grid w-full grid-cols-3 items-center justify-items-center gap-x-10 p-[11px] before:bottom-px'
    >
      <NavMenu />
      <img src="/bacchanal-icon-image.webp" width={90} height={70} alt="" />

    </Gradient>
  );
}
