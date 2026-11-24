import { Link } from 'react-router';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium">404</p>
      <h1 className="text-foreground mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground mt-3 text-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-primary text-primary-foreground mt-6 inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-opacity hover:opacity-90"
      >
        Return to Dashboard
      </Link>
    </Container>
  );
}
