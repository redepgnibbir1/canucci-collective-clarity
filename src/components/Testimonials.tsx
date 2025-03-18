
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const testimonials = [
    {
      quote: t('testimonials.quote1'),
      author: t('testimonials.author1')
    },
    {
      quote: t('testimonials.quote2'),
      author: t('testimonials.author2')
    },
    {
      quote: t('testimonials.quote3'),
      author: t('testimonials.author3')
    }
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.opacity = "1";
          titleRef.current.classList.add("animate-slideDown");
        }
        
        setTimeout(() => {
          if (testimonialRef.current) {
            testimonialRef.current.style.opacity = "1";
            testimonialRef.current.classList.add("animate-fadeIn");
          }
        }, 300);
        
        setTimeout(() => {
          if (ctaRef.current) {
            ctaRef.current.style.opacity = "1";
            ctaRef.current.classList.add("animate-fadeIn");
          }
        }, 600);
      }, 100);
    }
  }, [inView]);

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="results" 
      ref={sectionRef}
      className="section-padding relative bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-80 h-80 bg-canucci-green/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl mb-16 opacity-0 text-balance transition-opacity duration-500"
          >
            {t('testimonials.title')}
          </h2>
          
          <div 
            ref={testimonialRef}
            className="glass-card p-8 md:p-16 mb-12 opacity-0 transition-opacity duration-500"
          >
            <div className="relative h-48">
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                    idx === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <blockquote className="mb-6">
                    <p className="text-xl md:text-2xl font-light mb-6">"{testimonial.quote}"</p>
                    <footer className="text-lg">
                      <cite className="not-italic font-normal">– {testimonial.author}</cite>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeIndex ? "bg-canucci-red" : "bg-gray-300"
                  }`}
                  aria-label={`Visa citat ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          <div ref={ctaRef} className="opacity-0 transition-opacity duration-500">
            <a 
              href="#footer" 
              className="px-8 py-3 bg-canucci-dark hover:bg-canucci-red text-white rounded-full transition-all-300 inline-block"
              onClick={scrollToFooter}
            >
              {t('testimonials.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
