import { MotionConfig } from 'motion/react';
import { BrowserRouter } from 'react-router';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppRoutes from '@/routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <AppRoutes />
          <Toaster />
        </TooltipProvider>
      </MotionConfig>
    </BrowserRouter>
  );
}
