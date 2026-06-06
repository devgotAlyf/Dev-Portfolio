
import { ExternalLink, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="relative min-h-screen py-20">
      {/* Dark overlay to separate from background video */}
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto">

          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold">
                A Little About Me
              </h2>
            </div>

            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="bg-black/80 border-2 border-white/20 shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-2">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Content */}
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-white/90 font-medium">
                    I am an Electronics undergraduate with hands-on expertise in software development.
                    I'm seeking to apply my robust problem-solving abilities and a genuine passion for
                    building elegant software solutions in an entry-level engineering position.
                  </p>

                  <p className="text-lg leading-relaxed text-white/90 font-medium">
                    I thrive in collaborative environments and I'm always eager to learn and adapt
                    to new technologies. My goal is to create meaningful digital experiences that
                    make a real impact.
                  </p>

                  {/* Resume View Button */}
                  <div className="pt-6">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="gradient-secondary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow"
                        size="lg"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Resume
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className="relative w-full h-80 rounded-2xl bg-black border-2 border-white/30 overflow-hidden">

                    {/* Resume Preview */}
                    <div className="absolute inset-0 z-0 opacity-100">
                      <img
                        src="/resume-preview.png"
                        alt="Resume Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default About;
