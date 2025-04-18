
import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'ar' | 'en' | 'fr' | 'de' | 'es' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  setLanguage: () => {},
  isRTL: true,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [isRTL, setIsRTL] = useState<boolean>(true);

  useEffect(() => {
    // Set RTL attribute on html tag
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [isRTL, language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsRTL(lang === 'ar');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};
