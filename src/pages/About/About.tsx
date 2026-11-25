import { useState } from 'react';
import { Camera } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useOutletContext } from 'react-router';
import { ClaudeResponseShell } from '@/components/common/ClaudeResponseShell';
import { KeepExploring } from '@/components/common/KeepExploring';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { portfolio } from '@/data/portfolio';
import type { MainLayoutOutletContext } from '@/layouts/MainLayout';

const ADDU_LABEL = 'Ateneo de Davao University';
const ADDU_URL =
  'https://www.addu.edu.ph/addu-tops-mindanao-private-universities-qs-asia-rankings-2027/';

const PHOTO_SLOTS = [
  { id: 1, label: 'Portrait', caption: 'Photo 1 of 7 — Portrait' },
  { id: 2, label: 'Building & Coding', caption: 'Photo 2 of 7 — Building & Coding' },
  { id: 3, label: 'Gym Session', caption: 'Photo 3 of 7 — Gym Session' },
  { id: 4, label: 'Coffee Break', caption: 'Photo 4 of 7 — Coffee Break' },
  { id: 5, label: 'Running', caption: 'Photo 5 of 7 — Running' },
  { id: 6, label: 'Exploring', caption: 'Photo 6 of 7 — Exploring' },
  { id: 7, label: 'Ateneo de Davao', caption: 'Photo 7 of 7 — Ateneo de Davao' },
] as const;

function PhilippineFlagIcon() {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 24 16"
      fill="none"
      aria-hidden="true"
      className="inline-block shrink-0 rounded-[2px] shadow-[0_0_0_0.5px_rgba(0,0,0,0.12)]"
    >
      <rect width="24" height="8" fill="#0038A8" />
      <rect y="8" width="24" height="8" fill="#CE1126" />
      <polygon points="0,0 11,8 0,16" fill="#FFFFFF" />
      <circle cx="4" cy="8" r="1.9" fill="#FCD116" />
      <circle cx="1.6" cy="2.6" r="0.65" fill="#FCD116" />
      <circle cx="1.6" cy="13.4" r="0.65" fill="#FCD116" />
      <circle cx="8.6" cy="8" r="0.65" fill="#FCD116" />
    </svg>
  );
}

export default function About() {
  const { isWarmBeige } = useOutletContext<MainLayoutOutletContext>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextPhoto = () => {
    setActiveIndex((prev) => (prev + 1) % PHOTO_SLOTS.length);
  };

  const currentPhoto = PHOTO_SLOTS[activeIndex];

  return (
    <ClaudeResponseShell
      prompt="Who is Dwight?"
      isWarmBeige={isWarmBeige}
      ariaLabelledBy="about-heading"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-1.5">
          <h1
            id="about-heading"
            className="font-serif text-[28px] leading-[1.18] font-normal tracking-[-0.015em] text-[#141413] sm:text-[34px]"
          >
            {portfolio.fullName}
          </h1>
          <p className="flex flex-wrap items-center gap-1.5 font-[family-name:var(--font-geist)] text-[14px] font-medium text-[#5C5B57]">
            <span>{portfolio.role}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{portfolio.specialty}</span>
            <span aria-hidden="true">&middot;</span>
            <span className="inline-flex items-center gap-1.5">
              <span>{portfolio.location}</span>
              <PhilippineFlagIcon />
            </span>
          </p>
        </div>

        {/* Interactive 7-Photo Stacked Deck directly below subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-3"
        >
          <div className="relative h-[240px] w-full max-w-[420px] sm:h-[270px]">
            {/* Back-most subtle stacked card */}
            <div
              aria-hidden="true"
              className={`absolute inset-0 translate-x-2.5 translate-y-1.5 rotate-[3deg] rounded-2xl border transition-colors ${
                isWarmBeige
                  ? 'border-[#DFDBD0] bg-[#E8E3D8]'
                  : 'border-[#E6E6E2] bg-[#EFEFED]'
              }`}
            />
            {/* Middle subtle stacked card */}
            <div
              aria-hidden="true"
              className={`absolute inset-0 -translate-x-1.5 translate-y-1 -rotate-[2.5deg] rounded-2xl border transition-colors ${
                isWarmBeige
                  ? 'border-[#D8D3C7] bg-[#EFEBE2]'
                  : 'border-[#E2E2DD] bg-[#F5F5F3]'
              }`}
            />

            {/* Active clickable photo card */}
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.button
                key={currentPhoto.id}
                type="button"
                onClick={handleNextPhoto}
                aria-label={`${currentPhoto.caption}. Click to view next photo.`}
                initial={{ opacity: 0, scale: 0.94, x: 24, rotate: 2.5 }}
                animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.94, x: -28, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                className={`absolute inset-0 flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D97757] ${
                  isWarmBeige
                    ? 'border-[#C9C3B6] bg-[#FAF8F3] text-[#3D3C38] hover:border-[#B8B1A2]'
                    : 'border-[#D0D0CA] bg-white text-[#3D3C38] hover:border-[#B8B8B0]'
                }`}
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${
                    isWarmBeige ? 'bg-[#ECE8DF]' : 'bg-[#F4F4F2]'
                  }`}
                >
                  <Camera
                    className="h-5 w-5 text-[#5C5B57]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <span className="font-[family-name:var(--font-geist)] text-[14px] font-medium text-[#141413]">
                  {currentPhoto.label}
                </span>
                <span className="font-[family-name:var(--font-geist)] text-[12px] text-[#6B6A65]">
                  Click photo to cycle ({activeIndex + 1} / {PHOTO_SLOTS.length})
                </span>
              </motion.button>
            </AnimatePresence>
          </div>

          {/* Compact dot indicators */}
          <div
            className="flex w-full max-w-[420px] items-center justify-center gap-1.5"
            role="tablist"
            aria-label="Select photo"
          >
            {PHOTO_SLOTS.map((slot, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={slot.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={slot.caption}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    isSelected ? 'w-5 bg-[#D97757]' : 'w-1.5 bg-[#CFCAC0] hover:bg-[#9C978D]'
                  }`}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Staggered Bio paragraphs */}
        <div className="space-y-4 font-[family-name:var(--font-geist)] text-[15.5px] leading-[1.78] text-[#2E2D2A]">
          {portfolio.aboutParagraphs.map((paragraph, index) => {
            const delay = 0.08 * (index + 1);

            if (!paragraph.includes(ADDU_LABEL)) {
              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay, ease: [0.16, 1, 0.3, 1] }}
                >
                  {paragraph}
                </motion.p>
              );
            }

            const [before, after] = paragraph.split(ADDU_LABEL);
            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay, ease: [0.16, 1, 0.3, 1] }}
              >
                {before}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={ADDU_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1D4ED8] underline underline-offset-2 transition-colors hover:text-[#1E40AF]"
                    >
                      {ADDU_LABEL}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="top">Visit link</TooltipContent>
                </Tooltip>
                {after}
              </motion.p>
            );
          })}
        </div>

        <KeepExploring
          links={[
            { label: "What is Dwight's experience?", to: '/experience' },
            { label: 'What has Dwight built?', to: '/projects' },
            { label: 'What gear does Dwight use?', to: '/gear' },
          ]}
          delay={0.22}
        />
      </div>
    </ClaudeResponseShell>
  );
}
