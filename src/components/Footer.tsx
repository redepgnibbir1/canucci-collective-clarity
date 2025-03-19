import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6" aria-label="Canucci">
              <img 
                src="/lovable-uploads/82acb93d-c744-47e0-97f5-5b8b492e7ccf.png" 
                alt="Canucci" 
                className="h-4" 
              />
            </Link>
            <p className="text-sm font-light">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#challenge" 
                  className="text-sm font-light hover:text-canucci-red transition-all-300"
                  onClick={(e) => scrollToSection('challenge', e)}
                >
                  {t('navbar.challenge')}
                </a>
              </li>
              <li>
                <a 
                  href="#solution" 
                  className="text-sm font-light hover:text-canucci-red transition-all-300"
                  onClick={(e) => scrollToSection('solution', e)}
                >
                  {t('navbar.solution')}
                </a>
              </li>
              <li>
                <a 
                  href="#results" 
                  className="text-sm font-light hover:text-canucci-red transition-all-300"
                  onClick={(e) => scrollToSection('results', e)}
                >
                  {t('navbar.results')}
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-sm font-light hover:text-canucci-red transition-all-300"
                  onClick={(e) => scrollToSection('about', e)}
                >
                  {t('navbar.about')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">{t('footer.contact')}</h3>
            <address className="not-italic text-sm font-light">
              <p>Email: <a href="mailto:info@canucci.se" className="hover:text-canucci-red transition-all-300">info@canucci.se</a></p>
              <p className="mt-4">Stockholm, Sverige</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-light mb-4 md:mb-0">
            &copy; {currentYear} Canucci. {t('footer.rights')}
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-canucci-red transition-all-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-canucci-red transition-all-300"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
