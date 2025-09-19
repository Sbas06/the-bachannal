'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { BacchanalIcon } from '@/components/Icons/icons';

const components: { title: string; href: string }[] = [
  {
    title: 'Menu',
    href: '/menu',
  },
  {
    title: 'Delivery Menu',
    href: '/delivery-menu',
  },
  {
    title: 'About Us',
    href: '/about-us',
  },
];

export function HeaderNav() {
  return (
    <>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {components.map((component) => (
            <NavigationMenuItem key={component.title}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href={component.href}>{component.title}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <BacchanalIcon />
    </>
  );
}
