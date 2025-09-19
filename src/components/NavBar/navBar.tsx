import { NavMenu } from '@/components/NavBar/navMenu';
import { BacchanalIcon } from '@/components/Icons/icons';
import { Gradient } from '@/components/Gradient/gradient';

export function NavBar() {
  return (
    <Gradient
      as='header'
      className='grid w-full grid-cols-3 items-center justify-items-center gap-x-10 p-[11px] before:bottom-px'
    >
      <NavMenu />
      <BacchanalIcon width='90' height='70' />
    </Gradient>
  );
}
