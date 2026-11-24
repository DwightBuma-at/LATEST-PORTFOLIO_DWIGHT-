import { ExternalLink, Mail } from 'lucide-react';
import type { SocialLink } from '@/types';

export interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="flex flex-wrap items-center gap-3" aria-label="Social links">
      {links.map((link) => {
        const isExternal = link.href.startsWith('http');
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="border-border bg-surface text-foreground hover:bg-surface-elevated inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors"
            >
              {link.platform === 'email' ? (
                <Mail className="text-muted-foreground h-4 w-4" aria-hidden="true" />
              ) : (
                <ExternalLink className="text-muted-foreground h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{link.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
