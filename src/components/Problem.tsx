
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";

const Problem = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { t } = useLanguage();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      
      // Ensure elements are visible even if animations don't work
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
      }
      if (textRef.current) {
        textRef.current.style.opacity = "1";
      }
      
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.classList.add("animate-slideDown");
          titleRef.current.classList.remove("opacity-0");
        }
        
        setTimeout(() => {
          if (textRef.current) {
            textRef.current.classList.add("animate-fadeIn");
            textRef.current.classList.remove("opacity-0");
          }
        }, 200);
        
        setTimeout(() => {
          if (listRef.current) {
            listRef.current.classList.add("staggered-animation");
            
            // Make all list items visible after animation
            const listItems = listRef.current.querySelectorAll("li");
            listItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove("opacity-0");
                item.classList.add("opacity-100");
              }, index * 150);
            });
          }
        }, 400);
      }, 100);
    }
  }, [inView, hasAnimated]);

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
              className="text-3xl md:text-4xl text-center mb-12 text-balance opacity-0 transition-all duration-700"
              style={{ opacity: hasAnimated ? 1 : 0 }}
            >
              {t('problem.title')}
            </h2>
          )}
          
          {!inView ? (
            <Skeleton className="h-6 w-2/3 mx-auto mb-12" />
          ) : (
            <p 
              ref={textRef}
              className="text-lg font-light mb-12 text-balance text-center opacity-0 transition-all duration-700"
              style={{ opacity: hasAnimated ? 1 : 0 }}
            >
              {t('problem.subtitle')}
            </p>
          )}
          
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg font-light mb-8">
              {t('problem.intro')}
            </p>
            
            <ul ref={listRef} className="space-y-6">
              <li className="flex opacity-0 transition-all duration-500" style={{ opacity: hasAnimated ? 1 : 0 }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="mt-1">
                  <p className="text-lg font-light">{t('problem.issue1')}</p>
                </div>
              </li>
              
              <li className="flex opacity-0 transition-all duration-500" style={{ opacity: hasAnimated ? 1 : 0 }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="mt-1">
                  <p className="text-lg font-light">{t('problem.issue2')}</p>
                </div>
              </li>
              
              <li className="flex opacity-0 transition-all duration-500" style={{ opacity: hasAnimated ? 1 : 0 }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="mt-1">
                  <p className="text-lg font-light">{t('problem.issue3')}</p>
                </div>
              </li>
              
              <li className="flex opacity-0 transition-all duration-500" style={{ opacity: hasAnimated ? 1 : 0 }}>
                <div className="w-8 h-8 mr-4"></div>
                <div className="mt-1">
                  <p className="text-lg font-normal text-canucci-dark">
                    {t('problem.conclusion')}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
