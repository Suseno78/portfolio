'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Socials from '@/components/Socials';
import Footer from '@/components/Footer';
import { translations, Language } from '@/lib/translations';
import { projectsData } from '@/lib/data';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <div className="pt-16">
        <Hero t={t} scrollToSection={scrollToSection} />
        <About t={t} />
        <Projects t={t} projects={projectsData} />
        <Skills t={t} />
        <Contact t={t} />
        <Socials t={t} />
        <Footer t={t} />
      </div>
    </main>
  );
}
