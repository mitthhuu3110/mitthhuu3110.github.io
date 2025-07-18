'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { Github, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const scrollItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'catchup', label: 'CatchUp' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

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
      setMenuOpen(false);
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
            charan.dev
          </Link>
        </div>

        {/* Center Section: Scroll Nav */}
        {isHome && (
          <div className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
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

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile Burger Icon */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[color:var(--base)] focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 px-4 text-sm font-mono">
          {isHome &&
            scrollItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`transition hover:text-brand-orange ${
                  activeSection === item.id
                    ? 'text-brand-orange underline underline-offset-4'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          <Link
            href="/Mithilesh_Charan_Perugu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            📄 Resume
          </Link>
          <a
            href="https://github.com/mitthhuu3110"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      )}
    </nav>
  );
}