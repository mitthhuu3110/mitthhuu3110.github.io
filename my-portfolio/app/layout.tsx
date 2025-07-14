// app/layout.tsx
// 'use client';

// import './globals.css';
// import { ReactNode } from 'react';
// import { ThemeProvider } from 'next-themes';
// import Navbar from '@/components/Navbar';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <Navbar />
//           <main className="max-w-4xl mx-auto px-6 py-8">{children}</main>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
'use client';

import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-[color:var(--base)] bg-[color:var(--bg)] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="px-6 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}