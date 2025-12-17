import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Behind The Lens",
    category: "Коммерческая съёмка",
    image: project1,
  },
  {
    id: 2,
    title: "Fluid Motion",
    category: "Motion Design",
    image: project2,
  },
  {
    id: 3,
    title: "Silent Stories",
    category: "Документальное кино",
    image: project3,
  },
  {
    id: 4,
    title: "Urban Pulse",
    category: "Рекламный ролик",
    image: project4,
  },
];

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
            Избранные
            <br />
            <span className="text-muted-foreground">работы</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href="#"
              className="group relative block overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Project Info */}
              <div className="mt-6">
                <p className="mb-2 font-body text-xs uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
                  {project.title}
                </h3>
              </div>

              {/* Arrow indicator */}
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
            </a>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-widest text-foreground transition-colors duration-300 hover:text-accent"
          >
            <span>Все работы</span>
            <svg
              className="h-4 w-4"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
