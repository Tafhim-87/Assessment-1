import { TECHNICIANS } from '@/lib/constants';

const colorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
} as const;

export default function TechnicianQueue() {
  return (
    <div className="bg-surface-container-low p-space-md rounded-lg">
      <div className="flex items-center justify-between mb-space-md">
        <span className="font-headline-sm text-headline-sm text-on-surface">
          Technician Load
        </span>
        <span className="font-code-xs text-code-xs text-on-surface-variant">
          4/5 Online
        </span>
      </div>
      <div className="space-y-space-sm font-body-sm text-body-sm">
        {TECHNICIANS.map((t) => (
          <div
            key={t.name}
            className="flex items-center justify-between p-2 rounded bg-surface-container-lowest"
          >
            <div>
              <p className="font-semibold text-on-surface">{t.name}</p>
              <p className="text-on-surface-variant text-code-xs font-code-xs">
                {t.role}
              </p>
            </div>
            <span
              className={`px-2 py-0.5 rounded bg-surface-container-high font-bold font-code-xs text-code-xs ${colorMap[t.color]}`}
            >
              {t.jobs} jobs
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}