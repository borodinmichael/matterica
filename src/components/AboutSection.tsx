const AboutSection = () => {
  const services = [
    "Рекламные ролики",
    "Документальное кино",
    "Motion Design",
    "Музыкальные клипы",
    "Контент для брендов",
    "Постпродакшн",
  ];

  return (
    <section id="about" className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Text */}
          <div>
            <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-accent">
              О студии
            </p>
            <h2 className="mb-8 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Мы создаём
              <br />
              визуальные истории
            </h2>
            <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground">
              <p>
                Matterica — это креативная продакшн-студия полного цикла. Мы
                специализируемся на создании визуального контента, который
                запоминается и вызывает эмоции.
              </p>
              <p>
                Наша команда объединяет режиссёров, операторов, аниматоров и
                продюсеров, которые превращают идеи в мощные визуальные
                высказывания.
              </p>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="flex flex-col justify-center">
            <p className="mb-8 font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Услуги
            </p>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={service}
                  className="group flex items-center justify-between border-b border-border pb-4 transition-colors duration-300 hover:border-accent"
                >
                  <span className="font-display text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-2xl">
                    {service}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    0{index + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4">
          {[
            { value: "10+", label: "Лет опыта" },
            { value: "150+", label: "Проектов" },
            { value: "50+", label: "Наград" },
            { value: "30+", label: "В команде" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold tracking-tight text-accent md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
