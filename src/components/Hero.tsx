import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import DecryptedText from "@/components/DecryptedText";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-screen h-screen object-cover z-0"
        style={{ minHeight: '100vh', minWidth: '100vw', opacity: '0.9' }}
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Very light overlay for minimal text readability */}
      <div className="absolute inset-0 bg-black/10 z-1"></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto bg-card/30 backdrop-blur-md border-white/10 shadow-glow hover:shadow-glow-lg transition-all duration-500 rounded-[2rem] p-12">
          {/* Main heading */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-purple via-cyan to-pink bg-clip-text text-opacity-90">
              Dev Pratap Srivastava
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-white animate-fade-in delay-300">
              From Concept to Code: Building Seamless Digital Realities
            </h2>

            {/* Introduction */}
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
              I build clean, impactful, and user-friendly software solutions. 
              Passionate about turning complex problems into simple, beautiful code.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 animate-fade-in delay-700">
            <a
              href="https://www.linkedin.com/in/dev-pratap-srivastava-991811294"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-white/10 border-purple/40 hover:border-purple hover:bg-purple/20 transition-all duration-300 shadow-glow hover:shadow-glow-lg backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5 text-purple group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </a>

            <a
              href="https://github.com/devgotAlyf"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-white/10 border-cyan/40 hover:border-cyan hover:bg-cyan/20 transition-all duration-300 shadow-glow hover:shadow-glow-lg backdrop-blur-sm"
              >
                <Github className="w-5 h-5 text-cyan group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </a>

            <a
              href="mailto:srivastavadev626@gmail.com"
              className="group"
            >
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-white/10 border-pink/40 hover:border-pink hover:bg-pink/20 transition-all duration-300 shadow-glow hover:shadow-glow-lg backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 text-pink group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </a>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a href="#projects" className="inline-block animate-fade-in delay-1000">
              <Button 
                size="lg"
                className="gradient-primary text-white hover:opacity-95 hover:scale-105 transition-all duration-300 shadow-glow-sm hover:shadow-glow border-0"
              >
                <DecryptedText
                  text="View My Work"
                  animateOn="hover"
                  sequential
                  revealDirection="start"
                  className=""
                  encryptedClassName="opacity-70"
                />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 hover:border-primary/50 rounded-full flex justify-center transition-colors duration-300">
          <div className="w-1 h-3 bg-white/50 hover:bg-primary rounded-full mt-2 animate-pulse transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;