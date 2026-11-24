import { Link } from 'react-router';
import { Container } from '@/components/ui/Container';
import { portfolio } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-surface border-t py-8">
      <Container className="text-muted-foreground flex flex-col items-start justify-between gap-4 text-sm sm:flex-row sm:items-center">
        <p>
          &copy; {year} {portfolio.name}. All rights reserved.
        </p>
        <Link to="/" className="text-foreground hover:text-accent font-medium transition-colors">
          Dashboard
        </Link>
      </Container>
    </footer>
  );
}
