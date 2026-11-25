import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';
import { useOutletContext } from 'react-router';
import { ClaudeResponseShell } from '@/components/common/ClaudeResponseShell';
import { KeepExploring } from '@/components/common/KeepExploring';
import { skillGroups } from '@/data/skills';
import type { MainLayoutOutletContext } from '@/layouts/MainLayout';

const FOLLOW_UP_LINKS = [
  { label: 'What interactive artifacts has Dwight made?', to: '/artifacts' },
  { label: 'What gear does Dwight use?', to: '/gear' },
  { label: 'How can I hire Dwight?', to: '/contact' },
] as const;

interface CodeLine {
  type: 'comment' | 'open' | 'prop-inline' | 'prop-open' | 'prop-items' | 'prop-close' | 'close';
  keyName?: string;
  items?: string[];
  hasTrailingComma?: boolean;
}

function buildStructuredLines(): CodeLine[] {
  const lines: CodeLine[] = [{ type: 'comment' }, { type: 'open' }];

  for (const group of skillGroups) {
    lines.push({ type: 'prop-open', keyName: group.key });
    for (let i = 0; i < group.items.length; i += 6) {
      const chunk = group.items.slice(i, i + 6);
      lines.push({
        type: 'prop-items',
        items: chunk,
        hasTrailingComma: i + 6 < group.items.length,
      });
    }
    lines.push({ type: 'prop-close' });
  }

  lines.push({ type: 'close' });
  return lines;
}

const CODE_LINES = buildStructuredLines();

function buildStackCode(): string {
  return CODE_LINES.map((line) => {
    switch (line.type) {
      case 'comment':
        return '// what Dwight reaches for';
      case 'open':
        return 'export const stack = {';
      case 'prop-inline':
        return `  ${line.keyName}: [${line.items!.map((i) => `"${i}"`).join(', ')}],`;
      case 'prop-open':
        return `  ${line.keyName}: [`;
      case 'prop-items':
        return `    ${line.items!.map((i) => `"${i}"`).join(', ')}${line.hasTrailingComma ? ',' : ''}`;
      case 'prop-close':
        return '  ],';
      case 'close':
        return '};';
    }
  }).join('\n');
}

export default function TechStack() {
  const { isWarmBeige } = useOutletContext<MainLayoutOutletContext>();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildStackCode());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Ignore clipboard errors
    }
  };

  return (
    <ClaudeResponseShell
      prompt="What technologies does Dwight use?"
      isWarmBeige={isWarmBeige}
      ariaLabelledBy="tech-stack-heading"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1
            id="tech-stack-heading"
            className="font-serif text-[28px] leading-[1.18] font-normal tracking-[-0.015em] text-[#141413] sm:text-[34px]"
          >
            Tech Stack
          </h1>
          <p className="font-[family-name:var(--font-geist)] text-[15.5px] leading-[1.7] text-[#2E2D2A]">
            The technologies Dwight uses to design, build, and deploy full stack web applications,
            real time systems, and APIs.
          </p>
        </div>

        {/* Clean, neatly formatted stack.ts code block */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`overflow-hidden rounded-2xl border shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-colors ${
            isWarmBeige ? 'border-[#DFDBD0] bg-[#FAF8F3]' : 'border-[#E5E5E0] bg-[#FAFAFA]'
          }`}
        >
          {/* Code header bar */}
          <div
            className={`flex items-center justify-between border-b px-4 py-2.5 ${
              isWarmBeige ? 'border-[#E6E1D6] bg-[#F2EFE8]' : 'border-[#EAEAE6] bg-[#F4F4F2]'
            }`}
          >
            <div className="flex items-center gap-2 font-[family-name:var(--font-geist)] text-[12.5px]">
              <span className="font-semibold text-[#141413]">stack.ts</span>
              <span className="text-[#6B6A65]">TypeScript</span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy stack.ts"
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-[family-name:var(--font-geist)] text-[12px] font-medium text-[#4A4945] transition-colors hover:bg-black/5 hover:text-[#141413]"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#15803D]" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Code lines */}
          <div className="overflow-x-auto px-4 py-4 font-mono text-[13.5px] leading-[1.8]">
            {CODE_LINES.map((line, index) => (
              <div key={index} className="flex gap-4 whitespace-nowrap">
                <span className="w-6 shrink-0 text-right text-[#9C9B95] select-none">
                  {index + 1}
                </span>

                {line.type === 'comment' ? (
                  <span className="text-[#7A7974]">// what Dwight reaches for</span>
                ) : null}

                {line.type === 'open' ? (
                  <span>
                    <span className="text-[#B45309]">export const</span>{' '}
                    <span className="font-medium text-[#141413]">stack</span>{' '}
                    <span className="text-[#5C5B57]">= {'{'}</span>
                  </span>
                ) : null}

                {line.type === 'prop-inline' ? (
                  <span className="pl-4">
                    <span className="text-[#1D4ED8]">{line.keyName}</span>
                    <span className="text-[#5C5B57]">: [</span>
                    {line.items!.map((item, idx) => (
                      <span key={item}>
                        <span className="text-[#0F766E]">&quot;{item}&quot;</span>
                        {idx < line.items!.length - 1 ? (
                          <span className="text-[#5C5B57]">, </span>
                        ) : null}
                      </span>
                    ))}
                    <span className="text-[#5C5B57]">],</span>
                  </span>
                ) : null}

                {line.type === 'prop-open' ? (
                  <span className="pl-4">
                    <span className="text-[#1D4ED8]">{line.keyName}</span>
                    <span className="text-[#5C5B57]">: [</span>
                  </span>
                ) : null}

                {line.type === 'prop-items' ? (
                  <span className="pl-8">
                    {line.items!.map((item, idx) => (
                      <span key={item}>
                        <span className="text-[#0F766E]">&quot;{item}&quot;</span>
                        {idx < line.items!.length - 1 || line.hasTrailingComma ? (
                          <span className="text-[#5C5B57]">, </span>
                        ) : null}
                      </span>
                    ))}
                  </span>
                ) : null}

                {line.type === 'prop-close' ? (
                  <span className="pl-4 text-[#5C5B57]">],</span>
                ) : null}

                {line.type === 'close' ? <span className="text-[#5C5B57]">{'};'}</span> : null}
              </div>
            ))}
          </div>
        </motion.div>

        <KeepExploring links={FOLLOW_UP_LINKS} delay={0.16} />
      </div>
    </ClaudeResponseShell>
  );
}
