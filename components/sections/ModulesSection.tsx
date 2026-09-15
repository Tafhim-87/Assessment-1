'use client';

import { motion } from 'framer-motion';
import { ERP_MODULES } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function ModulesSection() {
  return (
    <section
      id="modules"
      className="w-full bg-surface-container-low py-space-2xl"
    >
      <div className="max-w-7xl mx-auto px-margin">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto mb-space-2xl"
        >
          <motion.span
            variants={fadeInUp}
            className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider"
          >
            Modular Platform Infrastructure
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display-sm text-display-sm text-on-surface mt-1"
          >
            12 Synchronized Modules for Total Shop Control
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body-md text-body-md text-on-surface-variant mt-2"
          >
            Toggle features by employee role. Protect sensitive wholesale part
            costs from front-desk staff while enabling full bench efficiency.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-space-md"
        >
          {ERP_MODULES.map((m) => (
            <motion.div
              key={m.num}
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-space-sm">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  {m.icon}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-code-xs text-code-xs">
                  {m.tag}
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                {m.num}. {m.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {m.desc}
              </p>
              <div className="mt-space-sm pt-space-xs font-code-xs text-code-xs text-on-surface-variant">
                Quick Action: {m.action}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}