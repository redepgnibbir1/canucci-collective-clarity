
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes without modifying opacity
    if (titleRef.current) {
      titleRef.current.classList.add("animate-slideDown");
    }
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add("animate-slideUp");
      }
    }, 300);
    
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add("animate-fadeIn");
      }
    }, 600);
  }, []);

  const scrollToNext = () => {
    const clientLogosSection = document.querySelector('section + section');
    clientLogosSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 section-padding bg-gradient-to-b from-white to-gray-50">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-canucci-peach/20 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-canucci-green/20 rounded-full filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="opacity-100 text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-tight lg:leading-tight mb-6 text-balance"
          >
            {t('hero.title').split('–')[0]}–
            <span className="text-canucci-red"> {t('hero.title').split('–')[1]}</span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="opacity-100 text-lg md:text-xl font-light mb-12 max-w-3xl text-balance"
          >
            {t('hero.subtitle')}
          </p>
          
          <div
            ref={ctaRef}
            className="opacity-100 flex flex-col sm:flex-row items-center gap-4 md:gap-6"
          >
            <a
              href="#solution"
              className="px-8 py-3 bg-canucci-dark hover:bg-canucci-red text-white rounded-full transition-all-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.cta.show')}
            </a>
            <a
              href="#solution"
              className="px-8 py-3 border border-canucci-dark text-canucci-dark hover:bg-canucci-dark hover:text-white rounded-full transition-all-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.cta.works')}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative arrows pointing down */}
      <div 
        className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce cursor-pointer"
        onClick={scrollToNext}
        aria-label={t('accessibility.scrollToNext')}
      >
        <ChevronDown className="w-8 h-8 text-canucci-dark" />
      </div>
    </section>
  );
};

export default Hero;
