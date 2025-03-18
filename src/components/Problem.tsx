
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Problem = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { t } = useLanguage();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Start with everything visible
    if (titleRef.current) {
      titleRef.current.style.opacity = "1";
    }
    if (textRef.current) {
      textRef.current.style.opacity = "1";
    }
    if (listRef.current) {
      listRef.current.querySelectorAll('li').forEach(li => {
        li.style.opacity = "1";
      });
    }
  }, []);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (titleRef.current) titleRef.current.classList.add("animate-slideDown");
        
        setTimeout(() => {
          if (textRef.current) textRef.current.classList.add("animate-fadeIn");
        }, 200);
        
        setTimeout(() => {
          if (listRef.current) listRef.current.classList.add("staggered-animation");
        }, 400);
      }, 100);
    }
  }, [inView]);

  return (
    <section 
      id="challenge" 
      ref={sectionRef} 
      className="section-padding relative bg-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-canucci-green/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl text-center mb-12 text-balance"
          >
            {t('problem.title')}
          </h2>
          
          <p 
            ref={textRef}
            className="text-lg font-light mb-12 text-balance"
          >
            {t('problem.subtitle')}
          </p>
          
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg font-light mb-8">
              {t('problem.intro')}
            </p>
            
            <ul ref={listRef} className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-lg font-light">{t('problem.issue1')}</p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-lg font-light">{t('problem.issue2')}</p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-lg font-light">{t('problem.issue3')}</p>
              </li>
              
              <li className="flex items-start">
                <div className="w-8 h-8 mr-4"></div>
                <p className="text-lg font-normal text-canucci-dark">
                  {t('problem.conclusion')}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
