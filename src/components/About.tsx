import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    rootMargin: '50px'
  });
  const { t } = useLanguage();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      // Use a single animation sequence with proper timing
      const sequence = [
        { element: titleRef.current, animation: "animate-slideDown" },
        { element: textRef.current, animation: "animate-fadeIn", delay: 300 },
        { element: ctaRef.current, animation: "animate-fadeIn", delay: 600 }
      ];

      sequence.forEach(({ element, animation, delay = 0 }) => {
        if (element) {
          setTimeout(() => {
            element.classList.remove('opacity-0');
            element.classList.add(animation);
          }, delay);
        }
      });
    }
  }, [inView]);

  const scrollToTeam = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="section-padding relative bg-white"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={titleRef}
            className="opacity-0 text-3xl md:text-4xl text-center mb-12 text-balance text-canucci-dark"
          >
            {t('about.title')}
          </h2>
          
          <div 
            ref={textRef}
            className="opacity-0"
          >
            <div className="glass-card p-8 md:p-12 mb-12">
              <p className="text-lg font-light mb-6 text-canucci-dark">
                {t('about.subtitle')}
                <br />
                <span className="text-xl font-normal">{t('about.idea')}</span>
              </p>
              
              <p className="text-lg font-light mb-6 text-canucci-dark">
                {t('about.paragraph1')}
              </p>
              
              <p className="text-lg font-light mb-6 text-canucci-dark">
                {t('about.paragraph2')} 
                
                {t('about.paragraph3')}
              </p>
            </div>
          </div>
          
          <div 
            ref={ctaRef}
            className="opacity-0 flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          >
            <a
              href="#team"
              className="px-8 py-3 bg-canucci-dark hover:bg-canucci-red text-white rounded-full transition-all-300 text-center"
              onClick={scrollToTeam}
            >
              {t('about.cta.team')}
            </a>
            <a
              href="#footer"
              className="px-8 py-3 border border-canucci-dark text-canucci-dark hover:bg-canucci-dark hover:text-white rounded-full transition-all-300 text-center"
              onClick={scrollToFooter}
            >
              {t('about.cta.contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
