'use client';

import { ReactNode } from 'react';
import { useTheme } from 'next-themes';

export default function HighlightOval({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <span className="relative inline-block font-semibold text-lg sm:text-xl md:text-2xl text-brand-orange">
      {children}
      <span
        className="absolute inset-0 border-2 pointer-events-none rounded-full"
        style={{
          borderColor: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(55,55,55,0.6)',
          transform: 'scaleX(1.4) scaleY(1.1)',
          borderWidth: '2px',
        }}
      />
    </span>
  );
}