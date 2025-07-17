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
    { id: 'catchup', label: 'CatchUp' },
  ];

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 120;
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

          const nearBottom =
            window.innerHeight + window.scrollY >=
            document.body.scrollHeight - 50;
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
    handleScroll();

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
      <div className="relative w-full px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Left Section: Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold font-mono hover:opacity-90 transition-opacity"
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
        </div>

        {/* Center Section: Scroll Nav */}
        {isHome && (
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
            {scrollItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-sm font-mono transition hover:text-brand-orange ${
                  activeSection === item.id
                    ? 'text-brand-orange underline underline-offset-4'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Right Section: Resume, GitHub, Theme Toggle */}
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