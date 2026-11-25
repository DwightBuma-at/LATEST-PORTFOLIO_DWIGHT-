import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowUp,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Code2,
  Folder,
  Laptop,
  LayoutGrid,
  Layers,
  Mail,
  MessageSquare,
  Plus,
  User,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate, useOutletContext } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { MainLayoutOutletContext } from '@/layouts/MainLayout';

const QUICK_NAV = [
  { label: 'About Me', to: '/about', icon: User },
  { label: 'Experience', to: '/experience', icon: Briefcase },
  { label: 'Projects', to: '/projects', icon: Code2 },
  { label: 'Skills', to: '/tech-stack', icon: Layers },
  { label: 'Contacts', to: '/contact', icon: Mail },
] as const;

const EXPLORE_PROMPTS = [
  { label: 'Who is Dwight?', to: '/about', icon: MessageSquare },
  { label: 'What has Dwight built?', to: '/projects', icon: Folder },
  { label: "Explore Dwight's artifacts", to: '/artifacts', icon: LayoutGrid },
  { label: 'Where has Dwight worked?', to: '/experience', icon: Briefcase },
  { label: 'What technologies does Dwight use?', to: '/tech-stack', icon: Layers },
  { label: 'What gear does Dwight use?', to: '/gear', icon: Laptop },
  { label: 'How can I contact Dwight?', to: '/contact', icon: Mail },
] as const;

const PLACEHOLDER_PROMPTS = [
  'Who is Dwight?',
  'What has Dwight built?',
  'What technologies does Dwight use?',
  'Where has Dwight worked?',
  'What gear does Dwight use?',
  'How can I contact Dwight?',
] as const;

function useTypewriterPlaceholder(paused: boolean): string {
  const [promptIndex, setPromptIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (paused || reducedMotion) return;

    const currentPrompt = PLACEHOLDER_PROMPTS[promptIndex];
    let delay = isDeleting ? 50 : 95;

    if (!isDeleting && charCount === currentPrompt.length) {
      delay = 2400;
    } else if (isDeleting && charCount === 0) {
      delay = 550;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && charCount < currentPrompt.length) {
        setCharCount((c) => c + 1);
      } else if (!isDeleting && charCount === currentPrompt.length) {
        setIsDeleting(true);
      } else if (isDeleting && charCount > 0) {
        setCharCount((c) => c - 1);
      } else {
        setIsDeleting(false);
        setPromptIndex((i) => (i + 1) % PLACEHOLDER_PROMPTS.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charCount, isDeleting, paused, promptIndex, reducedMotion]);

  if (reducedMotion) {
    return PLACEHOLDER_PROMPTS[0];
  }

  return PLACEHOLDER_PROMPTS[promptIndex].slice(0, charCount);
}

function StarburstMark() {
  const rays = Array.from({ length: 12 }, (_, index) => index * 30);

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="h-8 w-8 shrink-0 text-[#D97757] sm:h-[42px] sm:w-[42px]"
    >
      {rays.map((angle) => (
        <line
          key={angle}
          x1="16"
          y1="3.5"
          x2="16"
          y2="11.5"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          transform={`rotate(${angle} 16 16)`}
        />
      ))}
    </svg>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { isWarmBeige } = useOutletContext<MainLayoutOutletContext>();
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState<'overview' | 'work'>('overview');
  const [isInputActive, setIsInputActive] = useState(false);
  const animatedPlaceholder = useTypewriterPlaceholder(query.length > 0 || isInputActive);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    const normalized = trimmed.toLowerCase();
    if (!normalized) return;

    let targetRoute = `/search?q=${encodeURIComponent(trimmed)}`;
    if (normalized.includes('about') || normalized.includes('bio') || normalized.includes('who')) {
      targetRoute = '/about';
    } else if (
      normalized.includes('project') ||
      normalized.includes('built') ||
      normalized.includes('portfolio')
    ) {
      targetRoute = '/projects';
    } else if (normalized.includes('exp') || normalized.includes('work')) {
      targetRoute = '/experience';
    } else if (
      normalized.includes('skill') ||
      normalized.includes('tech') ||
      normalized.includes('stack')
    ) {
      targetRoute = '/tech-stack';
    } else if (
      normalized.includes('contact') ||
      normalized.includes('email') ||
      normalized.includes('hire')
    ) {
      targetRoute = '/contact';
    } else if (normalized.includes('gear')) {
      targetRoute = '/gear';
    } else if (normalized.includes('artifact')) {
      targetRoute = '/artifacts';
    }

    navigate(targetRoute, { state: { recentLabel: trimmed } });
  };

  return (
    <div className="relative flex min-h-dvh flex-col">
      {/* Top-center subtle status pill positioned slightly below top edge */}
      <div className="flex justify-center pt-12">
        <div
          className={`inline-flex items-center gap-1.5 rounded-[8px] border px-3 py-1 text-[12px] font-medium text-[#2E2D2A] transition-colors ${
            isWarmBeige
              ? 'border-[#DFDBD0] bg-[#ECE8DF]'
              : 'border-[#E5E5E0] bg-[#F4F4F2]'
          }`}
        >
          <span>Full Stack Developer</span>
          <span aria-hidden="true">&middot;</span>
          <Link
            to="/contact"
            className="text-[#1D4ED8] underline underline-offset-2 transition-colors hover:text-[#1E40AF]"
          >
            Available
          </Link>
        </div>
      </div>

      {/* Main centered stack positioned slightly above vertical center */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-[18vh] sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full max-w-[640px] flex-col items-center"
        >
          {/* Editorial Serif Greeting */}
          <div className="mb-6 flex items-center justify-center gap-2.5 text-center">
            <StarburstMark />
            <h1 className="font-serif text-[32px] leading-[1.12] font-normal tracking-[-0.02em] text-[#141413] sm:text-[42px]">
              Hello, I&apos;m Dwight.
            </h1>
          </div>

          {/* Central Input Container */}
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className={`w-full rounded-[18px] border bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow focus-within:border-[#C8C6BF] focus-within:shadow-[0_6px_24px_rgba(0,0,0,0.07)] ${
              isWarmBeige ? 'border-[#DFDBD0]' : 'border-[#E2E2DD]'
            }`}
          >
            <div className="relative px-4 pt-4 pb-7">
              <label htmlFor="portfolio-search" className="sr-only">
                Explore portfolio sections
              </label>
              <input
                id="portfolio-search"
                type="text"
                autoComplete="off"
                value={query}
                onFocus={() => setIsInputActive(true)}
                onBlur={() => setIsInputActive(false)}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isInputActive ? 'Ask anything about Dwight' : ''}
                className="relative z-10 w-full bg-transparent font-[family-name:var(--font-geist)] text-[16px] leading-relaxed font-normal text-[#141413] caret-[#141413] outline-none placeholder:font-normal placeholder:text-[#141413]/75"
              />
              {!query && !isInputActive ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-4 right-4 left-4 flex items-center font-[family-name:var(--font-geist)] text-[16px] leading-relaxed font-normal text-[#141413]"
                >
                  <span>{animatedPlaceholder}</span>
                  <span className="ml-0.5 inline-block h-[18px] w-[1.5px] animate-pulse bg-[#141413]" />
                </span>
              ) : null}
            </div>

            {/* Bottom toolbar inside input container */}
            <div className="flex items-center justify-between gap-2 px-3 pb-2.5">
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      aria-label="Explore topics"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[#2E2D2A] transition-colors hover:bg-[#F2F2EF] hover:text-[#141413] data-[state=open]:bg-[#EAEAE6] data-[state=open]:text-[#141413]"
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.85} aria-hidden="true" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={8}
                    className="w-[300px] rounded-2xl border border-[#E5E5E0] bg-white p-1.5 text-[#141413] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                  >
                    <DropdownMenuLabel className="px-2.5 py-1.5 text-[11.5px] font-medium text-[#5C5B57]">
                      Ask about Dwight
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="my-1 bg-[#EFEFED]" />
                    {EXPLORE_PROMPTS.map(({ label, to, icon: Icon }) => (
                      <DropdownMenuItem
                        key={to}
                        onSelect={() => navigate(to)}
                        className="flex cursor-pointer items-center justify-between gap-2 rounded-xl px-2.5 py-2 text-[13.5px] font-medium text-[#1F1E1D] focus:bg-[#F2F2EF] focus:text-[#141413]"
                      >
                        <span className="flex min-w-0 items-center gap-2.5">
                          <Icon
                            className="h-4 w-4 shrink-0 text-[#4A4945]"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                          <span className="truncate">{label}</span>
                        </span>
                        <ChevronRight
                          className="h-3.5 w-3.5 shrink-0 text-[#8C8B86]"
                          aria-hidden="true"
                        />
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <div
                  role="group"
                  aria-label="Portfolio focus mode"
                  className="inline-flex items-center rounded-[8px] border border-[#E5E5E0] bg-[#F4F4F2] p-0.5"
                >
                  <button
                    type="button"
                    onClick={() => setMode('overview')}
                    className={`rounded-[6px] px-2.5 py-0.5 text-[12px] font-medium transition-colors ${
                      mode === 'overview'
                        ? 'bg-white text-[#141413] shadow-xs'
                        : 'text-[#3D3C38] hover:text-[#141413]'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('work')}
                    className={`rounded-[6px] px-2.5 py-0.5 text-[12px] font-medium transition-colors ${
                      mode === 'work'
                        ? 'bg-white text-[#141413] shadow-xs'
                        : 'text-[#3D3C38] hover:text-[#141413]'
                    }`}
                  >
                    Work
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden items-center gap-1 text-[12px] sm:inline-flex">
                  <span className="font-semibold text-[#141413]">Dwight</span>
                  <span className="font-medium text-[#4A4945]">Portfolio</span>
                  <ChevronDown className="h-3 w-3 text-[#4A4945]" aria-hidden="true" />
                </span>
                <button
                  type="submit"
                  aria-label="Navigate to section"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[#2E2D2A] transition-colors hover:bg-[#F2F2EF] hover:text-[#141413]"
                >
                  <ArrowUp className="h-4 w-4" strokeWidth={1.85} aria-hidden="true" />
                </button>
              </div>
            </div>
          </form>

          {/* Compact Navigation Buttons */}
          <nav
            aria-label="Quick section navigation"
            className="mt-4 flex flex-wrap items-center justify-center gap-1.5"
          >
            {QUICK_NAV.map(({ label, to, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`inline-flex h-[30px] items-center gap-1.5 rounded-[8px] border px-2.5 text-[12.5px] font-medium text-[#1F1E1D] transition-colors ${
                  isWarmBeige
                    ? 'border-[#DFDBD0] bg-[#ECE8DF] hover:border-[#CFCAC0] hover:bg-[#E4DFD4]'
                    : 'border-[#E2E2DD] bg-[#F6F6F4] hover:border-[#D0D0CA] hover:bg-[#ECECE8]'
                }`}
              >
                <Icon
                  className="h-3.5 w-3.5 text-[#2E2D2A]"
                  strokeWidth={1.85}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </div>
  );
}
