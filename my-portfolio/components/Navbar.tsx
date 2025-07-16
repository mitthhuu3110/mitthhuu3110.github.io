'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { Github } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const scrollItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
  ];

  const [activeSection, setActiveSection] = useState('about');

useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 120; // navbar offset
        let currentSection = scrollItems[0].id;

        for (let i = 0; i < scrollItems.length; i++) {
          const el = document.getElementById(scrollItems[i].id);
          if (el) {
            const top = el.offsetTop;
            const bottom = el.offsetTop + el.offsetHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
              currentSection = scrollItems[i].id;
              break;
            }
          }
        }

        // Fallback for bottom of page
        const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
        if (nearBottom) {
          currentSection = scrollItems[scrollItems.length - 1].id;
        }

        setActiveSection(currentSection);
        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once on mount

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[color:var(--bg)] bg-opacity-90 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left section: Logo + Scroll Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold font-mono hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/my-logo.png"
              alt="Logo"
              width={28}
              height={28}
              className="rounded-sm"
            />
            mithu-dev
          </Link>

          {isHome && (
            <div className="hidden md:flex items-center gap-4">
              {scrollItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`text-sm font-mono transition hover:text-brand-orange ${
                    activeSection === item.id ? 'text-brand-orange underline underline-offset-4' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right section: External links */}
        <div className="flex items-center gap-4">
          <Link
            href="/Mithilesh_Charan_Perugu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono hover:underline underline-offset-4"
          >
            📄 Resume
          </Link>
          <a
            href="https://github.com/mitthhuu3110"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}