
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Set isLoaded after a short delay to ensure smooth initial animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
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

  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 ${
        isMenuOpen 
          ? "bg-white shadow-sm" 
          : isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
      }`}
      style={{ transition: isMenuOpen ? 'none' : 'all 500ms' }}
    >
      <div className="container mx-auto px-6 md:px-8">
        <nav className="flex items-center justify-between py-4">
          <Link 
            to="/" 
            className="flex items-center group"
            onClick={scrollToTop}
            aria-label="Canucci"
          >
            <img 
              src="/lovable-uploads/82acb93d-c744-47e0-97f5-5b8b492e7ccf.png" 
              alt="Canucci" 
              className={`h-4 md:h-5 transition-transform duration-300 ${
                isScrolled ? "scale-110" : "scale-100"
              } group-hover:scale-110`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {['challenge', 'solution', 'results', 'about'].map((section, index) => (
              <a 
                key={section}
                href={`#${section}`} 
                className={`text-sm font-normal text-canucci-dark hover:text-canucci-red transition-all-300 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transitionDuration: '500ms'
                }}
                onClick={(e) => scrollToSection(section, e)}
              >
                {t(`navbar.${section}`)}
              </a>
            ))}
            
            <div 
              className={`flex items-center space-x-4 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                transitionDelay: '400ms',
                transitionDuration: '500ms'
              }}
            >
              <ToggleGroup 
                type="single" 
                value={language}
                onValueChange={(value) => {
                  if (value) setLanguage(value as 'sv' | 'en');
                }}
                className="border border-gray-200 rounded-full h-9 px-1 flex items-center transition-all duration-300 hover:border-canucci-red"
              >
                <ToggleGroupItem 
                  value="sv" 
                  aria-label="Svenska" 
                  className="px-2 rounded-full text-xs h-7 transition-all duration-300 hover:text-canucci-red"
                >
                  SV
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="en" 
                  aria-label="English" 
                  className="px-2 rounded-full text-xs h-7 transition-all duration-300 hover:text-canucci-red"
                >
                  EN
                </ToggleGroupItem>
              </ToggleGroup>
              
              <a
                href="#footer"
                className="px-6 py-2 h-9 flex items-center justify-center rounded-full bg-canucci-dark text-white hover:bg-canucci-red transition-all-300 text-sm transform hover:scale-105 hover:shadow-lg"
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
              className="border border-gray-200 rounded-full h-9 px-1 flex items-center transition-all duration-300 hover:border-canucci-red"
            >
              <ToggleGroupItem 
                value="sv" 
                aria-label="Svenska" 
                className="px-2 rounded-full text-xs h-7 transition-all duration-300 hover:text-canucci-red"
              >
                SV
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="en" 
                aria-label="English" 
                className="px-2 rounded-full text-xs h-7 transition-all duration-300 hover:text-canucci-red"
              >
                EN
              </ToggleGroupItem>
            </ToggleGroup>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-canucci-dark focus:outline-none transition-transform duration-300 hover:scale-110"
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
        className={`fixed inset-0 bg-white z-40 transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <div 
              className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
              onClick={(e) => {
                scrollToTop(e as React.MouseEvent<HTMLDivElement>);
              }}
            >
              <img 
                src="/lovable-uploads/82acb93d-c744-47e0-97f5-5b8b492e7ccf.png" 
                alt="Canucci" 
                className="h-4" 
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-canucci-dark focus:outline-none transition-transform duration-300 hover:scale-110"
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
            {['challenge', 'solution', 'results', 'about'].map((section, index) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-xl font-light text-canucci-dark hover:text-canucci-red transition-all-300 ${
                  isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transitionDuration: '500ms'
                }}
                onClick={(e) => scrollToSection(section, e)}
              >
                {t(`navbar.${section}`)}
              </a>
            ))}
            <a
              href="#footer"
              className={`mt-4 px-6 py-2 w-full text-center rounded-full bg-canucci-dark text-white hover:bg-canucci-red transition-all-300 text-xl transform hover:scale-105 hover:shadow-lg ${
                isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ 
                transitionDelay: '400ms',
                transitionDuration: '500ms'
              }}
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
