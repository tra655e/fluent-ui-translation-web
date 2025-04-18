
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SecondaryNav: React.FC<{
  title: string;
  englishTitle: string;
}> = ({ title, englishTitle }) => {
  const { isRTL, language } = useLanguage();

  return (
    <div className="border-t border-b border-gray-200 py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className={`text-islamic-red text-xl font-bold ${isRTL ? 'order-last' : 'order-first'}`}>
          {language === 'ar' ? title : englishTitle}
        </h1>
        
        <div className={`flex items-center gap-2 ${isRTL ? 'order-first' : 'order-last'}`}>
          <a href="/" className="text-islamic-blue">
            {language === 'ar' ? 'الرئيسية' : 'Home'}
          </a>
          <span>{'›'}</span>
          <span className="text-gray-500">
            {language === 'ar' ? title : englishTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
