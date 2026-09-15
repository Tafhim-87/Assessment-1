'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { WorkbenchTicket } from '@/lib/types';

interface Props {
  tickets: WorkbenchTicket[];
}

const statusTone: Record<WorkbenchTicket['status'], string> = {
  'Bench Repair': 'bg-surface-tint/15 text-primary',
  Diagnosing: 'bg-secondary-fixed text-on-secondary-fixed',
  'QA Passed': 'bg-tertiary-fixed text-on-tertiary-fixed',
  'Just Received': 'bg-surface-container text-on-surface',
};

const progressColor = (status: WorkbenchTicket['status']) => {
  if (status === 'Bench Repair') return 'bg-primary';
  if (status === 'Diagnosing') return 'bg-secondary';
  if (status === 'QA Passed') return 'bg-tertiary-container';
  return 'bg-secondary';
};

export default function WorkbenchList({ tickets }: Props) {
  return (
    <div className="bg-surface-container-low p-space-md rounded-lg h-full">
      <div className="flex items-center justify-between mb-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Bench Worklist
          </span>
          <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-code-xs text-code-xs">
            Live Sync
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Updated 10s ago
        </span>
      </div>

      <div className="space-y-space-sm">
        <AnimatePresence initial={false}>
          {tickets.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm"
            >
              <div>
                <div className="flex items-center gap-space-xs">
                  <span className="font-code-sm text-code-sm text-primary font-bold">
                    {t.id}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    {t.device}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-code-xs text-code-xs">
                    {t.imei}
                  </span>
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Fault: {t.fault} • Assigned:{' '}
                  <span className="text-on-surface font-medium">
                    {t.technician}
                  </span>{' '}
                  ({t.bench})
                </div>
              </div>
              <div className="flex items-center gap-space-md">
                <div className="w-28 bg-surface-container rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${t.progress}%` }}
                    transition={{ duration: 0.6 }}
                    className={`h-full ${progressColor(t.status)}`}
                  />
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold ${statusTone[t.status]}`}
                >
                  {t.status}
                </span>
                <span className="font-code-sm text-code-sm font-semibold text-on-surface">
                  ৳{t.amount.toLocaleString()}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}