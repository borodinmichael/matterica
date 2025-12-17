import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import posterBani from "@/assets/poster-bani.jpg";
import posterObschak from "@/assets/poster-obschak.webp";
import posterGypsy from "@/assets/poster-gypsy.webp";

interface Credit {
  roleKey: string;
  name: string;
}

interface ProjectData {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  fullDescriptionKey: string;
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
    titleKey: "bani.title",
    subtitleKey: "bani.subtitle",
    descriptionKey: "bani.description",
    fullDescriptionKey: "bani.fullDescription",
    poster: posterBani,
    trailerUrl: "https://www.youtube.com/embed/3EOCHJR3WVk",
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5430490/",
    watchUrl: "https://kion.ru/video/movie/829481690",
    watchPlatform: "KION",
    credits: [
      { roleKey: "credits.director", name: "Михаил Бородин" },
      { roleKey: "credits.screenplay", name: "Роман Салахутдинов" },
      { roleKey: "credits.producers", name: "Ангелина Ашман, Полина Шевченко, Ирина Минакова, Михаил Бородин" },
      { roleKey: "credits.cinematographers", name: "Владислав Кузнецов, Михаил Бородин, Роман Прудкин, Павел Краснов, Елена Юлина, Михаил Лошкарев, Александр Радов, Михаил Харламов" },
      { roleKey: "credits.editing", name: "Артур Анаян, Владислав Кузнецов" },
    ],
  },
  obschak: {
    id: "obschak",
    titleKey: "obschak.title",
    subtitleKey: "obschak.subtitle",
    descriptionKey: "obschak.description",
    fullDescriptionKey: "obschak.fullDescription",
    poster: posterObschak,
    trailerUrl: "https://www.youtube.com/embed/aAdrIWSAk7c",
    kinopoiskUrl: "https://www.kinopoisk.ru/series/8123353/",
    watchUrl: "https://okkomovies.app.link/MslIJhoxJWb",
    watchPlatform: "OKKO",
    credits: [
      { roleKey: "credits.director", name: "Владислав Кузнецов" },
      { roleKey: "credits.screenplay", name: "Арина Макаренко, Игорь Залюбовин" },
      { roleKey: "credits.producers", name: "Михаил Бородин, Анастасия Евтушенко, Антон Кораблёв, Владимир Тодоров, Ксения Гофман" },
      { roleKey: "credits.cinematographer", name: "Михаил Лошкарев" },
      { roleKey: "credits.editing", name: "Павел Дятлов" },
    ],
  },
  gypsy: {
    id: "gypsy",
    titleKey: "gypsy.title",
    subtitleKey: "gypsy.subtitle",
    descriptionKey: "gypsy.description",
    fullDescriptionKey: "gypsy.fullDescription",
    poster: posterGypsy,
    trailerUrl: "https://www.youtube.com/embed/LbuLHzZFQKw",
    kinopoiskUrl: "https://www.kinopoisk.ru/series/7577709/",
    watchUrl: "https://okkomovies.app.link/3tR88OB72Ub",
    watchPlatform: "OKKO",
    credits: [
      { roleKey: "credits.director", name: "—" },
      { roleKey: "credits.producer", name: "—" },
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">{t("projects.notFound")}</h1>
          <Link to="/#works" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("projects.backToProjects")}
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
            {t("projects.back")}
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
              title={`${t(project.titleKey)} - ${t("projects.trailer")}`}
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
              {t("projects.watchOn")} {project.watchPlatform}
            </a>
            <a
              href={project.kinopoiskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-body text-sm font-medium uppercase tracking-wider hover:bg-foreground/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {t("projects.kinopoisk")}
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
            {t(project.subtitleKey)}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl mb-8"
          >
            {t(project.titleKey)}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg leading-relaxed text-muted-foreground md:text-xl max-w-3xl"
          >
            {t(project.fullDescriptionKey)}
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
                  alt={t(project.titleKey)}
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
                    key={credit.roleKey}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="grid grid-cols-[1fr_1fr] gap-6"
                  >
                    <p className="font-body text-sm uppercase tracking-wider text-foreground text-right">
                      {t(credit.roleKey)}
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
