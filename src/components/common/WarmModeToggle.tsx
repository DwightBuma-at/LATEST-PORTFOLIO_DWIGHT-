import { Ghost } from 'lucide-react';

export interface WarmModeToggleProps {
  isWarmBeige: boolean;
  onToggle: () => void;
}

export function WarmModeToggle({ isWarmBeige, onToggle }: WarmModeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isWarmBeige}
      aria-label={isWarmBeige ? 'Switch to white canvas' : 'Switch to warm beige canvas'}
      title={isWarmBeige ? 'Switch to white canvas' : 'Switch to warm beige canvas'}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
        isWarmBeige
          ? 'bg-[#EAE5DA] text-[#141413]'
          : 'text-[#2E2D2A] hover:bg-[#F2F2EF] hover:text-[#141413]'
      }`}
    >
      <Ghost className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden="true" />
    </button>
  );
}
