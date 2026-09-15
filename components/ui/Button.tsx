import Link from 'next/link';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse';

interface BaseProps {
  variant?: Variant;
  icon?: string;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container shadow-md',
  secondary:
    'bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm',
  ghost:
    'text-on-surface-variant hover:text-on-surface hover:bg-surface-container',
  inverse:
    'bg-surface-container-lowest text-primary hover:bg-surface-container shadow-md',
};

const base =
  'inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg font-label-md text-label-md transition-all';

/* ---- <button> variant ---- */
type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', icon, children, className = '', ...rest }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
      {children}
    </button>
  ),
);
Button.displayName = 'Button';

/* ---- <Link> variant ---- */
type LinkButtonProps = BaseProps & {
  href: string;
  className?: string;
};

export function ButtonLink({
  variant = 'primary',
  icon,
  children,
  href,
  className = '',
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
      {children}
    </Link>
  );
}