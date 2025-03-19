import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <nav className="flex items-center justify-between py-4">
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="Canucci"
          >
            <img 
              src="/lovable-uploads/82acb93d-c744-47e0-97f5-5b8b492e7ccf.png" 
              alt="Canucci" 
              className="h-8 md:h-10" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#challenge" 
              className="text-sm font-normal text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => scrollToSection('challenge', e)}
            >
              {t('navbar.challenge')}
            </a>
            <a 
              href="#solution" 
              className="text-sm font-normal text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => scrollToSection('solution', e)}
            >
              {t('navbar.solution')}
            </a>
            <a 
              href="#results" 
              className="text-sm font-normal text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => scrollToSection('results', e)}
            >
              {t('navbar.results')}
            </a>
            <a 
              href="#about" 
              className="text-sm font-normal text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => scrollToSection('about', e)}
            >
              {t('navbar.about')}
            </a>
            
            <div className="flex items-center space-x-4">
              <ToggleGroup 
                type="single" 
                value={language}
                onValueChange={(value) => {
                  if (value) setLanguage(value as 'sv' | 'en');
                }}
                className="border border-gray-200 rounded-full px-1 py-1"
              >
                <ToggleGroupItem value="sv" aria-label="Svenska" className="px-2 rounded-full text-xs">
                  SV
                </ToggleGroupItem>
                <ToggleGroupItem value="en" aria-label="English" className="px-2 rounded-full text-xs">
                  EN
                </ToggleGroupItem>
              </ToggleGroup>
              
              <a
                href="#footer"
                className="px-6 py-2 rounded-full bg-canucci-dark text-white hover:bg-canucci-red transition-all-300 text-sm"
                onClick={(e) => scrollToSection('footer', e)}
              >
                {t('navbar.contact')}
              </a>
            </div>
          </div>

          {/* Mobile menu button and language toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ToggleGroup 
              type="single" 
              value={language}
              onValueChange={(value) => {
                if (value) setLanguage(value as 'sv' | 'en');
              }}
              className="border border-gray-200 rounded-full px-1 py-1"
            >
              <ToggleGroupItem value="sv" aria-label="Svenska" className="px-2 rounded-full text-xs">
                SV
              </ToggleGroupItem>
              <ToggleGroupItem value="en" aria-label="English" className="px-2 rounded-full text-xs">
                EN
              </ToggleGroupItem>
            </ToggleGroup>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-canucci-dark focus:outline-none"
              aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <img 
              src="/lovable-uploads/82acb93d-c744-47e0-97f5-5b8b492e7ccf.png" 
              alt="Canucci" 
              className="h-8" 
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-canucci-dark focus:outline-none"
              aria-label="Stäng meny"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            <a
              href="#challenge"
              className="text-xl font-light text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => scrollToSection('challenge', e)}
            >
              {t('navbar.challenge')}
            </a>
            <a
              href="#solution"
              className="text-xl font-light text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => scrollToSection('solution', e)}
            >
              {t('navbar.solution')}
            </a>
            <a
              href="#results"
              className="text-xl font-light text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => scrollToSection('results', e)}
            >
              {t('navbar.results')}
            </a>
            <a
              href="#about"
              className="text-xl font-light text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => scrollToSection('about', e)}
            >
              {t('navbar.about')}
            </a>
            <a
              href="#footer"
              className="mt-4 px-6 py-2 w-full text-center rounded-full bg-canucci-dark text-white hover:bg-canucci-red transition-all-300 text-xl"
              onClick={(e) => scrollToSection('footer', e)}
            >
              {t('navbar.contact')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
