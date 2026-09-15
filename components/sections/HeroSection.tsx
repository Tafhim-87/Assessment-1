'use client';

import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/Button';
import DashboardPreview from './DashboardPreview';
import { TRUSTED_SHOPS } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="w-full bg-surface pt-space-2xl pb-space-2xl">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-7xl mx-auto px-margin flex flex-col items-center text-center"
      >
        {/* Overline Badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md mb-space-lg shadow-sm"
        >
          <span className="material-symbols-outlined text-[16px] text-primary">
            verified
          </span>
          <span>Built for High-Throughput Smartphone & Tech Repair Hubs</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="font-display-lg text-display-lg md:text-[44px] md:leading-[52px] text-on-surface max-w-4xl tracking-tight"
        >
          Run Your Mobile Service Business From One Place.
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          variants={fadeInUp}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-md mb-space-xl"
        >
          Manage repairs, customers, technicians, inventory, sales and billing
          through one streamlined service management platform. Engineered for
          bench technicians and counter operations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-space-md mb-space-2xl"
        >
          <ButtonLink href="#dashboard-preview" icon="laptop_chromebook">
            Open Dashboard
          </ButtonLink>
          <ButtonLink
            href="#features"
            icon="tune"
            variant="secondary"
          >
            Explore Features
          </ButtonLink>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          variants={fadeInUp}
          className="w-full max-w-5xl bg-surface-container-low rounded-xl p-space-md mb-space-2xl shadow-sm"
        >
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-space-sm">
            Trusted by 450+ mobile repair workshops & service centers across
            Dhaka, Chittagong & Sylhet
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-space-xl gap-y-space-sm font-headline-sm text-headline-sm text-on-surface opacity-80">
            {TRUSTED_SHOPS.map((shop) => (
              <div key={shop.label} className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  {shop.icon}
                </span>
                {shop.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <DashboardPreview />
      </motion.div>
    </section>
  );
}