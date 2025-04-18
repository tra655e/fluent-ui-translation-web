
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className={`flex gap-2 ${isRTL ? 'order-last' : 'order-first'}`}>
          <Button
            variant="outline" 
            className="bg-islamic-blue hover:bg-islamic-light-blue text-white rounded-md px-4 py-2 text-sm"
          >
            {isRTL ? 'دخول' : 'Login'}
          </Button>
        </div>
        
        <div className={`flex gap-2 ${isRTL ? 'order-first' : 'order-last'}`}>
          <button 
            onClick={() => setLanguage('id')} 
            className={`px-2 ${language === 'id' ? 'font-bold text-islamic-blue' : 'text-gray-600'}`}
          >
            Indonesia
          </button>
          <button 
            onClick={() => setLanguage('en')} 
            className={`px-2 ${language === 'en' ? 'font-bold text-islamic-blue' : 'text-gray-600'}`}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage('fr')} 
            className={`px-2 ${language === 'fr' ? 'font-bold text-islamic-blue' : 'text-gray-600'}`}
          >
            Français
          </button>
          <button 
            onClick={() => setLanguage('de')} 
            className={`px-2 ${language === 'de' ? 'font-bold text-islamic-blue' : 'text-gray-600'}`}
          >
            Deutsch
          </button>
          <button 
            onClick={() => setLanguage('es')} 
            className={`px-2 ${language === 'es' ? 'font-bold text-islamic-blue' : 'text-gray-600'}`}
          >
            Español
          </button>
          <button 
            onClick={() => setLanguage('ar')} 
            className={`px-2 ${language === 'ar' ? 'font-bold text-islamic-blue' : 'text-gray-600'}`}
          >
            عربي
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
