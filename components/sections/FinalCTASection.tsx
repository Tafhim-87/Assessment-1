'use client';

import { motion } from 'framer-motion';
import { ButtonLink, Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function FinalCTASection() {
  return (
    <section className="w-full bg-surface-container-high py-space-2xl">
      <div className="max-w-7xl mx-auto px-margin">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-primary text-on-primary rounded-2xl p-space-xl md:p-space-2xl text-center shadow-xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display-lg text-display-lg max-w-3xl mx-auto tracking-tight"
          >
            Everything Your Service Shop Needs, In One Workspace.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mt-space-md mb-space-xl"
          >
            Start managing customer intake, part inventory, and technician
            billing today with FixFlow ERP. Zero installation required.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-space-md"
          >
            <ButtonLink
              href="#dashboard-preview"
              variant="inverse"
              icon="dashboard"
            >
              Open ERP Dashboard
            </ButtonLink>
            <Button
              icon="calendar_today"
              onClick={() =>
                alert(
                  'Demo Request Logged: An onboarding engineer will contact your workshop within 24 hours.',
                )
              }
              className="bg-primary-container text-on-primary-container hover:opacity-90"
            >
              Schedule Live Demo
            </Button>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="mt-space-lg flex flex-wrap items-center justify-center gap-space-lg font-label-sm text-label-sm text-on-primary-container opacity-90"
          >
            {['Cloud Backup Included', 'Thermal Printer Plug-and-Play', 'Multi-Branch Capable'].map(
              (t) => (
                <span key={t} className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    check
                  </span>
                  {t}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}