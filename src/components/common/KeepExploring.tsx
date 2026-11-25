import { CornerDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export interface KeepExploringLink {
  readonly label: string;
  readonly to: string;
}

interface KeepExploringProps {
  links: readonly KeepExploringLink[];
  delay?: number;
}

export function KeepExploring({ links, delay = 0.2 }: KeepExploringProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-3 pt-2"
    >
      <p className="font-[family-name:var(--font-geist)] text-[13px] font-normal text-[#6B6A65]">
        Keep exploring
      </p>
      <div className="flex flex-col items-start gap-2.5">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="group inline-flex items-center gap-2.5 font-[family-name:var(--font-geist)] text-[14.5px] font-normal text-[#3D3C38] transition-colors hover:text-[#141413]"
          >
            <CornerDownRight
              className="h-4 w-4 shrink-0 text-[#8A8882] transition-transform group-hover:translate-x-0.5 group-hover:text-[#141413]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
