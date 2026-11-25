import { useEffect, useState, type ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router';

function StarburstIcon({ spinning = false }: { spinning?: boolean }) {
  const rays = Array.from({ length: 12 }, (_, index) => index * 30);

  return (
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      animate={spinning ? { rotate: 360 } : { rotate: 0 }}
      transition={
        spinning
          ? { repeat: Infinity, duration: 1.8, ease: 'linear' }
          : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
      }
      className="mt-1 shrink-0 text-[#D97757]"
    >
      {rays.map((angle) => (
        <line
          key={angle}
          x1="16"
          y1="3.5"
          x2="16"
          y2="11.5"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          transform={`rotate(${angle} 16 16)`}
        />
      ))}
    </motion.svg>
  );
}

const THINKING_VERBS = [
  'Thinking...',
  'Clauding...',
  'Pondering...',
  'Brewing...',
  'Noodling...',
  'Percolating...',
  'Marinating...',
  'Ruminating...',
  'Tinkering...',
  'Crafting...',
  'Synthesizing...',
  'Vibing...',
] as const;

function pickThreeVerbs(): string[] {
  const pool = [...THINKING_VERBS];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 3);
}

export interface ClaudeResponseShellProps {
  prompt: string;
  isWarmBeige: boolean;
  ariaLabelledBy?: string;
  thinkingMs?: number;
  children: ReactNode;
}

export function ClaudeResponseShell({
  prompt,
  isWarmBeige,
  ariaLabelledBy,
  thinkingMs = 2000,
  children,
}: ClaudeResponseShellProps) {
  const { state } = useLocation();
  const skipThinking = Boolean((state as { skipThinking?: boolean } | null)?.skipThinking);

  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const shouldSkip = reducedMotion || skipThinking;

  const [isThinking, setIsThinking] = useState(!shouldSkip);
  const [verbs] = useState<string[]>(() => pickThreeVerbs());
  const [verbIndex, setVerbIndex] = useState(0);

  useEffect(() => {
    if (shouldSkip) return;

    const stepMs = Math.floor(thinkingMs / 3);
    const step1 = window.setTimeout(() => setVerbIndex(1), stepMs);
    const step2 = window.setTimeout(() => setVerbIndex(2), stepMs * 2);
    const done = window.setTimeout(() => setIsThinking(false), thinkingMs);

    return () => {
      window.clearTimeout(step1);
      window.clearTimeout(step2);
      window.clearTimeout(done);
    };
  }, [shouldSkip, thinkingMs]);

  return (
    <article className="mx-auto w-full max-w-[920px] px-5 pt-14 pb-10 sm:px-8 sm:pt-16">
      {/* User prompt bubble */}
      <div className="flex justify-end">
        <div
          className={`inline-block max-w-[85%] rounded-2xl px-4 py-2.5 font-[family-name:var(--font-geist)] text-[15px] leading-relaxed font-normal text-[#141413] transition-colors ${
            isWarmBeige ? 'bg-[#EAE5DA]' : 'bg-[#F4F4F2]'
          }`}
        >
          {prompt}
        </div>
      </div>

      {/* Assistant thinking -> generated response */}
      <section aria-labelledby={ariaLabelledBy} className="mt-8 flex items-start gap-3.5">
        <StarburstIcon spinning={isThinking} />

        <div className="min-w-0 flex-1">
          <AnimatePresence mode="wait">
            {isThinking ? (
              <motion.div
                key="thinking"
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2 pt-0.5 font-[family-name:var(--font-geist)] text-[14px]"
              >
                {verbs.slice(0, verbIndex + 1).map((verb, index) => {
                  const isDone = index < verbIndex;
                  return (
                    <motion.div
                      key={verb}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-2"
                    >
                      {isDone ? (
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-[#8A8882]"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      ) : (
                        <span
                          className="inline-block h-4 w-4 shrink-0 animate-spin rounded-full border-[1.75px] border-[#D97757]/25 border-t-[#D97757]"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={
                          isDone
                            ? 'font-normal text-[#7A7974]'
                            : 'animate-pulse font-medium text-[#3D3C38]'
                        }
                      >
                        {verb}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="response"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </article>
  );
}
