import type { PortfolioProfile } from '@/types';

export const portfolio: PortfolioProfile = {
  name: '[Your Name]',
  role: '[Your Role / Title]',
  tagline: 'Placeholder introduction — final portfolio copy and design will be added in Phase 2.',
  location: '[City, Country]',
  email: 'hello@example.com',
  aboutSummary:
    'Placeholder biography section. Replace with verified personal background, focus areas, and engineering philosophy.',
  availability: '[Availability Status Placeholder]',
  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      platform: 'github',
      href: 'https://github.com',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      platform: 'linkedin',
      href: 'https://linkedin.com',
    },
    {
      id: 'email',
      label: 'Email',
      platform: 'email',
      href: 'mailto:hello@example.com',
    },
  ],
};
