
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Vi såg en helt ny nivå av enighet bland våra ledare. Alla visste vad vi skulle göra – och hur.",
    author: "VD, global industrikoncern"
  },
  {
    quote: "Vi har äntligen ett sätt att lyssna på hela organisationen – och snabbt gå från insikt till handling.",
    author: "Rickard Gustafson, VD SKF"
  },
  {
    quote: "Med Canucci fick våra 52 000 medlemmar en röst. Det har förändrat hur vi leder.",
    author: "Lotta Lyrå, VD Södra"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      if (titleRef.current) titleRef.current.classList.add("animate-slideDown");
      
      setTimeout(() => {
        if (testimonialRef.current) testimonialRef.current.classList.add("animate-fadeIn");
      }, 300);
      
      setTimeout(() => {
        if (ctaRef.current) ctaRef.current.classList.add("animate-fadeIn");
      }, 600);
    }
  }, [inView]);

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

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
            className="text-3xl md:text-4xl mb-16 opacity-0 text-balance"
          >
            Det här händer – när alla är med.
          </h2>
          
          <div 
            ref={testimonialRef}
            className="glass-card p-8 md:p-16 mb-12 opacity-0"
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
          
          <div ref={ctaRef} className="opacity-0">
            <Link 
              to="/#contact" 
              className="px-8 py-3 bg-canucci-dark hover:bg-canucci-red text-white rounded-full transition-all-300 inline-block"
            >
              Se fler resultat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
