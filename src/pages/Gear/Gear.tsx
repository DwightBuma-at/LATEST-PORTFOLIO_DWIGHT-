import { Code2, Film, Headphones, Laptop, Monitor, Smartphone, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import { useOutletContext } from 'react-router';
import { ClaudeResponseShell } from '@/components/common/ClaudeResponseShell';
import { KeepExploring } from '@/components/common/KeepExploring';
import { hardwareGear, softwareGear, type GearItem } from '@/data/gear';
import type { MainLayoutOutletContext } from '@/layouts/MainLayout';

const FOLLOW_UP_LINKS = [
  { label: 'What technologies does Dwight use?', to: '/tech-stack' },
  { label: "What is Dwight's experience?", to: '/experience' },
  { label: 'How can I hire Dwight?', to: '/contact' },
] as const;

function GearIcon({ icon }: { icon: GearItem['icon'] }) {
  const props = { className: 'h-4 w-4 shrink-0 text-[#5C5B57]', strokeWidth: 1.8, 'aria-hidden': true as const };

  switch (icon) {
    case 'laptop':
      return <Laptop {...props} />;
    case 'monitor':
      return <Monitor {...props} />;
    case 'phone':
      return <Smartphone {...props} />;
    case 'audio':
      return <Headphones {...props} />;
    case 'code':
      return <Code2 {...props} />;
    case 'workflow':
      return <Workflow {...props} />;
    case 'video':
      return <Film {...props} />;
  }
}

function GearSection({
  title,
  items,
  isWarmBeige,
  delay,
}: {
  title: string;
  items: GearItem[];
  isWarmBeige: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-3"
    >
      <h2 className="font-[family-name:var(--font-geist)] text-[11px] font-semibold tracking-[0.08em] text-[#6B6A65] uppercase">
        {title}
      </h2>

      <div
        className={`divide-y rounded-2xl border transition-colors ${
          isWarmBeige
            ? 'divide-[#E6E1D6] border-[#DFDBD0] bg-[#FAF8F3]'
            : 'divide-[#EFEFED] border-[#E5E5E0] bg-white'
        }`}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between gap-1.5 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-6 sm:px-5"
          >
            <div className="flex shrink-0 items-center gap-3">
              <GearIcon icon={item.icon} />
              <span className="font-[family-name:var(--font-geist)] text-[14.5px] font-normal text-[#5C5B57]">
                {item.category}
              </span>
            </div>
            <span className="font-[family-name:var(--font-geist)] text-[15px] font-medium text-[#141413] sm:text-right">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Gear() {
  const { isWarmBeige } = useOutletContext<MainLayoutOutletContext>();

  return (
    <ClaudeResponseShell
      prompt="What gear does Dwight use?"
      isWarmBeige={isWarmBeige}
      ariaLabelledBy="gear-heading"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1
            id="gear-heading"
            className="font-serif text-[28px] leading-[1.18] font-normal tracking-[-0.015em] text-[#141413] sm:text-[34px]"
          >
            Gear
          </h1>
          <p className="font-[family-name:var(--font-geist)] text-[15.5px] leading-[1.7] text-[#2E2D2A]">
            The everyday hardware and software Dwight builds, automates, edits, and ships with.
          </p>
        </div>

        <GearSection title="Hardware" items={hardwareGear} isWarmBeige={isWarmBeige} delay={0.08} />
        <GearSection
          title="Software he builds with"
          items={softwareGear}
          isWarmBeige={isWarmBeige}
          delay={0.14}
        />

        <KeepExploring links={FOLLOW_UP_LINKS} delay={0.2} />
      </div>
    </ClaudeResponseShell>
  );
}
