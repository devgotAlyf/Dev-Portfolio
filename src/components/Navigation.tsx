import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-yellow-500/20">
      <div className="container mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/download.jpg"
              alt="Logo"
              className="w-6 h-7"
            />

            <span className="text-xl font-bold text-white">
              Dev-Folio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-yellow-400 transition-colors duration-300 relative group"
              >
                {item.name}

                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-400 hover:bg-yellow-400/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-yellow-500/20">
            <div className="px-6 py-4 space-y-4">

              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navigation;
