
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";

const Problem = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    rootMargin: '50px'
  });
  const { t } = useLanguage();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (inView) {
      // Use a single animation sequence with proper timing
      const sequence = [
        { element: titleRef.current, animation: "animate-slideDown" },
        { element: textRef.current, animation: "animate-fadeIn", delay: 200 },
        { element: listRef.current, animation: "staggered-animation", delay: 400 }
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
          {!inView ? (
            <Skeleton className="h-12 w-3/4 mx-auto mb-12" />
          ) : (
            <h2 
              ref={titleRef}
              className="opacity-0 text-3xl md:text-4xl text-center mb-12 text-balance"
            >
              {t('problem.title')}
            </h2>
          )}
          
          {!inView ? (
            <Skeleton className="h-6 w-2/3 mx-auto mb-12" />
          ) : (
            <p 
              ref={textRef}
              className="opacity-0 text-lg font-light mb-12 text-balance text-center"
            >
              {t('problem.subtitle')}
            </p>
          )}
          
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg font-light mb-8">
              {t('problem.intro')}
            </p>
            
            <ul ref={listRef} className="opacity-0 space-y-6">
              <li className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-lg font-light">{t('problem.issue1')}</p>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-lg font-light">{t('problem.issue2')}</p>
              </li>
              
              <li className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-lg font-light">{t('problem.issue3')}</p>
              </li>
              
              <li className="flex items-center">
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
