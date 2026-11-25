import { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { PortfolioPromptBar } from '@/components/common/PortfolioPromptBar';
import { WarmModeToggle } from '@/components/common/WarmModeToggle';
import Sidebar from '@/layouts/Sidebar';

export interface MainLayoutOutletContext {
  isWarmBeige: boolean;
}

const WARM_STORAGE_KEY = 'portfolio-warm-surface';

const MODULE_TITLES: Record<string, string> = {
  '/about': 'Who is Dwight?',
  '/projects': 'What has Dwight built?',
  '/artifacts': "Explore Dwight's artifacts",
  '/experience': 'Where has Dwight worked?',
  '/tech-stack': 'What technologies does Dwight use?',
  '/gear': 'What gear does Dwight use?',
  '/contact': 'How can I hire Dwight?',
};

function getInitialWarmState(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(WARM_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export default function MainLayout() {
  const { pathname, search } = useLocation();
  const [isWarmBeige, setIsWarmBeige] = useState<boolean>(getInitialWarmState);
  const showBottomPromptBar = pathname !== '/';

  const headerTitle =
    pathname === '/search'
      ? new URLSearchParams(search).get('q')?.trim() || 'Search'
      : MODULE_TITLES[pathname];

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
      className={`flex h-dvh overflow-hidden text-[#141413] transition-colors duration-200 ${
        isWarmBeige ? 'bg-[#F5F2EB]' : 'bg-white'
      }`}
    >
      <Sidebar />
      <main id="main-content" className="relative flex h-dvh min-w-0 flex-1 flex-col overflow-hidden">
        {headerTitle ? (
          <div className="pointer-events-none absolute top-3.5 left-13 z-30 max-w-[calc(100%-7rem)] md:left-6">
            <p className="truncate font-[family-name:var(--font-geist)] text-[13.5px] font-medium text-[#5C5B57] select-none">
              {headerTitle}
            </p>
          </div>
        ) : null}

        <div className="fixed top-2.5 right-3.5 z-40 sm:right-4">
          <WarmModeToggle isWarmBeige={isWarmBeige} onToggle={toggleWarmBeige} />
        </div>

        <div className="flex-1 overflow-y-auto [scrollbar-gutter:stable]">
          <Outlet context={{ isWarmBeige } satisfies MainLayoutOutletContext} />
        </div>

        {showBottomPromptBar ? (
          <div
            className={`shrink-0 px-5 pt-2 pb-5 transition-colors sm:px-8 ${
              isWarmBeige ? 'bg-[#F5F2EB]' : 'bg-white'
            }`}
          >
            <div className="mx-auto w-full max-w-[720px]">
              <PortfolioPromptBar
                isWarmBeige={isWarmBeige}
                placeholder="Ask a follow-up about Dwight..."
              />
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
