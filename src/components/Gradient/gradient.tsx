import React from 'react';
import '@/components/Gradient/gradient.css';
import '@/components/Gradient/gradient.css';

export function Gradient({
  children,
  as: Component = 'div',
  className,
  isAnimated,
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  isAnimated?: boolean;
}) {
  return (
    <Component
      className={`relative ${className} ${isAnimated ? 'animate-gradient' : 'gradient'}`}
    >
      {children}
    </Component>
  );
}
