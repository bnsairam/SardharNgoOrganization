import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="SVP Academy Logo" className="h-12 w-12 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary leading-tight">
                Sardar Vallabhbhai Patel
              </h1>
              <p className="text-sm text-secondary font-semibold">Academy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("programs")} className="text-foreground hover:text-primary transition-colors font-medium">
              Programs
            </button>
            <button onClick={() => scrollToSection("achievements")} className="text-foreground hover:text-primary transition-colors font-medium">
              Achievements
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </button>
            <Button size="lg" onClick={() => scrollToSection("contact")}>
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background shadow-lg border-t animate-slide-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button onClick={() => scrollToSection("about")} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection("programs")} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Programs
              </button>
              <button onClick={() => scrollToSection("achievements")} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Achievements
              </button>
              <button onClick={() => scrollToSection("gallery")} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Gallery
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </button>
              <Button size="lg" className="w-full" onClick={() => scrollToSection("contact")}>
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
