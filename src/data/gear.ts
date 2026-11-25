export interface GearItem {
  id: string;
  category: string;
  name: string;
  icon: 'laptop' | 'monitor' | 'phone' | 'audio' | 'code' | 'workflow' | 'video';
}

export const hardwareGear: GearItem[] = [
  { id: 'laptop', category: 'Laptop', name: 'MSI GF63 Thin', icon: 'laptop' },
  {
    id: 'monitor',
    category: 'Monitor',
    name: 'Acer KB252Q G0bi 24.5" IPS Full HD Zero',
    icon: 'monitor',
  },
  { id: 'phone', category: 'Phone', name: 'iPhone 16', icon: 'phone' },
  { id: 'audio', category: 'Audio', name: 'AirPods Pro', icon: 'audio' },
];

export const softwareGear: GearItem[] = [
  {
    id: 'development',
    category: 'Development',
    name: 'VS Code · ChatGPT · Claude · Antigravity · Codex · Cursor',
    icon: 'code',
  },
  {
    id: 'automation',
    category: 'Automation',
    name: 'n8n · Hermes',
    icon: 'workflow',
  },
  {
    id: 'ai-video',
    category: 'AI Video Editing',
    name: 'Google Flow · CapCut',
    icon: 'video',
  },
];
