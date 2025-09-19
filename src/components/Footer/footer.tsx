import { FooterNav } from '@/components/Footer/footerNav';
import { FooterInfo } from '@/components/Footer/footerInfo';
import { Gradient } from '@/components/Gradient/gradient';

export function Footer() {
  return (
    <Gradient as='footer'>
      <FooterInfo />
      <FooterNav />
    </Gradient>
  );
}
