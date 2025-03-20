
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Solution = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { t } = useLanguage();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Initialize elements with opacity: 0 to prevent flickering
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
    }
    if (textRef.current) {
      textRef.current.style.opacity = "0";
    }
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
    }
    // Note: stepsRef children are already set to opacity: 0 via CSS
  }, []);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.opacity = "1";
          titleRef.current.classList.add("animate-slideDown");
        }
        
        setTimeout(() => {
          if (textRef.current) {
            textRef.current.style.opacity = "1";
            textRef.current.classList.add("animate-fadeIn");
          }
        }, 200);
        
        setTimeout(() => {
          if (stepsRef.current) stepsRef.current.classList.add("animate");
        }, 400);
        
        setTimeout(() => {
          if (ctaRef.current) {
            ctaRef.current.style.opacity = "1";
            ctaRef.current.classList.add("animate-fadeIn");
          }
        }, 800);
      }, 100);
    }
  }, [inView]);

  return (
    <section 
      id="solution" 
      ref={sectionRef} 
      className="section-padding relative bg-gradient-to-b from-canucci-peach/5 to-white"
      aria-labelledby="solution-title"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-canucci-salmon/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-canucci-peach/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 
            id="solution-title"
            ref={titleRef}
            className="text-3xl md:text-4xl text-center mb-8 text-balance"
          >
            {t('solution.title')}
          </h2>
          
          <p 
            ref={textRef}
            className="text-lg font-light text-center mb-16 text-balance"
          >
            {t('solution.subtitle')}
          </p>
          
          <div className="glass-card p-8 md:p-12 mb-16">
            <p className="text-lg font-light mb-8">
              {t('solution.process')}
            </p>
            
            <div ref={stepsRef} className="space-y-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-10 h-10 rounded-full bg-canucci-dark flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="w-px h-full bg-gray-200 mx-auto mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('solution.step1.title')}</h3>
                  <p className="text-lg font-light">{t('solution.step1.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-10 h-10 rounded-full bg-canucci-dark flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="w-px h-full bg-gray-200 mx-auto mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('solution.step2.title')}</h3>
                  <p className="text-lg font-light">{t('solution.step2.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-10 h-10 rounded-full bg-canucci-dark flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="w-px h-full bg-gray-200 mx-auto mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('solution.step3.title')}</h3>
                  <p className="text-lg font-light">{t('solution.step3.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-10 h-10 rounded-full bg-canucci-dark flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="w-px h-full bg-gray-200 mx-auto mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('solution.step4.title')}</h3>
                  <p className="text-lg font-light">{t('solution.step4.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-10 h-10 rounded-full bg-canucci-dark flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('solution.step5.title')}</h3>
                  <p className="text-lg font-light">{t('solution.step5.description')}</p>
                </div>
              </div>
            </div>
            
            {/* Either remove this or add content */}
            <p className="mt-10 text-lg italic">
              {t('solution.conclusion')}
            </p>
          </div>
          
          <div ref={ctaRef} className="text-center">
            <a 
              href="#contact"
              className="px-8 py-3 bg-canucci-dark hover:bg-canucci-red text-white rounded-full transition-all-300 inline-block"
              onClick={(e) => {
                e.preventDefault();
                // Navigate to contact section instead
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('solution.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
