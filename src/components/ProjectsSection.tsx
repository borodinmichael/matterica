import posterBani from "@/assets/poster-bani.jpg";
import posterObschak from "@/assets/poster-obschak.webp";
import posterGypsy from "@/assets/poster-gypsy.webp";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  isUpcoming?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Бани",
    category: "Документальный фильм • KION",
    image: posterBani,
  },
  {
    id: 2,
    title: "Общак",
    category: "Документальный сериал • Okko",
    image: posterObschak,
  },
  {
    id: 3,
    title: "Быть цыганом",
    category: "Документальный сериал • Okko",
    image: posterGypsy,
  },
];

const upcomingProjects: Project[] = [
  {
    id: 4,
    title: "Проект 4",
    category: "Премьера в 2026 году",
    image: posterBani,
    isUpcoming: true,
  },
  {
    id: 5,
    title: "Проект 5",
    category: "Премьера в 2026 году",
    image: posterObschak,
    isUpcoming: true,
  },
  {
    id: 6,
    title: "Проект 6",
    category: "Премьера в 2026 году",
    image: posterGypsy,
    isUpcoming: true,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative block overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
            project.isUpcoming ? "blur-lg scale-105" : ""
          }`}
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            project.isUpcoming
              ? "bg-background/60"
              : "bg-background/40 opacity-0 group-hover:opacity-100"
          }`}
        />
        
        {/* Coming Soon Badge */}
        {project.isUpcoming && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                Премьера в 2026 году
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="mt-6">
        <p className="mb-2 font-body text-xs uppercase tracking-widest text-muted-foreground">
          {project.category}
        </p>
        {!project.isUpcoming && (
          <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
            {project.title}
          </h3>
        )}
      </div>

      {/* Arrow indicator for non-upcoming projects */}
      {!project.isUpcoming && (
        <div className="absolute bottom-24 right-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
          <svg
            className="h-8 w-8 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="works" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-accent">
            Портфолио
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Наши
            <br />
            <span className="text-muted-foreground">проекты</span>
          </h2>
        </div>

        {/* Released Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 md:my-24 border-t border-border" />

        {/* Coming Soon Section */}
        <div className="mb-12">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Скоро
          </p>
        </div>

        {/* Upcoming Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {upcomingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
