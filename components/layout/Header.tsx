'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_LINKS, LOGO_URL } from '@/lib/constants';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="h-16 max-w-7xl mx-auto px-margin flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-space-md">
          <Image
            src={LOGO_URL}
            alt="FixFlow Logo"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">
              FixFlow
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
              Mobile Service ERP
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-space-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                'active' in link && link.active
                  ? 'transition-colors text-primary font-semibold'
                  : 'font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-space-md">
          <Link
            href="#"
            className="hidden sm:inline-flex px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container transition-all"
          >
            Sign In
          </Link>
          <Link
            href="#dashboard-preview"
            className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)] hover:bg-primary-container hover:text-on-primary-container transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">
              dashboard
            </span>
            <span>Open Dashboard</span>
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </motion.div>
    </header>
  );
}