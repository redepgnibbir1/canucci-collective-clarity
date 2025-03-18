
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start with elements visible but not animated
    if (titleRef.current) {
      titleRef.current.style.opacity = "1";
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = "1";
    }
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "1";
    }
    
    // Then apply animations after a short delay
    setTimeout(() => {
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
    }, 100);
  }, []);

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
            className="text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-tight lg:leading-tight mb-6 text-balance"
          >
            Stora organisationer har allt – utom fart.
            <span className="text-canucci-red"> Det ändrar vi på.</span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl font-light mb-12 max-w-3xl text-balance"
          >
            Vi hjälper ledare få hela organisationen att förstå, vilja och agera – tillsammans. 
            Med AI och vår metod Collective Discovery™ går förändring från ord till handling. Snabbt.
          </p>
          
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
          >
            <Link
              to="/#contact"
              className="px-8 py-3 bg-canucci-dark hover:bg-canucci-red text-white rounded-full transition-all-300"
            >
              Låt oss visa hur
            </Link>
            <Link
              to="/#solution"
              className="px-8 py-3 border border-canucci-dark text-canucci-dark hover:bg-canucci-dark hover:text-white rounded-full transition-all-300"
            >
              Så funkar det
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative arrows pointing down */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <svg
          className="w-6 h-6 text-canucci-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
