import type {
  WorkbenchTicket,
  Technician,
  FeatureModule,
  WorkflowStep,
} from './types';

export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1WBLLJ9u0HfRhGa9s9wE83FxZToUlSBdTaT52I8VXGqenJh8aTHLYLRFboTfaEwC2WlkwzQymgkUWXsfrqzeD1x047CLrjPPpNKxFgxj38552a2uu9qYiW7o_1LrR6T8LYvGrmASWtCzFQ8FDCvWFuMnkCHLN3VFcZctFgzFP-c_X1TlpV338wfeqgjte8shcDHCIw11goCJMFYQtglBHXzUSPO-e3nNebyWxk8BhGl3yoGVQgMFzX7sF4';

/* ---------- Navigation ---------- */
export const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Modules', href: '#modules' },
  { label: 'Benefits', href: '#benefits' },
] as const;

/* ---------- Trust Bar ---------- */
export const TRUSTED_SHOPS = [
  { icon: 'domain', label: 'Motijheel TechCare' },
  { icon: 'build_circle', label: 'GEC iRepair Chittagong' },
  { icon: 'precision_manufacturing', label: 'Sylhet FixHub' },
  { icon: 'devices', label: 'Dhanmondi ScreenLab' },
  { icon: 'phonelink_setup', label: 'Uttara MasterFix' },
] as const;

/* ---------- Workbench Seed ---------- */
export const INITIAL_TICKETS: WorkbenchTicket[] = [
  {
    id: '#FX-8942',
    device: 'iPhone 14 Pro Max',
    imei: 'IMEI: 354921...89',
    fault: 'OLED Digitizer Shattered',
    technician: 'Kabir H.',
    bench: 'Bench 02',
    progress: 75,
    status: 'Bench Repair',
    amount: 14500,
  },
  {
    id: '#FX-8943',
    device: 'Samsung Galaxy S23 Ultra',
    imei: 'IMEI: 990142...31',
    fault: 'Motherboard Charging IC (PMIC)',
    technician: 'Tanvir A.',
    bench: 'Micro-soldering',
    progress: 40,
    status: 'Diagnosing',
    amount: 6800,
  },
  {
    id: '#FX-8944',
    device: 'Xiaomi Redmi Note 12 Pro',
    imei: 'IMEI: 867120...05',
    fault: 'Battery Degradation (4500mAh)',
    technician: 'Sabbir M.',
    bench: 'Bench 05',
    progress: 100,
    status: 'QA Passed',
    amount: 2400,
  },
];

export const TECHNICIANS: Technician[] = [
  {
    name: 'Kabir Hossain',
    role: 'Screen & Housing Specialist',
    jobs: 4,
    color: 'primary',
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Motherboard / SMD Level 3',
    jobs: 6,
    color: 'secondary',
  },
  {
    name: 'Sabbir Munshi',
    role: 'Quick Assembly & Battery',
    jobs: 2,
    color: 'tertiary',
  },
];

/* ---------- Feature Modules ---------- */
export const FEATURES: FeatureModule[] = [
  {
    id: '01',
    label: 'MODULE 01',
    title: 'Repair Management',
    description:
      'Track every device from intake to delivery with automated IMEI & serial logging, defect photos, pattern lock recording, and customer disclaimer signoff.',
    icon: 'edit_note',
  },
  {
    id: '02',
    label: 'MODULE 02',
    title: 'Customer Management',
    description:
      'Maintain complete customer profiles, historical repair logs, lifetime customer spend, pending dues, and automated repair status SMS links.',
    icon: 'group',
  },
  {
    id: '03',
    label: 'MODULE 03',
    title: 'Technician Management',
    description:
      'Assign repairs by technician expertise, benchmark turnaround velocity, monitor bench queues, and calculate commission-per-repaired-motherboard.',
    icon: 'engineering',
  },
  {
    id: '04',
    label: 'MODULE 04',
    title: 'Inventory & Parts',
    description:
      'Track spare parts across bins, automated low-stock reorder alerts, multi-vendor batch pricing, and device chassis model cross-compatibility.',
    icon: 'inventory_2',
  },
  {
    id: '05',
    label: 'MODULE 05',
    title: 'Sales & POS',
    description:
      'Manage accessories, tempered glass, certified pre-owned smartphone sales, counter barcode scanning, and instant dual receipt issuance.',
    icon: 'point_of_sale',
  },
  {
    id: '06',
    label: 'MODULE 06',
    title: 'Billing & Invoices',
    description:
      'Instant VAT-compliant thermal printing (58mm/80mm), digital SMS invoices with payment checkout links, advance deposit slips, and estimate approvals.',
    icon: 'receipt_long',
  },
  {
    id: '07',
    label: 'MODULE 07',
    title: 'Business Reports',
    description:
      'Deep financial audits, parts profit margins, failure recurrence rates, technician turnaround velocity, and net daily cash drawer balancing.',
    icon: 'analytics',
  },
];

/* ---------- Workflow Steps ---------- */
export const WORKFLOW_STEPS: WorkflowStep[] = [
  { step: 1, title: 'Customer Intake', subtitle: 'Walk-in or Mail-in', tag: '± 2 min', variant: 'primary' },
  { step: 2, title: 'IMEI & Physical Check', subtitle: 'Defect Mapping', tag: 'Checklist', variant: 'primary' },
  { step: 3, title: 'Lab Diagnosis', subtitle: 'Hardware & IC', tag: 'Pass / Fail', variant: 'primary' },
  { step: 4, title: 'Assignment', subtitle: 'Bench & Tech', tag: 'Routing', variant: 'primary' },
  { step: 5, title: 'Precision Repair', subtitle: 'Parts Consumed', tag: 'Live Bench', variant: 'primary' },
  { step: 6, title: 'Quality Check', subtitle: '18-Point Screen', tag: 'Supervisor', variant: 'secondary' },
  { step: 7, title: 'Invoice Issued', subtitle: 'SMS Link Sent', tag: 'Auto-Gen', variant: 'secondary' },
  { step: 8, title: 'Payment', subtitle: 'bKash/Cash/Card', tag: 'Instant', variant: 'secondary' },
  { step: 9, title: 'Device Handover', subtitle: 'Warranty Slip', tag: 'Delivered', variant: 'tertiary' },
];

/* ---------- 12 ERP Modules ---------- */
export const ERP_MODULES = [
  { num: 1, icon: 'dashboard', title: 'Dashboard', desc: 'Real-time revenue, bench queues, and technician velocity.', tag: 'Active Live', action: 'Metric Drilldown' },
  { num: 2, icon: 'group', title: 'Customers', desc: 'Complete customer directory, visit history & credit ledger.', tag: 'Active Live', action: 'Send SMS Alert' },
  { num: 3, icon: 'handyman', title: 'Repairs', desc: 'IMEI diagnostic checklists, part assignments & stage logs.', tag: 'Core', action: 'Intake Ticket' },
  { num: 4, icon: 'badge', title: 'Technicians', desc: 'Work distribution, repair commission, and speed analytics.', tag: 'Active Live', action: 'Assign Job' },
  { num: 5, icon: 'inventory_2', title: 'Inventory', desc: 'Displays, batteries, IC chips, flex cables, and tools tracking.', tag: 'Automated', action: 'Restock PO' },
  { num: 6, icon: 'local_shipping', title: 'Suppliers', desc: 'Wholesale vendor contacts, purchase orders & credit balances.', tag: 'Active', action: 'Vendor Balance' },
  { num: 7, icon: 'point_of_sale', title: 'Sales / POS', desc: 'Retail checkout for chargers, covers, and reconditioned phones.', tag: 'Fast-Scan', action: 'Quick Register' },
  { num: 8, icon: 'receipt_long', title: 'Invoices', desc: 'Itemized service & parts billing with custom terms.', tag: 'Compliant', action: 'Print Thermal' },
  { num: 9, icon: 'account_balance_wallet', title: 'Payments', desc: 'Cash, bKash, Nagad, bank transfer & split payment options.', tag: 'Multi-Channel', action: 'MFS Reconcile' },
  { num: 10, icon: 'analytics', title: 'Reports', desc: 'Gross profit, part replacement trends, technician SLA stats.', tag: 'Audited', action: 'Export Excel/PDF' },
  { num: 11, icon: 'notifications_active', title: 'Notifications', desc: 'Ready-for-pickup SMS triggers, warranty expiration reminders.', tag: 'Automated', action: 'Broadcast SMS' },
  { num: 12, icon: 'settings', title: 'Settings', desc: 'Multi-branch setup, printer drivers, user permissions & roles.', tag: 'Config', action: 'Access Rules' },
] as const;

/* ---------- Benefits ---------- */
export const BENEFITS = [
  { value: '42%', title: 'Faster Turnaround Time', desc: 'Reduced bench idle delays through instant parts matching and technician assignment queues.', color: 'text-primary' },
  { value: '0%', title: 'Lost Parts or Shrinkage', desc: 'Every screw, screen, and battery is locked to a specific IMEI ticket before leaving the stockroom.', color: 'text-secondary' },
  { value: '99.2%', title: 'Customer Satisfaction', desc: 'Automated SMS tracking links reduce phone inquiries by 70% and build customer trust.', color: 'text-tertiary' },
  { value: '৳180K+', title: 'Avg Monthly Revenue Gain', desc: 'From recovered unbilled labor hours, fast counter accessory checkout, and accurate margins.', color: 'text-primary' },
] as const;