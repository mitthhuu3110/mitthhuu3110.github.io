import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';
import CatchUp from '@/components/catchup';

export default function Home() {
  return (
    <div className="mx-auto space-y-24 px-6 py-8">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <CatchUp />
      <Footer />
    </div>
  );
}