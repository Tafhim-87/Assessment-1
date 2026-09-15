'use client';

import { motion } from 'framer-motion';
import { FEATURES } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full bg-surface-container-low py-space-2xl"
    >
      <div className="max-w-7xl mx-auto px-margin">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
            <motion.div variants={fadeInUp}>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Purpose-Engineered Architecture
              </span>
              <h2 className="font-display-sm text-display-sm text-on-surface mt-1">
                7 Pillars of FixFlow Service Operations
              </h2>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2 md:mt-0"
            >
              Designed specifically to prevent technician misplacement, parts
              theft, and invoice discrepancy in mobile electronics servicing.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {FEATURES.map((f) => (
              <motion.div
                key={f.id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-space-md">
                  <span className="material-symbols-outlined text-[22px]">
                    {f.icon}
                  </span>
                </div>
                <span className="font-code-xs text-code-xs text-primary font-semibold">
                  {f.label}
                </span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mt-1 mb-space-xs">
                  {f.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}