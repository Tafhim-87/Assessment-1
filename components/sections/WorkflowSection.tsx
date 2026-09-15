'use client';

import { motion } from 'framer-motion';
import { WORKFLOW_STEPS } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

const variantBg = {
  primary: 'bg-primary text-on-primary',
  secondary: 'bg-secondary text-on-secondary',
  tertiary: 'bg-tertiary-container text-on-tertiary',
} as const;

export default function WorkflowSection() {
  return (
    <section id="workflow" className="w-full bg-surface py-space-2xl">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto mb-space-2xl"
        >
          <motion.span
            variants={fadeInUp}
            className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider"
          >
            End-to-End Operational Lifecycle
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display-sm text-display-sm text-on-surface mt-1"
          >
            From Front-Desk Check-In to Warranty Handover
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body-md text-body-md text-on-surface-variant mt-2"
          >
            Every device ticket progresses through strict validation steps to
            eliminate disputes and maintain 100% bench accountability.
          </motion.p>
        </motion.div>

        {/* Tracker (horizontal scroll on mobile) */}
        <div className="overflow-x-auto pb-space-lg">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="min-w-[1100px] flex items-start justify-between relative"
          >
            <div className="absolute top-5 left-8 right-8 h-1 bg-surface-container-highest z-0" />
            {WORKFLOW_STEPS.map((s) => (
              <motion.div
                key={s.step}
                variants={fadeInUp}
                className="flex flex-col items-center text-center relative z-10 w-28"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md mb-space-xs ${variantBg[s.variant]}`}
                >
                  {s.step}
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {s.title}
                </span>
                <span className="font-code-xs text-code-xs text-on-surface-variant mt-1">
                  {s.subtitle}
                </span>
                <span className="mt-2 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  {s.tag}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Callout banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-space-lg bg-surface-container-low p-space-md rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md"
        >
          <div className="flex items-center gap-space-md">
            <span className="material-symbols-outlined text-primary text-[28px]">
              qr_code_scanner
            </span>
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Thermal Barcode Sticker Tagging
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Each intake prints an adhesive ticket stuck directly to the
                device chassis preventing bench mixups.
              </p>
            </div>
          </div>
          <button className="px-space-md py-space-xs bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all">
            View Printable Ticket Sample
          </button>
        </motion.div>
      </div>
    </section>
  );
}