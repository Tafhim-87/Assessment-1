'use client';

import { motion } from 'framer-motion';
import { BENEFITS } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function BenefitsSection() {
  return (
    <section id="benefits" className="w-full bg-surface py-space-2xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="bg-surface-container-low rounded-2xl p-space-xl md:p-space-2xl shadow-sm">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center max-w-2xl mx-auto mb-space-xl"
          >
            <motion.span
              variants={fadeInUp}
              className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider"
            >
              Quantifiable Business Impact
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display-sm text-display-sm text-on-surface mt-1"
            >
              Built to Maximize Workshop Profitability
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="font-body-md text-body-md text-on-surface-variant mt-2"
            >
              Average metrics gathered from 450+ service centers after 90 days
              of implementing FixFlow ERP.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg text-center"
          >
            {BENEFITS.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeInUp}
                className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm"
              >
                <span
                  className={`font-display-lg text-display-lg block ${b.color}`}
                >
                  {b.value}
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface mt-1 block">
                  {b.title}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}