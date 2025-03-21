
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    rootMargin: '50px'
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
    },
    {
      quote: t('testimonials.quote4'),
      author: t('testimonials.author4')
    },
    {
      quote: t('testimonials.quote5'),
      author: t('testimonials.author5')
    }
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      // Use a single animation sequence with proper timing
      const sequence = [
        { element: titleRef.current, animation: "animate-slideDown" },
        { element: testimonialRef.current, animation: "animate-fadeIn", delay: 300 }
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

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
            className="opacity-0 text-3xl md:text-4xl mb-16 text-balance"
          >
            {t('testimonials.title')}
          </h2>
          
          <div 
            ref={testimonialRef}
            className="opacity-0 glass-card p-8 md:p-16 mb-12"
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
