import Image from 'next/image';
import { LOGO_URL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-space-2xl mt-space-2xl">
      <div className="max-w-7xl mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex items-center gap-space-md">
          <Image
            src={LOGO_URL}
            alt="FixFlow Logo"
            width={24}
            height={24}
            className="h-6 w-auto object-contain"
          />
          <span className="font-headline-sm text-headline-sm text-on-surface">
            FixFlow ERP
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            — Technical Operations Engine for Servicing Hubs
          </span>
        </div>
        <div className="font-body-sm text-body-sm text-on-surface-variant">
          © 2025 FixFlow Systems Inc. All rights reserved. Tabular diagnostics
          calibrated.
        </div>
      </div>
    </footer>
  );
}