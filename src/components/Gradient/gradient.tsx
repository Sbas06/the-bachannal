import React from 'react';
import '@/components/Gradient/gradient.css';

export function Gradient({
  children,
  as: Component = 'div',
  className,
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  return (
    <Component className={`gradient relative ${className}`}>
      {children}
    </Component>
  );
}
