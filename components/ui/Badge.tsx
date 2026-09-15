interface BadgeProps {
  children: React.ReactNode;
  tone?: 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'error';
  icon?: string;
  pulse?: boolean;
  className?: string;
}

const tones = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary-fixed text-on-secondary-fixed',
  tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed',
  neutral: 'bg-surface-container text-on-surface',
  error: 'bg-error-container text-on-error-container',
};

export function Badge({
  children,
  tone = 'neutral',
  icon,
  pulse,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold ${tones[tone]} ${className}`}
    >
      {pulse && (
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      )}
      {icon && (
        <span className="material-symbols-outlined text-[14px]">{icon}</span>
      )}
      {children}
    </span>
  );
}