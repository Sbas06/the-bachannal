import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

export function FooterNav() {
  const date: number = new Date().getFullYear();
  const footerNavigation: { name: string; href: string }[] = [
    {
      name: 'Menu',
      href: '/menu',
    },
    {
      name: 'Order now',
      href: '/delivery-menu',
    },
    {
      name: 'About Us',
      href: '/about-us',
    },
  ];

  return (
    <div className='flex w-full items-center justify-between'>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {footerNavigation.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink asChild>
                <a href={item.href}>{item.name}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <p>&copy; {date} El Bacchanal, All right reserved</p>
    </div>
  );
}
