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
  image: string;
  credits: Credit[];
}

const projectsData: Record<string, ProjectData> = {
  bani: {
    id: "bani",
    title: "Бани",
    subtitle: "KION • 2024",
    description: "Жаркий документальный фильм о банной культуре разных стран мира",
    fullDescription: "Документальный фильм, погружающий зрителя в уникальный мир банных традиций разных народов. От русской бани до японских онсэнов, от турецких хаммамов до финских саун — путешествие по самым жарким местам планеты.",
    image: posterBani,
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
    image: posterObschak,
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
    image: posterGypsy,
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

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 pt-8 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
            {/* Left Column - Title & Description */}
            <div>
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
                className="font-body text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                {project.fullDescription}
              </motion.p>
            </div>

            {/* Right Column - Credits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:pt-16"
            >
              <h2 className="font-body text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-8">
                Команда
              </h2>
              
              <div className="space-y-6">
                {project.credits.map((credit, index) => (
                  <motion.div
                    key={credit.role}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="border-b border-border/30 pb-4"
                  >
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {credit.role}
                    </p>
                    <p className="font-body text-base text-foreground">
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
