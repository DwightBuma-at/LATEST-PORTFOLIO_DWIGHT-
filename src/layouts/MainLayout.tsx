import { Outlet } from 'react-router';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export default function MainLayout() {
  return (
    <div className="bg-background text-foreground flex min-h-dvh flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
