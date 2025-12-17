import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navigation
    "nav.works": "Работы",
    "nav.about": "О нас",
    "nav.contacts": "Контакты",
    
    // Hero
    "hero.tagline": "Documentary film studio",
    "hero.scroll": "Scroll",
    
    // Projects
    "projects.label": "Наши проекты",
    "projects.films": "Фильмы",
    "projects.series": "Сериалы",
    "projects.inProduction": "В производстве",
    "projects.premiere2026": "ПРЕМЬЕРА 2026",
    "projects.upcoming": "Скоро",
    "projects.upcomingFilm": "Новый документальный фильм в производстве",
    "projects.upcomingSeries": "Новый документальный сериал в производстве",
    
    // Project details
    "bani.title": "Бани",
    "bani.subtitle": "KION • ДЕКАБРЬ 2023",
    "bani.description": "Жаркий документальный фильм о банной культуре разных стран мира",
    
    "obschak.title": "Общак",
    "obschak.subtitle": "OKKO • СЕНТЯБРЬ 2024",
    "obschak.description": "Документальный сериал о главной ОПГ России",
    
    "gypsy.title": "Быть цыганом",
    "gypsy.subtitle": "OKKO • АПРЕЛЬ 2024",
    "gypsy.description": "Документальный сериал в формате Stand Up",
    
    // About
    "about.label": "О студии",
    "about.title1": "Мы создаём",
    "about.title2": "визуальные истории",
    "about.text1": "Mattérica — это креативная продакшн-студия полного цикла. Мы специализируемся на создании визуального контента, который запоминается и вызывает эмоции.",
    "about.text2": "Наша команда объединяет режиссёров, операторов, аниматоров и продюсеров, которые превращают идеи в мощные визуальные высказывания.",
    
    // Footer
    "footer.label": "Начнём проект",
    "footer.title1": "Есть идея?",
    "footer.title2": "Давайте обсудим",
    "footer.cta": "Связаться с нами",
  },
  en: {
    // Navigation
    "nav.works": "Works",
    "nav.about": "About",
    "nav.contacts": "Contact",
    
    // Hero
    "hero.tagline": "Documentary film studio",
    "hero.scroll": "Scroll",
    
    // Projects
    "projects.label": "Our projects",
    "projects.films": "Films",
    "projects.series": "Series",
    "projects.inProduction": "In production",
    "projects.premiere2026": "PREMIERE 2026",
    "projects.upcoming": "Coming soon",
    "projects.upcomingFilm": "New documentary film in production",
    "projects.upcomingSeries": "New documentary series in production",
    
    // Project details
    "bani.title": "Baths",
    "bani.subtitle": "KION • DECEMBER 2023",
    "bani.description": "A steamy documentary about bath culture around the world",
    
    "obschak.title": "Obschak",
    "obschak.subtitle": "OKKO • SEPTEMBER 2024",
    "obschak.description": "Documentary series about Russia's main organized crime group",
    
    "gypsy.title": "Being Gypsy",
    "gypsy.subtitle": "OKKO • APRIL 2024",
    "gypsy.description": "Documentary series in Stand Up format",
    
    // About
    "about.label": "About studio",
    "about.title1": "We create",
    "about.title2": "visual stories",
    "about.text1": "Mattérica is a full-cycle creative production studio. We specialize in creating visual content that is memorable and evokes emotions.",
    "about.text2": "Our team brings together directors, cinematographers, animators and producers who transform ideas into powerful visual statements.",
    
    // Footer
    "footer.label": "Start a project",
    "footer.title1": "Have an idea?",
    "footer.title2": "Let's discuss",
    "footer.cta": "Get in touch",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
