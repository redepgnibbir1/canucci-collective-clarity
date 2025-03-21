
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
    { 
      name: "Gaia",
      src: "/lovable-uploads/5b0aaf00-ca63-474c-b34d-5d0b72e0857a.png",
      width: 120
    },
    { 
      name: "Stockholms Handelskammare",
      src: "/lovable-uploads/b5d222f7-692e-4916-9cd7-b1a4111198b0.png",
      width: 180
    },
    { 
      name: "Nilfisk",
      src: "/lovable-uploads/48f839b0-1352-4480-8e3c-8decf2a82037.png",
      width: 130
    },
    { 
      name: "SAAB",
      src: "/lovable-uploads/19b4dfcc-761a-4383-b087-c9d7264f2e64.png",
      width: 140
    },
    { 
      name: "SKF",
      src: "/lovable-uploads/c7d84235-c711-4ec8-898f-8d6275bdda5d.png",
      width: 100
    },
    { 
      name: "Stockholm School of Economics",
      src: "/lovable-uploads/3abd2b3a-c284-4737-a225-e7470d7ed276.png",
      width: 110
    },
    { 
      name: "Ericsson",
      src: "/lovable-uploads/37de8464-1b8b-47b1-83a4-3d90899527a4.png",
      width: 140
    },
    { 
      name: "Digitalidag",
      src: "/lovable-uploads/c0603a03-5177-4fa6-96ac-9c0d8264781f.png",
      width: 130
    },
    { 
      name: "Combitech",
      src: "/lovable-uploads/f8192a56-f55a-4707-bca0-1910dff671d7.png",
      width: 140
    },
    { 
      name: "Teknikföretagen",
      src: "/lovable-uploads/8c85218b-f745-4269-a69e-36444b6704e1.png",
      width: 160
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
                className={logo.width ? `h-auto w-[${logo.width}px]` : "h-auto w-[70px] sm:w-[85px] md:w-[95px] lg:w-[100px] xl:w-[110px]"}
                style={logo.width ? { width: `${logo.width}px` } : {}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
