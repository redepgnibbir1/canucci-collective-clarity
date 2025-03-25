
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Solution = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    rootMargin: '50px'
  });
  const { t } = useLanguage();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const sequence = [
        { element: titleRef.current, animation: "animate-slideDown" },
        { element: textRef.current, animation: "animate-fadeIn", delay: 200 },
        { element: stepsRef.current, animation: "staggered-animation", delay: 400 },
        { element: imageRef.current, animation: "animate-fadeIn", delay: 800 }
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

  return (
    <section 
      id="solution" 
      ref={sectionRef} 
      className="section-padding relative bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-canucci-salmon/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-canucci-peach/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={titleRef}
            className="opacity-0 text-3xl md:text-4xl text-center mb-8 text-balance"
          >
            {t('solution.title')}
          </h2>
          
          <p 
            ref={textRef}
            className="opacity-0 text-lg font-light text-center mb-16 text-balance"
          >
            {t('solution.subtitle')}
          </p>
          
          <div className="glass-card p-8 md:p-12 mb-16">
            <p className="text-lg font-light mb-8">
              {t('solution.process')}
            </p>
            
            <div ref={stepsRef} className="opacity-0 space-y-10">
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
            
            <div ref={imageRef} className="opacity-0 mt-12">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/f50b6b6e-a6a9-4506-82d4-d670983cb26e.png" 
                  alt="Canucci text analysis dashboard showing themes, topics, and data visualizations" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-3 italic">
                {t('solution.image.caption')}
              </p>
            </div>
            
            <p className="mt-10 text-lg italic">
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
