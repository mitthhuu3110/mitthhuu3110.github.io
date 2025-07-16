/* eslint-disable react/no-unescaped-entities */
'use client';

import { ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Unplugged() {
  return (
    <section className="relative w-full bg-[color:var(--bg)] overflow-hidden">
      
      {/* 🔥 Background image */}
      <Image
        src="/images/mountain-bg-2.png"
        alt="Mountain Background"
        fill
        className="absolute inset-0 object-cover opacity-10 pointer-events-none select-none"
        style={{ zIndex: 0 }}
      />

      {/* 🔥 Foreground content */}
      <div className="relative z-10 pl-6 pr-4 md:pl-24 md:pr-12 py-12 w-full text-[color:var(--base)]">
        <h1 className="text-3xl font-bold font-mono text-brand-orange mb-2">Unplugged 🔌</h1>
        <p className="text-lg leading-relaxed mb-8 w-11/12">
          If you want to strike up a convo when we connect. This is a place to know me better. Maybe we can relate to each other somewhere. 👀 Got some plans? Have some fun ideas? We should definitely connect on a weekend. 
        </p>

        {/* Typing */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold font-mono text-brand-orange">⌨️ Typing Speed</h2>
          <div className="border-t border-dashed border-gray-400 my-2 w-11/12" />
          <p className="text-base leading-relaxed w-11/12">
            I can type at an average speed of 130 WPM, with a peak at 132 WPM. Feel free to test your speed too ➡️...
            <a
              href="https://monkeytype.com/profile/charan_perugu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-orange hover:underline"
            >
              MonkeyType <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </p>
        </section>

        {/* Biking */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold font-mono text-brand-orange">🏍️ Motorcycles & Cars</h2>
          <div className="border-t border-dashed border-gray-400 my-2 w-11/12" />
          <p className="text-base leading-relaxed w-11/12">
            I'm a throttle-happy guy. The joy of riding through curves with wind hitting your chest... it’s freedom. I ride to hilly areas, beach-side roads — anywhere that screams escape. Same with Cars. 
          </p>
        </section>

        {/* Writing */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold font-mono text-brand-orange">✍️ Writing</h2>
          <div className="border-t border-dashed border-gray-400 my-2 w-11/12" />
          <p className="text-base leading-relaxed w-11/12">
            Writing is more than a hobby for me — it’s a daily habit that helps me think clearly, express myself better, and stay grounded. Giving meaning to your thoughts in various forms of literature is pure wholesome. If I wasn’t a Software Engineer, I’d be writing books. Maybe I still will.
          </p>
        </section>

        {/* Cooking */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold font-mono text-brand-orange">👨‍🍳 Cooking</h2>
          <div className="border-t border-dashed border-gray-400 my-2 w-11/12" />
          <p className="text-base leading-relaxed w-11/12">
            People say I cook well. And they also say I only cook Non-veg well 😅. Chicken Biryani, Kebabs, Starters, Curries etc. Hmm.. I should learn cooking veg too.. maybe one day. 
          </p>
        </section>

        {/* Anime */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold font-mono text-brand-orange">🎥 Anime</h2>
          <div className="border-t border-dashed border-gray-400 my-2 w-11/12" />
          <p className="text-base leading-relaxed w-11/12">
            I only watched Naruto 🌀 & Death Note 📓. That’s it. Couldn’t love anything more after that. Quit while it was perfect.
          </p>
        </section>

        {/* Experiments */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold font-mono text-brand-orange">🧪 New Experiments</h2>
          <div className="border-t border-dashed border-gray-400 my-2 w-11/12" />
          <p className="text-base leading-relaxed w-11/12">
            Next up: learning Guitar (don’t laugh), maybe 3D printing, and definitely more touring with biker gangs.
          </p>
        </section>

        <p className="text-sm italic text-gray-500 mt-12">
          More stories soon... Stay tuned.
        </p>

        <Footer />
      </div>
    </section>
  );
}