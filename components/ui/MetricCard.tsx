interface MetricCardProps {
  label: string;
  value: string;
  icon: string;
  iconColor?: string;
  footer: React.ReactNode;
  valueColor?: string;
}

// ✅ Keep the named export for flexibility
export function MetricCard({
  label,
  value,
  icon,
  iconColor = 'text-primary',
  footer,
  valueColor = 'text-on-surface',
}: MetricCardProps) {
  return (
    <div className="p-space-md rounded-lg bg-surface-container-low shadow-sm">
      <div className="flex justify-between items-start">
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          {label}
        </span>
        <span className={`material-symbols-outlined ${iconColor} text-[20px]`}>
          {icon}
        </span>
      </div>
      <div className={`font-display-sm text-display-sm mt-1 ${valueColor}`}>
        {value}
      </div>
      <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm">
        {footer}
      </div>
    </div>
  );
}

// ✅ ALSO add a default export so `import MetricCard from ...` works
export default MetricCard;