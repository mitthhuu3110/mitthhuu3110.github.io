'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { Github } from 'lucide-react';

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
        Home
      </Link> 

      <div className="flex items-center gap-4">
        <Link 
          href="/catchup"
          className="text-sm font-mono hover:underline underline-offset-4"
        >
          CatchUp with me!
        </Link>
        <Link
          href="/Mithilesh_Charan_Perugu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-mono hover:underline underline-offset-4"
        >
          📄 Resume
        </Link>
        <Link
          href="/unplugged"
          className="text-sm font-mono hover:underline underline-offset-4"
        >
          Unplugged
        </Link>
        {/* GitHub Icon */}
        <a
          href="https://github.com/mitthhuu3110"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-orange transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}