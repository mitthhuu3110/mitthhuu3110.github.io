import { ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Unplugged() {
  return (
    <div className="pl-6 pr-4 md:pl-24 md:pr-12 py-12 w-full text-[color:var(--base)]">
      <h1 className="text-3xl font-bold font-mono text-brand-orange mb-2">Unplugged 🔌</h1>
      <p className="text-lg leading-relaxed mb-8">
        This is where I take the hoodie off and just be... me.
      </p>

      {/* Typing */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold font-mono text-brand-orange">⌨️ Typing Speed</h2>
        <div className="border-t border-dashed border-gray-400 my-2 w-11/12" />
        <p className="text-base leading-relaxed">
          I can type at an average of 130 WPM, with a peak at 132 WPM.
          Feel free to test your speed too.. 
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
        <p className="text-base leading-relaxed">
          I'm a throttle-happy guy. The joy of riding through curves with wind hitting your chest... it’s freedom. I ride to Ooty, Yercaud — anywhere that screams escape.
        </p>
      </section>

      {/* Anime */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold font-mono text-brand-orange">🎥 Anime</h2>
        <div className="border-t border-dashed border-gray-400 my-2 w-11/12" />
        <p className="text-base leading-relaxed">
          I only watched Naruto & Death Note. That’s it. Couldn’t love anything more after that. Quit while it was perfect.
        </p>
      </section>

      {/* Writing */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold font-mono text-brand-orange">✍️ Writing</h2>
        <div className="border-t border-dashed border-gray-400 my-2 w-11/12" />
        <p className="text-base leading-relaxed">
          I believe writing is engineering with imagination. If I wasn’t a backend guy, I’d be writing books. Maybe I still will.
        </p>
      </section>

      {/* Experiments */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold font-mono text-brand-orange">🧪 New Experiments</h2>
        <div className="border-t border-dashed border-gray-400 my-2 w-11/12" />
        <p className="text-base leading-relaxed">
          Next up: learning Guitar (don’t laugh), maybe 3D printing, and definitely more touring with biker gangs.
        </p>
      </section>

      <p className="text-sm italic text-gray-500 mt-12">
        More stories soon... Stay tuned.
      </p>

      <Footer />
    </div>
  );
}