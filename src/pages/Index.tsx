
import React from 'react';
import Header from '@/components/Header';
import NavigationBar from '@/components/NavigationBar';
import SecondaryNav from '@/components/SecondaryNav';
import MainContent from '@/components/MainContent';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NavigationBar />
      <SecondaryNav 
        title="المقالات" 
        englishTitle="Articles" 
      />
      <MainContent />
    </div>
  );
};

export default Index;
