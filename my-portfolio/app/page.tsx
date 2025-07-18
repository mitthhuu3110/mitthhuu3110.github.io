import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import CatchUp from '@/components/catchup';
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
      <CatchUp />
      <Footer />
    </div>
  );
}