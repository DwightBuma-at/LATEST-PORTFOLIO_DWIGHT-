import { useState } from 'react';
import {
  Briefcase,
  Folder,
  Inbox,
  Laptop,
  LayoutGrid,
  Layers,
  Mail,
  PanelLeft,
  PencilLine,
  Plus,
  User,
} from 'lucide-react';
import { Link, useLocation } from 'react-router';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { projects } from '@/data/projects';

const NAV_ITEMS = [
  { label: 'About', to: '/about', icon: User },
  { label: 'Projects', to: '/projects', icon: Folder },
  { label: 'Artifacts', to: '/artifacts', icon: LayoutGrid },
  { label: 'Experience', to: '/experience', icon: Briefcase },
  { label: 'Tech Stack', to: '/tech-stack', icon: Layers },
  { label: 'Gear', to: '/gear', icon: Laptop },
  { label: 'Blog', to: '/blog', icon: PencilLine },
  { label: 'Contact', to: '/contact', icon: Mail },
] as const;

const ROUTE_LABELS: Record<string, string> = {
  '/about': 'About',
  '/projects': 'Projects',
  '/artifacts': 'Artifacts',
  '/experience': 'Experience',
  '/tech-stack': 'Tech Stack',
  '/gear': 'Gear',
  '/blog': 'Blog',
  '/contact': 'Contact',
};

interface RecentVisit {
  label: string;
  to: string;
}

function SidebarBrandMark() {
  const rays = Array.from({ length: 12 }, (_, index) => index * 30);

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#D97757]"
    >
      {rays.map((angle) => (
        <line
          key={angle}
          x1="16"
          y1="3.5"
          x2="16"
          y2="11.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${angle} 16 16)`}
        />
      ))}
    </svg>
  );
}

function SidebarBody({
  collapsed,
  recents,
  onToggle,
  onNavigate,
}: {
  collapsed: boolean;
  recents: RecentVisit[];
  onToggle?: () => void;
  onNavigate?: () => void;
}) {
  const { pathname, search } = useLocation();
  const activeProjectId = new URLSearchParams(search).get('project');

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#F7F7F5] text-[#141413]">
      {/* Persistent top bar: toggle button is locked at left: 10px (px-2.5) in both states */}
      <div className="flex h-12 shrink-0 items-center gap-2 px-2.5">
        {onToggle ? (
          <Tooltip open={collapsed ? undefined : false}>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={onToggle}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#2E2D2A] transition-colors hover:bg-[#EAEAE6] hover:text-[#141413]"
              >
                <PanelLeft className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden="true" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">Open sidebar</TooltipContent>
          </Tooltip>
        ) : null}

        {!collapsed ? (
          <Link
            to="/"
            onClick={onNavigate}
            className="inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md px-1 py-1 text-[15px] leading-none font-semibold tracking-tight text-[#141413]"
          >
            <SidebarBrandMark />
            <span>Dwight</span>
          </Link>
        ) : null}
      </div>

      {/* Primary action: + New (icon locked at exact same horizontal axis) */}
      <div className="px-2.5 pt-1 pb-[1px]">
        <Tooltip open={collapsed ? undefined : false}>
          <TooltipTrigger asChild>
            <Link
              to="/"
              onClick={onNavigate}
              aria-label="New"
              aria-current={pathname === '/' ? 'page' : undefined}
              className={`flex h-9 items-center overflow-hidden rounded-lg transition-colors ${
                collapsed ? 'w-9 justify-center' : 'w-full gap-[10px] px-2.5'
              } ${
                pathname === '/'
                  ? 'bg-[#D8D8D1] font-medium text-[#141413]'
                  : 'font-normal text-[#2E2D2A] hover:bg-[#E8E8E2] hover:text-[#141413]'
              }`}
            >
              <Plus className="h-4 w-4 shrink-0 text-[#141413]" strokeWidth={2} aria-hidden="true" />
              {!collapsed ? <span className="truncate text-[14.5px]">New</span> : null}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">New</TooltipContent>
        </Tooltip>
      </div>

      {/* Scrollable navigation + pinned + recents */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-2.5 pb-4">
        <nav aria-label="Primary sidebar navigation" className="space-y-[1px]">
          {NAV_ITEMS.map(({ label, to, icon: Icon }) => {
            const isActive = pathname === to;
            return (
              <Tooltip key={to} open={collapsed ? undefined : false}>
                <TooltipTrigger asChild>
                  <Link
                    to={to}
                    onClick={onNavigate}
                    aria-label={label}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex h-[34px] items-center overflow-hidden rounded-lg transition-colors ${
                      collapsed ? 'w-9 justify-center' : 'w-full gap-[10px] px-2.5'
                    } ${
                      isActive
                        ? 'bg-[#D8D8D1] font-medium text-[#141413]'
                        : 'font-normal text-[#2E2D2A] hover:bg-[#E8E8E2] hover:text-[#141413]'
                    }`}
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-[#4A4945]"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    {!collapsed ? <span className="truncate text-[14.5px]">{label}</span> : null}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{label}</TooltipContent>
              </Tooltip>
            );
          })}
        </nav>

        {!collapsed ? (
          <>
            {/* Pinned projects */}
            <div className="mt-5">
              <p className="px-2.5 pb-1.5 text-[11.5px] font-medium text-[#6B6A65]">
                Pinned projects
              </p>
              <div className="space-y-[1px]">
                {projects.map((project) => {
                  const isPinnedActive =
                    pathname === '/projects' && activeProjectId === project.id;
                  return (
                    <Link
                      key={project.id}
                      to={`/projects?project=${project.id}`}
                      state={{ recentLabel: project.title }}
                      onClick={onNavigate}
                      aria-current={isPinnedActive ? 'page' : undefined}
                      className={`flex h-[34px] items-center gap-[10px] rounded-lg px-2.5 text-[14.5px] transition-colors ${
                        isPinnedActive
                          ? 'bg-[#D8D8D1] font-medium text-[#141413]'
                          : 'font-normal text-[#2E2D2A] hover:bg-[#E8E8E2] hover:text-[#141413]'
                      }`}
                    >
                      <Inbox
                        className="h-4 w-4 shrink-0 text-[#4A4945]"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      <span className="truncate">{project.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Recents */}
            <div className="mt-5">
              <p className="px-2.5 pb-1.5 text-[11.5px] font-medium text-[#6B6A65]">Recents</p>
              {recents.length === 0 ? (
                <p className="px-2.5 py-1 text-[13px] leading-relaxed text-[#6B6A65]">
                  Conversations you start will show up here.
                </p>
              ) : (
                <div className="space-y-[1px]">
                  {recents.map((item, index) => (
                    <Link
                      key={`${item.to}-${index}`}
                      to={item.to}
                      state={{ fromRecents: true }}
                      onClick={onNavigate}
                      className="flex h-[34px] items-center rounded-lg px-2.5 text-[14.5px] font-normal text-[#2E2D2A] transition-colors hover:bg-[#E8E8E2] hover:text-[#141413]"
                    >
                      <span className="truncate">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>

      {/* Bottom user footer */}
      <div className="shrink-0 border-t border-[#E6E6E2] p-2.5">
        <Tooltip open={collapsed ? undefined : false}>
          <TooltipTrigger asChild>
            <Link
              to="/about"
              onClick={onNavigate}
              aria-label="Dwight"
              className={`flex items-center overflow-hidden rounded-lg transition-colors hover:bg-[#EFEFED] ${
                collapsed ? 'h-9 w-9 justify-center' : 'gap-2.5 px-2 py-1.5'
              }`}
            >
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#141413] text-[12px] font-semibold text-white">
                D
              </span>
              {!collapsed ? (
                <div className="flex min-w-0 items-center gap-1 text-[13px]">
                  <span className="truncate font-medium text-[#141413]">Dwight</span>
                  <span className="text-[#6B6A65]">&middot;</span>
                  <span className="truncate text-[12px] text-[#5C5B57]">Full Stack Developer</span>
                </div>
              ) : null}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Dwight &middot; Full Stack Developer</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const { key: locationKey, pathname, search, state } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tracked, setTracked] = useState({ key: locationKey, pathname });
  const [recents, setRecents] = useState<RecentVisit[]>([]);

  if (locationKey !== tracked.key) {
    const cameFromNew = tracked.pathname === '/';
    setTracked({ key: locationKey, pathname });

    const navState = state as { fromRecents?: boolean; recentLabel?: string } | null;
    const fromRecents = Boolean(navState?.fromRecents);
    const label = navState?.recentLabel?.trim() || ROUTE_LABELS[pathname];

    if (pathname !== '/' && label && !fromRecents) {
      const target = `${pathname}${search}`;
      if (cameFromNew) {
        setRecents((prev) =>
          [
            { label, to: target },
            ...prev.filter((item) => item.label.toLowerCase() !== label.toLowerCase()),
          ].slice(0, 5),
        );
      } else {
        setRecents((prev) => {
          if (prev.length === 0) return [{ label, to: target }];
          return [{ label, to: target }, ...prev.slice(1)].slice(0, 5);
        });
      }
    }
  }

  return (
    <>
      {/* Mobile top-left drawer trigger */}
      <div className="fixed top-2.5 left-3 z-40 md:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation sidebar"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#2E2D2A] transition-colors hover:bg-[#EFEFED] hover:text-[#141413]"
            >
              <PanelLeft className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[288px] border-r border-[#E6E6E2] bg-[#F7F7F5] p-0"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Sidebar</SheetTitle>
            </SheetHeader>
            <SidebarBody
              collapsed={false}
              recents={recents}
              onNavigate={() => setMobileOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop collapsible sidebar (single persistent DOM tree, zero toggle-button movement) */}
      <aside
        aria-label="Sidebar"
        className={`hidden h-dvh shrink-0 overflow-hidden border-r border-[#E6E6E2] bg-[#F7F7F5] transition-[width] duration-200 md:sticky md:top-0 md:flex md:flex-col ${
          collapsed ? 'w-[56px]' : 'w-[288px]'
        }`}
      >
        <SidebarBody
          collapsed={collapsed}
          recents={recents}
          onToggle={() => setCollapsed((prev) => !prev)}
        />
      </aside>
    </>
  );
}
