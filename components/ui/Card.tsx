import { forwardRef, type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: 'base' | 'low' | 'lowest';
}

const tones = {
  base: 'bg-surface-container',
  low: 'bg-surface-container-low',
  lowest: 'bg-surface-container-lowest',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ tone = 'lowest', className = '', children, ...rest }, ref) => (
    <div
      ref={ref}
      className={`${tones[tone]} rounded-lg shadow-sm ${className}`}
      {...rest}
    >
      {children}
    </div>
  ),
);
Card.displayName = 'Card';