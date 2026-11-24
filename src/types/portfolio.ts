export type Theme = 'light' | 'dark';

export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'website' | 'x';

export interface SocialLink {
  id: string;
  label: string;
  platform: SocialPlatform;
  href: string;
}

export interface PortfolioProfile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  aboutSummary: string;
  availability: string;
  socialLinks: SocialLink[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  featured: boolean;
  repoUrl?: string;
  liveUrl?: string;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Tooling' | 'Design';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
}
