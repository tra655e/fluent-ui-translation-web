
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const MainContent = () => {
  const { isRTL, language } = useLanguage();
  
  // Arrow component based on language direction
  const DirectionArrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className={`w-full md:w-1/4 ${isRTL ? 'order-last' : 'order-first'}`}>
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h3 className="text-islamic-blue font-bold mb-4 border-b pb-2">
              {isRTL ? 'محاور فرعية' : 'Sub Topics'}
            </h3>
            
            <div className="grid grid-cols-1 gap-2">
              {[
                { ar: 'فلسطين - الجرح النازف', en: 'Palestine - The Bleeding Wound', href: '#' },
                { ar: 'الأسرة', en: 'Family', href: '#' },
                { ar: 'سيرة وإعلام', en: 'Biography and Media', href: '#' },
                { ar: 'تاريخ و حضارة', en: 'History and Civilization', href: '#' },
                { ar: 'للشباب فقط', en: 'For Youth Only', href: '#' },
                { ar: 'أخلاق وتزكية', en: 'Ethics and Spirituality', href: '#' },
                { ar: 'قرآن إسلام ويب', en: 'IslamWeb Quran', href: '#' },
                { ar: 'السير والتربية', en: 'Biography and Education', href: '#' },
                { ar: 'العقيدة الإسلامية', en: 'Islamic Creed', href: '#' },
                { ar: 'الحديث الشريف', en: 'Hadith', href: '#' },
                { ar: 'القرآن الكريم', en: 'The Holy Quran', href: '#' },
                { ar: 'ثقافة وفكر', en: 'Culture and Thought', href: '#' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-2 border-r-4 border-islamic-blue"
                >
                  <span className="text-sm">{language === 'ar' ? item.ar : item.en}</span>
                  <span className="text-islamic-blue">📁</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="w-full md:w-3/4">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-islamic-red mb-4">
              {isRTL ? 'ثمرات تدبر القرآن' : 'Benefits of Contemplating the Quran'}
            </h2>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6">
                    <p className="text-islamic-dark-gray leading-relaxed" dir={isRTL ? 'rtl' : 'ltr'}>
                      {isRTL ? 
                        'القرآن كتاب الله، وهو أصل دين الإسلام وأس، وهو مصدر التشريع الأول ومنبع الهداية، وقد أودع الله فيه العلم والمعرفة والعقائد والعبادات، والتشريع والأخلاق والمعاملات، والأمر والنهي، والقصص والوعظ، وأصول ما يحبه ويرضاه، وبغضه وبيانه، وما فرط الله فيه من شيء [الأنعام:38]. ولا شك أن السنة صنو القرآن، وهي وحي الله إلى... المزيد' : 
                        'The Quran is the book of Allah, the foundation of Islam, the primary source of legislation, and the wellspring of guidance. Allah has placed within it knowledge, beliefs, worship, ethics, transactions, commands, prohibitions, stories, admonitions, principles of what He loves and approves of, what He dislikes, and His explanations. Nothing has been neglected in it [Al-An\'am:38]. There is no doubt that the Sunnah is a twin of the Quran, it is Allah\'s revelation to... more'
                      }
                    </p>
                    <div className="text-left mt-4">
                      <a href="#" className="text-islamic-blue flex items-center gap-1">
                        <span>{isRTL ? 'إلى... المزيد' : 'Read more...'}</span>
                        <DirectionArrow size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=400&h=300&auto=format&fit=crop" 
                      alt="Holy Quran" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center gap-2 mt-4">
              <button className="bg-islamic-blue text-white p-2">
                <ArrowLeft size={20} />
              </button>
              <button className="bg-islamic-blue text-white p-2">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="bg-islamic-red text-white p-3 text-center mb-6">
            <h3 className="font-bold">
              {isRTL ? 'خواطر دعوية' : 'Dawah Thoughts'}
            </h3>
          </div>
          
          {/* Article cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: { ar: 'اقرأ قراءة النافذ!!', en: 'Read with Insight!!' },
                desc: { ar: 'التاريخ سجل الأمم، وخزائن الحكم، من فاض...', en: 'History is the record of nations, and the treasures of wisdom, from which...' },
                image: 'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?q=80&w=300&h=200&auto=format&fit=crop'
              },
              {
                title: { ar: 'الإسلام وكيان الإنسان', en: 'Islam and Human Existence' },
                desc: { ar: 'يتقلب الإنسان في حياته بمراحل ثلاث متوالية...', en: 'Humans go through three consecutive stages in their lives...' },
                image: 'https://images.unsplash.com/photo-1585036156261-1e2ac055414e?q=80&w=300&h=200&auto=format&fit=crop'
              },
              {
                title: { ar: 'منّة الله عز وجل على البشرية بنبيه', en: 'Allah\'s Blessing on Humanity with His Prophet' },
                desc: { ar: 'منّ الله عز وجل على البشرية ببعثة نبينا...', en: 'Allah has blessed humanity with the mission of our Prophet...' },
                image: 'https://images.unsplash.com/photo-1564046247017-4462f3c1e9a2?q=80&w=300&h=200&auto=format&fit=crop'
              }
            ].map((article, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={article.image} 
                    alt={language === 'ar' ? article.title.ar : article.title.en} 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold mb-2">
                      {language === 'ar' ? article.title.ar : article.title.en}
                    </h4>
                    <p className="text-sm mb-2">
                      {language === 'ar' ? article.desc.ar : article.desc.en}
                    </p>
                    <div className={`text-${isRTL ? 'left' : 'right'}`}>
                      <a href="#" className="text-islamic-blue">
                        {isRTL ? 'المزيد...' : 'more...'}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
