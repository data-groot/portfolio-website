import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import MotionProvider from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </MotionProvider>
  );
}
