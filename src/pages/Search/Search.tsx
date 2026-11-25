import { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronRight, Mail } from 'lucide-react';
import { useOutletContext, useSearchParams } from 'react-router';
import { ClaudeResponseShell } from '@/components/common/ClaudeResponseShell';
import { KeepExploring } from '@/components/common/KeepExploring';
import type { MainLayoutOutletContext } from '@/layouts/MainLayout';

const SUGGESTED_LINKS = [
  { label: 'Who is Dwight?', to: '/about' },
  { label: 'What has Dwight built?', to: '/projects' },
  { label: 'How can I hire Dwight?', to: '/contact' },
] as const;

export default function Search() {
  const { isWarmBeige } = useOutletContext<MainLayoutOutletContext>();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() || 'that';

  const [thoughtOpen, setThoughtOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <ClaudeResponseShell
      key={query}
      prompt={query}
      isWarmBeige={isWarmBeige}
      ariaLabelledBy="search-fallback-heading"
    >
      <div className="space-y-6">
        {/* Collapsible Claude reasoning & tool trace */}
        <div className="space-y-2 font-[family-name:var(--font-geist)] text-[13.5px]">
          <div>
            <button
              type="button"
              onClick={() => setThoughtOpen((prev) => !prev)}
              aria-expanded={thoughtOpen}
              className="inline-flex items-center gap-2 text-[#6B6A65] transition-colors hover:text-[#141413]"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>Thought for 2s</span>
              {thoughtOpen ? (
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
            {thoughtOpen ? (
              <div className="mt-2 ml-2 border-l border-[#DFDBD0] pl-4 text-[13.5px] leading-relaxed text-[#6B6A65]">
                That isn&apos;t one of the topics with a curated answer. I&apos;ll search
                Dwight&apos;s work for the closest match.
              </div>
            ) : null}
          </div>

          <div>
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-expanded={searchOpen}
              className="inline-flex items-center gap-2 text-[#6B6A65] transition-colors hover:text-[#141413]"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>Searched Dwight&apos;s work</span>
              {searchOpen ? (
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
            {searchOpen ? (
              <div className="mt-2 ml-2 border-l border-[#DFDBD0] pl-4">
                <div
                  className={`rounded-xl border px-3.5 py-2.5 font-mono text-[12.5px] text-[#5C5B57] ${
                    isWarmBeige
                      ? 'border-[#DFDBD0] bg-[#EFEBE2]'
                      : 'border-[#E5E5E0] bg-[#F7F7F5]'
                  }`}
                >
                  No exact match &middot; suggesting related topics
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Curated fallback message */}
        <div className="space-y-4">
          <h1
            id="search-fallback-heading"
            className="font-serif text-[21px] leading-[1.45] font-medium text-[#141413] sm:text-[23px]"
          >
            I don&apos;t have a curated answer for &ldquo;{query}&rdquo; yet.
          </h1>
          <p className="font-serif text-[18px] leading-[1.6] font-normal text-[#2E2D2A] sm:text-[19.5px]">
            There&apos;s no live model behind this box. Every answer here comes from Dwight&apos;s
            real portfolio, so I&apos;d rather say nothing than make something up. These I can
            answer:
          </p>
        </div>

        {/* Inline project CTA */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span className="font-[family-name:var(--font-geist)] text-[14.5px] text-[#5C5B57]">
            Have a project in mind?
          </span>
          <a
            href="mailto:dwightanthonyb@gmail.com"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#D97757] px-4.5 font-[family-name:var(--font-geist)] text-[14px] font-medium text-white shadow-[0_2px_8px_rgba(217,119,87,0.22)] transition-all hover:bg-[#CF6B4B] hover:shadow-[0_4px_14px_rgba(217,119,87,0.3)]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>Email Dwight</span>
          </a>
        </div>

        {/* Divider + Keep exploring */}
        <div
          className={`border-t pt-4 ${isWarmBeige ? 'border-[#E6E1D6]' : 'border-[#EAEAE5]'}`}
        >
          <KeepExploring links={SUGGESTED_LINKS} delay={0.1} />
        </div>
      </div>
    </ClaudeResponseShell>
  );
}
