
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    rootMargin: '50px'
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate position as percentage of viewport (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      // Add smooth transition
      setMousePosition(prev => ({
        x: prev.x + (x - prev.x) * 0.1,
        y: prev.y + (y - prev.y) * 0.1
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const scrollToNext = () => {
    const clientLogosSection = document.querySelector('section + section');
    clientLogosSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate transform values based on mouse position
  const getTransform = (x: number, y: number, intensity: number = 1) => {
    return `translate(${x * 30 * intensity}px, ${y * 30 * intensity}px)`;
  };

  // Format the title to highlight "genom dialog" in a different color
  const formatTitle = (title: string) => {
    // Check if the title contains "genom dialog"
    if (title.includes("genom dialog")) {
      const parts = title.split("genom dialog");
      return (
        <>
          {parts[0]}
          <span className="text-[#EA4960]">genom dialog</span>
          {parts[1]}
        </>
      );
    }
    
    // For more specific handling with punctuation
    if (title.includes("genom dialog.")) {
      const parts = title.split("genom dialog.");
      return (
        <>
          {parts[0]}
          <span className="text-[#EA4960]">genom dialog.</span>
          {parts[1] || ""}
        </>
      );
    }
    
    return title;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-canucci-green/10 via-canucci-peach/10 to-canucci-salmon/10 animate-gradient-mesh"
          style={{ 
            transform: getTransform(mousePosition.x, mousePosition.y, 0.5),
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Floating Blobs with cursor interaction */}
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-canucci-green/20 rounded-full filter blur-3xl animate-float-slow"
          style={{ 
            transform: getTransform(mousePosition.x, mousePosition.y, 0.8),
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-canucci-peach/20 rounded-full filter blur-3xl animate-float-medium"
          style={{ 
            transform: getTransform(mousePosition.x, mousePosition.y, 0.6),
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-canucci-salmon/20 rounded-full filter blur-3xl animate-float-fast"
          style={{ 
            transform: getTransform(mousePosition.x, mousePosition.y, 0.7),
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-5 animate-grid-flow"
          style={{ 
            transform: getTransform(mousePosition.x, mousePosition.y, 0.3),
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Animated Wave Pattern */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-wave-pattern opacity-10 animate-wave"
          style={{ 
            transform: getTransform(mousePosition.x, mousePosition.y, 0.4),
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="opacity-0 text-4xl md:text-6xl font-black mb-8 text-balance cursor-default"
          >
            {formatTitle(t('hero.title'))}
          </h1>
          
          <p 
            ref={textRef}
            className="opacity-0 text-xl md:text-2xl font-light mb-12 text-balance cursor-default"
          >
            {t('hero.subtitle')}
          </p>
          
          <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a 
              href="#solution"
              className="px-8 py-3 bg-canucci-dark hover:bg-canucci-red text-white rounded-full transition-all-300 inline-block transform hover:scale-105 hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.cta.show')}
            </a>
            <a
              href="#solution"
              className="px-8 py-3 border border-canucci-dark text-canucci-dark hover:bg-canucci-dark hover:text-white rounded-full transition-all-300 inline-block transform hover:scale-105 hover:shadow-lg"
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
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-canucci-dark" />
      </div>
    </section>
  );
};

export default Hero;
