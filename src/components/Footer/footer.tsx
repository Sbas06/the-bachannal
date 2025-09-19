import { FooterNav } from '@/components/Footer/footerNav';
import { FooterInfo } from '@/components/Footer/footerInfo';

export function Footer() {
  return (
    <footer className='flex flex-col items-center justify-between text-white'>
      <FooterInfo />
      <FooterNav />
    </footer>
  );
}
