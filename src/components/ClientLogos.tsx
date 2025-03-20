
import { useLanguage } from "../contexts/LanguageContext";

const ClientLogos = () => {
  const { t } = useLanguage();
  
  const logos = [
    { 
      name: "Investor",
      src: "/lovable-uploads/ac300bce-d177-4aec-81e5-59239c50f487.png", 
      width: 180
    },
    { 
      name: "SAS",
      src: "/lovable-uploads/61cc5198-a056-4906-982f-7adced307ecc.png", 
      width: 110
    },
    { 
      name: "NCC",
      src: "/lovable-uploads/91b347e0-3c41-4c66-a07e-2e64626c7acd.png", 
      width: 130
    },
    { 
      name: "Skellefteå",
      src: "/lovable-uploads/6be99017-d91b-4680-b6f0-1a44c64a3c2f.png", 
      width: 130
    },
    { 
      name: "Nobia",
      src: "/lovable-uploads/ab251c0b-42a6-438e-82ba-f6bffe4ba399.png", 
      width: 120
    },
    { 
      name: "Ericsson",
      src: "/lovable-uploads/28d7bcc8-24de-430f-a7d5-c03bb18dd378.png", 
      width: 200
    },
    { 
      name: "Digitaldag",
      src: "/lovable-uploads/ccdf19f8-bc33-4101-915d-01b811473861.png", 
      width: 180
    },
    { 
      name: "Combitech",
      src: "/lovable-uploads/e7fe6566-f09b-40ba-9fae-12ad3d8b583c.png", 
      width: 180
    },
    { 
      name: "Epiroc",
      src: "/lovable-uploads/400aadc0-9fda-4167-9c2a-eadff69ce482.png", 
      width: 160
    },
    { 
      name: "Volati",
      src: "/lovable-uploads/420fe3a1-07e6-4e82-8300-ca6afdab2c01.png", 
      width: 150
    },
    // New logos
    { 
      name: "Nilfisk",
      src: "/lovable-uploads/b3f2a6e4-06b1-41d1-baf2-033a278b6846.png", 
      width: 180
    },
    { 
      name: "SAAB",
      src: "/lovable-uploads/a44ae8eb-4a37-439d-9272-bee4ba72968d.png", 
      width: 190
    },
    { 
      name: "SKF",
      src: "/lovable-uploads/d1f6ab8c-16fe-4d86-9f83-fec4add1103a.png", 
      width: 120
    },
    { 
      name: "Teknikföretagen",
      src: "/lovable-uploads/6bb2c639-b932-404f-984c-c9d0a4c47116.png", 
      width: 200
    },
    { 
      name: "Wallenberg",
      src: "/lovable-uploads/cee78ab9-e4bc-4b95-b44a-884a5d9d2e4d.png", 
      width: 180
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-12 px-4">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 mb-6"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className="h-auto max-h-16" 
                style={{ width: `${logo.width}px` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
