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
      <body className="min-h-screen transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="max-w-4xl mx-auto px-6 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}