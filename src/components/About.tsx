import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      // Add animation classes directly without modifying opacity
      if (titleRef.current) titleRef.current.classList.add("animate-slideDown");
      
      setTimeout(() => {
        if (textRef.current) textRef.current.classList.add("animate-fadeIn");
      }, 300);
      
      setTimeout(() => {
        if (ctaRef.current) ctaRef.current.classList.add("animate-fadeIn");
      }, 600);
    }
  }, [inView]);

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="section-padding relative bg-white"
    >
      {/* Background wave pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-canucci-salmon/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-canucci-peach/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={titleRef}
            className="opacity-100 text-3xl md:text-4xl text-center mb-12 text-balance text-canucci-dark"
          >
            Vi finns för att stora organisationer behöver tänka som små.
          </h2>
          
          <div 
            ref={textRef}
            className="opacity-100"
          >
            <div className="glass-card p-8 md:p-12 mb-12">
              <p className="text-lg font-light mb-6 text-canucci-dark">
                Canucci grundades med en enkel idé:
                <br />
                <span className="text-xl font-normal">Organisationer som lyssnar – och agerar – vinner.</span>
              </p>
              
              <p className="text-lg font-light mb-6 text-canucci-dark">
                Vi gör det möjligt att leda en global organisation som om den vore ett litet team. 
                Med lyhördhet, klarhet och rörelse framåt.
              </p>
              
              <p className="text-lg font-light mb-6 text-canucci-dark">
                Vår teknik är byggd in-house. Vår metod är testad i några av Nordens största bolag. 
                Vi levererar alltid: Ägarskap, förändring, resultat.
              </p>
            </div>
          </div>
          
          <div 
            ref={ctaRef}
            className="opacity-100 flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          >
            <Link
              to="/#team"
              className="px-8 py-3 bg-canucci-dark hover:bg-canucci-red text-white rounded-full transition-all-300 text-center"
            >
              Träffa teamet
            </Link>
            <Link
              to="/#contact"
              className="px-8 py-3 border border-canucci-dark text-canucci-dark hover:bg-canucci-dark hover:text-white rounded-full transition-all-300 text-center"
              id="contact"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
