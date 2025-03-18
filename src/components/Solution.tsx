
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Solution = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start with everything visible
    if (titleRef.current) {
      titleRef.current.style.opacity = "1";
    }
    if (textRef.current) {
      textRef.current.style.opacity = "1";
    }
    if (stepsRef.current) {
      stepsRef.current.querySelectorAll('div.opacity-0').forEach(div => {
        div.classList.remove('opacity-0');
      });
    }
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "1";
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
          if (stepsRef.current) stepsRef.current.classList.add("staggered-animation");
        }, 400);
        
        setTimeout(() => {
          if (ctaRef.current) ctaRef.current.classList.add("animate-fadeIn");
        }, 800);
      }, 100);
    }
  }, [inView]);

  return (
    <section 
      id="solution" 
      ref={sectionRef} 
      className="section-padding relative bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-canucci-salmon/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-canucci-peach/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl text-center mb-8 text-balance"
          >
            Collective Discovery™ – gör det enkelt att få med hela organisationen.
          </h2>
          
          <p 
            ref={textRef}
            className="text-lg font-light text-center mb-16 text-balance"
          >
            Vi ställer EN fråga till alla – och lyssnar utan filter. 
            Vår egen AI identifierar mönster, prioriteringar och hinder. 
            Resultatet? Klarhet, riktning och ägarskap.
          </p>
          
          <div className="glass-card p-8 md:p-12 mb-16">
            <p className="text-lg font-light mb-8">
              Så går det till:
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
                  <h3 className="text-xl font-bold mb-2">Alla bidrar – med sina egna ord.</h3>
                  <p className="text-lg font-light">Enkel digital enkät där varje medarbetare kan utrycka sin mening.</p>
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
                  <h3 className="text-xl font-bold mb-2">AI analyserar och visar vad som är viktigast.</h3>
                  <p className="text-lg font-light">Vår specialutvecklade AI identifierar mönster och prioriteringar.</p>
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
                  <h3 className="text-xl font-bold mb-2">Vi definierar tillsammans hur vi tar oss framåt.</h3>
                  <p className="text-lg font-light">Workshop där ledningsgruppen skapar handlingsplan baserad på insikterna.</p>
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
                  <h3 className="text-xl font-bold mb-2">Varje individ väljer sitt ansvar.</h3>
                  <p className="text-lg font-light">Alla kan bidra efter sina förutsättningar, vilket skapar ägarskap.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-10 h-10 rounded-full bg-canucci-dark flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Vi följer upp. Vi firar framsteg. Dialogen fortsätter.</h3>
                  <p className="text-lg font-light">Kontinuerlig kommunikation för att hålla engagemanget levande.</p>
                </div>
              </div>
            </div>
            
            <p className="mt-10 text-lg italic">
             
            </p>
          </div>
          
          <div ref={ctaRef} className="text-center">
            <a 
              href="#solution"
              className="px-8 py-3 bg-canucci-dark hover:bg-canucci-red text-white rounded-full transition-all-300 inline-block"
              onClick={(e) => {
                e.preventDefault();
                // Try to find the solution section in the navbar and click it
                const navbarSolutionLink = document.querySelector('nav a[href="#solution"]');
                if (navbarSolutionLink) {
                  (navbarSolutionLink as HTMLElement).click();
                } else {
                  // Fallback: just scroll to solution section
                  document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Läs mer om Collective Discovery™
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
