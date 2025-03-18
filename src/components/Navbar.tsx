import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              src="/lovable-uploads/ad53f089-5215-446d-9d3f-94f43dc48965.png" 
              alt="Canucci" 
              className="h-8 md:h-10" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a 
              href="#challenge" 
              className="text-sm font-normal text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={() => {
                document.getElementById('challenge')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Utmaningen
            </a>
            <a 
              href="#solution" 
              className="text-sm font-normal text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={() => {
                document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Lösningen
            </a>
            <a 
              href="#results" 
              className="text-sm font-normal text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={() => {
                document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Resultat
            </a>
            <a 
              href="#about" 
              className="text-sm font-normal text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Om oss
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-canucci-dark text-white hover:bg-canucci-red transition-all-300 text-sm"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Kontakta oss
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-canucci-dark focus:outline-none"
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
              src="/lovable-uploads/ad53f089-5215-446d-9d3f-94f43dc48965.png" 
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
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById('challenge')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Utmaningen
            </a>
            <a
              href="#solution"
              className="text-xl font-light text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Lösningen
            </a>
            <a
              href="#results"
              className="text-xl font-light text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Resultat
            </a>
            <a
              href="#about"
              className="text-xl font-light text-canucci-dark hover:text-canucci-red transition-all-300"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Om oss
            </a>
            <a
              href="#contact"
              className="mt-4 px-6 py-2 w-full text-center rounded-full bg-canucci-dark text-white hover:bg-canucci-red transition-all-300 text-xl"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
