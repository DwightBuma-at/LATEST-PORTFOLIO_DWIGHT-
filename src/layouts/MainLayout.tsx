import { useState } from 'react';
import { Outlet } from 'react-router';
import { WarmModeToggle } from '@/components/common/WarmModeToggle';
import Sidebar from '@/layouts/Sidebar';

export interface MainLayoutOutletContext {
  isWarmBeige: boolean;
}

const WARM_STORAGE_KEY = 'portfolio-warm-surface';

function getInitialWarmState(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(WARM_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export default function MainLayout() {
  const [isWarmBeige, setIsWarmBeige] = useState<boolean>(getInitialWarmState);

  const toggleWarmBeige = () => {
    setIsWarmBeige((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(WARM_STORAGE_KEY, String(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  };

  return (
    <div
      className={`flex min-h-dvh text-[#141413] transition-colors duration-200 ${
        isWarmBeige ? 'bg-[#F5F2EB]' : 'bg-white'
      }`}
    >
      <Sidebar />
      <main id="main-content" className="relative min-w-0 flex-1">
        <div className="fixed top-2.5 right-3.5 z-40 sm:right-4">
          <WarmModeToggle isWarmBeige={isWarmBeige} onToggle={toggleWarmBeige} />
        </div>
        <Outlet context={{ isWarmBeige } satisfies MainLayoutOutletContext} />
      </main>
    </div>
  );
}
