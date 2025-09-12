import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useCascadeEffect } from "@/hooks/useCascadeEffect";

const Index = () => {
  const { containerRef } = useCascadeEffect();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div ref={containerRef} className="cascade-container">
        <div id="hero" className="cascade-section">
          <Hero />
        </div>
        <div id="about" className="cascade-section">
          <About />
        </div>
        <div id="skills" className="cascade-section">
          <Skills />
        </div>
        <div id="projects" className="cascade-section">
          <Projects />
        </div>
        <div id="education" className="cascade-section">
          <Education />
        </div>
        <div id="contact" className="cascade-section">
          <Contact />
        </div>
        <div id="footer" className="cascade-section">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
