import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
  credits: Credit[];
}

const projectsData: Record<string, ProjectData> = {
  bani: {
    id: "bani",
    title: "Бани",
    subtitle: "KION • 2024",
    description: "Жаркий документальный фильм о банной культуре разных стран мира",
    fullDescription: "Документальный фильм, погружающий зрителя в уникальный мир банных традиций разных народов. От русской бани до японских онсэнов, от турецких хаммамов до финских саун — путешествие по самым жарким местам планеты.",
    poster: posterBani,
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    credits: [
      { role: "Режиссёр", name: "Иван Петров" },
      { role: "Продюсер", name: "Мария Сидорова" },
      { role: "Оператор", name: "Алексей Козлов" },
      { role: "Монтаж", name: "Дмитрий Волков" },
      { role: "Композитор", name: "Николай Орлов" },
    ],
  },
  obschak: {
    id: "obschak",
    title: "Общак",
    subtitle: "OKKO • ОСЕНЬ 2024",
    description: "Документальный сериал о главной ОПГ России",
    fullDescription: "Многосерийный документальный проект, раскрывающий историю организованной преступности в России. Эксклюзивные интервью, архивные материалы и глубокий анализ феномена, изменившего страну.",
    poster: posterObschak,
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    credits: [
      { role: "Режиссёр", name: "Сергей Николаев" },
      { role: "Продюсер", name: "Анна Белова" },
      { role: "Сценарист", name: "Павел Громов" },
      { role: "Оператор", name: "Виктор Соколов" },
      { role: "Монтаж", name: "Елена Миронова" },
    ],
  },
  gypsy: {
    id: "gypsy",
    title: "Быть цыганом",
    subtitle: "OKKO • АПРЕЛЬ 2024",
    description: "Документальный сериал в формате Stand Up",
    fullDescription: "Уникальный документальный проект, сочетающий глубокое погружение в цыганскую культуру с элементами стендап-комедии. Честный и откровенный взгляд изнутри на жизнь одного из самых загадочных народов.",
    poster: posterGypsy,
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    credits: [
      { role: "Режиссёр", name: "Артём Васильев" },
      { role: "Продюсер", name: "Ольга Кузнецова" },
      { role: "Автор идеи", name: "Роман Цыганов" },
      { role: "Оператор", name: "Игорь Морозов" },
      { role: "Монтаж", name: "Светлана Попова" },
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
                    <p className="font-body text-sm uppercase tracking-wider text-foreground text-left">
                      {credit.name}
                    </p>
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
