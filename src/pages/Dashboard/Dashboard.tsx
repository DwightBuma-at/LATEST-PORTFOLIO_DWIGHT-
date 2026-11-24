import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Badge } from '@/components/ui/badge';
import { portfolio } from '@/data/portfolio';

export default function Dashboard() {
  return (
    <SectionContainer id="dashboard" ariaLabelledBy="dashboard-heading" className="pt-20 sm:pt-28">
      <div className="max-w-3xl space-y-6">
        <Badge>{portfolio.availability}</Badge>
        <div className="space-y-3">
          <h1
            id="dashboard-heading"
            className="text-foreground text-3xl font-bold tracking-tight sm:text-5xl"
          >
            {portfolio.name}
          </h1>
          <p className="text-muted-foreground text-lg font-medium sm:text-xl">{portfolio.role}</p>
        </div>
        <p className="text-muted-foreground max-w-2xl text-base">{portfolio.tagline}</p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/projects"
            className="bg-primary text-primary-foreground inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contacts"
            className="border-border bg-surface text-foreground hover:bg-surface-elevated inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium transition-colors"
          >
            Contacts
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
