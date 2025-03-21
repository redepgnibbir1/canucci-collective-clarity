import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  // Navbar
  'navbar.challenge': {
    sv: 'Utmaningen',
    en: 'The Challenge',
  },
  'navbar.solution': {
    sv: 'Lösningen',
    en: 'The Solution',
  },
  'navbar.results': {
    sv: 'Resultat',
    en: 'Results',
  },
  'navbar.about': {
    sv: 'Om oss',
    en: 'About Us',
  },
  'navbar.contact': {
    sv: 'Kontakta oss',
    en: 'Contact Us',
  },
  
  // Footer
  'footer.quicklinks': {
    sv: 'Snabblänkar',
    en: 'Quick Links',
  },
  'footer.contact': {
    sv: 'Kontakt',
    en: 'Contact',
  },
  'footer.rights': {
    sv: 'Alla rättigheter förbehållna.',
    en: 'All rights reserved.',
  },
  
  // Hero
  'hero.title': {
    sv: 'Gör er strategi levande – genom dialog.',
    en: 'Make your strategy come alive – through dialogue.',
  },
  'hero.subtitle': {
    sv: 'Vi hjälper ledare få hela organisationen att förstå, vilja och agera – tillsammans. Med AI och vår metod Collective Discovery™ går förändring från ord till handling. Snabbt.',
    en: 'We help leaders get the entire organization to understand, want, and act – together. With AI and our Collective Discovery™ method, change goes from words to action. Quickly.',
  },
  'hero.cta.show': {
    sv: 'Låt oss visa hur',
    en: 'Let us show you how',
  },
  'hero.cta.works': {
    sv: 'Så funkar det',
    en: 'How it works',
  },

  // Problem
  'problem.title': {
    sv: 'Det är inte strategin som saknas. Det är samsyn.',
    en: 'It\'s not the strategy that\'s missing. It\'s alignment.',
  },
  'problem.subtitle': {
    sv: 'Stora organisationer drunknar i information, silos och motstridiga perspektiv. Resultatet? Strategier som låter bra – men aldrig riktigt lyfter.',
    en: 'Large organizations drown in information, silos, and conflicting perspectives. The result? Strategies that sound good – but never really take off.',
  },
  'problem.intro': {
    sv: 'Vi löser det som alla känner igen:',
    en: 'We solve what everyone recognizes:',
  },
  'problem.issue1': {
    sv: 'Beslut går långsamt.',
    en: 'Decisions are slow.',
  },
  'problem.issue2': {
    sv: 'Ingen vågar agera.',
    en: 'No one dares to act.',
  },
  'problem.issue3': {
    sv: 'Få vet hur de ska bidra.',
    en: 'Few know how to contribute.',
  },
  'problem.conclusion': {
    sv: 'Vi hjälper er få med alla – så att ni får kraften att förändra på riktigt.',
    en: 'We help you get everyone on board – so you get the power to make real change.',
  },

  // Solution
  'solution.title': {
    sv: 'Collective Discovery™ – gör det enkelt att få med hela organisationen.',
    en: 'Collective Discovery™ – makes it easy to involve the entire organization.',
  },
  'solution.subtitle': {
    sv: 'Vi ställer EN fråga till alla – och lyssnar utan filter. Vår egen AI identifierar mönster, prioriteringar och hinder. Resultatet? Klarhet, riktning och ägarskap.',
    en: 'We ask ONE question to everyone – and listen without filters. Our own AI identifies patterns, priorities, and obstacles. The result? Clarity, direction, and ownership.',
  },
  'solution.process': {
    sv: 'Så går det till:',
    en: 'This is how it works:',
  },
  'solution.step1.title': {
    sv: 'Alla bidrar – med sina egna ord.',
    en: 'Everyone contributes – in their own words.',
  },
  'solution.step1.description': {
    sv: 'Enkel digital enkät där varje medarbetare kan utrycka sin mening.',
    en: 'Simple digital survey where each employee can express their opinion.',
  },
  'solution.step2.title': {
    sv: 'AI analyserar och visar vad som är viktigast.',
    en: 'AI analyzes and shows what matters most.',
  },
  'solution.step2.description': {
    sv: 'Vår specialutvecklade AI identifierar mönster och prioriteringar.',
    en: 'Our specially developed AI identifies patterns and priorities.',
  },
  'solution.step3.title': {
    sv: 'Vi definierar tillsammans hur vi tar oss framåt.',
    en: 'Together we define how to move forward.',
  },
  'solution.step3.description': {
    sv: 'Workshop där ledningsgruppen skapar handlingsplan baserad på insikterna.',
    en: 'Workshop where the management team creates an action plan based on insights.',
  },
  'solution.step4.title': {
    sv: 'Varje individ väljer sitt ansvar.',
    en: 'Each individual chooses their responsibility.',
  },
  'solution.step4.description': {
    sv: 'Alla kan bidra efter sina förutsättningar, vilket skapar ägarskap.',
    en: 'Everyone can contribute according to their abilities, creating ownership.',
  },
  'solution.step5.title': {
    sv: 'Vi följer upp. Vi firar framsteg. Dialogen fortsätter.',
    en: 'We follow up. We celebrate progress. The dialogue continues.',
  },
  'solution.step5.description': {
    sv: 'Kontinuerlig kommunikation för att hålla engagemanget levande.',
    en: 'Continuous communication to keep engagement alive.',
  },
  'solution.cta': {
    sv: 'Läs mer om Collective Discovery™',
    en: 'Read more about Collective Discovery™',
  },

  // Testimonials
  'testimonials.title': {
    sv: 'Det här händer – när alla är med.',
    en: 'This is what happens – when everyone is involved.',
  },
  'testimonials.quote1': {
    sv: 'Vi såg en helt ny nivå av enighet bland våra ledare. Alla visste vad vi skulle göra – och hur.',
    en: 'We saw a completely new level of unity among our leaders. Everyone knew what to do – and how.',
  },
  'testimonials.author1': {
    sv: 'VD, global industrikoncern',
    en: 'CEO, global industrial group',
  },
  'testimonials.quote2': {
    sv: 'Vi har äntligen ett sätt att lyssna på hela organisationen – och snabbt gå från insikt till handling.',
    en: 'We finally have a way to listen to the entire organization – and quickly move from insight to action.',
  },
  'testimonials.author2': {
    sv: 'Rickard Gustafson, VD SKF',
    en: 'Rickard Gustafson, CEO SKF',
  },
  'testimonials.quote3': {
    sv: 'Med Canucci fick våra 52 000 medlemmar en röst. Det har förändrat hur vi leder.',
    en: 'With Canucci, our 52,000 members got a voice. It has changed how we lead.',
  },
  'testimonials.author3': {
    sv: 'Lotta Lyrå, VD Södra',
    en: 'Lotta Lyrå, CEO Södra',
  },
  'testimonials.quote4': {
    sv: 'Collective Discovery™ har revolutionerat hur vi arbetar med strategi. Nu har vi en gemensam förståelse som driver oss framåt.',
    en: 'Collective Discovery™ has revolutionized how we work with strategy. Now we have a shared understanding that drives us forward.',
  },
  'testimonials.author4': {
    sv: 'VD Industrikoncern',
    en: 'CEO Industrial company group',
  },
  'testimonials.quote5': {
    sv: 'Med Canucci fick vi en verktygslåda för att hantera komplexitet.',
    en: 'With Canucci, we got a toolbox for handling complexity. It has made us more efficient and aligned.',
  },
  'testimonials.author5': {
    sv: 'VD Globalt industriföretag',
    en: 'CEO Global industrial company',
  },

  // About
  'about.title': {
    sv: 'Vi finns för att stora organisationer behöver tänka som små.',
    en: 'We exist because large organizations need to think like small ones.',
  },
  'about.subtitle': {
    sv: 'Canucci grundades med en enkel idé:',
    en: 'Canucci was founded with a simple idea:',
  },
  'about.idea': {
    sv: 'Organisationer som lyssnar – och agerar – vinner.',
    en: 'Organizations that listen – and act – win.',
  },
  'about.paragraph1': {
    sv: 'Vi gör det möjligt att leda en global organisation som om den vore ett litet team. Med lyhördhet, klarhet och rörelse framåt.',
    en: 'We make it possible to lead a global organization as if it were a small team. With responsiveness, clarity, and forward movement.',
  },
  'about.paragraph2': {
    sv: 'Vår teknik är byggd in-house. Vår metod är testad i några av Nordens största bolag. Vi levererar alltid: Ägarskap, förändring, resultat. Canucci är sprunget ur en 160 år lång historia av ansvarsfullt ägande och ständig förändring, med Wallenbergstiftelserna som delägare.',
    en: 'Our technology is built in-house. Our method has been tested in some of the largest companies in the Nordics. We always deliver: Ownership, change, results. Canucci springs from a 160-year history of responsible ownership and constant change, with the Wallenberg Foundations as co-owners.',
  },
  'about.paragraph3': {
    sv: 'Canucci grundades av Oscar Stege Unger i Stockholm 2020 och har hittills inkluderat över 100 000 människor i dialogdriven förändring i 70 olika länder.',
    en: 'Canucci was founded by Oscar Stege Unger in Stockholm in 2020 and has so far included over 100,000 people in dialogue-driven change in 70 different countries.',
  },
  'about.cta.team': {
    sv: 'Träffa teamet',
    en: 'Meet the team',
  },
  'about.cta.contact': {
    sv: 'Kontakta oss',
    en: 'Contact us',
  },

  // Team
  'team.title': {
    sv: 'Träffa teamet',
    en: 'Meet the team',
  },
  'team.contact': {
    sv: 'Det är vi som är Canucci. Hör gärna av dig på',
    en: 'We are Canucci. Feel free to contact us at',
  },
  'team.contact.end': {
    sv: 'för att lära känna oss bättre.',
    en: 'to get to know us better.',
  },

  // 404 Page
  '404.title': {
    sv: 'Hoppsan! Vi kunde inte hitta sidan du söker.',
    en: 'Oops! We couldn\'t find the page you\'re looking for.',
  },
  '404.button': {
    sv: 'Tillbaka till startsidan',
    en: 'Back to home page',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sv');

  const t = (key: string): string => {
    if (translations[key as keyof typeof translations]) {
      return translations[key as keyof typeof translations][language];
    }
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
