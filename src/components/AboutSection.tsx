import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div>
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">
            {t("about.label")}
          </p>
          <h2 className="mb-8 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {t("about.title1")}
            <br />
            {t("about.title2")}
          </h2>
          <div className="max-w-2xl space-y-6 font-body text-lg leading-relaxed text-muted-foreground">
            <p>
              {t("about.text1")}
            </p>
            <p>
              {t("about.text2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
