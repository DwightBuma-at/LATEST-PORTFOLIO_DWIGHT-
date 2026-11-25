export interface SkillGroup {
  key: string;
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'frontend',
    title: 'Frontend Technologies',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'React Native',
      'Flutter',
      'Vue.js',
      'Bootstrap',
      'Tailwind CSS',
      'Material UI',
      'Ant Design',
      'shadcn/ui',
      'Lucide Icons',
      'Framer Motion',
    ],
  },
  {
    key: 'backend',
    title: 'Backend Technologies',
    items: [
      'Python',
      'Django',
      'Django REST',
      'FastAPI',
      'Node.js',
      'Express.js',
      'NestJS',
      'Next.js',
      'Prisma',
      'Django Channels',
      'Daphne',
    ],
  },
  {
    key: 'database',
    title: 'Database & Cache',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Firebase', 'Redis'],
  },
  {
    key: 'cloud',
    title: 'Cloud & Deployment',
    items: ['Vercel', 'Netlify', 'Railway', 'Render', 'Hostinger', 'GitHub Pages', 'Namecheap'],
  },
  {
    key: 'apis',
    title: 'APIs & Services',
    items: ['REST APIs', 'Axios', 'WebSockets', 'Twilio', 'SendGrid'],
  },
  {
    key: 'ai',
    title: 'AI & Creative Tools',
    items: ['Claude', 'Antigravity', 'Cursor', 'Codex', 'Google AI Studio', 'Google Stitch'],
  },
  {
    key: 'automation',
    title: 'Automation',
    items: ['n8n', 'Hermes'],
  },
  {
    key: 'videoEditing',
    title: 'AI Video Editing',
    items: ['Google Flow', 'CapCut'],
  },
  {
    key: 'tools',
    title: 'Tools & Development',
    items: ['Git', 'GitHub', 'Figma', 'VS Code IDE'],
  },
];
