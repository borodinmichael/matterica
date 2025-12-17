import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import posterBani from "@/assets/poster-bani.jpg";
import posterObschak from "@/assets/poster-obschak.webp";
import posterGypsy from "@/assets/poster-gypsy.webp";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isUpcoming?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Бани",
    subtitle: "KION • 2024",
    description: "Жаркий документальный фильм о банной культуре разных стран мира",
    image: posterBani,
  },
  {
    id: 2,
    title: "Общак",
    subtitle: "OKKO • ОСЕНЬ 2024",
    description: "Документальный сериал о главной ОПГ России",
    image: posterObschak,
  },
  {
    id: 3,
    title: "Быть цыганом",
    subtitle: "OKKO • АПРЕЛЬ 2024",
    description: "Документальный сериал в формате Stand Up",
    image: posterGypsy,
  },
  {
    id: 4,
    title: "Скоро",
    subtitle: "ПРЕМЬЕРА 2026",
    description: "Новый документальный проект в производстве",
    image: posterBani,
    isUpcoming: true,
  },
  {
    id: 5,
    title: "Скоро",
    subtitle: "ПРЕМЬЕРА 2026",
    description: "Новый документальный проект в производстве",
    image: posterObschak,
    isUpcoming: true,
  },
  {
    id: 6,
    title: "Скоро",
    subtitle: "ПРЕМЬЕРА 2026",
    description: "Новый документальный проект в производстве",
    image: posterGypsy,
    isUpcoming: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

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
        <div className="group relative overflow-hidden cursor-pointer">
          <motion.div 
            className="aspect-[16/10] overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
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
                В производстве
              </span>
            </div>
          )}
        </div>
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
          {project.subtitle}
        </motion.p>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="group mb-5 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="relative inline-block">
            {project.title}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
          </span>
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className={`font-body text-sm leading-relaxed text-muted-foreground md:text-base ${
            !isEven ? "lg:max-w-sm" : "max-w-sm"
          }`}
        >
          {project.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="works" className="relative bg-background">
      {/* Section Header */}
      <div ref={headerRef} className="px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground"
          >
            Избранные работы
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            Projects
          </motion.h2>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-24 px-6 pb-32 md:space-y-32 md:px-12 lg:space-y-40 lg:px-20 xl:space-y-48">
        {projects.map((project, index) => (
          <div key={project.id} className="mx-auto max-w-7xl">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
