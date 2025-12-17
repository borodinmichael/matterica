import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import posterBani from "@/assets/poster-bani.png";
import posterObschak from "@/assets/poster-obschak.png";
import posterGypsy from "@/assets/poster-gypsy.png";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  id: number;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  image: string;
  isUpcoming?: boolean;
  slug?: string;
}

const films: Project[] = [
  {
    id: 1,
    titleKey: "bani.title",
    subtitleKey: "bani.subtitle",
    descriptionKey: "bani.description",
    image: posterBani,
    slug: "bani",
  },
  {
    id: 2,
    titleKey: "projects.upcoming",
    subtitleKey: "projects.premiere2026",
    descriptionKey: "projects.upcomingFilm",
    image: posterObschak,
    isUpcoming: true,
  },
  {
    id: 3,
    titleKey: "projects.upcoming",
    subtitleKey: "projects.premiere2026",
    descriptionKey: "projects.upcomingFilm",
    image: posterGypsy,
    isUpcoming: true,
  },
];

const series: Project[] = [
  {
    id: 4,
    titleKey: "obschak.title",
    subtitleKey: "obschak.subtitle",
    descriptionKey: "obschak.description",
    image: posterObschak,
    slug: "obschak",
  },
  {
    id: 5,
    titleKey: "gypsy.title",
    subtitleKey: "gypsy.subtitle",
    descriptionKey: "gypsy.description",
    image: posterGypsy,
    slug: "gypsy",
  },
  {
    id: 6,
    titleKey: "projects.upcoming",
    subtitleKey: "projects.premiere2026",
    descriptionKey: "projects.upcomingSeries",
    image: posterBani,
    isUpcoming: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`grid items-center gap-8 lg:gap-0 ${
        isEven 
          ? "lg:grid-cols-[1.3fr_0.7fr]" 
          : "lg:grid-cols-[0.7fr_1.3fr]"
      }`}
    >
      {/* Image */}
      <div className={`${!isEven ? "lg:order-2" : ""}`}>
        {project.slug ? (
          <Link to={`/projects/${project.slug}`} className="group relative block overflow-hidden cursor-pointer">
            <motion.div 
              className="aspect-[16/10] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.img
                src={project.image}
                alt={t(project.titleKey)}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </motion.div>
          </Link>
        ) : (
          <div className="group relative overflow-hidden cursor-pointer">
            <motion.div 
              className="aspect-[16/10] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.img
                src={project.image}
                alt={t(project.titleKey)}
                className={`h-full w-full object-cover ${
                  project.isUpcoming ? "blur-md brightness-50" : ""
                }`}
                whileHover={!project.isUpcoming ? { scale: 1.08 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </motion.div>
            
            {/* Upcoming overlay */}
            {project.isUpcoming && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl font-light tracking-wider text-foreground/90">
                  {t("projects.inProduction")}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Text Content */}
      <div 
        className={`flex flex-col justify-center px-0 lg:px-16 xl:px-24 ${
          !isEven ? "lg:order-1 lg:text-right lg:items-end" : "lg:items-start"
        }`}
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-5 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          {t(project.subtitleKey)}
        </motion.p>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="group mb-5 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl"
        >
          {project.slug ? (
            <Link to={`/projects/${project.slug}`} className="relative inline-block">
              {t(project.titleKey)}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
            </Link>
          ) : (
            <span className="relative inline-block">
              {t(project.titleKey)}
            </span>
          )}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className={`font-body text-sm leading-relaxed text-muted-foreground md:text-base ${
            !isEven ? "lg:max-w-sm" : "max-w-sm"
          }`}
        >
          {t(project.descriptionKey)}
        </motion.p>
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ labelKey, titleKey }: { labelKey: string; titleKey: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

  return (
    <div ref={ref} className="px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          {t(labelKey)}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          {t(titleKey)}
        </motion.h2>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="works" className="relative bg-background">
      {/* Films Section */}
      <SectionHeader labelKey="projects.label" titleKey="projects.films" />
      <div className="space-y-24 px-6 pb-32 md:space-y-32 md:px-12 lg:space-y-40 lg:px-20 xl:space-y-48">
        {films.map((project, index) => (
          <div key={project.id} className="mx-auto max-w-7xl">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Series Section */}
      <SectionHeader labelKey="projects.label" titleKey="projects.series" />
      <div className="space-y-24 px-6 pb-32 md:space-y-32 md:px-12 lg:space-y-40 lg:px-20 xl:space-y-48">
        {series.map((project, index) => (
          <div key={project.id} className="mx-auto max-w-7xl">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
