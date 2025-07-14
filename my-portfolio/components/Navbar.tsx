'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">
      
      <Link href="/" className="flex items-center gap-2 text-xl font-bold font-mono hover:opacity-90 transition-opacity">
        <Image
          src="/images/my-logo.png"
          alt="Logo"
          width={28}
          height={28}
          className="rounded-sm"
        />
        mithu-dev
      </Link> 

      <div className="flex items-center gap-4">
        <Link 
          href="/catchup"
          className="text-sm font-mono hover:underline underline-offset-4"
        >
          CatchUp with me!
        </Link>
        <Link
          href="/unplugged"
          className="text-sm font-mono hover:underline underline-offset-4"
        >
          Unplugged
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}