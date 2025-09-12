import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background/95 border-t border-border backdrop-blur-sm relative z-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center space-y-8">
            {/* Logo/Name */}
            <div>
              <h3 className="text-2xl font-bold text-opacity-90 mb-2">
                Dev Pratap Srivastava
              </h3>
              <p className="text-muted-foreground">
                Building the future, one line of code at a time
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/dev-pratap-srivastava-991811294"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-purple/30 hover:border-purple hover:bg-purple/10 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-purple group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </a>

              <a
                href="https://github.com/devgotAlyf"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title="View Code"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-cyan/30 hover:border-cyan hover:bg-cyan/10 transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-cyan group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </a>

              <a
                href="mailto:srivastavadev626@gmail.com"
                className="group"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-pink/30 hover:border-pink hover:bg-pink/10 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-pink group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </a>
            </div>
            
            {/* Project Links */}
            <div className="flex justify-center items-center space-x-4">
              <a
                href="https://careerbuilderz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
              >
                Visit CareerBuilderz
              </a>
            </div>

            {/* Copyright */}
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground flex items-center justify-center">
                <span>© {currentYear} Designed & Built by Dev Pratap Srivastava</span>
                <Heart className="w-4 h-4 text-pink mx-2 animate-pulse" />
                <span>with passion</span>
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="relative mt-8 overflow-hidden">
            <div className="absolute -top-4 left-1/4 w-16 h-16 rounded-full bg-purple/5 animate-float"></div>
            <div className="absolute -top-4 right-1/4 w-12 h-12 rounded-full bg-cyan/5 animate-float-delayed"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;