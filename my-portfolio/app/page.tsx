// 'use client';

// import { useTheme } from 'next-themes'

// export default function HomePage() {
//   const { theme, setTheme } = useTheme()

//   return (
//     <main className="p-8">
//       <h1 className="text-3xl font-mono">Hey, I'm Mithu 👨‍💻</h1>
//       <p className="mt-4">This is a test of dark/light toggle.</p>
//       <button
//         className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded"
//         onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//       >
//         Toggle Theme
//       </button>
//     </main>
//   )
// }

// app/page.tsx

// app/page.tsx
// app/page.tsx
// app/page.tsx
// app/page.tsx
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="mx-auto space-y-24 px-6 py-8">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  );
}