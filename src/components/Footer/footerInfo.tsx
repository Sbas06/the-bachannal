import { InstagramIcon, PhoneIcon } from '@/components/Icons/icons';

export function FooterInfo() {
  return (
    <div className='flex flex-col items-center gap-y-7'>
      <a href='/'>
        <img
          src='/bacchanal-icon-image.webp'
          width={170}
          height={140}
          alt='Logo for El Bacchanal, a bar in Guatapé, Colombia, featuring a red, yellow, and green gradient background, a firecracker icon, a cocktail glass, and the Instagram handle @el_bacchanal.'
        />
      </a>

      <a
        href='https://www.instagram.com/el_bacchanal/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Instagram @el_bacchanal'
      >
        <InstagramIcon />
        <span className='sr-only'>Opens in a new tab</span>
      </a>

      <div className='flex flex-col justify-center'>
        <a
          href='https://maps.app.goo.gl/5x7Qa3XiknXAHqXV7'
          target='_blank'
          rel='noopener noreferrer'
          className='font-koulen text-xl'
        >
          <p>Cl. 29 #29-22, Guatape, Antioquia</p>
          <span className='sr-only'>Opens in a new tab</span>
        </a>
        <address className='bacchanal-phone font-koulen flex items-center justify-center gap-x-3.5 text-xl not-italic'>
          <PhoneIcon /> <a href='tel:+573104099074'>+57 310 409 9074</a>
        </address>
      </div>
    </div>
  );
}
