
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Problem = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (inView) {
      if (titleRef.current) titleRef.current.classList.add("animate-slideDown");
      
      setTimeout(() => {
        if (textRef.current) textRef.current.classList.add("animate-fadeIn");
      }, 200);
      
      setTimeout(() => {
        if (listRef.current) listRef.current.classList.add("staggered-animation");
      }, 400);
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
            className="text-3xl md:text-4xl text-center mb-12 opacity-0 text-balance"
          >
            Det är inte strategin som saknas. Det är samsyn.
          </h2>
          
          <p 
            ref={textRef}
            className="text-lg font-light mb-12 opacity-0 text-balance"
          >
            Stora organisationer drunknar i information, silos och motstridiga perspektiv. 
            Resultatet? Strategier som låter bra – men aldrig riktigt lyfter.
          </p>
          
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg font-light mb-8">
              Vi löser det som alla känner igen:
            </p>
            
            <ul ref={listRef} className="space-y-6">
              <li className="flex items-start opacity-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-lg font-light">Beslut går långsamt.</p>
              </li>
              
              <li className="flex items-start opacity-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-lg font-light">Ingen vågar agera.</p>
              </li>
              
              <li className="flex items-start opacity-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-canucci-red flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-lg font-light">Få vet hur de ska bidra.</p>
              </li>
              
              <li className="flex items-start opacity-0">
                <div className="w-8 h-8 mr-4"></div>
                <p className="text-lg font-normal text-canucci-dark">
                  Vi hjälper er få med alla – så att ni får kraften att förändra på riktigt.
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
