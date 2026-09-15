'use client';

import { motion } from 'framer-motion';
import MetricCard from '@/components/ui/MetricCard';
import WorkbenchList from '@/components/dashboard/WorkbenchList';
import TechnicianQueue from '@/components/dashboard/TechnicianQueue';
import PartsChecker from '@/components/dashboard/PartsChecker';
import { scaleIn, viewportOnce } from '@/lib/animations';
import { useWorkbench } from '@/hooks/useWorkbench';

export default function DashboardPreview() {
  const { tickets, addTicket, activeCount } = useWorkbench();

  return (
    <motion.div
      id="dashboard-preview"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="w-full max-w-6xl bg-surface-container-lowest rounded-xl shadow-xl p-space-lg text-left"
    >
      {/* Sub-header strip */}
      <div className="flex flex-wrap items-center justify-between pb-space-md mb-space-lg gap-space-md bg-surface-container-low p-space-md rounded-lg">
        <div className="flex items-center gap-space-md">
          <span className="w-3 h-3 rounded-full bg-error" />
          <span className="w-3 h-3 rounded-full bg-surface-tint" />
          <span className="w-3 h-3 rounded-full bg-secondary-container" />
          <span className="font-code-sm text-code-sm text-on-surface font-semibold ml-space-xs">
            FIXFLOW / CONSOLE / WORKBENCH #04
          </span>
        </div>
        <div className="flex items-center gap-space-sm">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-highest text-on-surface font-code-xs text-code-xs">
            <span className="material-symbols-outlined text-[14px]">search</span>
            IMEI: 864293049102910 [⌘K]
          </span>
          <button
            onClick={addTicket}
            className="px-2.5 py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded hover:bg-primary-container transition-all"
          >
            + New Device Intake
          </button>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">
        <MetricCard
          label="Active Bench Tickets"
          value={String(activeCount)}
          icon="build"
          footer={
            <>
              <span className="material-symbols-outlined text-[14px] text-secondary">
                trending_up
              </span>
              <span className="text-secondary">12 waiting diagnostic</span>
            </>
          }
        />
        <MetricCard
          label="Today's Revenue"
          value="৳45,800"
          icon="payments"
          iconColor="text-secondary-container"
          footer={
            <>
              <span className="material-symbols-outlined text-[14px] text-primary">
                check_circle
              </span>
              <span className="text-primary">24 invoices settled</span>
            </>
          }
        />
        <MetricCard
          label="Avg Turnaround Time"
          value="2h 45m"
          icon="timer"
          iconColor="text-tertiary"
          footer={
            <>
              <span className="material-symbols-outlined text-[14px] text-secondary">
                arrow_downward
              </span>
              <span className="text-secondary">42% vs regional avg</span>
            </>
          }
        />
        <MetricCard
          label="Low Stock Parts Alert"
          value="3 Items"
          icon="warning"
          iconColor="text-error"
          valueColor="text-error"
          footer={
            <span className="text-error">
              iPhone 13 OLED, Bat-SM-A54
            </span>
          }
        />
      </div>

      {/* Split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        <div className="lg:col-span-8">
          <WorkbenchList tickets={tickets} />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <TechnicianQueue />
          <PartsChecker />
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="mt-space-md pt-space-sm flex flex-wrap items-center justify-between font-code-xs text-code-xs text-on-surface-variant">
        <span>
          • Automated SMS notification dispatched to customer on status change
        </span>
        <span>
          Payment Gateway: bKash Merchant Sync • POS Thermal Print 80mm
        </span>
      </div>
    </motion.div>
  );
}