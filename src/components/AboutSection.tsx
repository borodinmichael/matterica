const AboutSection = () => {
  return (
    <section id="about" className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div>
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">
            О студии
          </p>
          <h2 className="mb-8 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Мы создаём
            <br />
            визуальные истории
          </h2>
          <div className="max-w-2xl space-y-6 font-body text-lg leading-relaxed text-muted-foreground">
            <p>
              Mattérica — это креативная продакшн-студия полного цикла. Мы
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
      </div>
    </section>
  );
};

export default AboutSection;
