import { useLanguage } from "../contexts/LanguageContext";

const ClientLogos = () => {
  const { t } = useLanguage();
  
  const logos = [
    { 
      name: "Investor",
      src: "/lovable-uploads/ac300bce-d177-4aec-81e5-59239c50f487.png"
    },
    { 
      name: "SAS",
      src: "/lovable-uploads/61cc5198-a056-4906-982f-7adced307ecc.png"
    },
    { 
      name: "NCC",
      src: "/lovable-uploads/91b347e0-3c41-4c66-a07e-2e64626c7acd.png"
    },
    { 
      name: "Skellefteå",
      src: "/lovable-uploads/6be99017-d91b-4680-b6f0-1a44c64a3c2f.png"
    },
    { 
      name: "Nobia",
      src: "/lovable-uploads/ab251c0b-42a6-438e-82ba-f6bffe4ba399.png"
    },
    { 
      name: "Evolution",
      src: "/lovable-uploads/Evolution_Gaming_logo_2020.JPG"
    },
    { 
      name: "Axfood",
      src: "/lovable-uploads/Axfood_logotype.png"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 flex-shrink-0"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className="h-auto w-[70px] sm:w-[85px] md:w-[95px] lg:w-[100px] xl:w-[110px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
