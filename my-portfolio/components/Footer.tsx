// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-700 mt-16 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <Link href="mailto:3110mithilesh@gmail.com" className="hover:underline">
          3110mithilesh@gmail.com
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="https://github.com/mitthhuu3110" target="_blank" className="hover:underline">
          GitHub
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="https://www.linkedin.com/in/mithilesh-perugu-5a1726236/" target="_blank" className="hover:underline">
          LinkedIn
        </Link>
      </div>

      <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} Mithilesh Charan Perugu. All rights reserved.
      </p>
    </footer>
  );
}