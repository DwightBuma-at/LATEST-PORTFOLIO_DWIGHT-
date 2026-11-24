import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';

export interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}

export function SectionContainer({
  id,
  children,
  className,
  ariaLabelledBy,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={['py-16 sm:py-20', className].filter(Boolean).join(' ')}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
