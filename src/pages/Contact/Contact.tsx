import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useOutletContext } from 'react-router';
import { ClaudeResponseShell } from '@/components/common/ClaudeResponseShell';
import { KeepExploring } from '@/components/common/KeepExploring';
import type { MainLayoutOutletContext } from '@/layouts/MainLayout';

function SocialBrandIcon({
  platform,
}: {
  platform: 'github' | 'linkedin' | 'facebook' | 'instagram' | 'discord' | 'onlinejobs';
}) {
  const cls = 'h-[18px] w-[18px] text-white';
  if (platform === 'github') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }
  if (platform === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (platform === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
        <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V6.65c0-1.05.29-1.73 1.76-1.73Z" />
      </svg>
    );
  }
  if (platform === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    );
  }
  if (platform === 'onlinejobs') {
    return (
      <span className="font-[family-name:var(--font-geist)] text-[12px] font-bold tracking-tight text-white">
        OJ
      </span>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const DIRECT_CONTACTS = [
  {
    id: 'gmail',
    label: 'Gmail',
    value: 'dwightanthonyb@gmail.com',
    href: 'mailto:dwightanthonyb@gmail.com',
    icon: Mail,
  },
  {
    id: 'mobile',
    label: 'Mobile',
    value: '+63 9958744151',
    href: 'tel:+639958744151',
    icon: Phone,
  },
] as const;

const SOCIAL_PROFILES = [
  {
    id: 'github' as const,
    label: 'GitHub',
    handle: '@DwightBuma-at',
    href: 'https://github.com/DwightBuma-at',
    badgeClass: 'bg-[#181717]',
  },
  {
    id: 'linkedin' as const,
    label: 'LinkedIn',
    handle: 'in/dwightbuma-at · 500+ connections',
    href: 'https://www.linkedin.com/in/dwightbuma-at/',
    badgeClass: 'bg-[#0A66C2]',
  },
  {
    id: 'facebook' as const,
    label: 'Facebook',
    handle: 'dwightanthony.bumaat',
    href: 'https://www.facebook.com/dwightanthony.bumaat/',
    badgeClass: 'bg-[#1877F2]',
  },
  {
    id: 'instagram' as const,
    label: 'Instagram',
    handle: '@_dw1ghtanthony',
    href: 'https://www.instagram.com/_dw1ghtanthony/',
    badgeClass: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
  },
  {
    id: 'discord' as const,
    label: 'Discord',
    handle: 'dw1ght17',
    href: 'https://discord.com/users/dw1ght17',
    badgeClass: 'bg-[#5865F2]',
  },
  {
    id: 'onlinejobs' as const,
    label: 'OnlineJobs.ph',
    handle: 'Jobseeker Profile',
    href: 'https://v2.onlinejobs.ph/jobseekers',
    badgeClass: 'bg-[#16A34A]',
  },
] as const;

const FOLLOW_UP_LINKS = [
  { label: 'Who is Dwight?', to: '/about' },
  { label: 'What has Dwight built?', to: '/projects' },
  { label: 'What interactive artifacts has Dwight made?', to: '/artifacts' },
] as const;

function ContactHeader() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLSpanElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const [arrowCoords, setArrowCoords] = useState<{
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const updateArrow = () => {
      const header = headerRef.current;
      const timeline = timelineRef.current;
      const cta = ctaRef.current;
      if (!header || !timeline || !cta) return;

      const hRect = header.getBoundingClientRect();
      const tRect = timeline.getBoundingClientRect();
      const cRect = cta.getBoundingClientRect();

      const startX = tRect.right - hRect.left + 8;
      const startY = tRect.top - hRect.top + tRect.height * 0.6;
      const endX = cRect.right - hRect.left + 12;
      const endY = cRect.top - hRect.top + cRect.height * 0.52;

      if (startX > endX + 40) {
        setArrowCoords({
          startX,
          startY,
          endX,
          endY,
          width: hRect.width,
          height: hRect.height + 12,
        });
      } else {
        setArrowCoords(null);
      }
    };

    const rafId = window.requestAnimationFrame(updateArrow);
    const observer = new ResizeObserver(updateArrow);
    if (headerRef.current) observer.observe(headerRef.current);
    window.addEventListener('resize', updateArrow);
    return () => {
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('resize', updateArrow);
    };
  }, []);

  return (
    <div ref={headerRef} className="relative space-y-3">
      <h1
        id="contact-heading"
        className="font-serif text-[28px] leading-[1.18] font-normal tracking-[-0.015em] text-[#141413] sm:text-[34px]"
      >
        Contact Dwight
      </h1>
      <p className="font-[family-name:var(--font-geist)] text-[15.5px] leading-[1.75] text-[#2E2D2A]">
        Open to freelance projects, custom web systems, AI automation, and full time opportunities.
        A great first message shares what you need, where things currently stand, and your target{' '}
        <span ref={timelineRef}>timeline.</span>
      </p>

      {/* Primary CTA */}
      <div className="flex items-center pt-1">
        <motion.a
          ref={ctaRef}
          href="mailto:dwightanthonyb@gmail.com"
          whileHover={{ y: -1.5, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          className="group relative z-10 inline-flex h-10 items-center gap-2 rounded-xl bg-[#D97757] px-4.5 font-[family-name:var(--font-geist)] text-[14px] font-medium text-white shadow-[0_2px_8px_rgba(217,119,87,0.22)] transition-shadow hover:bg-[#CF6B4B] hover:shadow-[0_6px_18px_rgba(217,119,87,0.34)]"
        >
          <Mail
            className="h-4 w-4 transition-transform duration-200 group-hover:-rotate-6"
            aria-hidden="true"
          />
          <span>Email Dwight</span>
        </motion.a>
      </div>

      {/* Playful growing Claude-orange loop arrow from "timeline." to Email Dwight */}
      {arrowCoords ? (
        <motion.svg
          width={arrowCoords.width}
          height={arrowCoords.height}
          viewBox={`0 0 ${arrowCoords.width} ${arrowCoords.height}`}
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 overflow-visible text-[#D97757] select-none"
        >
          {(() => {
            const { startX, startY, endX, endY } = arrowCoords;
            const loopX = Math.max(endX + 70, startX - 16);
            const midY = startY + (endY - startY) * 0.6;
            const d = [
              `M ${startX} ${startY}`,
              `C ${startX + 44} ${startY - 2}, ${startX + 48} ${midY - 2}, ${loopX + 14} ${midY}`,
              `C ${loopX - 4} ${midY + 2}, ${loopX - 10} ${midY + 18}, ${loopX + 2} ${midY + 18}`,
              `C ${loopX + 14} ${midY + 18}, ${loopX + 14} ${midY + 2}, ${loopX - 10} ${midY + 2}`,
              `C ${endX + (loopX - endX) * 0.55} ${midY + 2}, ${endX + 42} ${endY + 2}, ${endX + 3} ${endY}`,
            ].join(' ');
            const head = `M ${endX + 16} ${endY - 8} L ${endX + 2} ${endY} L ${endX + 18} ${endY + 8}`;

            return (
              <>
                <motion.path
                  d={d}
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 1 }}
                  animate={
                    prefersReducedMotion
                      ? { pathLength: 1, opacity: 1 }
                      : {
                          pathLength: [0, 1, 1, 1],
                          opacity: [1, 1, 1, 0],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 3.1,
                          times: [0, 0.54, 0.84, 1],
                          repeat: Infinity,
                          repeatDelay: 0.35,
                          ease: 'easeInOut',
                        }
                  }
                />
                <motion.path
                  d={head}
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
                  animate={
                    prefersReducedMotion
                      ? { pathLength: 1, opacity: 1 }
                      : {
                          pathLength: [0, 0, 0, 1, 1, 1],
                          opacity: [0, 0, 1, 1, 1, 0],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 3.1,
                          times: [0, 0.53, 0.54, 0.64, 0.84, 1],
                          repeat: Infinity,
                          repeatDelay: 0.35,
                          ease: 'easeInOut',
                        }
                  }
                />
              </>
            );
          })()}
        </motion.svg>
      ) : null}
    </div>
  );
}

export default function Contact() {
  const { isWarmBeige } = useOutletContext<MainLayoutOutletContext>();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 1800);
    } catch {
      // Ignore clipboard errors
    }
  };

  return (
    <ClaudeResponseShell
      prompt="How can I hire Dwight?"
      isWarmBeige={isWarmBeige}
      ariaLabelledBy="contact-heading"
    >
      <div className="space-y-8">
        {/* Header & Intro */}
        <ContactHeader />

        {/* Direct Channels */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h2 className="font-[family-name:var(--font-geist)] text-[11px] font-semibold tracking-[0.08em] text-[#6B6A65] uppercase">
            Direct
          </h2>

          <div
            className={`divide-y rounded-2xl border transition-colors ${
              isWarmBeige
                ? 'divide-[#E6E1D6] border-[#DFDBD0] bg-[#FAF8F3]'
                : 'divide-[#EFEFED] border-[#E5E5E0] bg-white'
            }`}
          >
            {DIRECT_CONTACTS.map(({ id, label, value, href, icon: Icon }) => {
              const isCopied = copiedId === id;
              return (
                <div
                  key={id}
                  className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon className="h-4 w-4 shrink-0 text-[#5C5B57]" strokeWidth={1.8} aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="font-[family-name:var(--font-geist)] text-[12px] text-[#6B6A65]">
                        {label}
                      </p>
                      <a
                        href={href}
                        className="block truncate font-[family-name:var(--font-geist)] text-[14.5px] font-medium text-[#141413] hover:underline"
                      >
                        {value}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(id, value)}
                    aria-label={`Copy ${label}`}
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 font-[family-name:var(--font-geist)] text-[12px] font-medium transition-colors ${
                      isWarmBeige
                        ? 'border-[#DFDBD0] bg-[#F2EFE8] text-[#2E2D2A] hover:bg-[#E8E3D8]'
                        : 'border-[#E5E5E0] bg-[#F6F6F4] text-[#2E2D2A] hover:bg-[#ECECE8]'
                    }`}
                  >
                    {isCopied ? (
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
              );
            })}
          </div>
        </motion.div>

        {/* Social Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h2 className="font-[family-name:var(--font-geist)] text-[11px] font-semibold tracking-[0.08em] text-[#6B6A65] uppercase">
            Social &amp; Profiles
          </h2>

          <div
            className={`divide-y rounded-2xl border transition-colors ${
              isWarmBeige
                ? 'divide-[#E6E1D6] border-[#DFDBD0] bg-[#FAF8F3]'
                : 'divide-[#EFEFED] border-[#E5E5E0] bg-white'
            }`}
          >
            {SOCIAL_PROFILES.map(({ id, label, handle, href, badgeClass }) => (
              <div
                key={id}
                className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.08)] ${badgeClass}`}
                  >
                    <SocialBrandIcon platform={id} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-[family-name:var(--font-geist)] text-[12px] text-[#6B6A65]">
                      {label}
                    </p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block truncate font-[family-name:var(--font-geist)] text-[14.5px] font-medium text-[#141413] hover:underline"
                    >
                      {handle}
                    </a>
                  </div>
                </div>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${label}`}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 font-[family-name:var(--font-geist)] text-[12px] font-medium transition-colors ${
                    isWarmBeige
                      ? 'border-[#DFDBD0] bg-[#F2EFE8] text-[#2E2D2A] hover:bg-[#E8E3D8]'
                      : 'border-[#E5E5E0] bg-[#F6F6F4] text-[#2E2D2A] hover:bg-[#ECECE8]'
                  }`}
                >
                  <span>Visit</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Availability note */}
        <p className="font-[family-name:var(--font-geist)] text-[13.5px] text-[#5C5B57]">
          Based in the Philippines (GMT+8) &middot; Currently available for new projects.
        </p>

        <KeepExploring links={FOLLOW_UP_LINKS} delay={0.2} />
      </div>
    </ClaudeResponseShell>
  );
}
