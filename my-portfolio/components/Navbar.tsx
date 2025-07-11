// components/Navbar.tsx
'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">
      <Link href="/" className="text-xl font-bold font-mono">
        mithu.dev
      </Link>
      <div className="flex items-center gap-4">
        {/* Add other links later if needed */}
        <ThemeToggle />
      </div>
    </nav>
  );
}