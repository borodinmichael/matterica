import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import aboutBg from "@/assets/about-bg.png";
import backstage1 from "@/assets/backstage/backstage-1.jpg";
import backstage2 from "@/assets/backstage/backstage-2.jpg";
import backstage3 from "@/assets/backstage/backstage-3.jpg";
import backstage4 from "@/assets/backstage/backstage-4.jpg";
import backstage5 from "@/assets/backstage/backstage-5.jpg";
import backstage6 from "@/assets/backstage/backstage-6.jpg";
import backstage7 from "@/assets/backstage/backstage-7.jpg";
import backstage8 from "@/assets/backstage/backstage-8.jpg";
import backstage9 from "@/assets/backstage/backstage-9.jpg";
import backstage10 from "@/assets/backstage/backstage-10.jpg";

const backstageImages = [
  backstage1,
  backstage2,
  backstage3,
  backstage4,
  backstage5,
  backstage6,
  backstage7,
  backstage8,
  backstage9,
  backstage10,
];

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
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
      
      {/* Backstage Carousel */}
      <div className="mt-16 w-full overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {backstageImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={image}
                    alt={`Backstage ${index + 1}`}
                    className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default AboutSection;
