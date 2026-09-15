export type WorkbenchTicket = {
  id: string;
  device: string;
  imei: string;
  fault: string;
  technician: string;
  bench: string;
  progress: number; // 0-100
  status: 'Bench Repair' | 'Diagnosing' | 'QA Passed' | 'Just Received';
  amount: number;
};

export type Technician = {
  name: string;
  role: string;
  jobs: number;
  color: 'primary' | 'secondary' | 'tertiary';
};

export type FeatureModule = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: string;
};

export type WorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  tag: string;
  variant: 'primary' | 'secondary' | 'tertiary';
};