import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import posterBani from "@/assets/poster-bani.jpg";
import posterObschak from "@/assets/poster-obschak.webp";
import posterGypsy from "@/assets/poster-gypsy.webp";

interface Credit {
  role: string;
  name: string;
}

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  poster: string;
  trailerUrl: string;
  kinopoiskUrl: string;
  watchUrl: string;
  watchPlatform: string;
  credits: Credit[];
}

const projectsData: Record<string, ProjectData> = {
  bani: {
    id: "bani",
    title: "Бани",
    subtitle: "KION • 2023",
    description: "Жаркий документальный фильм о банной культуре разных стран мира",
    fullDescription: "Русская баня — не просто традиция или отдых: это настоящая философия и образ жизни. Трое энтузиастов из России отправляются в разные уголки земного шара, чтобы доказать, что у банной культуры нет границ. Париж, Мексика, даже пустыня в Неваде — везде, где есть люди, найдутся желающие очистить душу и тело. У каждого из героев своя цель, но все они горят своим делом и верят, что смогут привить любовь к бане другим.",
    poster: posterBani,
    trailerUrl: "https://www.youtube.com/embed/3EOCHJR3WVk",
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5430490/",
    watchUrl: "https://kion.ru/video/movie/829481690",
    watchPlatform: "KION",
    credits: [
      { role: "Режиссёр", name: "Михаил Бородин" },
      { role: "Сценарий", name: "Роман Салахутдинов" },
      { role: "Продюсеры", name: "Ангелина Ашман, Полина Шевченко, Ирина Минакова, Михаил Бородин" },
      { role: "Операторы", name: "Владислав Кузнецов, Михаил Бородин, Роман Прудкин, Павел Краснов, Елена Юлина, Михаил Лошкарев, Александр Радов, Михаил Харламов" },
      { role: "Монтаж", name: "Артур Анаян, Владислав Кузнецов" },
    ],
  },
  obschak: {
    id: "obschak",
    title: "Общак",
    subtitle: "OKKO • 2025",
    description: "Документальный сериал о главной ОПГ России",
    fullDescription: "Бывшие участники преступной группировки Общак впервые рассказывают, как образцовый советский город Комсомольск стал криминальной столицей Дальнего Востока; почему спустя 20 лет после гибели лидера Общака Евгения Васина всё ещё называют Батей; и как произошла трагедия, уничтожившая и Васина, и его империю.",
    poster: posterObschak,
    trailerUrl: "https://www.youtube.com/embed/aAdrIWSAk7c",
    kinopoiskUrl: "https://www.kinopoisk.ru/series/8123353/",
    watchUrl: "https://okkomovies.app.link/MslIJhoxJWb",
    watchPlatform: "OKKO",
    credits: [
      { role: "Режиссёр", name: "Владислав Кузнецов" },
      { role: "Сценарий", name: "Арина Макаренко, Игорь Залюбовин" },
      { role: "Продюсеры", name: "Михаил Бородин, Анастасия Евтушенко, Антон Кораблёв, Владимир Тодоров, Ксения Гофман" },
      { role: "Оператор", name: "Михаил Лошкарев" },
      { role: "Монтаж", name: "Павел Дятлов" },
    ],
  },
  gypsy: {
    id: "gypsy",
    title: "Быть цыганом",
    subtitle: "OKKO • 2024",
    description: "Документальный сериал в формате Stand Up",
    fullDescription: "Уникальный документальный проект, сочетающий глубокое погружение в цыганскую культуру с элементами стендап-комедии. Честный и откровенный взгляд изнутри на жизнь одного из самых загадочных народов.",
    poster: posterGypsy,
    trailerUrl: "https://www.youtube.com/embed/LbuLHzZFQKw",
    kinopoiskUrl: "https://www.kinopoisk.ru/series/7577709/",
    watchUrl: "https://okkomovies.app.link/3tR88OB72Ub",
    watchPlatform: "OKKO",
    credits: [
      { role: "Режиссёр", name: "—" },
      { role: "Продюсер", name: "—" },
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Проект не найден</h1>
          <Link to="/#works" className="text-muted-foreground hover:text-foreground transition-colors">
            Вернуться к проектам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Back Link */}
      <div className="px-6 pt-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Link 
            to="/#works" 
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Проекты
          </Link>
        </div>
      </div>

      {/* Video Trailer */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 pt-8 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="aspect-video overflow-hidden bg-black">
            <iframe
              src={project.trailerUrl}
              title={`${project.title} - Трейлер`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={project.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-body text-sm font-medium uppercase tracking-wider hover:bg-foreground/90 transition-colors"
            >
              <Play className="w-4 h-4" />
              Смотреть на {project.watchPlatform}
            </a>
            <a
              href={project.kinopoiskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-body text-sm font-medium uppercase tracking-wider hover:bg-foreground/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Страница на Кинопоиске
            </a>
          </div>
        </div>
      </motion.div>

      {/* Title & Description */}
      <div className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground"
          >
            {project.subtitle}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl mb-8"
          >
            {project.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg leading-relaxed text-muted-foreground md:text-xl max-w-3xl"
          >
            {project.fullDescription}
          </motion.p>
        </div>
      </div>

      {/* Poster & Credits Section */}
      <div className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24 items-start">
            {/* Left - Poster */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={project.poster}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Credits (Film End Credits Style) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:pt-8"
            >
              <div className="space-y-5">
                {project.credits.map((credit, index) => (
                  <motion.div
                    key={credit.role}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="grid grid-cols-[1fr_1fr] gap-6"
                  >
                    <p className="font-body text-sm uppercase tracking-wider text-foreground text-right">
                      {credit.role}
                    </p>
                    <div className="font-body text-sm uppercase tracking-wider text-foreground text-left">
                      {credit.name.split(', ').map((name, i) => (
                        <p key={i}>{name}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
