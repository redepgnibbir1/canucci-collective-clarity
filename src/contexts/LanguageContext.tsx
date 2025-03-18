
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
