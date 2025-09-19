import React from 'react';
import './gradient.module.css';

export function Gradient({
  children,
  as: Component = 'div',
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return <Component className='gradient'>{children}</Component>;
}
