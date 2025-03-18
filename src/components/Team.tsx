
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

// Team member data
const teamMembers = [
  { name: "Albin", image: "/lovable-uploads/2081093a-4927-4e9a-9252-7b28fa1fd344.png" },
  { name: "Alexander", image: "/lovable-uploads/a19275f8-e3e3-40f4-b0cf-bffa69626ee6.png" },
  { name: "Andreas", image: "/lovable-uploads/c2b1b111-9435-4485-9c87-ee15f502f753.png" },
  { name: "Daniel", image: "/lovable-uploads/525d9606-48a8-45ab-8d10-93e0ecf71f35.png" },
  { name: "Elsa", image: "/lovable-uploads/3199ad2d-e11c-4cb8-b1d5-d8f9020a85f0.png" },
  { name: "Emilia", image: "/lovable-uploads/cb138d87-62c0-4507-8143-4ff5270ebb31.png" },
  { name: "Johanna", image: "/lovable-uploads/d8bd5227-5ba9-4635-b6c1-3628ccd93c05.png" },
  { name: "Jonas", image: "/lovable-uploads/8204bfcf-dbf1-4814-8874-d67846dab169.png" },
  { name: "Karin", image: "/lovable-uploads/9f880c76-b64d-4a9f-b622-3833571fe410.png" },
  { name: "Magnus", image: "/lovable-uploads/588ac510-60be-4b70-8912-f16709ff14f4.png" },
  { name: "Maria", image: "/lovable-uploads/0ead8737-88fb-45b5-a4ae-0c9e5a59e631.png" },
];

const Team = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (inView) {
      if (titleRef.current) titleRef.current.classList.add("animate-slideDown");
      
      setTimeout(() => {
        if (teamRef.current) teamRef.current.classList.add("animate-fadeIn");
      }, 300);
      
      setTimeout(() => {
        if (textRef.current) textRef.current.classList.add("animate-fadeIn");
      }, 600);
    }
  }, [inView]);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="section-padding relative bg-white"
    >
      {/* Background wave pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-0 w-80 h-80 bg-canucci-peach/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-canucci-salmon/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2
            ref={titleRef}
            className="opacity-100 text-3xl md:text-4xl text-center mb-16 text-balance text-canucci-dark"
          >
            Träffa teamet
          </h2>

          <div
            ref={teamRef}
            className="opacity-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16"
          >
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="mb-3 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-canucci-dark">{member.name}</h3>
              </div>
            ))}
          </div>

          <p
            ref={textRef}
            className="opacity-100 text-center text-lg font-light text-canucci-dark"
          >
            Det är vi som är Canucci. Hör gärna av dig på{" "}
            <a href="mailto:info@canucci.com" className="text-canucci-red hover:underline">
              info@canucci.com
            </a>{" "}
            för att lära känna oss bättre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
