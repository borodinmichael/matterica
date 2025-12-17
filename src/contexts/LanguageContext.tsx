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
    "projects.back": "Проекты",
    "projects.notFound": "Проект не найден",
    "projects.backToProjects": "Вернуться к проектам",
    "projects.watchOn": "Смотреть на",
    "projects.kinopoisk": "Страница на Кинопоиске",
    "projects.trailer": "Трейлер",
    "projects.kinopoiskRating": "Рейтинг Кинопоиска",
    "projects.outOf": "из",
    
    // Project details
    "bani.title": "Бани",
    "bani.subtitle": "KION • 2023",
    "bani.description": "Жаркий документальный фильм о банной культуре разных стран мира",
    "bani.fullDescription": "Русская баня — не просто традиция или отдых: это настоящая философия и образ жизни. Трое энтузиастов из России отправляются в разные уголки земного шара, чтобы доказать, что у банной культуры нет границ. Париж, Мексика, даже пустыня в Неваде — везде, где есть люди, найдутся желающие очистить душу и тело. У каждого из героев своя цель, но все они горят своим делом и верят, что смогут привить любовь к бане другим.",
    
    "obschak.title": "Общак",
    "obschak.subtitle": "OKKO • 2025",
    "obschak.description": "Документальный сериал о главной ОПГ России",
    "obschak.fullDescription": "Бывшие участники преступной группировки Общак впервые рассказывают, как образцовый советский город Комсомольск стал криминальной столицей Дальнего Востока; почему спустя 20 лет после гибели лидера Общака Евгения Васина всё ещё называют Батей; и как произошла трагедия, уничтожившая и Васина, и его империю.",
    
    "gypsy.title": "Быть цыганом",
    "gypsy.subtitle": "OKKO • 2024",
    "gypsy.description": "Документальный сериал в формате Stand Up",
    "gypsy.fullDescription": "Уникальный документальный проект, сочетающий глубокое погружение в цыганскую культуру с элементами стендап-комедии. Честный и откровенный взгляд изнутри на жизнь одного из самых загадочных народов.",
    
    // Credits roles
    "credits.director": "Режиссёр",
    "credits.screenplay": "Сценарий",
    "credits.producers": "Продюсеры",
    "credits.cinematographers": "Операторы",
    "credits.editing": "Монтаж",
    "credits.cinematographer": "Оператор",
    "credits.producer": "Продюсер",
    
    // Credits names - Bani
    "credits.bani.director": "Михаил Бородин",
    "credits.bani.screenplay": "Роман Салахутдинов",
    "credits.bani.producers": "Ангелина Ашман, Полина Шевченко, Ирина Минакова, Михаил Бородин",
    "credits.bani.cinematographers": "Владислав Кузнецов, Михаил Бородин, Роман Прудкин, Павел Краснов, Елена Юлина, Михаил Лошкарев, Александр Радов, Михаил Харламов",
    "credits.bani.editing": "Артур Анаян, Владислав Кузнецов",
    
    // Credits names - Obschak
    "credits.obschak.director": "Владислав Кузнецов",
    "credits.obschak.screenplay": "Арина Макаренко, Игорь Залюбовин",
    "credits.obschak.producers": "Михаил Бородин, Анастасия Евтушенко, Антон Кораблёв, Владимир Тодоров, Ксения Гофман",
    "credits.obschak.cinematographer": "Михаил Лошкарев",
    "credits.obschak.editing": "Павел Дятлов",
    
    // Credits names - Gypsy
    "credits.gypsy.director": "—",
    "credits.gypsy.producer": "—",
    
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
    "projects.back": "Projects",
    "projects.notFound": "Project not found",
    "projects.backToProjects": "Back to projects",
    "projects.watchOn": "Watch on",
    "projects.kinopoisk": "Kinopoisk page",
    "projects.trailer": "Trailer",
    "projects.kinopoiskRating": "Kinopoisk Rating",
    "projects.outOf": "out of",
    
    // Project details
    "bani.title": "Baths",
    "bani.subtitle": "KION • 2023",
    "bani.description": "A steamy documentary about bath culture around the world",
    "bani.fullDescription": "Russian banya is not just a tradition or relaxation: it's a true philosophy and way of life. Three enthusiasts from Russia travel to different corners of the globe to prove that bath culture knows no borders. Paris, Mexico, even the Nevada desert — wherever there are people, there are those who want to cleanse their body and soul. Each hero has their own goal, but they all burn with passion for their craft and believe they can instill a love of banya in others.",
    
    "obschak.title": "Obschak",
    "obschak.subtitle": "OKKO • 2025",
    "obschak.description": "Documentary series about Russia's main organized crime group",
    "obschak.fullDescription": "Former members of the Obschak criminal group tell for the first time how the model Soviet city of Komsomolsk became the criminal capital of the Far East; why 20 years after the death of Obschak leader Evgeny Vasin he is still called Batya; and how the tragedy that destroyed both Vasin and his empire occurred.",
    
    "gypsy.title": "Being Gypsy",
    "gypsy.subtitle": "OKKO • 2024",
    "gypsy.description": "Documentary series in Stand Up format",
    "gypsy.fullDescription": "A unique documentary project combining deep immersion into Romani culture with elements of stand-up comedy. An honest and candid look from the inside at the life of one of the most mysterious peoples.",
    
    // Credits roles
    "credits.director": "Director",
    "credits.screenplay": "Screenplay",
    "credits.producers": "Producers",
    "credits.cinematographers": "Cinematographers",
    "credits.editing": "Editing",
    "credits.cinematographer": "Cinematographer",
    "credits.producer": "Producer",
    
    // Credits names - Bani
    "credits.bani.director": "Mikhail Borodin",
    "credits.bani.screenplay": "Roman Salakhutdinov",
    "credits.bani.producers": "Angelina Ashman, Polina Shevchenko, Irina Minakova, Mikhail Borodin",
    "credits.bani.cinematographers": "Vladislav Kuznetsov, Mikhail Borodin, Roman Prudkin, Pavel Krasnov, Elena Yulina, Mikhail Loshkarev, Aleksandr Radov, Mikhail Kharlamov",
    "credits.bani.editing": "Artur Anayan, Vladislav Kuznetsov",
    
    // Credits names - Obschak
    "credits.obschak.director": "Vladislav Kuznetsov",
    "credits.obschak.screenplay": "Arina Makarenko, Igor Zalyubovin",
    "credits.obschak.producers": "Mikhail Borodin, Anastasia Evtushenko, Anton Korablyov, Vladimir Todorov, Ksenia Gofman",
    "credits.obschak.cinematographer": "Mikhail Loshkarev",
    "credits.obschak.editing": "Pavel Dyatlov",
    
    // Credits names - Gypsy
    "credits.gypsy.director": "—",
    "credits.gypsy.producer": "—",
    
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
