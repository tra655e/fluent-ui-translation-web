
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search } from 'lucide-react';

type MenuItemType = {
  ar: string;
  en: string;
  href: string;
};

const menuItems: MenuItemType[] = [
  { ar: 'الرئيسية', en: 'Home', href: '/' },
  { ar: 'موضوعات', en: 'Topics', href: '/topics' },
  { ar: 'مقالات', en: 'Articles', href: '/articles' },
  { ar: 'الفتاوى', en: 'Fatwas', href: '/fatwas' },
  { ar: 'الاستشارات', en: 'Consultations', href: '/consultations' },
  { ar: 'الصوتيات', en: 'Audio', href: '/audio' },
  { ar: 'المكتبة', en: 'Library', href: '/library' },
  { ar: 'المواريث', en: 'Inheritance', href: '/inheritance' },
  { ar: 'بيبين وبنات', en: 'Boys and Girls', href: '/children' },
];

const NavigationBar = () => {
  const { isRTL, language } = useLanguage();

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-2 relative">
        <div className={`flex items-center ${isRTL ? 'order-last' : 'order-first'}`}>
          <img 
            src="public/lovable-uploads/16af4d44-7e7e-4b6b-88e7-7eaa778d989c.png" 
            alt="IslamWeb Logo" 
            className="h-14 object-contain mx-4"
            style={{ clipPath: 'inset(0 0 0 85%)' }}
          />
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 bg-islamic-red text-white h-12 w-12 flex items-center justify-center">
            <Search size={20} />
          </button>
          <button className="p-2 bg-blue-800 text-white h-12 w-12 flex items-center justify-center">
            <span className="text-2xl font-bold">A</span>
          </button>
          <button className="p-2 bg-islamic-red text-white h-12 w-12 flex items-center justify-center">
            <span className="rotate-90 inline-block">♿</span>
          </button>
        </div>
        
        <div className={`flex-1 flex justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <ul className={`flex ${isRTL ? 'flex-row-reverse' : ''} gap-4`}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="text-islamic-blue hover:text-islamic-light-blue transition-colors px-2"
                >
                  {language === 'ar' ? item.ar : item.en}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
