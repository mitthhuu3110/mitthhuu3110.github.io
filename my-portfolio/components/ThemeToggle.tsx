// components/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-xl p-2 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}