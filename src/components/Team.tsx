import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

// Team member data
const teamMembers = [
  {name: "Ellen", image: "/lovable-uploads/0ead8737-88fb-45b5-a4ae-0c9e5a59e631.png" },
  { name: "Victor", image: "/lovable-uploads/2081093a-4927-4e9a-9252-7b28fa1fd344.png" },
  { name: "Kye", image: "/lovable-uploads/a19275f8-e3e3-40f4-b0cf-bffa69626ee6.png" },
  { name: "Oscar", image: "/lovable-uploads/c2b1b111-9435-4485-9c87-ee15f502f753.png" },
  { name: "Stephan", image: "/lovable-uploads/525d9606-48a8-45ab-8d10-93e0ecf71f35.png" },
  { name: "Alice", image: "/lovable-uploads/3199ad2d-e11c-4cb8-b1d5-d8f9020a85f0.png" },
  { name: "Olivia", image: "/lovable-uploads/cb138d87-62c0-4507-8143-4ff5270ebb31.png" },
  { name: "Camilla", image: "/lovable-uploads/d8bd5227-5ba9-4635-b6c1-3628ccd93c05.png" },
  { name: "Peder", image: "/lovable-uploads/8204bfcf-dbf1-4814-8874-d67846dab169.png" },
  { name: "Magdalena", image: "/lovable-uploads/9f880c76-b64d-4a9f-b622-3833571fe410.png" },
  { name: "Daniel", image: "/lovable-uploads/588ac510-60be-4b70-8912-f16709ff14f4.png" },
];

const Team = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    rootMargin: '50px'
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (inView) {
      // Use a single animation sequence with proper timing
      const sequence = [
        { element: titleRef.current, animation: "animate-slideDown" },
        { element: teamRef.current, animation: "animate-fadeIn", delay: 300 },
        { element: textRef.current, animation: "animate-fadeIn", delay: 600 }
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
      id="team"
      ref={sectionRef}
      className="section-padding relative bg-white"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2
            ref={titleRef}
            className="opacity-0 text-3xl md:text-4xl text-center mb-16 text-balance text-canucci-dark"
          >
            {t('team.title')}
          </h2>

          <div
            ref={teamRef}
            className="opacity-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16"
          >
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="mb-3 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h3 className="text-lg font-medium text-canucci-dark">{member.name}</h3>
              </div>
            ))}
          </div>

          <p
            ref={textRef}
            className="opacity-0 text-center text-lg font-light text-canucci-dark"
          >
            {t('team.contact')}{" "}
            <a href="mailto:info@canucci.com" className="text-canucci-red hover:underline">
              info@canucci.com
            </a>{" "}
            {t('team.contact.end')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
