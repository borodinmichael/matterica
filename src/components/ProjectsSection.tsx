import posterBani from "@/assets/poster-bani.jpg";
import posterObschak from "@/assets/poster-obschak.webp";
import posterGypsy from "@/assets/poster-gypsy.webp";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  isUpcoming?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Бани",
    category: "KION • 2024",
    description: "Жаркий документальный фильм о банной культуре разных стран мира — от Москвы до Мексики",
    image: posterBani,
  },
  {
    id: 2,
    title: "Общак",
    category: "OKKO • 2024",
    description: "Документальный сериал о главной ОПГ России. Расследование, которое потрясло страну",
    image: posterObschak,
  },
  {
    id: 3,
    title: "Быть цыганом",
    category: "OKKO • 2024",
    description: "Документальный сериал в формате Stand Up о жизни и традициях цыганского народа",
    image: posterGypsy,
  },
  {
    id: 4,
    title: "Новый проект",
    category: "ПРЕМЬЕРА 2026",
    description: "Премьера в 2026 году",
    image: posterBani,
    isUpcoming: true,
  },
  {
    id: 5,
    title: "Новый проект",
    category: "ПРЕМЬЕРА 2026",
    description: "Премьера в 2026 году",
    image: posterObschak,
    isUpcoming: true,
  },
  {
    id: 6,
    title: "Новый проект",
    category: "ПРЕМЬЕРА 2026",
    description: "Премьера в 2026 году",
    image: posterGypsy,
    isUpcoming: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`grid gap-8 lg:gap-16 items-center ${
        isEven ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1fr_1.2fr]"
      }`}
    >
      {/* Image */}
      <div className={`${!isEven ? "lg:order-2" : ""}`}>
        <div className="group relative overflow-hidden">
          <div className="aspect-[4/3] overflow-hidden bg-secondary">
            <img
              src={project.image}
              alt={project.title}
              className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
                project.isUpcoming ? "blur-md" : ""
              }`}
            />
            {project.isUpcoming && (
              <div className="absolute inset-0 bg-background/40" />
            )}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className={`flex flex-col justify-center ${!isEven ? "lg:order-1 lg:text-right lg:items-end" : ""}`}>
        <p className="mb-4 font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {project.category}
        </p>
        <h3 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {project.isUpcoming ? (
            <span className="text-muted-foreground">Скоро</span>
          ) : (
            project.title
          )}
        </h3>
        <p className={`font-body text-base leading-relaxed text-muted-foreground md:text-lg ${!isEven ? "lg:max-w-md" : "max-w-md"}`}>
          {project.description}
        </p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="works" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-20 md:mb-32">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-accent">
            Портфолио
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Наши
            <br />
            <span className="text-muted-foreground">проекты</span>
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
