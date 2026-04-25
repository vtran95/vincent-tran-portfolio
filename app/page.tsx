import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex 
    justify-center flex-col items-center overflow-clip 
    mx-auto sm:px-10 px-5"
    >
      <div id="home" className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
