import { useState, type FormEvent } from 'react';
import {
  ArrowUp,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Folder,
  Laptop,
  LayoutGrid,
  Layers,
  Mail,
  MessageSquare,
  Plus,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const EXPLORE_PROMPTS = [
  { label: 'Who is Dwight?', to: '/about', icon: MessageSquare },
  { label: 'What has Dwight built?', to: '/projects', icon: Folder },
  { label: "Explore Dwight's artifacts", to: '/artifacts', icon: LayoutGrid },
  { label: 'Where has Dwight worked?', to: '/experience', icon: Briefcase },
  { label: 'What technologies does Dwight use?', to: '/tech-stack', icon: Layers },
  { label: 'What gear does Dwight use?', to: '/gear', icon: Laptop },
  { label: 'How can I hire Dwight?', to: '/contact', icon: Mail },
] as const;

export interface PortfolioPromptBarProps {
  isWarmBeige: boolean;
  placeholder?: string;
}

export function PortfolioPromptBar({
  isWarmBeige,
  placeholder = 'Ask anything about Dwight...',
}: PortfolioPromptBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState<'overview' | 'work'>('overview');

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

    setQuery('');
    navigate(targetRoute, { state: { recentLabel: trimmed } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={`w-full rounded-[18px] border bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow focus-within:border-[#C8C6BF] focus-within:shadow-[0_6px_24px_rgba(0,0,0,0.07)] ${
        isWarmBeige ? 'border-[#DFDBD0]' : 'border-[#E2E2DD]'
      }`}
    >
      <div className="px-4 pt-3.5 pb-4">
        <label htmlFor="conversation-prompt-input" className="sr-only">
          Ask anything about Dwight
        </label>
        <input
          id="conversation-prompt-input"
          type="text"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent font-[family-name:var(--font-geist)] text-[15.5px] leading-relaxed font-normal text-[#141413] caret-[#141413] outline-none placeholder:text-[#6B6A65]"
        />
      </div>

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
              side="top"
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
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#8C8B86]" aria-hidden="true" />
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
            aria-label="Send prompt"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[#2E2D2A] transition-colors hover:bg-[#F2F2EF] hover:text-[#141413]"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={1.85} aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
}
