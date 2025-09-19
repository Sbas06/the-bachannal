import {
  BacchanalIcon,
  InstagramIcon,
  PhoneIcon,
} from '@/components/Icons/icons';

export function FooterInfo() {
  return (
    <div className='flex flex-col items-center'>
      <BacchanalIcon />

      <a
        href='https://www.instagram.com/el_bacchanal/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <InstagramIcon />
      </a>

      <div className='flex flex-col justify-center'>
        <p className='font-koulen text-xl'>Cl. 29 #29-22, Guatape, Antioquia</p>
        <small className='font-koulen flex items-center justify-center gap-x-3.5 text-xl'>
          <PhoneIcon /> <p>+57 310 409 9074</p>
        </small>
      </div>
    </div>
  );
}
