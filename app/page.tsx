import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative z-10 w-full">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
